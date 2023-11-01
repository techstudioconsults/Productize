import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export const ContentDeliveryForm = () => {
  const [value, setValue] = useState('2');
  return (
    <FormControl>
      <Box>
        <Box>
          <Text color={`purple.300`} fontWeight={600}>
            Payment Method
          </Text>
          <FormHelperText
            fontSize={`xs`}
            letterSpacing={0.3}
            color={`grey.400`}
          >
            Select your most preferred payment method
          </FormHelperText>
        </Box>
        <Box>
          <Checkbox
            mt={6}
            mb={3}
            w={`fit-content`}
            defaultChecked
            colorScheme="purple"
            size={`lg`}
          >
            <Text ml={4}>Bank Cards</Text>
          </Checkbox>
          <Flex color={`grey.400`} alignItems={`center`} gap={2}>
            <Icon icon={`solar:info-circle-bold-duotone`} />
            <Text className="small-text">
              This is the default payment method
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box my={8}>
        <Box>
          <Text color={`purple.300`} fontWeight={600}>
            Content Delivery
          </Text>
          <FormHelperText
            fontSize={`xs`}
            letterSpacing={0.3}
            color={`grey.400`}
          >
            Select which shipping method should be used for this product
          </FormHelperText>
        </Box>
        <Box my={6}>
          <RadioGroup
            colorScheme="purple"
            size={`lg`}
            onChange={setValue}
            value={value}
          >
            <Stack gap={4}>
              <Radio isDisabled w={`fit-content`} value="1">
                <Text ml={4}>Physical Address</Text>
              </Radio>
              <Radio w={`fit-content`} value="2">
                <Text ml={4}>Via Email</Text>
              </Radio>
              <Radio w={`fit-content`} value="3">
                <Text ml={4}>Via direct download</Text>
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
    </FormControl>
  );
};
