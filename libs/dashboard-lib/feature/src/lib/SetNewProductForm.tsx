import {
  Box,
  CardBody,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { UploadExternalFiles } from '@productize/dashboard-lib/ui';
import { CardLayout } from '@productize/external-pages-lib/ui';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const SetNewProductForm = () => {
  const [value, setValue] = useState('');
  return (
    <FormControl>
      {/* grid 1 */}
      <SimpleGrid my={8} gap={4} columns={2}>
        <FormControl>
          <FormLabel color={`purple.300`} fontWeight={600}>
            Product Title
          </FormLabel>
          <Input
            // required
            bgColor={`grey.200`}
            _focus={{ bgColor: `grey.300`, color: `grey.800` }}
            _placeholder={{ color: `grey.400` }}
            placeholder="Name of product"
            variant={`filled`}
            size={`lg`}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={`purple.300`} fontWeight={600}>
            Price
          </FormLabel>
          <Input
            // required
            bgColor={`grey.200`}
            _focus={{ bgColor: `grey.300`, color: `grey.800` }}
            _placeholder={{ color: `grey.400` }}
            placeholder="0"
            variant={`filled`}
            size={`lg`}
          />
        </FormControl>
      </SimpleGrid>
      {/* grid 2 */}
      <SimpleGrid my={8} gap={4} columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
        <CardLayout
          variant={`outline`}
          bgColor={'white'}
          width={'100%'}
          borderRadius={'8px'}
          height={`100%`}
        >
          <CardBody p={`12px`}>
            <Box boxSize={`41px`}>
              <Image
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693129664/productize/Image_1_wc3l2p.png`}
                alt=""
              />
            </Box>
            <Text fontWeight={700} className="small-text" my={2}>
              Digital Product
            </Text>
            <Text className="tiny-text">
              Any set of files to download or stream.
            </Text>
          </CardBody>
        </CardLayout>
        <CardLayout
          variant={`outline`}
          bgColor={'white'}
          width={'100%'}
          borderRadius={'8px'}
          height={`100%`}
        >
          <CardBody p={`12px`}>
            <Box boxSize={`41px`}>
              <Image
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693129663/productize/Image_2_co17c3.png`}
                alt=""
              />
            </Box>
            <Text fontWeight={700} className="small-text" my={2}>
              Print On Demand
            </Text>
            <Text className="tiny-text">
              Any set of files to download or stream.
            </Text>
          </CardBody>
        </CardLayout>
        <CardLayout
          variant={`outline`}
          bgColor={'white'}
          width={'100%'}
          borderRadius={'8px'}
          height={`100%`}
        >
          <CardBody p={`12px`}>
            <Box boxSize={`41px`}>
              <Image
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693129663/productize/Image_3_l61xsx.png`}
                alt=""
              />
            </Box>
            <Text fontWeight={700} className="small-text" my={2}>
              Video Streaming
            </Text>
            <Text className="tiny-text">
              Any set of files to download or stream.
            </Text>
          </CardBody>
        </CardLayout>
        <CardLayout
          variant={`outline`}
          bgColor={'white'}
          width={'100%'}
          borderRadius={'8px'}
          height={`100%`}
        >
          <CardBody p={`12px`}>
            <Box boxSize={`41px`}>
              <Image
                src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1693129662/productize/Image_4_hksvcm.png`}
                alt=""
              />
            </Box>
            <Text fontWeight={700} className="small-text" my={2}>
              Subscription
            </Text>
            <Text className="tiny-text">
              Any set of files to download or stream.
            </Text>
          </CardBody>
        </CardLayout>
      </SimpleGrid>
      {/* grid 3 */}
      <SimpleGrid my={8}>
        <FormControl mb={8} h={`20rem`}>
          <FormLabel color={`purple.300`} fontWeight={600}>
            Description
          </FormLabel>
          <ReactQuill
            placeholder="Enter description of your product"
            style={{ height: `100%` }}
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </FormControl>
        {/* row 2 */}
        <Box mt={`5rem`} mb={8}>
          <FormLabel color={`purple.300`} fontWeight={600}>
            Product
          </FormLabel>
          <FormHelperText color={`grey.400`}>
            Upload the actual product you want to sell. Upload the product file
          </FormHelperText>
          <UploadExternalFiles
            btnTitle={'Upload File'}
            descText={
              'File can be an image, video, document in various formats (jpg, png, mp4, pdf etc)'
            }
          />
        </Box>
        {/* row 3 */}
        <Box my={8}>
          <FormLabel color={`purple.300`} fontWeight={600}>
            Cover photo
          </FormLabel>
          <FormHelperText color={`grey.400`}>
            Upload the photos to promote your product, a maximum of 4 photos.
            Images should be horizontal, at least 1280x720px, and 72 DPI (dots
            per inch)
          </FormHelperText>
          <UploadExternalFiles
            btnTitle={'Add Photo'}
            descText={'Upload images various formats (jpg, png)'}
          />
        </Box>
      </SimpleGrid>
    </FormControl>
  );
};
