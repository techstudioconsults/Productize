import { Box, Flex, IconButton } from '@chakra-ui/react';
import DateRangePicker from 'rsuite/esm/DateRangePicker';
import { Icon } from '@iconify/react';
import { SharedButton, SpinnerComponentSmall } from '@productize/ui';
import { useExportProducts, useFilterProducts } from './service';
import { DropdownAction } from '../../../../../DropdownAction';

const DeletedTableControl = ({ showRefreshBtn }) => {
    const { handleExport, exportLoading } = useExportProducts();
    const { handleDateRangeChange, filterTable, getDeletedProductsStatus } = useFilterProducts();

    return (
        <Flex alignItems={{ md: 'center' }} justifyContent="space-between">
            <Flex w={{ base: '100%', md: 'fit-content' }} flexDir={{ base: 'column', md: 'row' }} gap={4} alignItems={{ base: 'flex-start', md: 'center' }}>
                <Flex w={{ base: '100%', md: 'fit-content' }} gap={4} alignItems={{ base: 'flex-start', md: 'center' }}>
                    <DateRangePicker
                        onChange={handleDateRangeChange}
                        placeholder="15 Feb, 2023 - 22 Feb, 2023"
                        size="lg"
                        character="-"
                        style={{ width: '100%' }}
                    />
                    <IconButton
                        color="purple.200"
                        bgColor="purple.100"
                        isLoading={getDeletedProductsStatus.isLoading}
                        spinner={<SpinnerComponentSmall size="sm" />}
                        onClick={filterTable}
                        fontSize="xl"
                        aria-label="Filter table"
                        icon={<Icon icon="system-uicons:filtering" />}
                    />
                    <Box display={{ md: 'none' }}>
                        <DropdownAction handleExport={handleExport} icon="zondicons:dots-horizontal-triple" />
                    </Box>
                </Flex>
            </Flex>
            <Box>
                <Flex display={{ base: 'none', md: 'flex' }} gap={4} alignItems="center">
                    {showRefreshBtn && (
                        <Box>
                            <SharedButton
                                text="Refresh"
                                width="fit-content"
                                height="40px"
                                bgColor="transparent"
                                textColor="purple.200"
                                borderRadius="4px"
                                fontSize={{ base: 'sm', md: 'md' }}
                                btnExtras={{
                                    border: '1px solid #6D5DD3',
                                    leftIcon: 'basil:refresh-outline',
                                }}
                            />
                        </Box>
                    )}
                    <Box>
                        <SharedButton
                            text="Export"
                            width="fit-content"
                            height="40px"
                            bgColor="transparent"
                            textColor="purple.200"
                            borderRadius="4px"
                            fontSize={{ base: 'sm', md: 'md' }}
                            btnExtras={{
                                border: '1px solid #6D5DD3',
                                leftIcon: 'solar:export-line-duotone',
                                onClick: handleExport,
                                isLoading: exportLoading,
                                loadingText: 'Downloading...',
                            }}
                        />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default DeletedTableControl;
