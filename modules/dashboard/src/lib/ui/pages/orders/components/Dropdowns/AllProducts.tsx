import { Select } from '@chakra-ui/react';

type FilterItem = {
    name: string;
};

export default function AllProducts() {
    const products: FilterItem[] = [
        { name: 'All Products' },
        { name: 'UX Design Fundamentals' },
        { name: 'Practical UI - User interface design book' },
        { name: 'The Future of Design Systems Conference 2023' },
        { name: 'Graphics Guide to Residential Design' },
        { name: 'UX Design Fundamentals' },
    ];
    return (
        <Select disabled w="150px">
            {products.map((item: FilterItem, i: number) => (
                <option key={i} value={item.name}>
                    {item.name}
                </option>
            ))}
        </Select>
    );
}
