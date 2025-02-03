/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Card, Flex, Image, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { ModalComp, SharedButton } from '@productize/ui';

const PublishFeedback = ({ publishTemplate }: { publishTemplate: () => Promise<any> }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //  const copyTextToClipBoard = () => {
  //    navigator.clipboard
  //      .writeText(state?.product?.link)
  //      .then(() => {
  //        toastIdRef.current = toast({
  //          position: 'top',
  //          render: () => (
  //            <ToastFeedback
  //              btnColor={`purple.200`}
  //              message={` You have successfully copied your product link`}
  //              title="Product link Copied!"
  //              icon={toastimg}
  //              bgColor={undefined}
  //              color={undefined}
  //              handleClose={close}
  //            />
  //          ),
  //        });
  //      })
  //      .catch((error) => {
  //        toastIdRef.current = toast({
  //          position: 'top',
  //          render: () => (
  //            <ToastFeedback
  //              message={`Failed to copy link.`}
  //              title="Error!"
  //              icon={errorImg}
  //              color={`red.600`}
  //              btnColor={`red.600`}
  //              bgColor={undefined}
  //              handleClose={close}
  //            />
  //          ),
  //        });
  //      });
  //  };

  const handlePublish = async () => {
    await publishTemplate();
    onOpen(); // Opens the feedback modal or similar UI
  };
  return (
    <>
      <SharedButton
        text={`Publish`}
        btnExtras={{ onClick: handlePublish }}
        width="100%"
        height="40px"
        bgColor="purple.200"
        textColor="white"
        borderRadius="4px"
        fontSize={{}}
      />

      <ModalComp modalSize="6xl" openModal={isOpen} closeModal={onClose}>
        <Box p={10}>
          <Card variant={`unstyled`} border={`1px solid #CFCFD0`} p={2}>
            <Box h={`197px`}>
              <Image
                objectFit={`cover`}
                w={`100%`}
                h={`100%`}
                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951014/productize/21_pqfpr8_cia6fu.png`}
                alt="img"
              />
            </Box>
            <Stack mt={4} alignItems={`center`}>
              <Text fontWeight={600}></Text>
              <Text fontWeight={600}>₦3,000</Text>
            </Stack>
          </Card>
          <Stack alignItems={`center`} mt={`4rem`}>
            <Text as={`h5`}>Product Published Successfully!</Text>
            <Text color={`grey.500`} my={4}>
              Copy and send this link to someone and they’ll be able to get your product
            </Text>
            <Flex w={`100%`} p={`8px`} borderRadius={5} bgColor={`grey.200`} gap={2} alignItems={`center`} justifyContent={`space-around`}>
              <Text>https://aishat-akinwumi.productize.store/product/product-title</Text>

              <Icon fontSize={`24px`} cursor={`pointer`} icon={`ph:copy-simple-light`} />
            </Flex>
          </Stack>
        </Box>
      </ModalComp>
    </>
  );
};

export default PublishFeedback;
