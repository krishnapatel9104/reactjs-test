import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { bestSellerProductDetails } from "../../data/bestSeller";

export const BestSeller = () => {
    return (
        <Box>
            <Typography
                // className="bestdealheading"
                sx={{
                    fontFamily: "Jost",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "39px",
                    lineHeight: "56px",
                    color: "#212121",
                    textAlign: "center",
                    marginBottom: "100px",
                    marginTop: "100px",
                }}
            >
                Best Seller
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
                    {bestSellerProductDetails.map((product) => {
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
                                                height="250px"
                                                width="250px"
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
            {/* <Grid
                        container
                        spacing={2}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <Grid item sm={2}>
                            <img src={ImageConfig.vectorLeft} alt="shandle" />
                        </Grid>
                        <Grid
                            item
                            sm={2}
                            sx={{
                                display: "flex",
                                textAlign: "left",
                                flexDirection: "column",
                                height: "350px",
                                width: "350px",
                            }}
                            // className={"griditem"}
                        >
                            <Box
                            // className="imageBox"
                            >
                                <img
                                    src={ImageConfig.purse2}
                                    alt="shandle"
                                    // className="img12"
                                    height="250px"
                                    width="250px"
                                />
                            </Box>
                            <Typography
                                // className="itemname"
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    fontSize: "25px",
                                    lineHeight: "36px",
                                    color: "#212121",
                                }}
                            >
                                Flat Hill Slingback
                            </Typography>
                            <Typography
                            // className="itemprice"
                            >
                                <span
                                    // className="originalprice"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        textDecorationLine: "line-through",
                                        color: "#9E9E9E",
                                    }}
                                >
                                    $299
                                </span>
                                &nbsp;&nbsp;
                                <span
                                    // className="currentprice"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        textDecorationLine: "line-through",
                                        color: "#9E9E9E",
                                    }}
                                >
                                    $163
                                </span>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            sm={2}
                            sx={{
                                display: "flex",
                                textAlign: "left",
                                flexDirection: "column",
                                height: "350px",
                                width: "350px",
                            }}
                            // className={"griditem"}
                        >
                            <Box
                            // className="imageBox"
                            >
                                <img
                                    src={ImageConfig.earning}
                                    alt="shandle"
                                    // className="img12"
                                    height="250px"
                                    width="250px"
                                />
                            </Box>
                            <Typography
                                // className="itemname"
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    fontSize: "25px",
                                    lineHeight: "36px",
                                    color: "#212121",
                                }}
                            >
                                Ocean Blue Ring
                            </Typography>
                            <Typography
                            // className="itemprice"
                            >
                                <span
                                    // className="originalprice"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        textDecorationLine: "line-through",
                                        color: "#9E9E9E",
                                    }}
                                >
                                    $299
                                </span>
                                &nbsp;&nbsp;
                                <span
                                    // className="currentprice"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        textDecorationLine: "line-through",
                                        color: "#9E9E9E",
                                    }}
                                >
                                    $163
                                </span>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            sm={2}
                            sx={{
                                display: "flex",
                                textAlign: "left",
                                flexDirection: "column",
                                height: "350px",
                                width: "350px",
                            }}
                            // className={"griditem"}
                        >
                            <Box
                            // className="imageBox"
                            >
                                <img
                                    src={ImageConfig.watch1}
                                    alt="shandle"
                                    // className="img12"
                                    height="250px"
                                    width="250px"
                                />
                            </Box>
                            <Typography
                                // className="itemname"
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    fontSize: "25px",
                                    lineHeight: "36px",
                                    color: "#212121",
                                }}
                            >
                                Brown Leathered Wallet
                            </Typography>
                            <Typography
                            // className="itemprice"
                            >
                                <span
                                    // className="originalprice"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        textDecorationLine: "line-through",
                                        color: "#9E9E9E",
                                    }}
                                >
                                    $299
                                </span>
                                &nbsp;&nbsp;
                                <span
                                    // className="currentprice"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        textDecorationLine: "line-through",
                                        color: "#9E9E9E",
                                    }}
                                >
                                    $163
                                </span>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            sm={2}
                            sx={{
                                display: "flex",
                                textAlign: "left",
                                flexDirection: "column",
                                height: "350px",
                                width: "350px",
                            }}
                            // className={"griditem"}
                        >
                            <Box
                            // className="imageBox"
                            >
                                <img
                                    src={ImageConfig.tie}
                                    alt="shandle"
                                    style={{ objectFit: "contain" }}
                                    height="250px"
                                    width="250px"
                                />
                            </Box>
                            <Typography
                                // className="itemname"
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    fontSize: "25px",
                                    lineHeight: "36px",
                                    color: "#212121",
                                }}
                            >
                                Silverside Wristwatch
                            </Typography>
                            <Typography
                            // className="itemprice"
                            >
                                <span
                                    // className="originalprice"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        textDecorationLine: "line-through",
                                        color: "#9E9E9E",
                                    }}
                                >
                                    $299
                                </span>
                                &nbsp;&nbsp;
                                <span
                                    // className="currentprice"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        textDecorationLine: "line-through",
                                        color: "#9E9E9E",
                                    }}
                                >
                                    $163
                                </span>
                            </Typography>
                        </Grid>
                        <Grid item sm={2}>
                            <img
                                src={ImageConfig.vectorRight}
                                alt="shandle"
                                className="img12"
                            />
                        </Grid>
                    </Grid> */}
        </Box>
    );
};
