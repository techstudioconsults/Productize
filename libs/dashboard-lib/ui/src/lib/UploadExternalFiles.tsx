import { Flex, FormControl, Input, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SharedButton } from '@productize/shared/ui';

interface uploadProps {
  btnTitle: string;
  descText: string;
}

export const UploadExternalFiles = ({ btnTitle, descText }: uploadProps) => {
  return (
    <FormControl
      display={`flex`}
      flexDir={`column`}
      alignItems={`center`}
      justifyContent={`center`}
      bgColor={`purple.100`}
      h={`200px`}
      gap={4}
      mt={4}
      borderRadius={`5px`}
    >
      <Input hidden type={`file`} />
      <SharedButton
        btnExtras={{
          leftIcon: `ri:file-upload-line`,
          border: `1px solid #6D5DD3`,
        }}
        text={btnTitle}
        width={'fit-content'}
        height={'48px'}
        bgColor={'transparent'}
        textColor={'purple.200'}
        borderRadius={'4px'}
        fontSize={{ base: `sm`, md: `md` }}
      />
      <Flex alignItems={`center`} gap={2} color={`grey.400`}>
        <Icon icon={`fluent:info-16-filled`} />
        <Text>{descText}</Text>
      </Flex>
    </FormControl>
  );
};
