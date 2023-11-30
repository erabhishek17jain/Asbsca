import {
  BRAND_TABLE_HEAD,
  CLIENT_TABLE_HEAD,
  PRODUCT_TABLE_HEAD,
  ROLE_TABLE_HEAD,
} from '../../constants';
import ATable from '../../components-global/ATable';
import { useState, useEffect } from 'react';
import MastersBody from './MastersBody';
import MastersHeader from './MastersHeader';
import { useSelector } from 'react-redux';
import { AddEditDeleteClient } from './components/AddEditDeleteClient';
import { AddEditDeleteProduct } from './components/AddEditDeleteProduct';
import { AddEditDeleteBranch } from './components/AddEditDeleteBranch';
import { AddEditDeleteRole } from './components/AddEditDeleteRole';
import store from '../../store/store';
import { fetchAllClientsAsync } from '../../slices/clientsSlice';
import { fetchAllProductsAsync } from '../../slices/productsSlice';
import { fetchAllBranchsAsync } from '../../slices/branchsSlice';
import { fetchAllRolesAsync } from '../../slices/rolesSlice';

export function MastersTable({ type, defaultFilters, setDefaultFilters }: any) {
  const { allBranchs } = useSelector((state: any) => state.branchs);
  const { allClients, loading } = useSelector((state: any) => state.clients);
  const { allProducts } = useSelector((state: any) => state.products);
  const { allRoles } = useSelector((state: any) => state.roles);
  const [data, setData] = useState<any>([]);
  const [meta, setMeta] = useState<any>({});
  const [headers, setHeaders] = useState<any>([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [activeItem, setActiveItem] = useState<any>(null);

  const openAddEditModal = (item: any) => {
    setActiveItem({ ...item });
    setShowAddEditModal(true);
  };

  const closeAddEditModal = () => {
    setShowAddEditModal(false);
  };

  const openDeleteModal = (item: any) => {
    setActiveItem(item);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  useEffect(() => {
    if (type === 'client') {
      setMeta(allClients?.meta);
      setData(allClients?.data);
      setHeaders(CLIENT_TABLE_HEAD);
    } else if (type === 'product') {
      setMeta(allProducts?.meta);
      setData(allProducts?.products);
      setHeaders(PRODUCT_TABLE_HEAD);
    } else if (type === 'branch') {
      setMeta(allBranchs?.meta);
      setData(allBranchs?.branches);
      setHeaders(BRAND_TABLE_HEAD);
    } else if (type === 'role') {
      setMeta(allRoles?.meta);
      setData(allRoles?.roles);
      setHeaders(ROLE_TABLE_HEAD);
    }
  }, [allClients, allBranchs, allProducts, allRoles]);

  useEffect(() => {
    if (type === 'client') {
      store.dispatch(fetchAllClientsAsync({ ...defaultFilters }));
    } else if (type === 'product') {
      store.dispatch(fetchAllProductsAsync({ ...defaultFilters }));
    } else if (type === 'branch') {
      store.dispatch(fetchAllBranchsAsync({ ...defaultFilters }));
    } else if (type === 'role') {
      store.dispatch(fetchAllRolesAsync({ ...defaultFilters }));
    }
  }, [defaultFilters]);

  return (
    <>
      <ATable
        meta={meta}
        data={data}
        loading={loading}
        tableHeader={headers}
        defaultFilters={defaultFilters}
        setDefaultFilters={setDefaultFilters}
        tableBody={
          <MastersBody
            type={type}
            meta={meta}
            data={data}
            openAddEditModal={openAddEditModal}
            openDeleteModal={openDeleteModal}
          />
        }
        header={
          <MastersHeader
            type={type}
            openModal={() => {
              setActiveItem(null);
              setShowAddEditModal(true);
            }}
          />
        }
      />
      {type === 'client' && (
        <AddEditDeleteClient
          activeItem={activeItem}
          showDeleteModal={showDeleteModal}
          showAddEditModal={showAddEditModal}
          closeDeleteModal={closeDeleteModal}
          closeAddEditModal={closeAddEditModal}
        />
      )}
      {type === 'product' && (
        <AddEditDeleteProduct
          activeItem={activeItem}
          showDeleteModal={showDeleteModal}
          showAddEditModal={showAddEditModal}
          closeDeleteModal={closeDeleteModal}
          closeAddEditModal={closeAddEditModal}
        />
      )}
      {type === 'branch' && (
        <AddEditDeleteBranch
          activeItem={activeItem}
          showDeleteModal={showDeleteModal}
          showAddEditModal={showAddEditModal}
          closeDeleteModal={closeDeleteModal}
          closeAddEditModal={closeAddEditModal}
        />
      )}
      {type === 'role' && (
        <AddEditDeleteRole
          activeItem={activeItem}
          showDeleteModal={showDeleteModal}
          showAddEditModal={showAddEditModal}
          closeDeleteModal={closeDeleteModal}
          closeAddEditModal={closeAddEditModal}
        />
      )}
    </>
  );
}
