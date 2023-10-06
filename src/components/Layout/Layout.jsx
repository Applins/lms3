import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout({ title, logo }) {
    return (
      <div>
        <Header title={title} logo={logo} />
        {/* Outlet is a placeholder for the 'current' route being rendered
        e.g., HomePage or TeamsPage */}
        <Outlet />
        <Footer />
      </div>
    );
  }
  export default Layout;
  