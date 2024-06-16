import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./utils/routes.json";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";
import { ErrorBoundary as ErrorBoundarySuspense } from "react-error-boundary";
import { ProtectedRoute, getTabText } from "./utils/helperFunctions";
import ReactThemeProvider from "./context/ThemeProvider";
import { Box } from "@mui/material";
import Header from "./components/Header";
import PlaceOrder from "./pages/Cart/placeOrder";
import PaymentOption from "./pages/Cart/PaymentOption";
import PaymentSuccessful from "./pages/Cart/PaymentSuccessful";
import AuthProvider from "./context/AuthProvider";
import SnackbarProvider from "./context/SnackbarProvider";

const Home = React.lazy(() => import("./pages/Home"));
const Admin = React.lazy(() => import("./pages/Admin"));
const About = React.lazy(() => import("./pages/About"));
const Faq = React.lazy(() => import("./pages/Faq"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const MyProfile = React.lazy(() => import("./pages/MyProfile"));
const MyOrders = React.lazy(() => import("./pages/MyOrders"));
const OrderDetails = React.lazy(() => import("./pages/OrderDetails"));
const Response = React.lazy(() => import("./pages/Response"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const getTitle = document.querySelector("title");
    getTitle.innerText = decodeURIComponent(getTabText(pathname));
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SnackbarProvider>
      <AuthProvider>
        <ErrorBoundarySuspense
          onReset={() => {
            return window.location.reload;
          }}
          FallbackComponent={<ErrorBoundary />}
        >
          <ReactThemeProvider>
            <Box component={"article"}>
              <Header />
              <React.Suspense fallback={<Loader />}>
                <Routes>
                  <Route caseSensitive path={routes.home} index element={<Home />} />
                  <Route caseSensitive path={routes.about} element={<About />} />
                  <Route caseSensitive path={routes.faq} element={<Faq />} />
                  <Route caseSensitive path={routes.product} element={<Products />} />
                  <Route caseSensitive path={`/${routes.productDetails}/:product_id`} element={<ProductDetails />} />
                  <Route caseSensitive path={routes.notFound} element={<NotFound />} />
                  <Route
                    caseSensitive
                    path={routes.response}
                    element={
                      <ProtectedRoute>
                        <Response />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    caseSensitive
                    path={routes.Admin}
                    element={
                      <ProtectedRoute role={"ADMIN"}>
                        <Admin />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    caseSensitive
                    path={routes.cart}
                    element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    caseSensitive
                    path={`${routes.cart}/place-order`}
                    element={
                      <ProtectedRoute>
                        <PlaceOrder />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    caseSensitive
                    path={`${routes.cart}/payment-option`}
                    element={
                      <ProtectedRoute>
                        <PaymentOption />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    caseSensitive
                    path={`${routes.cart}/payment-successfully`}
                    element={
                      <ProtectedRoute>
                        <PaymentSuccessful />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    caseSensitive
                    path={routes.checkout}
                    element={
                      <ProtectedRoute>
                        <Checkout />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    caseSensitive
                    path={routes.profile}
                    element={
                      <ProtectedRoute>
                        <MyProfile />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    caseSensitive
                    path={routes.orders}
                    element={
                      <ProtectedRoute>
                        <MyOrders />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    caseSensitive
                    path={`/${routes.orderDetails}/:order_id`}
                    element={
                      <ProtectedRoute>
                        <OrderDetails />
                      </ProtectedRoute>
                    }
                  />
                  <Route />
                </Routes>
              </React.Suspense>
            </Box>
          </ReactThemeProvider>
        </ErrorBoundarySuspense>
      </AuthProvider>
    </SnackbarProvider>
  );
}

export default App;
