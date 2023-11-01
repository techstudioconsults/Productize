import {
  Box,
  Card,
  CardBody,
  Image,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const activeCardStyle = {
  color: `#6D5DD3`,
  backgroundColor: `#F3F2FB`,
  boxShadow: `0.9px 0.9px 0.9px #6D5DD3`,
};

const RadioCards = () => {
  const { register } = useFormContext();
  const [productTypeValue, setProductTypeValue] = useState('digital_product');
  return (
    <RadioGroup
      as={SimpleGrid}
      my={8}
      gap={4}
      columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      onChange={setProductTypeValue}
      value={productTypeValue}
    >
      {/* <SimpleGrid my={8} gap={4} columns={{ base: 1, md: 2, lg: 3, xl: 4 }}> */}
      <Radio
        {...register(`productType`)}
        display={`block`}
        hidden
        spacing={0}
        value="digital_product"
      >
        <ProductTypeCard
          img={
            'https://res.cloudinary.com/dkszgtapy/image/upload/v1693129664/productize/Image_1_wc3l2p.png'
          }
          title={'Digital Product'}
          desc={'Any set of file to download or stream'}
          style={productTypeValue === `digital_product` ? activeCardStyle : {}}
        />
      </Radio>
      <Radio
        // isDisabled
        {...register(`productType`)}
        display={`block`}
        hidden
        spacing={0}
        value="print_on_demand"
      >
        <ProductTypeCard
          img={
            'https://res.cloudinary.com/dkszgtapy/image/upload/v1693129663/productize/Image_2_co17c3.png'
          }
          title={'Print On Demand'}
          desc={' Any set of files to download or stream.'}
          style={productTypeValue === `print_on_demand` ? activeCardStyle : {}}
        />
      </Radio>
      <Radio
        isDisabled
        display={`block`}
        hidden
        spacing={0}
        value="video_streaming"
      >
        <ProductTypeCard
          img={
            'https://res.cloudinary.com/dkszgtapy/image/upload/v1693129663/productize/Image_3_l61xsx.png'
          }
          title={'Video Streaming'}
          desc={'Any set of files to download or stream.'}
          style={{}}
        />
      </Radio>
      <Radio
        isDisabled
        display={`block`}
        hidden
        spacing={0}
        value="subscription"
      >
        <ProductTypeCard
          img={
            'https://res.cloudinary.com/dkszgtapy/image/upload/v1693129662/productize/Image_4_hksvcm.png'
          }
          title={'Subscription'}
          desc={'Any set of files to download or stream.'}
          style={{}}
        />
      </Radio>
      {/* </SimpleGrid> */}
    </RadioGroup>
  );
};

export default RadioCards;

interface productTypeProp {
  img: string;
  title: string;
  desc: string;
  value?: string;
  style: object;
  onClick?: (e: any) => void;
}
const ProductTypeCard = ({
  img,
  title,
  desc,
  value,
  style,
  onClick,
}: productTypeProp) => {
  // const [isActive, setActive] = useState(false);

  return (
    <Card
      title={value}
      onClick={onClick}
      cursor={`pointer`}
      width={`100%`}
      height={`fit-content`}
      textAlign={`start`}
      variant={`outline`}
      style={style}
      _hover={{
        color: `purple.200`,
        backgroundColor: `purple.100`,
        boxShadow: `0.9px 0.9px 0.9px #6D5DD3`,
      }}
    >
      <CardBody p={`12px`}>
        <Box boxSize={`41px`}>
          <Image src={img} alt="" />
        </Box>
        <Text fontWeight={700} className="small-text" my={2}>
          {title}
        </Text>
        <Text className="tiny-text">{desc}</Text>
      </CardBody>
    </Card>
  );
};
