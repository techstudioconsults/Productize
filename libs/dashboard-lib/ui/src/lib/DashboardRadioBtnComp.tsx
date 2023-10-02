import { Box, Center, Checkbox, Flex, Image, Text } from '@chakra-ui/react';
import { BtnExtras, SharedButton } from '@productize/shared/ui';

interface DashboardRadioProp {
  title: string;
  subTitle: string;
  image: string;
  isChecked?: boolean;
  btn: BtnExtras;
  btnText: string;
}

export const DashboardRadioBtnComp = ({
  title,
  subTitle,
  image,
  btn,
  isChecked,
  btnText,
}: DashboardRadioProp) => {
  return (
    <Flex
      p={4}
      gap={4}
      alignItems={`flex-start`}
      border={`1px solid #F3F3F3`}
      borderRadius={`8px`}
    >
      <Center p={0} boxSize={6}>
        <Checkbox
          isChecked={isChecked}
          colorScheme="purple"
          checked
          size="lg"
        />
      </Center>
      <Box w={`100%`}>
        <Text className="small-text" fontWeight={600}>
          {title}
        </Text>
        <Flex
          flexDir={{ base: `column`, md: `row` }}
          gap={4}
          hidden={isChecked}
          justifyContent={`space-between`}
        >
          <Box>
            <Text mb={5} className="small-text" fontWeight={100}>
              {subTitle}
            </Text>
            <SharedButton
              btnExtras={{
                isLoading: btn.isLoading,
                loadingText: btn.loadingText,
                onClick: btn.onClick,
              }}
              text={btnText}
              width={''}
              height={'36px'}
              bgColor={'purple.200'}
              textColor={'white'}
              borderRadius={'4px'}
              fontSize={{ base: `sm` }}
            />
          </Box>
          <Box w={`178px`} h={`82px`}>
            <Image w={`100%`} h={`100%`} src={image} alt="img" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
