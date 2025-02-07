/* eslint-disable @nx/enforce-module-boundaries */
import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { ModalComp, SharedButton } from '@productize/ui';
import { FunnelCard } from './funnelCard';
import { template_1, template_2, template_3 } from '../templates';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '@productize/redux';

const FunnelTypeModal = ({ CTATitle = `Create New Funnel` }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasProducts, setHasProducts] = useState(false);
  const token = useSelector(selectCurrentToken);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${baseUrl}/products/users?status=published`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHasProducts(res.data.data.length > 0);
      } catch (err) {
        console.error('Error fetching tags:', err);
      }
    };
    getProducts();
  }, [baseUrl, token]);

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
        {hasProducts ? (
          <>
            <section>
              <Text as={`h5`} fontSize={{ base: `18px`, md: `24px` }}>
                Choose a Template
              </Text>
              <p>Select a template to continue</p>
            </section>
            <Flex mt={`24px`} alignItems={`center`} justifyContent={`space-between`} gap={10}>
              <FunnelCard
                template={JSON.stringify(template_1)}
                title={'Sales Template'}
                pic={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1731740083/productize/wnz9v59cefccxdtb2c6r.png`}
                description={''}
              />
              <FunnelCard
                title={'Webinar Template'}
                template={JSON.stringify(template_2)}
                pic={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1731740810/productize/lt2bnclg7cl58gmwcpfm.png`}
                description={''}
              />
              <FunnelCard
                title={'template-3'}
                template={JSON.stringify(template_3)}
                pic={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1733567089/grape.js/xhl9d0izcvlxlh0aqyyk.png`}
                description={''}
              />
            </Flex>
          </>
        ) : (
          <p>You do not have any product yet</p>
        )}
      </ModalComp>
    </div>
  );
};

export default FunnelTypeModal;
