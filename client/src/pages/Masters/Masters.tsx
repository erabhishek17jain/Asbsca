import { useEffect, useState } from 'react';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import '../../assets/css/global.scss';
import { fetchAllBranchsAsync } from '../../slices/branchsSlice';
import { fetchAllClientsAsync } from '../../slices/clientsSlice';
import { fetchAllProductsAsync } from '../../slices/productsSlice';
import store from '../../store/store';
import { useSelector } from 'react-redux';
import {
  BuildingLibraryIcon,
  UserIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
import { MastersTable } from './MastersTable';
import { fetchAllRolesAsync } from '../../slices/rolesSlice';
const Masters = () => {
  const { allClients } = useSelector((state: any) => state.clients);
  const { allProducts } = useSelector((state: any) => state.products);
  const { allBranchs } = useSelector((state: any) => state.branchs);
  const { allRoles } = useSelector((state: any) => state.roles);
  const [defaultFilters, setDefaultFilters] = useState<any>({
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    store.dispatch(fetchAllClientsAsync({ ...defaultFilters }));
    store.dispatch(fetchAllProductsAsync({ ...defaultFilters }));
    store.dispatch(fetchAllBranchsAsync({ ...defaultFilters }));
    store.dispatch(fetchAllRolesAsync({ ...defaultFilters }));
  }, []);

  return (
    <>
      <ABreadcrumb pageName="Masters" />
      <div className="w-full mb-4" id="masters">
        <Tabs value="client">
          <TabsHeader className="grid grid-cols-2 sm:grid-cols-4">
            <Tab value={'client'} className="font-semibold">
              <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="h-5 w-5" />
                <span>Clients ({allClients?.meta?.count})</span>
              </div>
            </Tab>
            <Tab value={'product'} className="font-semibold">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>Products ({allProducts?.meta?.count})</span>
              </div>
            </Tab>
            <Tab value={'branch'} className="font-semibold">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5" />
                <span>Branchs ({allBranchs?.meta?.count})</span>
              </div>
            </Tab>
            <Tab value={'role'} className="font-semibold">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5" />
                <span>Roles ({allRoles?.meta?.count})</span>
              </div>
            </Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value={'client'} className="px-0">
              <MastersTable
                type="client"
                defaultFilters={defaultFilters}
                setDefaultFilters={setDefaultFilters}
              />
            </TabPanel>
            <TabPanel value={'product'} className="px-0">
              <MastersTable
                type="product"
                defaultFilters={defaultFilters}
                setDefaultFilters={setDefaultFilters}
              />
            </TabPanel>
            <TabPanel value={'branch'} className="px-0">
              <MastersTable
                type="branch"
                defaultFilters={defaultFilters}
                setDefaultFilters={setDefaultFilters}
              />
            </TabPanel>
            <TabPanel value={'role'} className="px-0">
              <MastersTable
                type="role"
                defaultFilters={defaultFilters}
                setDefaultFilters={setDefaultFilters}
              />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default Masters;
