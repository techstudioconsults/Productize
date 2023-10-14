import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import {
  UploadExternalFiles,
  UploadExternalFilesBtn,
} from '@productize/dashboard-lib/ui';
import { useAxiosInstance } from '@productize/shared/hooks';
import { SharedButton } from '@productize/shared/ui';
import { ChangeEvent, Fragment, ReactNode, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const quillModules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    [{ align: [] }],
    ['clean'], // remove formatting button
  ],
};

export const SetNewProductForm = () => {
  const { query } = useAxiosInstance();
  const [highlights, setHighlights] = useState<ReactNode[]>([]);
  const [highlightValue, setHighlightValue] = useState<string[]>([]);
  const { register, handleSubmit, control } = useForm({
    criteriaMode: 'all',
  });
  // formDataState
  const [formData, setFormData] = useState({
    productType: ``,
    data: [],
    cover_photos: [],
    highlights: [],
    thumbnail: new Blob(),
  });

  const previewImage = (files: any) => {
    return files;
  };

  const selectProduct = (e: any) => {
    console.log(e.currentTarget.title);
    setFormData({ ...formData, productType: e.currentTarget.title });
  };

  const getFiles = (e: any) => {
    console.log(e.target.title);
    if (e.currentTarget.title === `Upload File`) {
      setFormData({ ...formData, data: e.target.files });
    }
    if (e.currentTarget.title === `Add Photo`)
      setFormData({ ...formData, cover_photos: e.target.files });
    if (e.currentTarget.title === `Upload Image`)
      setFormData({ ...formData, thumbnail: e.target.files?.[0] });
  };

  const handleHighlightChange = (value: string) => {
    setHighlightValue([...highlightValue, value]);
  };

  const addMoreHighlightField = () => {
    const newHighlight = (
      <HighLightField onHighlightChange={handleHighlightChange} />
    );
    setHighlights([...highlights, newHighlight]);
  };

  const onSubmit = async (data: any) => {
    const formDataPayload = {
      ...data,
      product_type: formData.productType,
      data: [...formData.data],
      cover_photos: [...formData.cover_photos],
      thumbnail: formData.thumbnail,
      highlights: highlightValue,
      tags: [data.tags],
    };
    console.log(data);
    console.log(formDataPayload);
    try {
      const res = await query(`post`, `/products`, formDataPayload);
      console.log(res);
    } catch (err: any) {
      console.log(err);
    }
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
            {...register('title')}
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
            {...register('price')}
          />
        </FormControl>
      </SimpleGrid>
      {/* grid 2 */}
      <SimpleGrid my={8} gap={4} columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
        <ProductTypeCard
          img={
            'https://res.cloudinary.com/dkszgtapy/image/upload/v1693129664/productize/Image_1_wc3l2p.png'
          }
          title={'Digital Product'}
          desc={'Any set of file to download or stream'}
          onClick={selectProduct}
          value={`digital_product`}
        />
        <ProductTypeCard
          img={
            'https://res.cloudinary.com/dkszgtapy/image/upload/v1693129663/productize/Image_2_co17c3.png'
          }
          title={'Print On Demand'}
          desc={' Any set of files to download or stream.'}
          onClick={selectProduct}
          value={'digital_product'}
        />
        <ProductTypeCard
          img={
            'https://res.cloudinary.com/dkszgtapy/image/upload/v1693129663/productize/Image_3_l61xsx.png'
          }
          title={'Video Streaming'}
          desc={'Any set of files to download or stream.'}
          onClick={selectProduct}
          value={'digital_product'}
        />
        <ProductTypeCard
          img={
            'https://res.cloudinary.com/dkszgtapy/image/upload/v1693129662/productize/Image_4_hksvcm.png'
          }
          title={'Subscription'}
          desc={'Any set of files to download or stream.'}
          onClick={selectProduct}
          value={'subscription'}
        />
      </SimpleGrid>
      {/* grid 3 */}
      <SimpleGrid my={8}>
        <FormControl mb={8} h={`20rem`}>
          <FormLabel color={`purple.300`} fontWeight={600}>
            Description
          </FormLabel>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <ReactQuill
                modules={quillModules}
                placeholder="Enter description of your product"
                style={{ height: `100%` }}
                theme="snow"
                {...field}
              />
            )}
          />
        </FormControl>
        {/* row 2 */}
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
            <Box display={formData.data.length ? `block` : `none`}>
              <UploadExternalFilesBtn
                getFiles={getFiles}
                btnTitle={'Upload File'}
                fileType={'all'}
                icon="ri:file-upload-line"
              />
            </Box>
          </Flex>
          <Box>
            <Box display={formData.data.length ? `none` : `block`}>
              <UploadExternalFiles
                getFiles={getFiles}
                icon="ri:file-upload-line"
                fileType={`all`}
                btnTitle={'Upload File'}
                descText={
                  'File can be an image, video, document in various formats (jpg, png, mp4, pdf etc)'
                }
              />
            </Box>
            <SimpleGrid
              display={formData.data.length ? `grid` : `none`}
              my={4}
              columns={{ base: 1, md: 2 }}
              gap={4}
            >
              {[...previewImage(formData.data)].map((file: File) => {
                return <ProductContentDisplay key={file.name} file={file} />;
              })}
            </SimpleGrid>
          </Box>
        </Box>
        {/* row 3 */}
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
            <Box display={formData.cover_photos.length ? `block` : `none`}>
              <UploadExternalFilesBtn
                getFiles={getFiles}
                btnTitle={'Add Photo'}
                fileType={'img'}
                icon="ri:file-upload-line"
              />
            </Box>
          </Flex>
          <Box display={formData.cover_photos.length ? `none` : `block`}>
            <UploadExternalFiles
              getFiles={getFiles}
              icon="ri:file-upload-line"
              fileType={`img`}
              btnTitle={'Add Photo'}
              descText={'Upload images various formats (jpg, png)'}
            />
          </Box>
          <SimpleGrid
            display={formData.cover_photos.length ? `grid` : `none`}
            my={4}
            columns={{ base: 1, md: 3 }}
            gap={4}
          >
            {[...previewImage(formData.cover_photos)].map((file: File) => {
              return (
                <CoverPhotoThumbnailActiveContent key={file.name} file={file} />
              );
            })}
          </SimpleGrid>
        </Box>
        {/* row 4 */}
        <Box my={8}>
          <Text color={`purple.300`} fontWeight={600}>
            Thumbnail
          </Text>
          <FormHelperText color={`grey.400`}>
            This image will appear in the explore page, upload a square size of
            2mb.
          </FormHelperText>
          <Center
            mt={4}
            bgColor={`purple.100`}
            bgImg={`` || URL?.createObjectURL(formData?.thumbnail)}
            bgPosition={`center`}
            bgSize={`contain`}
            bgRepeat={`no-repeat`}
            boxSize={`200px`}
          >
            <UploadExternalFilesBtn
              getFiles={getFiles}
              icon="mdi:camera"
              fileType={`img`}
              btnTitle={'Upload Image'}
              descText={null}
            />
          </Center>
        </Box>
      </SimpleGrid>
      {/* grid 4 */}
      <SimpleGrid my={8} columns={{ base: 1, md: 2 }}>
        <Box>
          <Text color={`purple.300`} fontWeight={600}>
            Highlights
          </Text>
          <FormHelperText color={`grey.400`}>
            Write key features that highlight your product.
          </FormHelperText>
          <Stack mt={4} gap={4}>
            <HighLightField onHighlightChange={handleHighlightChange} />
            <HighLightField onHighlightChange={handleHighlightChange} />
            <HighLightField onHighlightChange={handleHighlightChange} />
            {highlights.map((highlight, index) => (
              <Fragment key={index}>{highlight}</Fragment>
            ))}
          </Stack>
          <Box mt={5}>
            <SharedButton
              text={'Add more highlight '}
              width={'100%'}
              height={'48px'}
              bgColor={'transparent'}
              textColor={'purple.200'}
              borderRadius={'4px'}
              fontSize={{ base: `sm`, md: `md` }}
              btnExtras={{
                border: `1px solid #6D5DD3`,
                onClick: addMoreHighlightField,
              }}
            />
          </Box>
        </Box>
      </SimpleGrid>
      {/* grid 5 */}
      <SimpleGrid my={8} columns={{ base: 1, md: 2 }}>
        <Box>
          <Text color={`purple.300`} fontWeight={600}>
            Tags
          </Text>
          <FormHelperText mb={2} color={`grey.400`}>
            Select tags you want your product to be categorised under.
          </FormHelperText>
          <FormControl>
            <Select
              bgColor={`grey.200`}
              _focus={{ bgColor: `grey.200`, color: `grey.800` }}
              _placeholder={{ color: `grey.400` }}
              variant={`filled`}
              placeholder="Select country"
              {...register('tags')}
            >
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
        </Box>
      </SimpleGrid>
      {/* grid 6 */}
      <SimpleGrid my={8} columns={{ base: 1, md: 2 }}>
        <Box>
          <Text color={`purple.300`} fontWeight={600}>
            Settings
          </Text>
          <FormControl color={`grey.400`} mt={4}>
            <FormControl color={`grey.400`} mt={4}>
              <Flex justifyContent={`space-between`} alignItems={`center`}>
                <FormLabel className="small-text">Show Stock Count</FormLabel>
                <Switch
                  // {...register('stock_count')}
                  size="lg"
                  colorScheme="blackAlpha"
                />
              </Flex>
            </FormControl>
            <Divider my={4} />
            <FormControl color={`grey.400`} mt={4}>
              <Flex justifyContent={`space-between`} alignItems={`center`}>
                <FormLabel className="small-text">
                  Allow customers choose quantity
                </FormLabel>
                <Switch
                  // {...register('choose_quantity')}
                  size="lg"
                  colorScheme="blackAlpha"
                />
              </Flex>
            </FormControl>
            <Divider my={4} />
            <FormControl color={`grey.400`} mt={4}>
              <Flex justifyContent={`space-between`} alignItems={`center`}>
                <FormLabel className="small-text">
                  Show number of sales of product on page
                </FormLabel>
                <Switch
                  // {...register('show_sales_count')}
                  size="lg"
                  colorScheme="blackAlpha"
                />
              </Flex>
            </FormControl>
          </FormControl>
        </Box>
      </SimpleGrid>
    </FormControl>
  );
};

interface ContentDisplayProp {
  file: File;
}
const ProductContentDisplay = ({ file }: ContentDisplayProp) => {
  console.log(file);

  // const imgRef = useRef<HTMLImageElement | null>(null);

  // const previewImg = (file: File | null) => {
  //   console.log(file);

  //   // if (file && imgRef.current) {
  //   //   imgRef.current.src =
  //   //     URL.createObjectURL(file) ||
  //   //     `https://res.cloudinary.com/dkszgtapy/image/upload/v1696084137/productize/Star_6_alusuk.png`;
  //   // }
  // };

  return (
    <Card p={8} borderRadius={`5px`} bgColor={`purple.100`} variant={`filled`}>
      <Flex gap={4} alignItems={`center`}>
        <Box boxSize={`72px`}>
          {/* <Icon icon={`mdi:file`} /> */}
          <Image
            w={`100%`}
            h={`100%`}
            src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1696088266/productize/Productize-iconset/Property_2_Selected-file_ybygib.svg`}
          />
        </Box>
        <Box>
          <Text fontWeight={600}>{file.name}</Text>
          <Text className="small-text">{`${file.type}.${Math.floor(
            file.size / 1000
          )}`}</Text>
        </Box>
      </Flex>
    </Card>
  );
};
const CoverPhotoThumbnailActiveContent = ({ file }: ContentDisplayProp) => {
  return (
    <Card
      w={`368px`}
      h={`200px`}
      borderRadius={`5px`}
      variant={`outline`}
      border={`5px solid #F3F2FB`}
      overflow={`hidden`}
    >
      <Image
        w={`100%`}
        h={`100%`}
        objectFit={`contain`}
        src={URL.createObjectURL(file)}
        alt={`img`}
      />
    </Card>
  );
};

interface highlightProp {
  onHighlightChange: (value: string) => void;
}

const HighLightField = ({ onHighlightChange }: highlightProp) => {
  const [value, setValue] = useState<string>('');

  const getHighlight = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    setValue(newValue);
    // Call the function from the parent component and pass the new value
    onHighlightChange(newValue);
  };

  const clearInput = () => {
    setValue('');
    // Call the function from the parent component and pass an empty string to clear the input
    onHighlightChange('');
  };

  return (
    <FormControl>
      <InputGroup size="lg">
        <Input
          pr="4.5rem"
          bgColor={`grey.200`}
          _focus={{ bgColor: `grey.200`, color: `grey.800` }}
          _placeholder={{ color: `grey.400` }}
          placeholder="Enter Information"
          variant={`filled`}
          onChange={getHighlight}
          value={value}
        />
        <InputRightElement>
          <Center
            onClick={clearInput}
            cursor={`pointer`}
            bgColor={`purple.200`}
            borderRadius={`100%`}
            boxSize={`1rem`}
            color={`grey.100`}
          >
            <Icon icon={`system-uicons:close`} />
          </Center>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

interface productTypeProp {
  img: string;
  title: string;
  desc: string;
  value: string;
  onClick: (e: any) => void;
}

const ProductTypeCard = ({
  img,
  title,
  desc,
  value,
  onClick,
}: productTypeProp) => {
  // const [isActive, setActive] = useState(false);

  return (
    <Card
      title={value}
      onClick={onClick}
      cursor={`pointer`}
      height={`fit-content`}
      textAlign={`start`}
      variant={`outline`}
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
