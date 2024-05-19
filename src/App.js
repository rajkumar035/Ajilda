import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import routes from './utils/routes.json';
import Loader from './components/Loader';
import ErrorBoundary from './components/ErrorBoundary';
import { ErrorBoundary as ErrorBoundarySuspense } from 'react-error-boundary';
import { getTabText } from './utils/helperFunctions';
import ReactThemeProvider from './context/ThemeProvider';
import { Box } from '@mui/material';
import Header from './components/Header';
import GoogleAuthProvider from './context/GoogleAuthProvider';
import PlaceOrder from './pages/Cart/placeOrder';
import PaymentOption from './pages/Cart/PaymentOption';
import PaymentSuccessful from './pages/Cart/PaymentSuccessful';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Faq = React.lazy(() => import('./pages/Faq'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const MyProfile = React.lazy(() => import('./pages/MyProfile'));
const MyOrders = React.lazy(() => import('./pages/MyOrders'));
const OrderDetails = React.lazy(() => import('./pages/OrderDetails'));
const Response = React.lazy(() => import('./pages/Response'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const getTitle = document.querySelector('title');
    getTitle.innerText = decodeURIComponent(getTabText(pathname));
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ErrorBoundarySuspense
      onReset={() => {
        return window.location.reload;
      }}
      FallbackComponent={<ErrorBoundary />}>
      <ReactThemeProvider>
        <GoogleAuthProvider>
          <Box component={'article'}>
            <Header />
            <React.Suspense fallback={<Loader />}>
              <Routes>
                <Route caseSensitive path={routes.home} index element={<Home />} />
                <Route caseSensitive path={routes.about} element={<About />} />
                <Route caseSensitive path={routes.faq} element={<Faq />} />
                <Route caseSensitive path={routes.product} element={<Products />} />
                <Route caseSensitive path={`/${routes.productDetails}/:product_id`} element={<ProductDetails />} />
                <Route caseSensitive path={routes.cart} element={<Cart />} />
                <Route caseSensitive path={`${routes.cart}/place-order`} element={<PlaceOrder />} />
                <Route caseSensitive path={`${routes.cart}/payment-option`} element={<PaymentOption />} />
                <Route caseSensitive path={`${routes.cart}/payment-successfully`} element={<PaymentSuccessful />} />
                <Route caseSensitive path={routes.checkout} element={<Checkout />} />
                <Route caseSensitive path={routes.profile} element={<MyProfile />} />
                <Route caseSensitive path={routes.orders} element={<MyOrders />} />
                <Route caseSensitive path={`/${routes.orderDetails}/:order_id`} element={<OrderDetails />} />
                <Route caseSensitive path={routes.response} element={<Response />} />
                <Route caseSensitive path={routes.notFound} element={<NotFound />} />
                <Route />
              </Routes>
            </React.Suspense>
          </Box>
        </GoogleAuthProvider>
      </ReactThemeProvider>
    </ErrorBoundarySuspense>
  );
}

export default App;
