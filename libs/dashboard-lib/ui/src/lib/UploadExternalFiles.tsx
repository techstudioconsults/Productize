import { Box, Flex, FormControl, Input, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SharedButton } from '@productize/shared/ui';
import { ChangeEventHandler, useRef } from 'react';

interface uploadProps {
  btnTitle: string;
  descText?: string | null;
  fileType: string;
  icon: string;
  getFiles?: ChangeEventHandler<HTMLInputElement>;
}

export const UploadExternalFilesBtn = ({
  btnTitle,
  fileType,
  icon,
  getFiles,
}: uploadProps) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const showFiles = () => {
    fileInput?.current?.click();
    console.log(fileInput?.current);
  };

  return (
    <Box>
      <Input
        title={btnTitle}
        ref={fileInput}
        hidden
        type={`file`}
        accept={fileType === `img` ? 'image/jpeg, image/png' : `*`}
        multiple
        onChange={getFiles}
      />
      <SharedButton
        btnExtras={{
          leftIcon: icon,
          border: `1px solid #6D5DD3`,
          onClick: showFiles,
        }}
        text={btnTitle}
        width={'fit-content'}
        height={'48px'}
        bgColor={'transparent'}
        textColor={'purple.200'}
        borderRadius={'4px'}
        fontSize={{ base: `sm`, md: `md` }}
      />
    </Box>
  );
};

export const UploadExternalFiles = ({
  btnTitle,
  descText,
  fileType,
  icon,
  getFiles,
}: uploadProps) => {
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
      <UploadExternalFilesBtn
        btnTitle={btnTitle}
        fileType={fileType}
        icon={icon}
        getFiles={getFiles}
      />
      <Flex
        hidden={descText ? false : true}
        alignItems={`center`}
        gap={2}
        color={`grey.400`}
      >
        <Icon icon={`fluent:info-16-filled`} />
        <Text className="tiny-text">{descText}</Text>
      </Flex>
    </FormControl>
  );
};
