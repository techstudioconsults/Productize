import { FormControl, Grid, GridItem, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import { Field } from './FormFields';
import { Icon } from '@iconify/react';
import { useFormContext } from 'react-hook-form';

const globalFieldStyle = {
    bgColor: `grey.200`,
    _focus: {
        bgColor: `grey.300`,
        color: `grey.800`,
    },
    _placeholder: {
        color: `grey.400`,
    },
};

const MajorInputFields = () => {
    const { register } = useFormContext();
    return (
        <FormControl as={Grid} templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" gap={8} my={8}>
            <GridItem colSpan={{ base: 12, md: 6 }}>
                {/* product title */}
                <Field label="Title">
                    <Input
                        maxLength={30}
                        placeholder="Name of product"
                        variant={`filled`}
                        size={`lg`}
                        sx={globalFieldStyle}
                        {...register(`title`)}
                        type="text"
                        id="title"
                    />
                </Field>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
                {/* Category */}
                <Field label="Category">
                    <Select
                        {...register(`category`)}
                        sx={globalFieldStyle}
                        variant={`filled`}
                        size={`lg`}
                        // placeholder="Select a category"
                        defaultValue={`Product`}
                    >
                        <option value="Product">Product</option>
                    </Select>
                </Field>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
                {/* product price */}
                <Field label="Price">
                    <InputGroup>
                        <InputLeftElement mt={1} pointerEvents="none">
                            <Icon fontSize={`1.2rem`} icon="mdi:naira" />
                        </InputLeftElement>
                        <Input placeholder="0" variant={`filled`} size={`lg`} sx={globalFieldStyle} {...register(`price`)} type="number" id="price" />
                    </InputGroup>
                </Field>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
                {/* discount price */}
                <Field label="Discounted Price (optional)">
                    <InputGroup>
                        <InputLeftElement mt={1} pointerEvents="none">
                            <Icon fontSize={`1.2rem`} icon="mdi:naira" />
                        </InputLeftElement>
                        <Input
                            disabled
                            placeholder="0.00"
                            variant={`filled`}
                            size={`lg`}
                            sx={globalFieldStyle}
                            {...register(`discount_price`)}
                            type="number"
                            id="discount_price"
                        />
                    </InputGroup>
                </Field>
            </GridItem>
        </FormControl>
    );
};
export default MajorInputFields;
