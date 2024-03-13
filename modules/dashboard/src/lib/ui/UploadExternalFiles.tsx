/* eslint-disable @nx/enforce-module-boundaries */
import { Flex, FormControl, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SharedButton } from '@productize/ui';

interface uploadProps {
    btnTitle: string;
    descText?: string | null;
    fileType: string;
    icon: string;
    showFiles: (inputId: string) => void;
}

export const UploadExternalFiles = ({ btnTitle, descText, fileType, icon, showFiles }: uploadProps) => {
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
            <SharedButton
                btnExtras={{
                    leftIcon: icon,
                    border: `1px solid #6D5DD3`,
                    onClick: () => showFiles(''),
                }}
                text={btnTitle}
                width={'fit-content'}
                height={'48px'}
                bgColor={'transparent'}
                textColor={'purple.200'}
                borderRadius={'4px'}
                fontSize={{ base: `sm`, md: `md` }}
            />
            <Flex p={2} hidden={descText ? false : true} alignItems={`center`} gap={2} color={`grey.400`} flexDir={{ base: `column`, lg: `row` }}>
                <Icon icon={`fluent:info-16-filled`} />
                <Text className="tiny-text" textAlign={`center`}>
                    {descText}
                </Text>
            </Flex>
        </FormControl>
    );
};
