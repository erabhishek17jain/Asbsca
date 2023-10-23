import React from 'react';
import ABreadcrumb from '../../components-global/ABreadcrumb';
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import { mastersCards } from '../../constants';

const Masters = () => {
  let updatedCards = [...mastersCards];

  return (
    <>
      <ABreadcrumb pageName="Masters" />
      <div className="w-full mb-4">
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
