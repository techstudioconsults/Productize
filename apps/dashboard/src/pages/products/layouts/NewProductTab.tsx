import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from '@chakra-ui/react';
import { SetNewProductForm } from '@productize/dashboard-lib/feature';
import { SharedButton } from '@productize/shared/ui';

export const NewProductTab = () => {
  
  const activeStateStyle = {
    borderBottom: `2px solid #6D5DD3`,
    fontWeight: 600,
    color: `grey.800`,
  };
  return (
    <Tabs size={`sm`}>
      <Flex
        gap={4}
        display={{ base: `flex`, md: `none` }}
        justifyContent={`flex-end`}
      >
        <SharedButton
          btnExtras={{
            border: `1px solid red`,
          }}
          text={'Cancel'}
          width={'100%'}
          height={'40px'}
          bgColor={'transparent'}
          textColor={'red'}
          borderRadius={'4px'}
          fontSize={{ base: `sm`, md: `sm` }}
        />

        <SharedButton
          text={'Save & Continue'}
          width={'100%'}
          height={'40px'}
          bgColor={'purple.200'}
          textColor={'white'}
          borderRadius={'4px'}
          fontSize={{ base: `sm`, md: `sm` }}
        />
      </Flex>
      <TabList justifyContent={`space-between`} color={`grey.400`}>
        <Flex>
          <Tab _selected={activeStateStyle} py={6}>
            Product Details
          </Tab>
          <Tab _selected={activeStateStyle} py={6}>
            Content Delivery
          </Tab>
          <Tab _selected={activeStateStyle} py={6}>
            Preview
          </Tab>
          <Tab _selected={activeStateStyle} py={6}>
            Share
          </Tab>
        </Flex>
        <Flex gap={4} display={{ base: `none`, md: `flex` }}>
          <SharedButton
            btnExtras={{
              border: `1px solid red`,
            }}
            text={'Cancel'}
            width={'fit-content'}
            height={'40px'}
            bgColor={'transparent'}
            textColor={'red'}
            borderRadius={'4px'}
            fontSize={{ base: `sm`, md: `sm` }}
          />
          <SharedButton
            text={'Save & Continue'}
            width={'fit-content'}
            height={'40px'}
            bgColor={'purple.200'}
            textColor={'white'}
            borderRadius={'4px'}
            fontSize={{ base: `sm`, md: `sm` }}
          />
        </Flex>
      </TabList>

      <TabPanels>
        <TabPanel px={0}>
          <SetNewProductForm />
        </TabPanel>
        <TabPanel px={0}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit
          quibusdam expedita doloremque officia, eum delectus officiis?
          Molestiae commodi odit blanditiis ipsa tempore incidunt nihil nulla
          obcaecati, soluta perferendis quidem!
        </TabPanel>
        <TabPanel px={0}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi culpa
          iusto adipisci dolore aliquam autem animi sed alias possimus, itaque
          deserunt architecto sunt ratione voluptas praesentium consequuntur eum
          quam labore.
        </TabPanel>
        <TabPanel px={0}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel rem
          cumque vero nam dolor mollitia iste ab eligendi minus, nulla quos
          dolorum nobis ipsa sequi, expedita consequatur non harum illum.
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
