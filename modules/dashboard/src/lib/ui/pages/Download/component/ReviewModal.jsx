/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Center, Flex, FormControl, ModalBody, ModalFooter, Stack, Text, Textarea, useDisclosure } from '@chakra-ui/react';
import { useCreateProductReviewMutation } from '@productize/redux';
import { ModalComp, SharedButton } from '@productize/ui';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

export const ReviewModal = ({ handleClose }) => {
    const { downloadedContentID } = useParams();
    const [rating, setRating] = useState(0);
    const { onClose, onOpen, isOpen } = useDisclosure();
    const { isOpen: isFeedbackOpen, onOpen: onFeedbackOpen, onClose: onFeedbackClose } = useDisclosure();
    const [review, setReview] = useState('');
    const [createProductReview] = useCreateProductReviewMutation();

    const handleSubmit = async () => {
        try {
            const res = await createProductReview({
                productID: downloadedContentID,
                body: {
                    rating: rating,
                    comment: review,
                },
            }).unwrap();
            if (res) {
                onClose();
                onFeedbackOpen();
            }
        } catch (error) {
            return;
        }
    };

    const handleRating = (rate) => {
        setRating(rate);
    };

    const close = () => {
        if (handleClose) {
            handleClose();
            onClose();
        } else {
            onClose();
        }
    };

    return (
        <>
            <SharedButton
                text="Review Product"
                height="40px"
                bgColor="transparent"
                textColor="purple.200"
                borderRadius="4px"
                fontSize={{ base: 'sm', md: 'md' }}
                btnExtras={{
                    onClick: onOpen,
                    border: `1px solid #6D5DD3`,
                }}
            />

            <ModalComp modalSize="4xl" openModal={isOpen} closeModal={close}>
                <ModalBody p={{ base: 0, md: `initial` }}>
                    <Flex justifyContent="center" mb={4}>
                        <Stack alignItems="center" gap={5}>
                            <Text fontSize={{ base: `md`, sm: `2xl` }} fontWeight="bold">
                                How was the product?
                            </Text>
                            <Box display={{ base: `none`, sm: `block` }}>
                                <StarRatings rating={rating} starRatedColor="orange" starDimension="50px" starSpacing="15px" changeRating={handleRating} />
                            </Box>
                            <Box display={{ sm: `none` }}>
                                <StarRatings rating={rating} starRatedColor="orange" starDimension="30px" starSpacing="10px" changeRating={handleRating} />
                            </Box>
                        </Stack>
                    </Flex>
                    <FormControl>
                        <Text mb={5} textAlign="center" fontSize={{ base: `md`, sm: `2xl` }} fontWeight="bold">
                            What's your opinion about the product? <span>(Optional)</span>
                        </Text>
                        <Textarea h="15rem" placeholder="Drop a review for the creator..." value={review} onChange={(e) => setReview(e.target.value)} />
                    </FormControl>
                </ModalBody>

                <ModalFooter gap={10}>
                    <SharedButton
                        text="Cancel"
                        height="40px"
                        bgColor="transparent"
                        textColor="red.200"
                        borderRadius="4px"
                        fontSize={{ base: 'sm', md: 'md' }}
                        width="100%"
                        btnExtras={{
                            onClick: close,
                            border: `1px solid red`,
                        }}
                    />
                    <SharedButton
                        text="Submit Review"
                        height="40px"
                        bgColor="purple.200"
                        textColor="grey.200"
                        borderRadius="4px"
                        fontSize={{ base: 'sm', md: 'md' }}
                        width="100%"
                        btnExtras={{
                            onClick: handleSubmit,
                            disabled: rating === 0 || review.trim() === '',
                        
                        }}
                    />
                </ModalFooter>
            </ModalComp>

            <ModalComp modalSize="xl" openModal={isFeedbackOpen} closeModal={onFeedbackClose}>
                <ModalBody textAlign="center" py={10}>
                    <Center mb={4}>
                        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1718870780/productize/tdkhamq21x76zh9sxa43.png" alt="Success" />
                    </Center>
                    <Text fontSize="2xl" fontWeight="bold" mb={2}>
                        Thanks for reviewing product!
                    </Text>
                    <Text mb={5}>Review has been submitted on erfejdfbmndb. nvhv ejns gvdfv dbhdn brdnbcve dgvej hhbfen msgve.</Text>
                    <SharedButton
                        text="Continue"
                        height="40px"
                        width={`20rem`}
                        bgColor="purple.200"
                        textColor="grey.200"
                        borderRadius="4px"
                        fontSize={{ base: 'sm', md: 'md' }}
                        btnExtras={{
                            onClick: onFeedbackClose,
                        }}
                    />
                </ModalBody>
            </ModalComp>
        </>
    );
};
