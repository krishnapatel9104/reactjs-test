import { Box, Button, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import { ImageConfig } from "../../images/index";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Navigation,
    Scrollbar,
    Pagination,
    Mousewheel,
    Keyboard,
} from "swiper";
import { setUserSelectedProductList } from "./../redux/userSelectedProductListSlice";
import { useDispatch, useSelector } from "react-redux";
export const ItemDetailView = () => {
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const navigate = useNavigate();
    const { state } = useLocation();
    const dispatch = useDispatch();
    const changeSizeHandler = (size) => {
        console.log("size : ", size);
        setProductDetail({ ...productDetail, size: size });
    };
    const [productDetail, setProductDetail] = useState(state.productDetail);

    const reduxProductDetail = useSelector(
        (state) => state.userSelectedProductLists.userSelectedProductLists
    );
    console.log("reduxProductDetail : ", reduxProductDetail);
    const handleShopNow = () => {
        dispatch(setUserSelectedProductList(productDetail));
        navigate("/shipping");
    };
    const handleAddToCart = () => {
        dispatch(setUserSelectedProductList(productDetail));
        // navigate("/shipping");
    };
    return (
        <>
            <Box className="itemdetailviewwrapper">
                <Navbar />
                <Box className="itemdetailviewsection">
                    <Box className="imageSection">
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={false}
                            mousewheel={true}
                            keyboard={true}
                            modules={[
                                Navigation,
                                Pagination,
                                Mousewheel,
                                Keyboard,
                            ]}
                            className="mySwiper"
                        >
                            {[1, 2, 3, 4, 5].map((item) => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <img
                                                src={productDetail.imageSource}
                                                alt="likeicon"
                                            />
                                        </SwiperSlide>
                                    </>
                                );
                            })}
                        </Swiper>
                        <Box className="diffangleimage">
                            <Swiper
                                slidesPerView={5}
                                slidesPerGroupSkip={1}
                                grabCursor={true}
                                keyboard={{
                                    enabled: true,
                                }}
                                scrollbar={false}
                                navigation={true}
                                pagination={false}
                                modules={[
                                    Keyboard,
                                    Scrollbar,
                                    Navigation,
                                    Pagination,
                                ]}
                                className="mySwiper"
                            >
                                {productDetail.imageDifferentAngle.map(
                                    (item) => {
                                        return (
                                            <>
                                                <SwiperSlide>
                                                    <img
                                                        src={item}
                                                        alt="likeicon"
                                                    />
                                                </SwiperSlide>
                                            </>
                                        );
                                    }
                                )}
                            </Swiper>
                        </Box>
                    </Box>
                    <Box className="imagedescsection">
                        <Box
                            className="imagecontent"
                            sx={{
                                width: "fit-content",
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    fontFamily: "Inter",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    lineHeight: "17px",
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "center",
                                    color: "#1B2437",
                                    backgroundColor: "#E5E5EA",
                                }}
                            >
                                Popular
                            </Button>
                        </Box>
                        <Typography className="producttitle">
                            {productDetail.productName}
                        </Typography>
                        <Box className="reviewsection">
                            <Box className="reviewicons">
                                {Array.from(
                                    Array(productDetail.reviewRate),
                                    (e, index) => {
                                        return (
                                            <img
                                                src={ImageConfig.star}
                                                alt="likeicon"
                                                key={index}
                                            />
                                        );
                                    }
                                )}
                                {Array.from(
                                    Array(
                                        5 - parseInt(productDetail.reviewRate)
                                    ),
                                    (e, index) => {
                                        return (
                                            <img
                                                src={ImageConfig.graystar}
                                                alt="likeicon"
                                                key={index}
                                            />
                                        );
                                    }
                                )}
                            </Box>
                            <Box className="noofreview">132 reviews</Box>
                        </Box>
                        <Box sx={{ width: "100%", typography: "body1" }}>
                            <TabContext value={value}>
                                <Box
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: "divider",
                                    }}
                                >
                                    <TabList
                                        onChange={handleChange}
                                        aria-label="lab API tabs example"
                                    >
                                        <Tab label="Info" value="1" />
                                        <Tab label="Brand" value="2" />
                                        <Tab label="Delivery" value="3" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <Typography className="desc">
                                        Dress with tulle and collar Peter Pan
                                        from REDValentino (Red Valentino). Peter
                                        Pan collar, tulle panels, sleeveless
                                        model, concealed back zipper and pleated
                                        skirt. Black colour.
                                    </Typography>
                                </TabPanel>
                                <TabPanel value="2">Item Two</TabPanel>
                                <TabPanel value="3">Item Three</TabPanel>
                            </TabContext>
                        </Box>
                        <Box className="mainoptionlist">
                            <Box className="optionlist">
                                <Box className="optionheading">
                                    <Typography>Size</Typography>
                                    <Typography
                                        sx={{
                                            color: "#111827",
                                            fontWeight: 700,
                                        }}
                                    >
                                        Size Guide
                                    </Typography>
                                </Box>
                                <Box className="optionlistvalue">
                                    <Button
                                        className={`${
                                            productDetail.size === "XS"
                                                ? "activeoptionlistvalue sizebox"
                                                : "sizebox"
                                        }`}
                                        onClick={(e) => changeSizeHandler("XS")}
                                    >
                                        XS
                                    </Button>
                                    <Button
                                        className={`${
                                            productDetail.size === "S"
                                                ? "activeoptionlistvalue sizebox"
                                                : "sizebox"
                                        }`}
                                        onClick={(e) => changeSizeHandler("S")}
                                    >
                                        S
                                    </Button>
                                    <Button
                                        className={`${
                                            productDetail.size === "M"
                                                ? "activeoptionlistvalue sizebox"
                                                : "sizebox"
                                        }`}
                                        onClick={(e) => changeSizeHandler("M")}
                                    >
                                        M
                                    </Button>
                                </Box>
                            </Box>
                            <Box className="colorsection">
                                <Typography>Color</Typography>
                                <Box className="coloroption">
                                    <Box className="coloroption1">
                                        <Button></Button>
                                    </Box>
                                    <Box className="coloroption2">
                                        <Button></Button>
                                    </Box>
                                    <Box className="coloroption3">
                                        <Button></Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontSize: "34px",
                                lineHeight: "41px",
                                color: "#1B2437",
                                marginTop: "20px",
                            }}
                        >
                            $ {productDetail.productPrice}
                        </Typography>
                        <Box className="btns">
                            <Button
                                variant="contained"
                                className="shopnowbtn"
                                onClick={handleShopNow}
                            >
                                Shop Now
                            </Button>
                            <Button
                                variant="contained"
                                className="addtocartbtn"
                                onClick={handleAddToCart}
                            >
                                Add to cart
                            </Button>
                        </Box>
                    </Box>
                    <Box className="imagelikeicon">
                        <img src={ImageConfig.like} alt="likeicon" />
                    </Box>
                </Box>
            </Box>
        </>
    );
};
