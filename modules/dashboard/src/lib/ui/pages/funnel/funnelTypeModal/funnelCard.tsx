/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Card, Flex, Image, Text, Tooltip } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { SharedButton } from '@productize/ui';
import { Link } from 'react-router-dom';

export const FunnelCard = ({ template, title, pic, description }: { template: string; title: string; pic: string; description: string }) => {
  return (
    <Box
      w={`100%`}
      maxH={`225px`}
      padding={`30px`}
      border={`1px solid lightgrey`}
      borderRadius={`8px`}
      _hover={{ boxShadow: 'lg', transition: 'box-shadow 0.3s ease-in-out' }}
    >
      <Card variant={`unstyled`} bgColor={`purple.200`} width={`100%`} h={`80px`} borderRadius={`6px`}>
        <Image objectFit={`contain`} w={`100%`} h={`100%`} src={pic} alt={`template`} />
      </Card>
      <Flex alignItems={`center`} justifyContent={`space-betwzeen`}>
        <Text fontWeight={`bold`} my={`13px`} fontSize={`14px`}>
          {title}
        </Text>
        <Tooltip
          label={
            <Text fontSize="xs" color="white" p={2}>
              {description}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit cupiditate, dolor expedita atque ipsam quo dolore illo obcaecati
              blanditiis unde sit beatae fuga perferendis doloribus laboriosam quos temporibus quidem.
            </Text>
          }
          aria-label="Template description"
          bg="purple.700"
          hasArrow
          placement="top"
          borderRadius="md"
          boxShadow="md"
          closeOnClick={false}
          transition="all 0.3s ease-in-out"
        >
          <Icon cursor={`pointer`} fontSize={`1.5rem`} icon="material-symbols:info-outline" />
        </Tooltip>
      </Flex>
      <Link to={`/dashboard/funnels/editor`} state={{ title, template }}>
        <SharedButton
          text={`Select template`}
          width={`100%`}
          height={`40px`}
          btnExtras={{ border: `1px solid purple` }}
          bgColor={`transparent`}
          textColor={`purple.200`}
          borderRadius={`4px`}
          fontSize={{}}
        />
      </Link>
    </Box>
  );
};
