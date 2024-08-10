import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageNotFound, PreLoader, SpinnerComponent } from '@productize/ui';
import { ForgotPassword, Login, Signup } from '@productize/auth';
import {
    Analytics,
    BillingCycle,
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
    WithdrawalEarnings,
    AccountSettings,
    PaymentSettings,
    KycSettings,
} from '@productize/dashboard';
import {
    Admin,
    AdminAccountSettings,
    AdminComplaintDetails,
    AdminComplaints,
    AdminHome,
    AdminOrders,
    AdminPayouts,
    AdminProductDetails,
    AdminProducts,
    AdminProfile,
    AdminRevenue,
    AdminSettings,
    AdminUser,
    AdminWithdrawalEarnings,
    AddNewAdmin,
} from '@productize/admin-dashboard';
// import {AddNewAdmin} from '@productize/admin-dashboard'
import { CoverPage } from '../pages/coverPage/CoverPage';
// // import About from '../pages/about/About';
import { useTokenExists } from '@productize/hooks';
import { useGetFromCartMutation, useGetProductTagsMutation } from '@productize/redux';
// import {Admin} from '@productize/admin-dashboard'

// using suspense and lazy loading
const Home = React.lazy(() =>
    import('../pages/home/Home').then((module) => ({
        default: module.Home,
    }))
);
const ContactUs = React.lazy(() =>
    import('../pages/contactUs/ContactUs').then((module) => ({
        default: module.ContactUs,
    }))
);
const About = React.lazy(()=>
    import('../pages/about/About').then((module) => ({
        default: module.About,
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
// const CategoryPageDetails = React.lazy(() =>
//     import('../pages/explore/views/productDetails/CategoryPageDetails').then((module) => ({
//         default: module.CategoryPageDetails,
//     }))
// );
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
    const isAuth = useTokenExists();
    const [getProductTags] = useGetProductTagsMutation();
    const [getFromCart] = useGetFromCartMutation();

    useEffect(() => {
        getProductTags(null).unwrap();
        if (isAuth) {
            getFromCart(null).unwrap();
        }
    }, [getFromCart, getProductTags, isAuth]);

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
                <Route index element={<CoverPage />} />
                <Route path="/seller" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path={`/explore`} element={<Explore />} />
                <Route path={"/about"} element={<About />} />
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
                        <Route path="kyc" element={<KycSettings />} />
                        <Route path="plans" element={<PlanSettings />} />
                        <Route path="plans/billing-cycle" element={<BillingCycle />} />
                    </Route>
                </Route>
                {/* admin  dashboard */}
                <Route path="/admin" element={<Admin />}>
                    <Route path="home" index element={<AdminHome />} />
                    <Route path="products" element={<AdminProducts />} />
                    <Route path="products/:productID" element={<AdminProductDetails />} />
                    <Route path="orders" element={<AdminOrders />} />
                    <Route path="users" element={<AdminUser />} />
                    <Route path="profile/:userID" element={<AdminProfile />} />
                    <Route path="payouts" element={<AdminPayouts />} />
                    <Route path="revenue" element={<AdminRevenue />} />
                    <Route path="complaints" element={<AdminComplaints />} />
                    <Route path="complaints/:complaintID" element={<AdminComplaintDetails />} />
                    <Route path="payouts/:payoutid/withdraw-earnings" element={<AdminWithdrawalEarnings />} />
                    <Route path="settings" element={<AdminSettings />}>
                        <Route path="account" element={<AdminAccountSettings />} />
                        <Route path="addnewadmin" element={<AddNewAdmin/>} />
                    </Route>
                </Route>
                {/* not found */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Suspense>
    );
}

export default App;
