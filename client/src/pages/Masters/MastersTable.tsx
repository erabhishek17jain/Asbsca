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
import {
  ArchiveBoxIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CheckIcon,
  LinkIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import store from '../../store/store';
import { fetchAllBranchsAsync } from '../../slices/branchsSlice';
import { fetchAllClientsAsync } from '../../slices/clientsSlice';
import { fetchAllProductsAsync } from '../../slices/productsSlice';
import toast from 'react-hot-toast';
import {
  deleteClientById,
  deleteBranchById,
  deleteProductById,
} from '../../services';
import { useSelector } from 'react-redux';

export function MastersTable({ type }: any) {
  const { allBranchs } = useSelector((state: any) => state.branchs);
  const { allClients } = useSelector((state: any) => state.clients);
  const { allProducts } = useSelector((state: any) => state.products);
  const [data, setData] = useState<any>([]);
  const [headers, setHeaders] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [activeItem, setActiveItem] = useState<any>(null);

  const openEditModal = (item: any) => {
    setActiveItem(item);
    setShowModal(true);
  };









  
  const openDeleteModal = (item: any) => {
    setActiveItem(item);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const deleteClient = (id: string) => {
    const deleteClientPromise = deleteClientById(id);
    deleteClientPromise
      .then((res: any) => {
        console.log(res.data);
        closeDeleteModal();
        store.dispatch(fetchAllClientsAsync());
        toast.success(<b>{type} deleted successfully.</b>);
      })
      .catch((e: any) => {
        toast.error(<b>{e.error.response.data.message}</b>);
      });
  };

  const deleteProduct = (id: string) => {
    const deleteProductPromise = deleteProductById(id);
    deleteProductPromise
      .then((res: any) => {
        console.log(res.data);
        closeDeleteModal();
        store.dispatch(fetchAllProductsAsync());
        toast.success(<b>{type} deleted successfully.</b>);
      })
      .catch((e: any) => {
        toast.error(<b>{e.error.response.data.message}</b>);
      });
  };

  const deleteBranch = (id: string) => {
    const deleteBranchPromise = deleteBranchById(id);
    deleteBranchPromise
      .then((res: any) => {
        console.log(res.data);
        closeDeleteModal();
        store.dispatch(fetchAllBranchsAsync());
        toast.success(<b>{type} deleted successfully.</b>);
      })
      .catch((e: any) => {
        toast.error(<b>{e.error.response.data.message}</b>);
      });
  };

  const deleteMaster = (type: string, id: string) => {
    if (type === 'Client') {
      deleteClient(id);
    } else if (type === 'Product') {
      deleteProduct(id);
    } else if (type === 'Branch') {
      deleteBranch(id);
    } 
  };

  useEffect(() => {
    if (type === 'Client') {
      setData(allClients);
      setHeaders(CLIENT_TABLE_HEAD);
    } else if (type === 'Branch') {
      setData(allBranchs);
      setHeaders(BRAND_TABLE_HEAD);
    } else if (type === 'Product') {
      setData(allProducts);
      setHeaders(PRODUCT_TABLE_HEAD);
    }
  }, [allClients, allBranchs, allProducts]);

  useEffect(() => {
    store.dispatch(fetchAllClientsAsync());
    store.dispatch(fetchAllBranchsAsync());
    store.dispatch(fetchAllProductsAsync());
  }, []);

  return (
    <>
      <ATable
        data={data}
        tableHeader={headers}
        tableBody={
          <MastersBody
            type={type}
            data={data}
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
          />
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
              <ASingleSelect
                name={'clientName'}
                label={'Client Name*'}
                icon={<BuildingLibraryIcon className="h-4 w-4" />}
                options={[]}
              />
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
      {showDeleteModal && (
        <AModal
          saveText={'Delete'}
          title={`Delete ${type}`}
          onSave={() => deleteMaster(type, activeItem?.id)}
          closeModal={closeDeleteModal}
        >
          <div className="flex flex-col">Are you sure want to delete?</div>
        </AModal>
      )}
    </>
  );
}
