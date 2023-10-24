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
import { ArchiveBoxIcon, BuildingLibraryIcon, BuildingOfficeIcon, CheckIcon, LinkIcon, UserIcon } from '@heroicons/react/24/solid';

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
              <AInputField
                type="text"
                label="Client Name*"
                icon={<UserIcon className="h-4 w-4" />}
              />
              <ASingleSelect
                name={'branch'}
                label={'Branch*'}
                options={[]}
                icon={<BuildingOfficeIcon className="h-4 w-4" />}
              />
              <AFileUpload
                type={'file'}
                name={'banklogo'}
                label={'Logo'}
                icon={<BuildingLibraryIcon className="h-4 w-4" />}
              />
              <AFileUpload
                type={'file'}
                name={'signature'}
                label={'Signature'}
                icon={<LinkIcon className="h-4 w-4" />}
              />
              <ASingleSelect
                name={'status'}
                label={'Status'}
                icon={<CheckIcon className="h-4 w-4" />}
                options={[
                  { label: 'Active', value: 'active' },
                  { label: 'Inactive', value: 'inactive' },
                ]}
              />
            </div>
          )}
          {type === 'Product' && (
            <div className="flex flex-col">
              <AInputField
                type="text"
                label="Product*"
                icon={<ArchiveBoxIcon className="h-4 w-4" />}
              />
              <ASingleSelect
                name={'clientName'}
                label={'Client Name*'}
                icon={<BuildingLibraryIcon className="h-4 w-4" />}
                options={[]}
              />
              <ASingleSelect
                name={'status'}
                label={'Status'}
                icon={<CheckIcon className="h-4 w-4" />}
                options={[
                  { label: 'Active', value: 'active' },
                  { label: 'Inactive', value: 'inactive' },
                ]}
              />
            </div>
          )}
          {type === 'Branch' && (
            <div className="flex flex-col">
              <AInputField
                type="text"
                label="Branch Name"
                icon={<BuildingOfficeIcon className="h-4 w-4" />}
              />
              <ASingleSelect
                name={'status'}
                label={'Status'}
                icon={<CheckIcon className="h-4 w-4" />}
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
