import { BrowserRouter, Route, Routes } from "react-router-dom";
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


function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <div className="bg-gray-50">
          <Header />
          <ScrollToTop />
          <div className="min-h-screen">
            <Routes>
              <Route path="/connect-wallet" element={<ConnectWallet />} />
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route
                  path="/product/:productName"
                  element={<ProductDetail />}
                />
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
