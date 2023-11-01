// import { Box, Card } from '@chakra-ui/react';
// import React from 'react'

// export const useCopyToClipboard = () => {
//   return (
//     // copy test to clipboard
//   const copyTextToClipBoard = () => {
//     const textToCopy = product?.data?.[0];
//     navigator.clipboard
//       .writeText(textToCopy)
//       .then(() => {
//         toast({
//           position: 'top',
//           render: () => (
//             <Card
//               display={`flex`}
//               flexDir={`row`}
//               alignItems={`center`}
//               w={{ base: `100%`, lg: `702px` }}
//               p={1}
//               bg="grey.100"
//             >
//               <Box borderRight={`1px solid green`} p={2}>
//                 <Image
//                   src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1697538678/productize/Rectangle_ikpmwt.png`}
//                   alt="img"
//                 />
//               </Box>
//               <Box p={2}>
//                 <Text fontWeight={600}>Product link Copied!</Text>
//                 <Text className="small-text" color={`grey.400`}>
//                   You have successfully your product link
//                 </Text>
//               </Box>
//             </Card>
//           ),
//         });
//       })
//       .catch((error) => {
//         console.error('Failed to copy text: ', error);
//       });
//   };
//   )
// }
