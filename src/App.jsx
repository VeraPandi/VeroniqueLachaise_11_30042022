import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/404";
import "./styles/styles.css";

const App = () => {
   return (
      <BrowserRouter basename="/VeroniqueLachaise_11_30042022">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<Error />} /> {/* 404 Page */}
         </Routes>
         <Footer />
      </BrowserRouter>
   );
};

export default App;
