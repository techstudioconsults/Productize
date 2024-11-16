/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { ModalComp, SharedButton } from '@productize/ui';
import { FunnelCard } from './funnelCard';
import { template1 } from '../templates';

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
          <FunnelCard template={template1} title={'template-1'} />
          <FunnelCard title={'template-2'} template={`<p>this is a test template 2<p>`} />
          <FunnelCard title={'template-3'} template={``} />
        </Box>
      </ModalComp>
    </div>
  );
};

export default FunnelTypeModal;
