import {
  Box,
  Button, Flex,
  FormControl,
  FormHelperText,
  FormLabel, Input, SimpleGrid, Text
} from '@chakra-ui/react';
import {
  UploadExternalFiles,
  UploadExternalFilesBtn
} from '@productize/dashboard-lib/ui';
import React from 'react';
import { ReactNode, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import { HighLightField, ProductTypeCard, ProductContentDisplay, CoverPhotoThumbnailActiveContent } from './SetNewProductForm';


export const SetNewProductForm = () => {
  const highlightStack = useRef<HTMLDivElement | null>(null);
  const [highlights, setHighlights] = useState<ReactNode[]>([]);

  // formDataState
  const [formData, setFormData] = useState({
    productType: `Digital product`,
    desc: ``,
  });

  const addMoreHighlightField = () => {
    const newHighlight = <HighLightField />;
    // Update the highlights state to include the new highlight
    setHighlights([...highlights, newHighlight]);
  };

  const { register, handleSubmit } = useForm({
    criteriaMode: 'all',
  });

  const onSubmit = async (data: object) => {
    const formDataPayload = {
      ...data,
      productType: formData.productType,
      desc: formData.desc,
    };
    console.log(data);
    console.log(formDataPayload);
  };

  const selectProduct = (e: any) => {
    console.log(e.currentTarget.title);
    setFormData({ ...formData, productType: e.currentTarget.title });
  };

  return (
    <FormControl as={`form`} onSubmit={handleSubmit(onSubmit)}>
      <Button type={`submit`}>Submit</Button>
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
            {...register('productTitle')} />
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
            {...register('price')} />
        </FormControl>
      </SimpleGrid>
      {/* grid 2 */}
      <SimpleGrid my={8} gap={4} columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
        <ProductTypeCard
          img={'https://res.cloudinary.com/dkszgtapy/image/upload/v1693129664/productize/Image_1_wc3l2p.png'}
          title={'Digital Product'}
          desc={'Any set of file to download or stream'}
          onClick={selectProduct}
          value={`Digital Product`} />
        <ProductTypeCard
          img={'https://res.cloudinary.com/dkszgtapy/image/upload/v1693129663/productize/Image_2_co17c3.png'}
          title={'Print On Demand'}
          desc={' Any set of files to download or stream.'}
          onClick={selectProduct}
          value={'Print On Demand'} />
        <ProductTypeCard
          img={'https://res.cloudinary.com/dkszgtapy/image/upload/v1693129663/productize/Image_3_l61xsx.png'}
          title={'Video Streaming'}
          desc={'Any set of files to download or stream.'}
          onClick={selectProduct}
          value={'Video Streaming'} />
        <ProductTypeCard
          img={'https://res.cloudinary.com/dkszgtapy/image/upload/v1693129662/productize/Image_4_hksvcm.png'}
          title={'Subscription'}
          desc={'Any set of files to download or stream.'}
          onClick={selectProduct}
          value={'Subscription'} />
      </SimpleGrid>
      {/* grid 3 */}
      <SimpleGrid my={8}>
        <FormControl mb={8} h={`20rem`}>
          <FormLabel color={`purple.300`} fontWeight={600}>
            Description
          </FormLabel>
          <Controller
            name="content"
            control={control}
            defaultValue=""
            render={({ field }) => <ReactQuill {...field} />} />
        </div>
        <ReactQuill
          placeholder="Enter description of your product"
          style={{ height: `100%` }}
          theme="snow"
          // value={formData.desc}
          // onChange={() => setFormData({ ...formData, desc: formData.desc })}
          {...register('desc')} />
      </></FormControl>) /* row 2 */;
  { /* row 2 */ }
  <Box mt={`5rem`} mb={8}>
    <Flex alignItems={`center`} justifyContent={`space-between`}>
      <Box>
        <Text color={`purple.300`} fontWeight={600}>
          Product
        </Text>
        <FormHelperText color={`grey.400`}>
          Upload the actual product you want to sell. Upload the product
          file
        </FormHelperText>
      </Box>
      <Box>
        <UploadExternalFilesBtn
          btnTitle={'Upload File'}
          fileType={'all'}
          icon="ri:file-upload-line" />
      </Box>
    </Flex>
    <Box>
      <Box>
        <UploadExternalFiles
          icon="ri:file-upload-line"
          fileType={`all`}
          btnTitle={'Upload File'}
          descText={'File can be an image, video, document in various formats (jpg, png, mp4, pdf etc)'} />
      </Box>
      <SimpleGrid my={4} columns={{ base: 1, md: 2 }} gap={4}>
        <ProductContentDisplay />
        <ProductContentDisplay />
      </SimpleGrid>
    </Box>
  </Box>;
  { /* row 3 */ }
  <Box my={8}>
    <Flex alignItems={`center`} justifyContent={`space-between`}>
      <Box>
        <Text color={`purple.300`} fontWeight={600}>
          Cover photo
        </Text>
        <FormHelperText color={`grey.400`}>
          Upload the photos to promote your product, a maximum of 4
          photos. Images should be horizontal, at least 1280x720px, and 72
          DPI (dots per inch)
        </FormHelperText>
      </Box>
      <Box>
        <UploadExternalFilesBtn
          btnTitle={'Add Photo'}
          fileType={'img'}
          icon="ri:file-upload-line" />
      </Box>
    </Flex>
    <Box>
      <UploadExternalFiles
        icon="ri:file-upload-line"
        fileType={`img`}
        btnTitle={'Add Photo'}
        descText={'Upload images various formats (jpg, png)'} />
      <SimpleGrid my={4} columns={{ base: 1, md: 3 }} gap={4}>
        <CoverPhotoThumbnailActiveContent />
        <CoverPhotoThumbnailActiveContent />
        <CoverPhotoThumbnailActiveContent />
      </SimpleGrid>
    </Box>
  </Box>;
  { /* row 4 */ }
  <Box my={8}>
    <Text color={`purple.300`} fontWeight={600}>
      Thumbnail
    </Text>
    <FormHelperText color={`grey.400`}>
      This image will appear in the explore page, upload a square size of
      2mb.
    </FormHelperText>
    <Box w={`200px`}>
      <UploadExternalFiles
        icon="mdi:camera"
        fileType={`img`}
        btnTitle={'Upload Image'}
        descText={null} />
    </Box>
  </Box>;
};
