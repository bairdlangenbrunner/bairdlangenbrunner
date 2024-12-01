import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SiteRoutes from "./components/SiteRoutes/SiteRoutes";

export default function App() {
  return (
    <div className="page-outline-div">
      <Header />
      <div className="between-header-footer-div">
        {/* place SiteRoutes here, where the content of the page will change, i.e., between the header and footer, and within the div for the page content */}
        <SiteRoutes />
      </div>
      <Footer />
    </div>
  );
}
