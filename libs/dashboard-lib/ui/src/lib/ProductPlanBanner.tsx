import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { PricingCard, UpgradePlanModal } from '@productize/shared/ui';

export interface bannerProps {
  content: {
    title: string;
    desc: string;
    img?: string;
  };
  textAlign: object;
  maxW?: string;
  showImage: boolean;
}

export const ProductPlanBanner = ({
  content,
  textAlign,
  maxW,
  showImage,
}: bannerProps) => {
  return (
    <Box
      textAlign={textAlign}
      p={{ base: 4, md: 8 }}
      borderRadius={`10px`}
      border={`1px solid #F3F2FB`}
    >
      <Flex
        p={0}
        alignItems={`center`}
        justifyContent={showImage ? `space-between` : `center`}
        maxW={maxW}
        m={`auto`}
      >
        <Box>
          <Text as={`h5`} fontWeight={400} color={`purple.200`}>
            {content.title}
          </Text>
          <Text my={4} color={`grey.400`}>
            {content.desc}
          </Text>
          <UpgradePlanModal>
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
          </UpgradePlanModal>
        </Box>
        <Box display={showImage ? { base: `none`, md: `initial` } : `none`}>
          <Image src={content.img} alt="img" />
        </Box>
      </Flex>
    </Box>
  );
};
