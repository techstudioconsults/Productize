import "../styles.scss";

import { Route, Routes, useLocation, Link as RouterLink } from "react-router-dom";
import { PageNotFound, PreLoader, SpinnerComponent } from "@productize-v1.0.0/modules/shared/ui";
import {
    DashboardLayout,
    Home as DashboardHome,
    Products,
    ProductDetails as DAshboardProductDetails,
    NewProduct,
    Profile,
    Orders,
    OrderDetails as DashboardOrderDetails,
    Customers,
    Payouts,
    CustomersDetails,
    Analytics,
    Help,
    Download,
    Settings,
    ChangePlans,
    BillingCycle,
    DownloadedContent,
} from "@productize-v1.0.0/dashboard";
import { ForgotPassword, Login, Signup } from "@productize-v1.0.0/auth";
import React, { useCallback, useEffect, useState } from "react";

import { Suspense } from "react";
import { PlanSettings } from "@productize-v1.0.0/dashboard";
import { useGetProductTagsMutation } from "@productize-v1.0.0/modules/shared/redux";
import { Center, Image, Link, Text } from "@chakra-ui/react";

// using suspense and lazy loading
const Home = React.lazy(() => import("../pages/home/Home").then((module) => ({ default: module.Home })));
const Features = React.lazy(() => import("../pages/features/Features").then((module) => ({ default: module.Features })));
const Pricing = React.lazy(() => import("../pages/pricing/Pricing").then((module) => ({ default: module.Pricing })));
const Explore = React.lazy(() => import("../pages/explore/views").then((module) => ({ default: module.Explore })));
const ProductDetails = React.lazy(() => import("../pages/explore/views/productDetails/ProductDetails").then((module) => ({ default: module.ProductDetails })));
const ProductCart = React.lazy(() => import("../pages/explore/views/productDetails/ProductCart").then((module) => ({ default: module.ProductCart })));

export { Home, Features, Pricing, Explore, ProductDetails, ProductCart };

export function App() {
    const [isDesktop, setIsDesktop] = useState(true);
    const [getProductTags] = useGetProductTagsMutation();
    const location = useLocation();

    const getTags = useCallback(async () => {
        await getProductTags(null).unwrap();
    }, [getProductTags]);

    useEffect(() => {
        getTags();

        // Function to handle changes in media query
        const handleMediaChange = (mediaQueryList: any) => {
            const matches = mediaQueryList.matches;
            setIsDesktop(matches); // Update the state to track desktop view
            return matches; // Return the boolean value
        };

        // Set up a media query listener
        const mediaQueryList = window.matchMedia("(min-width: 992px)");
        mediaQueryList.addListener(handleMediaChange);
        handleMediaChange(mediaQueryList);
        return () => {
            mediaQueryList.removeListener(handleMediaChange);
        };
    }, [getTags]);

    if (location.pathname.includes("dashboard")) {
        if (!isDesktop) {
            return (
                <Center p={10} h={`100vh`} flexDir={`column`}>
                    <Link my={5} as={RouterLink} to={`/`}>
                        <Image
                            alt="logo"
                            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1699951023/productize/Frame_14220_ogchl8_chcxzu.png`}
                        />
                    </Link>
                    <Text color={`purple.200`} fontWeight={600} as={`h4`}>
                        Mobile View detected...
                    </Text>
                    <Text fontSize={`xs`} textAlign={`center`}>
                        cannot open dashboard on a mobile device. please use a desktop or a screen with a min size of 1200px
                    </Text>
                </Center>
            );
        }
    }

    return (
        <Suspense
            fallback={
                <div style={{ width: `100%`, height: `100vh` }} className="d-flex align-items-center justify-content-center">
                    <SpinnerComponent />
                </div>
            }
        >
            <Routes>
                {/* authentication */}
                <Route path={`/auth`} element={<Signup />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/fetching-data/:provider" element={<PreLoader />} />
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                {/* <Route path="/auth/reset-password" element={<ResetPassword email={""} token={""} />} /> */}

                {/* external pages */}
                <Route index element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path={`/explore`} element={<Explore />} />
                {/* <Route path="/explore/design" element={<ExploreDesign />} /> */}
                <Route path="/explore/product/details/:productID" element={<ProductDetails />} />
                <Route path="/explore/product/cart" element={<ProductCart />} />

                {/* dashboard */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route path="home" index element={<DashboardHome />} />

                    <Route path="products" element={<Products />} />
                    <Route path="products/:productID" element={<DAshboardProductDetails />} />
                    <Route path="products/new" element={<NewProduct />} />

                    <Route path="orders" element={<Orders />} />
                    <Route path="orders/:orderID" element={<DashboardOrderDetails />} />

                    <Route path="payouts" element={<Payouts />} />
                    {/* <Route path="payouts/:payoutid" element={<PayoutDetails />} />
                    <Route path="payouts/:payoutid/withdraw-earnings" element={<WithdrawalEarnings />} /> */}

                    <Route path="analytics" element={<Analytics />} />

                    <Route path="customers" element={<Customers />} />
                    <Route path="customers/:customerID" element={<CustomersDetails />} />

                    <Route path="profile/:userID" element={<Profile />} />
                    <Route path="help" element={<Help />} />

                    <Route path="downloads" element={<Download />} />
                    <Route path="downloads/:downloadedContentID" element={<DownloadedContent />} />

                    <Route path="settings" element={<Settings />}>
                        <Route path="plans" element={<PlanSettings />} />
                        <Route path="plans/change-plans" element={<ChangePlans />} />
                        <Route path="plans/billing-cycle" element={<BillingCycle />} />
                    </Route>
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Suspense>
    );
}

export default App;
