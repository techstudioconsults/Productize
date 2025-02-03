/* eslint-disable @nx/enforce-module-boundaries */
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Box, Grid, Text, Image, useDisclosure } from '@chakra-ui/react';
import { useIntegrationTab } from './useIntegrationTab';
import { ConnectAccountModal } from './ConnectAccountModal';
import { IntegrationSuccessModal } from './IntegrationSuccessModal';
import { useState } from 'react';
import mailerlite from '../assets/mailerlite.png';
import mailchimp from '../assets/mailchimp.png';

const activeStateStyle = {
  borderBottom: `2px solid #6D5DD3`,
  fontWeight: 600,
  color: `grey.800`,
};

interface IntegrationProvider {
  name: string;
  logo: string;
}

const IntegrationCard = ({ provider, onConnect }: { provider: IntegrationProvider; onConnect: () => void }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    p={4}
    cursor="pointer"
    _hover={{ borderColor: 'purple.500' }}
    onClick={onConnect}
  >
    <Flex direction="column" align="center" gap={2}>
      <Image src={provider.logo} alt={provider.name} width={170} height={143} objectFit="contain" />
      <Text color="gray.600">{provider.name}</Text>
    </Flex>
  </Box>
);

const EMAIL_PROVIDERS = [
  {
    name: 'MailerLite',
    logo: mailerlite,
  },
  {
    name: 'MailChimp',
    logo: mailchimp,
  },
];

export const IntegrationTab = () => {
  const { tabIndex, setTabIndex, handleTabClick } = useIntegrationTab();
  const connectModal = useDisclosure();
  const successModal = useDisclosure();
  const [selectedProvider, setSelectedProvider] = useState<IntegrationProvider | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnectClick = (provider: IntegrationProvider) => {
    setSelectedProvider(provider);
    connectModal.onOpen();
  };

  const handleConnect = async (credentials: { apiKey: string }) => {
    setIsConnecting(true);
    try {
      // TODO: Implement actual integration connection logic here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      connectModal.onClose();
      successModal.onOpen();
    } catch (error) {
      console.error('Connection failed:', error);
      // TODO: Handle error
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <>
      <Tabs isLazy={true} size={`sm`}>
        <TabList justifyContent={`space-between`} color={`grey.400`}>
          <Flex>
            <Tab onClick={() => handleTabClick('#all-integrations')} id="all-integrations" _selected={activeStateStyle} py={6}>
              All Integrations
            </Tab>
            <Tab onClick={() => handleTabClick('#linked-integrations')} id="linked-integrations" _selected={activeStateStyle} py={6}>
              Linked
            </Tab>
          </Flex>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <Box mb={6}>
              <Text fontSize="lg" fontWeight="semibold" mb={4}>Email Integration</Text>
              <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
                {EMAIL_PROVIDERS.map((provider) => (
                  <IntegrationCard
                    key={provider.name}
                    provider={provider}
                    onConnect={() => handleConnectClick(provider)}
                  />
                ))}
              </Grid>
            </Box>
          </TabPanel>

          <TabPanel px={0}>
            <Text color="gray.600">No integrations linked yet.</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {selectedProvider && (
        <>
          <ConnectAccountModal
            isOpen={connectModal.isOpen}
            onClose={connectModal.onClose}
            onConnect={handleConnect}
            integrationName={selectedProvider.name}
            integrationLogo={selectedProvider.logo}
            isLoading={isConnecting}
          />
          <IntegrationSuccessModal
            isOpen={successModal.isOpen}
            onClose={successModal.onClose}
            integrationName={selectedProvider.name}
          />
        </>
      )}
    </>
  );
};
