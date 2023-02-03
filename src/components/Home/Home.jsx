import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { ImageConfig } from "../../images/index";
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

export const Home = () => {
    // const [toggleCategory, setToggleCategory] = useState(1);

    // useEffect(() => {
    //     document.getElementById("mainWrapper").style.opacity = toggleCategory;
    // }, [toggleCategory, isOpen]);

    return (
        <Box>
            {/* <Navbar /> */}
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
    );
};
