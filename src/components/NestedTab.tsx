// import React from 'react';
// import { Tab, TabList, TabIndicator, TabPanel, TabPanels } from '@chakra-ui/react';
// // import  { navigation, pagination, autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/swiper-bundle.min.css';


// // import { Tabs, Tab, TabList, TabIndicator, TabPanel, TabPanels } from '@chakra-ui/react';

// interface TabContent {
//   label: string;
//   content: React.ReactNode[];
// }

// const tabsData: TabContent[] = [
//   {
//     label: 'One',
//     content: [
//       <p key="1">Content slide 1 of Tab One</p>,
//       <p key="2">Content slide 2 of Tab One</p>,
//     ],
//   },
//   {
//     label: 'Two',
//     content: [
//       <p key="1">Content slide 1 of Tab Two</p>,
//       <p key="2">Content slide 2 of Tab Two</p>,
//     ],
//   },
//   {
//     label: 'Three',
//     content: [
//       <p key="1">Content slide 1 of Tab Three</p>,
//       <p key="2">Content slide 2 of Tab Three</p>,
//     ],
//   },
// ];

// const NestedTab: React.FC = () => {
//   return (
//     <div>
//       <Tab position="relative" variant="unstyled">
//         <TabList>
//           {tabsData.map(tab => (
//             <Tab key={tab.label}>{tab.label}</Tab>
//           ))}
//         </TabList>
//         <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
//         <TabPanels>
//           {tabsData.map(tab => (
//             <TabPanel key={tab.label}>
//               <Swiper navigation pagination={{ clickable: true }} autoplay={{ delay: 3000 }}>
//                 {tab.content.map((slide, index) => (
//                   <SwiperSlide key={index}>{slide}</SwiperSlide>
//                 ))}
//               </Swiper>
//             </TabPanel>
//           ))}
//         </TabPanels>
//       </Tab>
//     </div>
//   );
// };

// export default NestedTab;


