/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { ModalComp, SharedButton } from '@productize/ui';
import { FunnelCard } from './funnelCard';
import { template1, template2 } from '../templates';

const FunnelTypeModal = ({ CTATitle = `Create New Funnel` }: { CTATitle?: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <SharedButton
        text={CTATitle}
        btnExtras={{ leftIcon: 'ei:plus', onClick: onOpen }}
        width="fit-content"
        height="40px"
        bgColor="purple.200"
        textColor="white"
        borderRadius="4px"
        fontSize={{}}
      />

      <ModalComp modalSize="5xl" openModal={isOpen} closeModal={onClose}>
        <section>
          <Text as={`h5`} fontSize={{ base: `18px`, md: `24px` }}>
            Choose a Template
          </Text>
          <p>Select a template to continue</p>
        </section>
        <Box mt={`24px`} display={`flex`} alignItems={`center`} justifyContent={`space-between`}>
          <FunnelCard
            template={template1}
            title={'template-1'}
            pic={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1731740083/productize/wnz9v59cefccxdtb2c6r.png`}
          />
          <FunnelCard
            title={'template-2'}
            template={template2}
            pic={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1731740810/productize/lt2bnclg7cl58gmwcpfm.png`}
          />
          <FunnelCard title={'template-3'} template={``} pic={``} />
        </Box>
      </ModalComp>
    </div>
  );
};

export default FunnelTypeModal;
