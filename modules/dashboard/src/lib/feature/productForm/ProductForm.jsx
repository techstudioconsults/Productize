import { FormControl } from '@chakra-ui/react';
import RadioCards from './components/RadioCards';

export const ProductForm = () => {
    return (
        <div>
            {/* GRID ONE*/}
            <FormControl>
                <RadioCards />
            </FormControl>
        </div>
    );
};
