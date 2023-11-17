import React, { useEffect } from 'react';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import { mastersCards } from '../../constants';
import '../../assets/css/global.scss'
import { fetchAllBranchsAsync } from '../../slices/branchsSlice';
import { fetchAllClientsAsync } from '../../slices/clientsSlice';
import { fetchAllProductsAsync } from '../../slices/productsSlice';
import store from '../../store/store';
const Masters = () => {
  let updatedCards = [...mastersCards];

  useEffect(() => {
    store.dispatch(fetchAllClientsAsync());
    store.dispatch(fetchAllBranchsAsync());
    store.dispatch(fetchAllProductsAsync());
  }, []);

  return (
    <>
      <ABreadcrumb pageName="Masters" />
      <div className="w-full mb-4" id="masters">
        <Tabs value="client">
          <TabsHeader>
            {updatedCards.map(({ label, value, count, icon }: any) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: 'w-5 h-5' })}
                  <span>
                    {label}s ({count})
                  </span>
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {updatedCards.map(({ value, component }) => (
              <TabPanel key={value} value={value} className='px-0'>
                {component}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default Masters;
