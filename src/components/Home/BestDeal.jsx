import React from "react";

import { Button, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Keyboard, Scrollbar, Pagination, Navigation } from "swiper";
import { bestDealProductDetails } from "../../data/bestDeal";

import theme from "../../theme";

export const BestDeal = () => {
    return (
        <Box
            sx={{
                marginTop: {
                    xs: "450px",
                    sm: "250px",
                    md: "300px",
                    lg: "400px",
                },
            }}
        >
            <Typography
                // variant="titleHeading"
                sx={{
                    fontFamily: theme.typography.titleHeading.fontFamily,
                    fontWeight: "700",
                    fontSize: {
                        xl: "42px",
                        md: "39px",
                        sm: "28px",
                        xs: "22px",
                    },
                    color: "#212121",
                    textAlign: "center",
                    marginBottom: { xs: "50px", sm: "100px" },
                }}
            >
                Best Deals
            </Typography>

            <Box
                sx={{
                    margin: {
                        xl: "0 240px",
                        lg: "0 230px",
                        md: "0 200px",
                        sm: "0 40px",
                        xs: "0 30px",
                    },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "50px",
                    "& .swiper-button-next, .swiper-button-prev": {
                        color: "#D1D1D6",
                    },
                }}
            >
                <Swiper
                    slidesPerView={4}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        1280: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                        },
                        960: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                        },
                        600: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                        0: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                    }}
                    navigation={true}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className="mySwiper"
                >
                    {bestDealProductDetails.map((product) => {
                        return (
                            <Box key={product.id}>
                                <SwiperSlide
                                    key={product.id}
                                    style={{
                                        fontSize: "18px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            marginLeft: "10px",
                                            gap: "50px",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: {
                                                    xs: "150px",
                                                    lg: "200px",
                                                    xl: "300px",
                                                },
                                                height: {
                                                    xs: "150px",
                                                    lg: "200px",
                                                    xl: "300px",
                                                },
                                                gap: "30px",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <img
                                                src={product.imageSource}
                                                alt="shandle"
                                                height="100%"
                                                width="100%"
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontFamily:
                                                        theme.typography
                                                            .titleHeading
                                                            .fontFamily,
                                                    fontWeight: "700",
                                                    fontSize: {
                                                        lg: "22px",
                                                        md: "20px",
                                                        xs: "18px",
                                                    },
                                                    color: "#212121",
                                                }}
                                            >
                                                {product.productName}
                                            </Typography>
                                            <Typography>
                                                <span
                                                    style={{
                                                        fontFamily:
                                                            theme.typography
                                                                .titleHeading
                                                                .fontFamily,
                                                        fontWeight: "400",
                                                        fontSize: "20px",
                                                        textDecorationLine:
                                                            "line-through",
                                                        color: theme.palette
                                                            .originalPrice
                                                            .color,
                                                    }}
                                                >
                                                    $
                                                    {
                                                        product.productOriginalPrice
                                                    }
                                                </span>
                                                &nbsp;&nbsp;
                                                <span
                                                    className="currentprice"
                                                    style={{
                                                        fontFamily:
                                                            theme.typography
                                                                .titleHeading
                                                                .fontFamily,
                                                        fontWeight: "400",
                                                        fontSize: "20px",
                                                        color: theme.palette
                                                            .currentPrice.color,
                                                    }}
                                                >
                                                    $
                                                    {
                                                        product.productCurrentPrice
                                                    }
                                                </span>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            </Box>
                        );
                    })}
                </Swiper>
            </Box>
            <Box sx={{ textAlign: "center" }}>
                <Button
                    variant="contained"
                    sx={{
                        marginTop: "100px",
                        marginBottom: "70px",
                        padding: "10px 40px",
                        background: "#212121",
                        fontFamily: theme.typography.titleHeading.fontFamily,
                        fontWeight: "700",
                        fontSize: "20px",
                        color: "#FFFFFF",
                    }}
                >
                    View All
                </Button>
            </Box>
        </Box>
    );
};
