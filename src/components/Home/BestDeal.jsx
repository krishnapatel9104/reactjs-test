import React from "react";

import { Button, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { bestDealProductDetails } from "../../data/bestDeal";

export const BestDeal = () => {
    return (
        <Box
            // className={"bestdealWrapper"}
            sx={{
                marginTop: { xs: "200px", md: "370px" },
            }}
        >
            <Typography
                // className="bestdealheading"
                sx={{
                    fontFamily: "Jost",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: {
                        xl: "42px",
                        md: "39px",
                        sm: "28px",
                        xs: "22px",
                    },
                    lineHeight: "56px",
                    color: "#212121",
                    textAlign: "center",
                    marginBottom: "100px",
                }}
            >
                Best Deals
            </Typography>
            <Box
                sx={{
                    margin: "0 290px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "50px",
                }}
            >
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={false}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    sx={{
                        marginLeft: "20px",
                    }}
                >
                    {bestDealProductDetails.map((product) => {
                        return (
                            <>
                                <SwiperSlide
                                    style={{
                                        fontSize: "18px",
                                        background: "#fff",
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
                                                width: "300px",
                                                height: "300px",
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
                                                    fontFamily: "Jost",
                                                    fontStyle: "normal",
                                                    fontWeight: "700",
                                                    fontSize: "25px",
                                                    lineHeight: "36px",
                                                    color: "#212121",
                                                }}
                                            >
                                                {product.productName}
                                            </Typography>
                                            <Typography>
                                                <span
                                                    style={{
                                                        fontFamily: "Jost",
                                                        fontStyle: "normal",
                                                        fontWeight: "400",
                                                        fontSize: "20px",
                                                        lineHeight: "29px",
                                                        textDecorationLine:
                                                            "line-through",
                                                        color: "#9E9E9E",
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
                                                        fontFamily: "Jost",
                                                        fontStyle: "normal",
                                                        fontWeight: "400",
                                                        fontSize: "20px",
                                                        lineHeight: "29px",
                                                        color: "#FF705C",
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
                            </>
                        );
                    })}
                </Swiper>
            </Box>
            <Box
                // className={"view-all-btn"}
                sx={{ textAlign: "center" }}
            >
                <Button
                    variant="contained"
                    sx={{
                        marginTop: "100px",
                        marginBottom: "70px",
                        padding: "10px 40px",
                        background: "#212121",
                        fontFamily: "Jost",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "29px",
                        color: "#FFFFFF",
                    }}
                >
                    View All
                </Button>
            </Box>
        </Box>
    );
};
