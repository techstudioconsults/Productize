import { Box, Card, CardBody, Image, Radio, RadioGroup, SimpleGrid, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

const activeCardStyle = {
    color: `#6D5DD3`,
    backgroundColor: `#F3F2FB`,
    boxShadow: `0.9px 0.9px 0.9px #6D5DD3`,
};

const RadioCards = ({ listenForChange }) => {
    const { state } = useLocation();
    const {
        register,
        formState: { errors },
    } = useFormContext();
    const [productTypeValue, setProductTypeValue] = useState(state?.product?.product_type);
    const handleProductTypeChange = (value) => {
        setProductTypeValue(value);
        listenForChange(value); // Call the callback function with the selected value
    };
    return (
        <RadioGroup as={SimpleGrid} my={8} gap={4} columns={{ base: 1, md: 2, lg: 3, xl: 4 }} onChange={handleProductTypeChange} value={productTypeValue}>
            <Radio {...register(`product_type`)} display={`block`} hidden spacing={0} value="digital_product">
                <ProductTypeCard
                    img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951006/productize/Image_1_wc3l2p_a7lovq.png`}
                    title={'Digital Product'}
                    desc={'Any set of file to download or stream'}
                    style={productTypeValue === `digital_product` ? activeCardStyle : {}}
                />
            </Radio>
            <Radio {...register(`product_type`)} display={`block`} hidden spacing={0} value="skill_selling">
                <ProductTypeCard
                    img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951007/productize/Image_2_co17c3_xwfjxd.png`}
                    title={'Skill Selling'}
                    desc={'Let customers hire your services.'}
                    style={productTypeValue === `skill_selling` ? activeCardStyle : {}}
                />
            </Radio>
            <Radio isDisabled display={`block`} hidden spacing={0} value="template_hub">
                <ProductTypeCard
                    img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1718726461/productize/krurpewv3oybivuqrapz.png`}
                    title={'Coming Soon...'}
                    desc={'Exciting new features'}
                    style={{}}
                />
            </Radio>
            <Radio isDisabled display={`block`} hidden spacing={0} value="subscription">
                <ProductTypeCard
                    img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1718726461/productize/krurpewv3oybivuqrapz.png`}
                    title={'Coming Soon...'}
                    desc={'Exciting new features'}
                    style={{}}
                />
            </Radio>
            {/* </SimpleGrid> */}
            <Text className={`tiny-text`} color={`red.200`}>
                {errors?.product_type?.message}
            </Text>
        </RadioGroup>
    );
};

export default RadioCards;

const ProductTypeCard = ({ img, title, desc, value, style, onClick }) => {
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
