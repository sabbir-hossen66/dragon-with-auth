import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";


const Root = () => {
  return (
    <div className="max-w-screen-2xl mx-auto font-display">
      <Header></Header>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;