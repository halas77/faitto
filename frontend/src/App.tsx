import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ContactPage from "./pages/ContactPage";
import PrivateRoute from "./components/PrivateRoute";
import ConnectWallet from "./components/ConnectWallet";
import { MainProvider } from "./context/MainContext";
import CategoryDetailPage from "./pages/CategoryDetailPage";

function AppContent() {
  const location = useLocation();

  return (
    <div className="bg-gray-50">
      <ScrollToTop />
      {location.pathname !== "/connect-wallet" && <Header />}
      <Routes>
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/category/:id" element={<ProductDetail />} />
          <Route path="/product/category" element={<CategoryDetailPage />} />
        </Route>
      </Routes>

      {location.pathname !== "/connect-wallet" && <Footer />}
    </div>
  );
}

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
