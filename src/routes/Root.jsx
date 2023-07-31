import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Layout/Main/Main";

const Root = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
)

export default Root;
