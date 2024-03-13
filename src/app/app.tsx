import '../styles.scss';

import React, { Suspense, useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useGetProductTagsMutation } from '@productize/redux';
import { PageNotFound, PreLoader, SpinnerComponent } from '@productize/ui';
import { ForgotPassword, Login, Signup } from '@productize/auth';
import {
    Analytics,
    BillingCycle,
    ChangePlans,
    Customers,
    CustomersDetails,
    DashboardLayout,
    Download,
    DownloadedContent,
    Help,
    NewProduct,
    Orders,
    Payouts,
    PlanSettings,
    Products,
    Profile,
    Settings,
    ProductDetails as DashboardProductDetails,
    Home as DashboardHome,
    OrderDetails as DashboardOrderDetails,
    PayoutDetails,
    WithdrawalEarnings,
    AccountSettings,
    PaymentSettings,
    SettingsTab,
} from '@productize/dashboard';

// using suspense and lazy loading
const Home = React.lazy(() =>
    import('../pages/home/Home').then((module) => ({
        default: module.Home,
    }))
);
const Features = React.lazy(() =>
    import('../pages/features/Features').then((module) => ({
        default: module.Features,
    }))
);
const Pricing = React.lazy(() =>
    import('../pages/pricing/Pricing').then((module) => ({
        default: module.Pricing,
    }))
);
const Explore = React.lazy(() =>
    import('../pages/explore/views').then((module) => ({
        default: module.Explore,
    }))
);
const ProductDetails = React.lazy(() =>
    import('../pages/explore/views/productDetails/ProductDetails').then((module) => ({
        default: module.ProductDetails,
    }))
);
const ProductCart = React.lazy(() =>
    import('../pages/explore/views/productDetails/ProductCart').then((module) => ({
        default: module.ProductCart,
    }))
);

function App() {
    const [getProductTags] = useGetProductTagsMutation();

    const getTags = useCallback(async () => {
        await getProductTags(null).unwrap();
    }, [getProductTags]);

    useEffect(() => {
        getTags();
    }, [getTags]);

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
                {/* external pages */}
                <Route index element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path={`/explore`} element={<Explore />} />
                <Route path="/products/:productID" element={<ProductDetails />} />
                <Route path="/explore/product/cart" element={<ProductCart />} />
                {/* dashboard */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route path="home" index element={<DashboardHome />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/:productID" element={<DashboardProductDetails />} />
                    <Route path="products/new" element={<NewProduct />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="orders/:orderID" element={<DashboardOrderDetails />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="customers/:customerID" element={<CustomersDetails />} />
                    <Route path="payouts" element={<Payouts />} />
                    {/* <Route path="payouts/:payoutid" element={<PayoutDetails />} /> */}
                    <Route path="payouts/:payoutid/withdraw-earnings" element={<WithdrawalEarnings />} />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="profile/:userID" element={<Profile />} />
                    <Route path="help" element={<Help />} />
                    <Route path="downloads" element={<Download />} />
                    <Route path="downloads/:downloadedContentID" element={<DownloadedContent />} />
                    <Route path="settings" element={<Settings />}>
                        <Route path="account" element={<AccountSettings />} />
                        <Route path="payment" element={<PaymentSettings />} />
                        <Route path="plans" element={<PlanSettings />} />
                        <Route path="plans/billing-cycle" element={<BillingCycle />} />
                    </Route>
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Suspense>
    );
}

export default App;
