import { FormControl, Grid, GridItem, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import { Field } from './FormFields';
import { Icon } from '@iconify/react';
import { useFormContext } from 'react-hook-form';

const globalFieldStyle = {
    bgColor: 'gray.200',
    _focus: {
        bgColor: 'gray.300',
        color: 'gray.800',
    },
    _placeholder: {
        color: 'gray.400',
    },
};

const MajorInputFields = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <FormControl as={Grid} templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" rowGap={8} columnGap={8}>
            <GridItem colSpan={{ base: 12, md: 6 }}>
                {/* Product title */}
                <Field label="Title" error={errors.title}>
                    <Input
                        maxLength={30}
                        placeholder="Name of product"
                        variant="filled"
                        size="lg"
                        sx={globalFieldStyle}
                        {...register('title', {
                            required: 'Title is required',
                            maxLength: { value: 30, message: 'Title cannot exceed 30 characters' },
                        })}
                        type="text"
                        id="title"
                    />
                </Field>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
                {/* Category */}
                <Field label="Category" error={errors.category}>
                    <Select id="category" {...register('category')} sx={globalFieldStyle} variant="filled" size="lg" defaultValue="Product">
                        <option value="Product">Product</option>
                    </Select>
                </Field>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
                {/* Product price */}
                <Field label="Price" error={errors.price}>
                    <InputGroup>
                        <InputLeftElement mt={1} pointerEvents="none">
                            <Icon fontSize="1.2rem" icon="mdi:naira" />
                        </InputLeftElement>
                        <Input placeholder="0" variant="filled" size="lg" sx={globalFieldStyle} {...register('price')} type="number" id="price" />
                    </InputGroup>
                </Field>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
                {/* Discount price */}
                <Field label="Discounted Price (optional)" error={errors.discount_price}>
                    <InputGroup>
                        <InputLeftElement mt={1} pointerEvents="none">
                            <Icon fontSize="1.2rem" icon="mdi:naira" />
                        </InputLeftElement>
                        <Input
                            defaultValue={0}
                            placeholder="0.00"
                            variant="filled"
                            size="lg"
                            sx={globalFieldStyle}
                            {...register('discount_price')}
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
