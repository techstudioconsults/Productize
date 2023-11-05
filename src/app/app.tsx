import "../styles.scss";

import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import Features from "../pages/features";
import Pricing from "../pages/pricing";
import { ForgotPassword, Login, Signup } from "@productize-v1.0.0/modules/auth/ui";
import { PreLoader } from "@productize-v1.0.0/modules/shared/ui";
import ExploreIndex from "../pages/explore/pages/explore";
import ExploreDesign from "../pages/explore/pages/explore/categories/design";
import ProductBuy from "../pages/explore/pages/productDetails/ProductBuy";
import ProductDetails from "../pages/explore/pages/productDetails/ProductDetails";
import {
    DashboardLayout,
    Home as DashboardHome,
    Products,
    ProductDetails as DAshboardProductDetails,
    NewProduct,
    Profile,
    Orders,
    Customers,
    Payouts,
} from "@productize-v1.0.0/modules/dashboard/ui";

export function App() {
    return (
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
            <Route path={`/explore`} element={<ExploreIndex />} />
            <Route path="/explore/design" element={<ExploreDesign />} />
            <Route path="/explore/product/details" element={<ProductDetails />} />
            <Route path="/explore/product/buy" element={<ProductBuy />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />

            {/* dashboard */}
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="home" index element={<DashboardHome />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:productID" element={<DAshboardProductDetails />} />
                <Route path="products/new" element={<NewProduct />} />
                <Route path="orders" element={<Orders />} />
                <Route path="analytics" element={<Orders />} />
                <Route path="customers" element={<Customers />} />
                <Route path="payouts" element={<Payouts />} />
                <Route path="profile/:userID" element={<Profile />} />
            </Route>
        </Routes>
    );
}

export default App;
