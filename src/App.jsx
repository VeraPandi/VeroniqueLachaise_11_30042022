import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/404";
import "./styles/styles.css";

const App = () => {
   // The last 2 routes about the 404 page should not be changed.
   // These routes are used to manage the display of the 404 page on GitHub Page.
   return (
      <Router basename={process.env.PUBLIC_URL}>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="/404" element={<Error />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
         </Routes>
         <Footer />
      </Router>
   );
};

export default App;
