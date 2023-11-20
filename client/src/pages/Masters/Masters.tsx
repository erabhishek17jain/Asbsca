import { useEffect } from 'react';
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

  useEffect(() => {
    store.dispatch(fetchAllClientsAsync(''));
    store.dispatch(fetchAllProductsAsync(''));
    store.dispatch(fetchAllBranchsAsync(''));
    store.dispatch(fetchAllRolesAsync(''));
  }, []);

  return (
    <>
      <ABreadcrumb pageName="Masters" />
      <div className="w-full mb-4" id="masters">
        <Tabs value="client">
          <TabsHeader>
            <Tab value={'client'}>
              <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="h-5 w-5" />
                <span>Clients ({allClients.length})</span>
              </div>
            </Tab>
            <Tab value={'product'}>
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>Products ({allProducts.length})</span>
              </div>
            </Tab>
            <Tab value={'branch'}>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5" />
                <span>Branchs ({allBranchs.length})</span>
              </div>
            </Tab>
            <Tab value={'role'}>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5" />
                <span>Roles ({allRoles.length})</span>
              </div>
            </Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value={'client'} className="px-0">
              <MastersTable type="client" />
            </TabPanel>
            <TabPanel value={'product'} className="px-0">
              <MastersTable type="product" />
            </TabPanel>
            <TabPanel value={'branch'} className="px-0">
              <MastersTable type="branch" />
            </TabPanel>
            <TabPanel value={'role'} className="px-0">
              <MastersTable type="role" />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default Masters;
