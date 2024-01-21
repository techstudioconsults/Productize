import "../styles.scss";

import { Route, Routes } from "react-router-dom";
import { PreLoader, SpinnerComponent } from "@productize-v1.0.0/modules/shared/ui";
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
    SettingsTab,
    AccountSettings,
    PaymentSettings,
    ChangePlans,
    BillingCycle,
} from "@productize-v1.0.0/dashboard";
import { ForgotPassword, Login, Signup } from "@productize-v1.0.0/auth";
import React from "react";

import { Suspense } from "react";
import { PlanSettings } from "@productize-v1.0.0/dashboard";

// using suspense and lazy loading
const Home = React.lazy(() => import("../pages/home/Home").then((module) => ({ default: module.Home })));
const Features = React.lazy(() => import("../pages/features/Features").then((module) => ({ default: module.Features })));
const Pricing = React.lazy(() => import("../pages/pricing/Pricing").then((module) => ({ default: module.Pricing })));
const Explore = React.lazy(() => import("../pages/explore/views").then((module) => ({ default: module.Explore })));
const ProductDetails = React.lazy(() => import("../pages/explore/views/productDetails/ProductDetails").then((module) => ({ default: module.ProductDetails })));
const ProductCart = React.lazy(() => import("../pages/explore/views/productDetails/ProductCart").then((module) => ({ default: module.ProductCart })));

export { Home, Features, Pricing, Explore, ProductDetails, ProductCart };

export function App() {
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
                <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />

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

                    <Route path="settings" element={<Settings />}>
                        <Route path="plans" element={<PlanSettings />} />
                        <Route path="plans/change-plans" element={<ChangePlans />} />
                        <Route path="plans/billing-cycle" element={<BillingCycle />} />
                    </Route>
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
