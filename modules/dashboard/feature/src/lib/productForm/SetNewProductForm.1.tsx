// import {
// 	Box,
// 	Center,
// 	Divider,
// 	Flex,
// 	FormControl,
// 	FormHelperText,
// 	FormLabel,
// 	Input,
// 	SimpleGrid,
// 	Stack,
// 	Switch,
// 	Text,
// } from '@chakra-ui/react';
// import { UploadExternalFiles } from '@productize/dashboard-lib/ui';
// import { SharedButton } from '@productize/shared/ui';
// import { Controller, useFormContext } from 'react-hook-form';
// import ReactQuill from 'react-quill';
// import { TagPicker } from 'rsuite';
// import RadioCards from './components/RadioCards';
// import { useState } from 'react';
// import {
// 	quillModules,
// 	ProductContentDisplay,
// 	CoverPhotoThumbnailActiveContent,
// 	tagData,
// } from './SetNewProductForm';

// export const SetNewProductForm = () => {
// 	const [dataPreview, setDataPreview] = useState([]);
// 	const [coverPhotoPreview, setCoverPhotoPreview] = useState([]);
// 	const [thumbnailPreview, setThumbnailPreview] = useState(new Blob());
// 	const { register, control } = useFormContext(); // retrieve all hook methods

// 	const showFiles = (inputId) => {
// 		const input = document.getElementById(inputId);
// 		input?.click();
// 	};

// 	const handleChange = (e) => {
// 		console.log(e.target.files);
// 		switch (e.target?.id) {
// 			case `dataFileInput`:
// 				setDataPreview(Array.from(e.target?.files));
// 				break;
// 			case `coverPhotosInput`:
// 				setCoverPhotoPreview(e.target?.files);
// 				break;
// 			case `thumbnailInput`:
// 				setThumbnailPreview(e.target?.files?.[0]);
// 				break;
// 			default:
// 				break;
// 		}
// 	};

// 	return (
// 		<FormControl>
// 			{/* grid 1 */}
// 			<SimpleGrid my={8} gap={4} columns={2}>
// 				<FormControl>
// 					<FormLabel color={`purple.300`} fontWeight={600}>
// 						Product Title
// 					</FormLabel>
// 					<Input
// 						// required
// 						bgColor={`grey.200`}
// 						_focus={{ bgColor: `grey.300`, color: `grey.800` }}
// 						_placeholder={{ color: `grey.400` }}
// 						placeholder="Name of product"
// 						variant={`filled`}
// 						size={`lg`}
// 						{...register(`title`)}
// 					/>
// 				</FormControl>
// 				<FormControl>
// 					<FormLabel color={`purple.300`} fontWeight={600}>
// 						Price
// 					</FormLabel>
// 					<Input
// 						// required
// 						bgColor={`grey.200`}
// 						_focus={{ bgColor: `grey.300`, color: `grey.800` }}
// 						_placeholder={{ color: `grey.400` }}
// 						placeholder="0"
// 						variant={`filled`}
// 						size={`lg`}
// 						{...register(`price`)}
// 					/>
// 				</FormControl>
// 			</SimpleGrid>
// 			{/* grid 2 */}
// 			<RadioCards />
// 			{/* grid 3 */}
// 			<SimpleGrid my={8}>
// 				<FormControl mb={8} h={`20rem`}>
// 					<FormLabel color={`purple.300`} fontWeight={600}>
// 						Description
// 					</FormLabel>
// 					<Controller
// 						name="description"
// 						control={control}
// 						defaultValue=""
// 						render={({ field }) => (
// 							<ReactQuill
// 								modules={quillModules}
// 								placeholder="Enter description of your product"
// 								style={{ height: `100%` }}
// 								theme="snow"
// 								{...field}
// 							/>
// 						)}
// 					/>
// 				</FormControl>
// 				{/* row 2 */}
// 				<Box mt={`5rem`} mb={8}>
// 					<Flex alignItems={`center`} justifyContent={`space-between`}>
// 						<Box>
// 							<Text color={`purple.300`} fontWeight={600}>
// 								Product
// 							</Text>
// 							<FormHelperText color={`grey.400`}>
// 								Upload the actual product you want to sell. Upload the
// 								product file
// 							</FormHelperText>
// 						</Box>
// 						<Box>
// 							<Controller
// 								name="data"
// 								control={control}
// 								render={({ field }) => (
// 									<Input
// 										id={`dataFileInput`}
// 										hidden
// 										type={`file`}
// 										multiple
// 										onChange={(e) => {
// 											field.onChange(e.target.files); // this is important to update form state
// 											handleChange(e); // handle custom logic
// 										}}
// 									/>
// 								)}
// 							/>
// 							<SharedButton
// 								btnExtras={{
// 									leftIcon: `ri:file-upload-line`,
// 									border: `1px solid #6D5DD3`,
// 									onClick: () => showFiles(`dataFileInput`),
// 								}}
// 								text={`Upload File`}
// 								width={'fit-content'}
// 								height={'48px'}
// 								bgColor={'transparent'}
// 								textColor={'purple.200'}
// 								borderRadius={'4px'}
// 								fontSize={{ base: `sm`, md: `md` }}
// 							/>
// 						</Box>
// 					</Flex>
// 					<Box>
// 						<Box>
// 							<UploadExternalFiles
// 								icon="ri:file-upload-line"
// 								fileType={`all`}
// 								btnTitle={'Upload File'}
// 								descText={
// 									'File can be an image, video, document in various formats (jpg, png, mp4, pdf etc)'
// 								}
// 								showFiles={() => showFiles(`dataFileInput`)}
// 							/>
// 						</Box>
// 						<SimpleGrid my={4} columns={{ base: 1, md: 2 }} gap={4}>
// 							{dataPreview?.map((file: File) => {
// 								return (
// 									<ProductContentDisplay key={file.name} file={file} />
// 								);
// 							})}
// 						</SimpleGrid>
// 					</Box>
// 				</Box>
// 				{/* row 3 */}
// 				<Box my={8}>
// 					<Flex alignItems={`center`} justifyContent={`space-between`}>
// 						<Box>
// 							<Text color={`purple.300`} fontWeight={600}>
// 								Cover photo
// 							</Text>
// 							<FormHelperText color={`grey.400`}>
// 								Upload the photos to promote your product, a maximum of
// 								4 photos. Images should be horizontal, at least
// 								1280x720px, and 72 DPI (dots per inch)
// 							</FormHelperText>
// 						</Box>
// 						<Box>
// 							<Controller
// 								name="cover_photos"
// 								control={control}
// 								render={({ field }) => (
// 									<Input
// 										id={`coverPhotosInput`}
// 										hidden
// 										type={`file`}
// 										multiple
// 										onChange={(e) => {
// 											field.onChange(e.target.files); // this is important to update form state
// 											handleChange(e); // handle custom logic
// 										}}
// 									/>
// 								)}
// 							/>

// 							<SharedButton
// 								btnExtras={{
// 									leftIcon: `ri:file-upload-line`,
// 									border: `1px solid #6D5DD3`,
// 									onClick: () => showFiles(`coverPhotosInput`),
// 								}}
// 								text={`Upload Photos`}
// 								width={'fit-content'}
// 								height={'48px'}
// 								bgColor={'transparent'}
// 								textColor={'purple.200'}
// 								borderRadius={'4px'}
// 								fontSize={{ base: `sm`, md: `md` }}
// 							/>
// 						</Box>
// 					</Flex>
// 					<Box>
// 						<UploadExternalFiles
// 							icon="ri:file-upload-line"
// 							fileType={`all`}
// 							btnTitle={'Upload Photos'}
// 							descText={
// 								'File can be an image, video, document in various formats (jpg, png, mp4, pdf etc)'
// 							}
// 							showFiles={() => showFiles(`coverPhotosInput`)}
// 						/>
// 					</Box>
// 					<SimpleGrid my={4} columns={{ base: 1, md: 3 }} gap={4}>
// 						<CoverPhotoThumbnailActiveContent />
// 					</SimpleGrid>
// 				</Box>
// 				{/* row 4 */}
// 				<Box my={8}>
// 					<Text color={`purple.300`} fontWeight={600}>
// 						Thumbnail
// 					</Text>
// 					<FormHelperText color={`grey.400`}>
// 						This image will appear in the explore page, upload a square
// 						size of 2mb.
// 					</FormHelperText>
// 					<Center
// 						mt={4}
// 						bgColor={`purple.100`}
// 						bgImg={URL?.createObjectURL(thumbnailPreview)}
// 						bgPosition={`center`}
// 						bgSize={`contain`}
// 						bgRepeat={`no-repeat`}
// 						boxSize={`200px`}
// 					>
// 						<Controller
// 							name="thumbnail"
// 							control={control}
// 							render={({ field }) => (
// 								<Input
// 									id={`thumbnailInput`}
// 									hidden
// 									type={`file`}
// 									multiple
// 									onChange={(e) => {
// 										field.onChange(e.target.files?.[0]); // this is important to update form state
// 										handleChange(e); // handle custom logic
// 									}}
// 								/>
// 							)}
// 						/>
// 						<SharedButton
// 							btnExtras={{
// 								leftIcon: `ri:file-upload-line`,
// 								border: `1px solid #6D5DD3`,
// 								onClick: () => showFiles(`thumbnailInput`),
// 							}}
// 							text={`Upload Photos`}
// 							width={'fit-content'}
// 							height={'48px'}
// 							bgColor={'transparent'}
// 							textColor={'purple.200'}
// 							borderRadius={'4px'}
// 							fontSize={{ base: `sm`, md: `md` }}
// 						/>
// 					</Center>
// 				</Box>
// 			</SimpleGrid>
// 			{/* grid 4 */}
// 			<SimpleGrid my={8} columns={{ base: 1, md: 2 }}>
// 				<Box>
// 					<Text color={`purple.300`} fontWeight={600}>
// 						Highlights
// 					</Text>
// 					<FormHelperText color={`grey.400`}>
// 						Write key features that highlight your product.
// 					</FormHelperText>
// 					<Stack mt={4} gap={4}></Stack>
// 					<Box mt={5}>
// 						<SharedButton
// 							text={'Add more highlight '}
// 							width={'100%'}
// 							height={'48px'}
// 							bgColor={'transparent'}
// 							textColor={'purple.200'}
// 							borderRadius={'4px'}
// 							fontSize={{ base: `sm`, md: `md` }}
// 							btnExtras={{
// 								border: `1px solid #6D5DD3`,
// 							}}
// 						/>
// 					</Box>
// 				</Box>
// 			</SimpleGrid>
// 			{/* grid 5 */}
// 			<SimpleGrid my={8} columns={{ base: 1, md: 2 }}>
// 				<Box>
// 					<Text color={`purple.300`} fontWeight={600}>
// 						Tags
// 					</Text>
// 					<FormHelperText mb={2} color={`grey.400`}>
// 						Select tags you want your product to be categorised under.
// 					</FormHelperText>
// 					<FormControl>
// 						<TagPicker
// 							size="lg"
// 							data={tagData}
// 							style={{
// 								width: `100%`,
// 								fontSize: `14px`,
// 							}}
// 						/>
// 					</FormControl>
// 				</Box>
// 			</SimpleGrid>
// 			{/* grid 6 */}
// 			<SimpleGrid my={8} columns={{ base: 1, md: 2 }}>
// 				<Box>
// 					<Text color={`purple.300`} fontWeight={600}>
// 						Settings
// 					</Text>
// 					<FormControl color={`grey.400`} mt={4}>
// 						<FormControl color={`grey.400`} mt={4}>
// 							<Flex
// 								justifyContent={`space-between`}
// 								alignItems={`center`}
// 							>
// 								<FormLabel className="small-text">
// 									Show Stock Count
// 								</FormLabel>
// 								<Switch size="lg" colorScheme="blackAlpha" />
// 							</Flex>
// 						</FormControl>
// 						<Divider my={4} />
// 						<FormControl color={`grey.400`} mt={4}>
// 							<Flex
// 								justifyContent={`space-between`}
// 								alignItems={`center`}
// 							>
// 								<FormLabel className="small-text">
// 									Allow customers choose quantity
// 								</FormLabel>
// 								<Switch size="lg" colorScheme="blackAlpha" />
// 							</Flex>
// 						</FormControl>
// 						<Divider my={4} />
// 						<FormControl color={`grey.400`} mt={4}>
// 							<Flex
// 								justifyContent={`space-between`}
// 								alignItems={`center`}
// 							>
// 								<FormLabel className="small-text">
// 									Show number of sales of product on page
// 								</FormLabel>
// 								<Switch size="lg" colorScheme="blackAlpha" />
// 							</Flex>
// 						</FormControl>
// 					</FormControl>
// 				</Box>
// 			</SimpleGrid>
// 		</FormControl>
// 	);
// };
