import React from "react";
import Navbar from "../Navbar/Navbar";
import { BestDeal } from "./BestDeal";
import { BeExclusive } from "./BeExclusive";
import { CheckoutNewArrivals } from "./CheckoutNewArrivals";
import { ShopByCategory } from "./ShopByCategory";
import { CountryLightSection } from "./CountryLightSection";
import { BestSeller } from "./BestSeller";
import { SummerSection } from "./SummerSection";
import { GentleFormalLookSection } from "./GentleFormalLookSection";
import { CardFooterSection } from "./CardFooterSection";
import { FooterSliderSection } from "./FooterSliderSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Box } from "@mui/material";
import theme from "../../theme";
import { ProtectedRoute } from "../../utils/ProtectedRoute";
import { useSelector } from "react-redux";

export const Home = () => {
  const details = useSelector(
    (state) => state.rootReducer.userSelectedProductListSlice.userSelectedProductLists
  );
  const payment = useSelector((state) => state.rootReducer.paymentDetailsSlice.paymentDetails);
  const user = useSelector((state) => state.rootReducer.userAllDetailsSlice.userDetails);
  console.log("productlist & payment & user details : ", details, payment, user);
  // const [toggleCategory, setToggleCategory] = useState(1);

  // useEffect(() => {
  //     document.getElementById("mainWrapper").style.opacity = toggleCategory;
  // }, [toggleCategory, isOpen]);

  return (
    <ProtectedRoute>
      <Box sx={{ backgroundColor: theme.palette.backgroundColor.default }}>
        <Navbar />
        <Header />
        <BestDeal />
        <BeExclusive />
        <CheckoutNewArrivals />
        <ShopByCategory />
        <CountryLightSection />
        <BestSeller />
        <SummerSection />
        <GentleFormalLookSection />
        <CardFooterSection />
        <FooterSliderSection />
        <Footer />
      </Box>
    </ProtectedRoute>
  );
};
