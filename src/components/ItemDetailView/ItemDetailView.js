import { Box, Button, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import { ImageConfig } from "../../images/index";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
    Navigation,
    Scrollbar,
    Pagination,
    Mousewheel,
    Keyboard,
} from "swiper";

export const ItemDetailView = () => {
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                            <SwiperSlide>
                                <img
                                    src={ImageConfig.blackdress1}
                                    alt="likeicon"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={ImageConfig.blackdress1}
                                    alt="likeicon"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={ImageConfig.blackdress1}
                                    alt="likeicon"
                                />
                            </SwiperSlide>
                        </Swiper>
                        <Box className="diffangleimage">
                            <Swiper
                                slidesPerView={5}
                                centeredSlides={false}
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
                                <SwiperSlide>
                                    <img
                                        src={ImageConfig.blackdress1}
                                        alt="likeicon"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={ImageConfig.blackdress2}
                                        alt="likeicon"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={ImageConfig.blackdress3}
                                        alt="likeicon"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={ImageConfig.blackdress4}
                                        alt="likeicon"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={ImageConfig.blackdress5}
                                        alt="likeicon"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={ImageConfig.blackdress5}
                                        alt="likeicon"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={ImageConfig.blackdress4}
                                        alt="likeicon"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={ImageConfig.blackdress2}
                                        alt="likeicon"
                                    />
                                </SwiperSlide>
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
                            Black Valentinodress with tulle
                        </Typography>
                        <Box className="reviewsection">
                            <Box className="reviewicons">
                                {[1, 2, 3, 4].map((review, index) => {
                                    return (
                                        <img
                                            src={ImageConfig.star}
                                            alt="likeicon"
                                            key={index}
                                        />
                                    );
                                })}
                                <img
                                    src={ImageConfig.graystar}
                                    alt="likeicon"
                                />
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
                                    <Box className="sizebox">XS</Box>
                                    <Box className="sizebox activeoptionlistvalue">
                                        S
                                    </Box>
                                    <Box className="sizebox">M</Box>
                                </Box>
                            </Box>
                            <Box className="colorsection">
                                <Typography>Color</Typography>
                                <Box className="coloroption">
                                    <Box className="coloroption1"></Box>
                                    <Box className="coloroption2"></Box>
                                    <Box className="coloroption3"></Box>
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
                            $ 131.95
                        </Typography>
                        <Box className="btns">
                            <Button variant="contained" className="shopnowbtn">
                                Shop Now
                            </Button>
                            <Button
                                variant="contained"
                                className="addtocartbtn"
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
