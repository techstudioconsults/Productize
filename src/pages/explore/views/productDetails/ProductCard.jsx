import { Box, Card, CardBody, CardFooter, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useCurrency } from '@productize/hooks';
import { selectCart, useDeleteCartMutation, useGetFromCartMutation, usePurchaseProductMutation } from '@productize/redux';
import { SharedButton, SpinnerComponentSmall, ToastFeedback, useToastAction } from '@productize/ui';
import toastImg from '@icons/star-notice.png';
import { useSelector } from 'react-redux';

export const ProductCard = ({ product }) => {
  const { toast, toastIdRef, close } = useToastAction();
  const formatCurrency = useCurrency();
  const [getFromCart] = useGetFromCartMutation();
  const [deleteCart, deleteCartStatus] = useDeleteCartMutation();

  const deleteProduct = async () => {
    const res = await deleteCart({ cart_id: product.id }).unwrap();
    if (res) {
      toastIdRef.current = toast({
        position: 'top',
        render: () => (
          <ToastFeedback
            message={`${product?.title || product?.product_title} removed successfully`}
            title="Product update"
            icon={toastImg}
            btnColor={`purple.200`}
            bgColor={undefined}
            color={undefined}
            handleClose={close}
          />
        ),
      });
      await getFromCart(null).unwrap();
    }
  };

  return (
    <Card direction={{ base: 'column', sm: 'row' }} alignItems={`center`} overflow="hidden" variant="none">
      <Box height={`8.5rem`}>
        <Image
          objectFit="cover"
          height={{ base: '100%' }}
          width={{ base: '100%', sm: '200px' }}
          src={product?.thumbnail || product?.product_thumbnail}
          alt="Caffe Latte"
        />
      </Box>

      <Stack w={`100%`}>
        <CardBody>
          <Flex justifyContent={`space-between`} fontWeight={600}>
            <Text size="md">{product?.title || product?.product_title}</Text>
            <Text>{formatCurrency(product?.price || product?.product_price)}</Text>
          </Flex>
          {/* <Flex mt={3} gap={2} alignItems={`center`}>
                        <Avatar size={`sm`} bg={`grey.300`} name={product?.publisher} src={product?.publisher_logo} />
                        <Text fontWeight={`500`}>{product?.publisher}</Text>
                    </Flex> */}
        </CardBody>

        <CardFooter py={0} justifyContent={`space-between`} alignItems={`center`}>
          <Text>Qty: {product?.quantity}</Text>
          {deleteCartStatus.isLoading ? (
            <SpinnerComponentSmall size={`sm`} />
          ) : (
            <Icon cursor={`pointer`} color={`#DB3E3E`} fontSize={`1.3rem`} onClick={deleteProduct} icon={`mdi:trash`} />
          )}
        </CardFooter>
      </Stack>
    </Card>
  );
};

export const ProductCards = () => {
  const cart = useSelector(selectCart);
  const formatCurrency = useCurrency();
  const [purchaseProduct, { isLoading }] = usePurchaseProductMutation();

  const checkoutProductList = cart?.checkoutProducts?.map((product, index) => {
    return (
      <Box key={index}>
        <ProductCard product={product} />
        <Divider my={4} />
      </Box>
    );
  });

  const handlePurchaseProduct = async () => {
    const checkoutProductFormat = cart?.checkoutProducts?.map((product) => {
      return {
        product_slug: product.slug || product.product_slug,
        quantity: product.quantity,
      };
    });

    const checkout = {
      // paystack uses kobo for amounts
      amount: cart.totalProductPrice,
      products: checkoutProductFormat,
    };

    try {
      const res = await purchaseProduct(checkout).unwrap();
      console.log(res);
      if (res && res.data.authorization_url) {
        window.location.href = res.data.authorization_url;
      } else {
        // console.error('Invalid response from purchaseProduct');
        return;
      }
    } catch (error) {
      // console.error('Error during purchase:', error);
      return;
    }
  };

  return (
    <Box borderRadius={`8px`} border={`1px solid #CFCFD0`} p={5}>
      {checkoutProductList}
      <Flex fontWeight={600} justifyContent={`space-between`}>
        <Text>Total</Text>
        <Text px={5}>{formatCurrency(cart.totalProductPrice)}</Text>
      </Flex>
      <Divider my={4} />
      <Stack gap={4}>
        <SharedButton
          text={'Proceed to pay'}
          width={'100%'}
          height={'48px'}
          bgColor={'purple.200'}
          textColor={'grey.100'}
          borderRadius={'4px'}
          fontSize={{ base: `sm`, md: `md` }}
          btnExtras={{
            isLoading: isLoading,
            loadingText: `Processing payment...`,
            onClick: handlePurchaseProduct,
            disabled: cart.totalProductPrice ? false : true,
          }}
        />
      </Stack>
    </Box>
  );
};
