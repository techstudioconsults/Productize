import { Divider, IconButton, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import errorImg from '@icons/error.svg';
import {
    useDeleteProductSoftlyMutation,
    useGetAllProductsMutation,
    useGetLiveProductsMutation,
    useGetDraftProductsMutation,
    useUpdateProductStatusMutation,
    useGetDeletedProductsMutation,
    useRestoreSoftDeletedProductMutation,
    useDeleteProductPermanentlyMutation,
    selectCurrentUser,
} from '@productize/redux';
import { useToastAction, ToastFeedback, PaywallUnpublishWarning } from '@productize/ui';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

interface dropProp {
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
    const { toast, toastIdRef, close } = useToastAction();
    const [deleteProductSoftly] = useDeleteProductSoftlyMutation();
    const [getAllProducts] = useGetAllProductsMutation();
    const [getLiveProducts] = useGetLiveProductsMutation();
    const [getDraftProducts] = useGetDraftProductsMutation();

    const handleDeleteProductSoftly = async (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
        try {
            const res = await deleteProductSoftly({
                productID: product?.id,
            }).unwrap();

            if (res) {
                await getAllProducts(null).unwrap();
                await getLiveProducts(null).unwrap();
                await getDraftProducts(null).unwrap();
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={`Check the deleted tab to recover product`}
                            title="Product Deleted Temporarily"
                            icon={undefined}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
            }
        } catch (error) {
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={`Something went wrong, please try again later.`}
                        title="Error!"
                        icon={errorImg}
                        color={`red.600`}
                        btnColor={`red.600`}
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
    };
    const handleTabAction = (e: { stopPropagation: () => void }, tabAction: string) => {
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
                <MenuItem onClick={(e) => handleTabAction(e, `#product-details`)} justifyContent={`flex-start`}>
                    Edit
                </MenuItem>
                <MenuItem onClick={(e) => handleTabAction(e, `#preview`)} justifyContent={`flex-start`}>
                    Preview
                </MenuItem>
                <MenuItem color={`red.200`} onClick={handleDeleteProductSoftly} justifyContent={`flex-start`}>
                    Delete
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export const DropdownActionLive = ({ icon, product }: dropProp) => {
    const navigate = useNavigate();
    const { toast, toastIdRef, close } = useToastAction();
    const [updateProductStatus] = useUpdateProductStatusMutation();
    const [deleteProductSoftly] = useDeleteProductSoftlyMutation();
    const [getLiveProducts] = useGetLiveProductsMutation();
    const [getAllProducts] = useGetAllProductsMutation();
    const [getDraftProducts] = useGetDraftProductsMutation();
    const { onOpen, onClose, isOpen } = useDisclosure();
    const user = useSelector(selectCurrentUser);

    const unpublishProductToDraft = async (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
        try {
            if (user?.account_type === `free`) {
                onOpen();
            } else {
                const res = await updateProductStatus({
                    productID: product?.id,
                }).unwrap();

                if (res) {
                    await getAllProducts(null).unwrap();
                    await getLiveProducts(null).unwrap();
                    await getDraftProducts(null).unwrap();
                    toastIdRef.current = toast({
                        position: 'top',
                        render: () => (
                            <ToastFeedback
                                btnColor={`purple.200`}
                                message={`Check draft to view product`}
                                title="Product Unpublished successfully!"
                                icon={undefined}
                                bgColor={undefined}
                                color={undefined}
                                handleClose={close}
                            />
                        ),
                    });
                }
            }
        } catch (error) {
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={`Something went wrong, please try again later.`}
                        title="Error!"
                        icon={errorImg}
                        color={`red.600`}
                        btnColor={`red.600`}
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
    };
    const handleDeleteProductSoftly = async (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
        try {
            const res = await deleteProductSoftly({
                productID: product?.id,
            }).unwrap();

            if (res) {
                await getAllProducts(null).unwrap();
                await getLiveProducts(null).unwrap();
                await getDraftProducts(null).unwrap();
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={`Check the deleted tab to recover product`}
                            title="Product Deleted Temporarily"
                            icon={undefined}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
            }
        } catch (error) {
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={`Something went wrong, please try again later.`}
                        title="Error!"
                        icon={errorImg}
                        color={`red.600`}
                        btnColor={`red.600`}
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
        }
    };
    const handleTabAction = (e: { stopPropagation: () => void }, tabAction: string) => {
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
                <MenuItem onClick={unpublishProductToDraft} justifyContent={`flex-start`}>
                    <PaywallUnpublishWarning onClose={onClose} isOpen={isOpen} productID={product?.id} />
                    Unpublish to drafts
                </MenuItem>
                <MenuItem onClick={(e) => handleTabAction(e, `#product-details`)} justifyContent={`flex-start`}>
                    Edit
                </MenuItem>
                <MenuItem onClick={(e) => handleTabAction(e, `#preview`)} justifyContent={`flex-start`}>
                    Preview
                </MenuItem>
                <MenuItem color={`red.200`} onClick={handleDeleteProductSoftly} justifyContent={`flex-start`}>
                    Delete
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export const DropdownActionDelete = ({ icon, product }: dropProp) => {
    const navigate = useNavigate();
    const { toast, toastIdRef, close } = useToastAction();

    const [getDeletedProducts] = useGetDeletedProductsMutation();
    const [restoreSoftDeletedProduct] = useRestoreSoftDeletedProductMutation();
    const [deleteProductPermanently] = useDeleteProductPermanentlyMutation();

    const handleTabAction = (e: { stopPropagation: () => void }, tabAction: string) => {
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
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={`Check draft to view recovered product`}
                            title="Product recovered successfully!"
                            icon={undefined}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
            }
        } catch (error) {
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    <ToastFeedback
                        message={`Something went wrong, please try again later.`}
                        title="Error!"
                        icon={errorImg}
                        color={`red.600`}
                        btnColor={`red.600`}
                        bgColor={undefined}
                        handleClose={close}
                    />
                ),
            });
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
                toastIdRef.current = toast({
                    position: 'top',
                    render: () => (
                        <ToastFeedback
                            btnColor={`purple.200`}
                            message={`This product cannot be recovered`}
                            title="Product Deleted Permanently"
                            icon={undefined}
                            bgColor={undefined}
                            color={undefined}
                            handleClose={close}
                        />
                    ),
                });
            }
        } catch (error: any) {
            await getDeletedProducts(null).unwrap();
            toastIdRef.current = toast({
                position: 'top',
                render: () => (
                    // <ToastFeedback
                    //     message={`Something went wrong, please try again later.`}
                    //     title="Error!"
                    //     icon={errorImg}
                    //     color={`red.600`}
                    //     btnColor={`red.600`}
                    //     bgColor={undefined}
                    //     handleClose={close}
                    // />
                    <ToastFeedback
                        btnColor={`purple.200`}
                        message={`This product cannot be recovered`}
                        title="Product Deleted Permanently"
                        icon={undefined}
                        bgColor={undefined}
                        color={undefined}
                        handleClose={close}
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
                <MenuItem onClick={(e) => handleTabAction(e, `#preview`)} justifyContent={`flex-start`}>
                    Preview
                </MenuItem>
                <MenuItem color={`red.200`} onClick={handleDeleteProductPermanently} justifyContent={`flex-start`}>
                    Delete permanently
                </MenuItem>
            </MenuList>
        </Menu>
    );
};
