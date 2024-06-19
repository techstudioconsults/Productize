import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react';
import { FormProvider } from 'react-hook-form';

import { ProductForm, ContentDeliveryForm } from '@productize/dashboard';
import { PreviewProductSummary } from '@productize/ui';
import { useNewProductForm } from './useNewProductForm';
import ShareLayout from '../ShareLayout';
 // Import the custom hook

export const NewProductTabLayout = () => {
    const methods = useNewProductForm();

    return (
        <FormProvider {...methods}>
            <Tabs size="sm">
                <TabList overflowX="scroll" overflowY="hidden" className="hide_scrollbar" justifyContent="space-between" color="grey.400">
                    <Flex>
                        <Tab id="product-details" py={6} w={{ base: '10rem', sm: 'initial' }}>
                            Product Details
                        </Tab>
                        <Tab id="content-delivery" py={6} w={{ base: '10rem', sm: 'initial' }}>
                            Content Delivery
                        </Tab>
                        <Tab id="preview" py={6} w={{ base: '10rem', sm: 'initial' }}>
                            Preview
                        </Tab>
                        <Tab id="share" py={6} w={{ base: '10rem', sm: 'initial' }}>
                            Share
                        </Tab>
                    </Flex>
                </TabList>

                <TabPanels>
                    <TabPanel px={0}>
                        <ProductForm />
                    </TabPanel>
                    <TabPanel px={0}>
                        <ContentDeliveryForm />
                    </TabPanel>
                    <TabPanel px={0}>
                        <PreviewProductSummary />
                    </TabPanel>
                    <TabPanel px={0}>
                        <ShareLayout />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </FormProvider>
    );
};
