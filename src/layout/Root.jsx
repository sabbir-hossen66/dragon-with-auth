import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import MarqueeNav from "../Pages/Home/MarqueeNav";


const Root = () => {
  return (
    <div className=" font-display">
      <Header></Header>
      <MarqueeNav></MarqueeNav>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;