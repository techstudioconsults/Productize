import { Box, Card, CardBody, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

interface cardProps {
  title: string;
  value: string | number;
  bgImg?: string;
  showIcon: boolean;
}

export const DataWidgetCard = ({
  title,
  value,
  bgImg,
  showIcon,
}: cardProps) => {
  return (
    <Card
      borderRadius={`8px`}
      // border={`1px solid #F3F3F3`}
      variant={`outline`}
      bgImage={bgImg}
      bgPosition={`right`}
      bgSize={`cover`}
      bgRepeat={`no-repeat`}
    >
      <CardBody p={6}>
        <Box display={showIcon ? `block` : `none`} fontSize={`32px`}>
          <Icon icon={`mdi:naira`} />
        </Box>
        <Box mt={4}>
          <Text>{title}</Text>
          <Text as={`h5`}>{value}</Text>
        </Box>
      </CardBody>
    </Card>
  );
};
