import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { DateRangePicker } from 'rsuite';

export default function DatePicker() {
    const [value, setValue] = useState<[Date, Date] | null>([new Date(), new Date()]);

    return (
        <Box w={{ base: '170px', lg: '220px' }}>
            <DateRangePicker
                disabled
                placeholder="Select Date Range"
                hoverRange="month"
                value={value}
                onChange={(value) => setValue(value)}
                showMeridian
                character="-"
                editable={true}
                format="dd-MM-yyyy"
                style={{ height: 30, color: 'black' }}
            />
        </Box>
    );
}
