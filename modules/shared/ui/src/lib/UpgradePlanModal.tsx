import {
  Center,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { SharedButton } from './SharedButton';
import { Icon } from '@iconify/react';
import { PricingCard } from './PricingCard';

// interface modalProps {
//   children: ReactNode;
// }

export const UpgradePlanModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SharedButton
        text={'Upgrade Plan'}
        btnExtras={{
          onClick: onOpen,
        }}
        width={'fit-content'}
        height={'48px'}
        bgColor={'purple.200'}
        textColor={'white'}
        borderRadius={'4px'}
        fontSize={{ base: `sm`, md: `md` }}
      />

      <Modal
        size={{ base: `full`, md: `5xl` }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius={`1rem`} py={10} px={{ base: 4, md: 20 }}>
          <Flex
            flexDir={{ base: `column`, md: `row` }}
            justifyContent={`space-between`}
            alignItems={`center`}
            gap={`10`}
          >
            <PricingCard
              cardProps={{
                bgColor: `purple.100`,
                width: { base: `100%`, xl: `25rem` },
                height: `556px`,
                borderRadius: `8px`,
              }}
              listItems={[
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
              ]}
              iconColor={'black'}
              amount={0}
              status={'Free'}
              textColor={'yellow.300'}
              statusColor={'yellow.300'}
              tagProps={{
                title: 'Current Plan',
                bgColor: 'grey.800',
                color: `white`,
              }}
            />
            <PricingCard
              showButton
              cardProps={{
                bgColor: `purple.300`,
                width: { base: `100%`, xl: `25rem` },
                height: `556px`,
                borderRadius: `8px`,
              }}
              listItems={[
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
                `lorem lorem lorem lorem lorem lorem lorem lorem lorem`,
              ]}
              iconColor={'gold'}
              amount={5000}
              status={'premium'}
              textColor={'purple.100'}
              statusColor={'yellow.100'}
              tagProps={{
                title: 'Best Value',
                bgColor: 'yellow.100',
                color: `yellow.300`,
              }}
            />
          </Flex>
          <Flex p={5} justifyContent={`center`} alignItems={`center`}>
            <Center cursor={`pointer`} onClick={onClose}>
              <Icon fontSize={`2rem`} icon={'system-uicons:chevron-left'} />
              <Text fontWeight={600}>Go Back</Text>
            </Center>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
