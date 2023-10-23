import {
  BRAND_TABLE_HEAD,
  CLIENT_TABLE_HEAD,
  PRODUCT_TABLE_HEAD,
} from '../../constants';
import ATable from '../../components-global/ATable';
import { useState, useEffect } from 'react';
import { AModal } from '../../components-global/AModal';
import MastersBody from './MastersBody';
import MastersHeader from './MastersHeader';
import ASingleSelect from '../../components-global/ASingleSelect';
import AFileUpload from '../../components-global/AFileUpload';
import AInputField from '../../components-global/AInputField';

export function MastersTable({ type }: any) {
  const [headers, setHeaders] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (type === 'Client') {
      setHeaders(CLIENT_TABLE_HEAD);
    } else if (type === 'Branch') {
      setHeaders(BRAND_TABLE_HEAD);
    } else if (type === 'Product') {
      setHeaders(PRODUCT_TABLE_HEAD);
    }
  }, []);

  return (
    <>
      <ATable
        tableHeader={headers}
        tableBody={
          <MastersBody type={type} openModal={() => setShowModal(true)} />
        }
        header={
          <MastersHeader type={type} openModal={() => setShowModal(true)} />
        }
      />
      {showModal && (
        <AModal title={`Add ${type}`} closeModal={() => setShowModal(false)}>
          {type === 'Client' && (
            <div className="flex flex-col">
              <AInputField type="text" label="Client Name*" />
              <ASingleSelect name={'branch'} label={'Branch*'} options={[]} />
              <AFileUpload type={'file'} name={'banklogo'} label={'Logo'} />
              <AFileUpload
                type={'file'}
                name={'banklogo'}
                label={'Signature'}
              />
              <ASingleSelect
                name={'status'}
                label={'Status'}
                options={[
                  { label: 'Active', value: 'active' },
                  { label: 'Inactive', value: 'inactive' },
                ]}
              />
            </div>
          )}
          {type === 'Product' && (
            <div className="flex flex-col">
              <AInputField type="text" label="Product*" />
              <ASingleSelect
                name={'clientName'}
                label={'Client Name*'}
                options={[]}
              />
              <ASingleSelect
                name={'status'}
                label={'Status'}
                options={[
                  { label: 'Active', value: 'active' },
                  { label: 'Inactive', value: 'inactive' },
                ]}
              />
            </div>
          )}
          {type === 'Branch' && (
            <div className="flex flex-col">
              <AInputField type="text" label="Branch Name" />
              <ASingleSelect
                name={'status'}
                label={'Status'}
                options={[
                  { label: 'Active', value: 'active' },
                  { label: 'Inactive', value: 'inactive' },
                ]}
              />
            </div>
          )}
        </AModal>
      )}
    </>
  );
}
