import {
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import {
  useDeleteProductSoftlyMutation,
  useGetAllProductsMutation,
  useUpdateProductStatusMutation,
  useGetDeletedProductsMutation,
  useRestoreSoftDeletedProductMutation,
  useDeleteProductPermanentlyMutation,
} from '@productize-v1.0.0/modules/shared/redux';
import { ToastFeedback } from '@productize-v1.0.0/modules/shared/ui';
import { useNavigate } from 'react-router-dom';

interface dropProp {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product?: any;
  icon: string;
  handleExport?: () => void;
}

export const DropdownAction = ({ icon, product, handleExport }: dropProp) => {
  return (
    <Menu>
      <MenuButton
        onClick={(e) => e.stopPropagation()}
        border={`none`}
        as={IconButton}
        aria-label="Options"
        icon={<Icon icon={icon} />}
        variant="outlined"
      />
      <MenuList zIndex={999}>
        <MenuItem isDisabled justifyContent={`flex-start`}>
          Export data as
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleExport} justifyContent={`flex-start`}>
          CSV
        </MenuItem>
        {/* <MenuItem justifyContent={`flex-start`}>PDF</MenuItem> */}
      </MenuList>
    </Menu>
  );
};

export const DropdownActionDraft = ({ icon, product }: dropProp) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [deleteProductSoftly] = useDeleteProductSoftlyMutation();
  const [getAllProducts] = useGetAllProductsMutation();

  const handleDeleteProductSoftly = async (e: {
    stopPropagation: () => void;
  }) => {
    e.stopPropagation();
    try {
      const res = await deleteProductSoftly({
        productID: product?.id,
      }).unwrap();

      if (res) {
        await getAllProducts(null).unwrap();
        toast({
          position: 'top',
          render: () => (
            <ToastFeedback
              message={`Check the deleted tab to recover product`}
              bgColor="yellow.100"
              title="Product Deleted Temporarily"
            />
          ),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleTabAction = (
    e: { stopPropagation: () => void },
    tabAction: string
  ) => {
    e.stopPropagation();
    navigate(`/dashboard/products/new${tabAction}`, { state: { product } });
  };
  return (
    <Menu>
      <MenuButton
        onClick={(e) => e.stopPropagation()}
        border={`none`}
        as={IconButton}
        aria-label="Options"
        icon={<Icon icon={icon} />}
        variant="outlined"
      />
      <MenuList zIndex={999}>
        <MenuItem
          onClick={(e) => handleTabAction(e, `#product-details`)}
          justifyContent={`flex-start`}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={(e) => handleTabAction(e, `#preview`)}
          justifyContent={`flex-start`}
        >
          Preview
        </MenuItem>
        <MenuItem
          color={`red.200`}
          onClick={handleDeleteProductSoftly}
          justifyContent={`flex-start`}
        >
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const DropdownActionLive = ({ icon, product }: dropProp) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [updateProductStatus] = useUpdateProductStatusMutation();
  const [deleteProductSoftly] = useDeleteProductSoftlyMutation();
  const [getAllProducts] = useGetAllProductsMutation();

  const unpublishProductToDraft = async (e: {
    stopPropagation: () => void;
  }) => {
    e.stopPropagation();
    try {
      const res = await updateProductStatus({
        productID: product?.id,
      }).unwrap();

      if (res) {
        await getAllProducts(null).unwrap();
        toast({
          position: 'top',
          render: () => (
            <ToastFeedback
              message={`Check draft to view product`}
              title="Product Unpublished successfully!"
            />
          ),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteProductSoftly = async (e: {
    stopPropagation: () => void;
  }) => {
    e.stopPropagation();
    try {
      const res = await deleteProductSoftly({
        productID: product?.id,
      }).unwrap();

      if (res) {
        await getAllProducts(null).unwrap();
        toast({
          position: 'top',
          render: () => (
            <ToastFeedback
              message={`Check the deleted tab to recover product`}
              bgColor="yellow.100"
              title="Product Deleted Temporarily"
            />
          ),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleTabAction = (
    e: { stopPropagation: () => void },
    tabAction: string
  ) => {
    e.stopPropagation();
    navigate(`/dashboard/products/new${tabAction}`, { state: { product } });
  };
  return (
    <Menu>
      <MenuButton
        onClick={(e) => e.stopPropagation()}
        border={`none`}
        as={IconButton}
        aria-label="Options"
        icon={<Icon icon={icon} />}
        variant="outlined"
      />
      <MenuList zIndex={999}>
        <MenuItem
          onClick={unpublishProductToDraft}
          justifyContent={`flex-start`}
        >
          Unpublish to drafts
        </MenuItem>
        <MenuItem
          onClick={(e) => handleTabAction(e, `#product-details`)}
          justifyContent={`flex-start`}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={(e) => handleTabAction(e, `#preview`)}
          justifyContent={`flex-start`}
        >
          Preview
        </MenuItem>
        <MenuItem
          color={`red.200`}
          onClick={handleDeleteProductSoftly}
          justifyContent={`flex-start`}
        >
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const DropdownActionDelete = ({ icon, product }: dropProp) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [getDeletedProducts] = useGetDeletedProductsMutation();
  const [restoreSoftDeletedProduct] = useRestoreSoftDeletedProductMutation();
  const [deleteProductPermanently] = useDeleteProductPermanentlyMutation();

  const handleTabAction = (
    e: { stopPropagation: () => void },
    tabAction: string
  ) => {
    e.stopPropagation();
    navigate(`/dashboard/products/new${tabAction}`, { state: { product } });
  };

  const handleProductRecovery = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    try {
      const res = await restoreSoftDeletedProduct({
        productID: product?.id,
      }).unwrap();

      if (res) {
        await getDeletedProducts(null).unwrap();
        toast({
          position: 'top',
          render: () => (
            <ToastFeedback
              title="Product recovered successfully!"
              message={`Check draft to view recovered product`}
            />
          ),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProductPermanently = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    try {
      const res = await deleteProductPermanently({
        productID: product?.id,
      }).unwrap();

      if (res) {
        await getDeletedProducts(null).unwrap();
        toast({
          position: 'top',
          render: () => (
            <ToastFeedback
              title="Product Deleted Permanently"
              message={`This product cannot be recovered`}
              bgColor="red.100"
            />
          ),
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.originalStatus === 200) await getDeletedProducts(null).unwrap();
      toast({
        position: 'top',
        render: () => (
          <ToastFeedback
            title="Product Deleted Permanently"
            message={`This product cannot be recovered`}
            bgColor="red.100"
          />
        ),
      });
    }
  };

  return (
    <Menu>
      <MenuButton
        onClick={(e) => e.stopPropagation()}
        border={`none`}
        as={IconButton}
        aria-label="Options"
        icon={<Icon icon={icon} />}
        variant="outlined"
      />
      <MenuList zIndex={999}>
        <MenuItem onClick={handleProductRecovery} justifyContent={`flex-start`}>
          Recover to draft
        </MenuItem>
        <MenuItem
          onClick={(e) => handleTabAction(e, `#preview`)}
          justifyContent={`flex-start`}
        >
          Preview
        </MenuItem>
        <MenuItem
          color={`red.200`}
          onClick={handleDeleteProductPermanently}
          justifyContent={`flex-start`}
        >
          Delete permanently
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
