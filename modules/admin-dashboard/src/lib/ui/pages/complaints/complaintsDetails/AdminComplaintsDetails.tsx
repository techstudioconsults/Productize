import { Box, Flex, Image, Skeleton, Text, Avatar, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useComplaintDetails } from './service'; // Import the new hook
import arrowLeft from '@icons/Property_2_Arrow-left_kafkjg.svg';
import { useDate, useTime } from '@productize/hooks';
import { SharedButton } from '@productize/ui';

export const AdminComplaintDetails = () => {
    const navigate = useNavigate();
    const { complaint,isLoading} = useComplaintDetails();
    const formatDate = useDate();
    const formatTime = useTime();

    if (isLoading) {
        return <ComplaintDetailsSkeleton />;
    }

    return (
        <Box my={8}>
            <Flex flexDir={{ base: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ base: 'flex-start', md: 'center' }} gap={4}>
                <Flex w="100%" gap={8} alignItems="center">
                    <Box cursor="pointer" onClick={() => navigate(-1)}>
                        <Image src={arrowLeft} />
                    </Box>
                    <Box>
                        <Flex gap={4}>
                            <Avatar src={complaint?.user?.avatar} />
                            <Flex direction="column" gap={2} alignItems="left" color="grey.400">
                                <Text className="tiny-text">{complaint?.user?.name}</Text>
                                <Text className="tiny-text">{complaint?.user?.email}</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Flex w="100%" gap={4} justifyContent="flex-end">
                    <Box>
                        <Flex>{`
                            ${formatDate(complaint?.created_at)}
                            ${formatTime(complaint?.created_at)}
                        `}</Flex>
                    </Box>
                </Flex>
            </Flex>
            <Box mt={8} mb={4} color="purple.300" borderBottom={`1px solid #EFEFEF`}>
                <Text as="h6">{complaint?.subject}</Text>
                <Flex
                    flexDir={{ base: 'column', sm: 'row' }}
                    gap={{ base: 8, lg: 32 }}
                    py={8}
                    justifyContent={{ md: 'space-between', lg: 'initial' }}
                    alignItems={{ base: 'flex-start', sm: 'center' }}
                    my={2}
                >
                    <Text>{complaint?.message}</Text>
                </Flex>
            </Box>
            <Box width="100%">
                <Flex justifyContent="space-between" alignItems="center" mb={4}>
                    <Text as="h5">Reply</Text>
                    <SharedButton
                        text="Send"
                        width={{ base: '40%', md: '12%' }}
                        height="40px"
                        bgColor="transparent"
                        textColor="purple.200"
                        borderRadius="4px"
                        fontSize={{ base: 'sm', md: 'md' }}
                        btnExtras={{
                            border: '1px solid #6D5DD3',
                        }}
                    />
                </Flex>
                <Textarea
                    placeholder="Send a response..."
                    size="sm"
                    height="250px"
                    borderColor="gray.300"
                    _placeholder={{
                        color: 'black',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        lineHeight: '1.5',
                    }}
                    _focus={{
                        borderColor: 'purple.200',
                    }}
                />
            </Box>
        </Box>
    );
};

const ComplaintDetailsSkeleton = () => (
    <Box>
        <Flex display={{ base: 'none', sm: 'flex' }} justify="space-between" mb={6}>
            <Skeleton borderRadius={8} height="40px" width="240px" />
        </Flex>
        <Skeleton borderRadius={8} height="8rem" width="100%" />
    </Box>
);
