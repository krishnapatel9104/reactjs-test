import React from "react";
import { Button, Typography, Box, Link } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Keyboard, Scrollbar, Pagination, Navigation } from "swiper";
import { shopByCategoryList } from "../../data/shopByCategoryList";

export const ShopByCategory = () => {
    const shopByCategory = [
        "TShirt",
        "Shirt",
        "Shoes",
        "Watch",
        "Sunglasses",
        "Bagpacks",
    ];
    return (
        <Box>
            <Typography
                // className="newArrivalsTitle"
                sx={{
                    marginBottom: "50px",
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
                    marginTop: "20px",
                    textAlign: "center",
                }}
            >
                Shop By Category
            </Typography>
            <Box
                // className="categoryOption"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "30px",
                    marginBottom: "40px",
                }}
            >
                <Link
                    href="#"
                    sx={{
                        textDecoration: "none",
                        fontFamily: "Jost",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "25px",
                        lineHeight: "36px",
                        color: "#757575",
                    }}
                >
                    For Women
                </Link>
                <Link
                    href="#"
                    // className="activeCategoryOption"
                    sx={{
                        color: "#212121", //foractive
                        borderBottom: "1px solid #757575", //foractive
                        textDecoration: "none",
                        fontFamily: "Jost",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "25px",
                        lineHeight: "36px",
                    }}
                >
                    For Men
                </Link>
            </Box>
            <Box
                // className="categoryList"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                    marginBottom: "40px",
                    justifyContent: { xs: "space-between", sm: "center" },
                    paddingBottom: { xs: "7px", sm: "0" },
                    overflow: { xs: "scroll", sm: "hidden" },
                }}
            >
                {shopByCategory.map((category, index) => {
                    return (
                        <Link
                            href="#"
                            sx={{
                                fontFamily: "Jost",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "29px",
                                textDecoration: "none",
                                color: "#000000",
                                padding:
                                    index === 2
                                        ? { xs: "7px 10px", sm: "14px 24px" }
                                        : 0,
                                background: index === 2 ? "#E0E0E0" : "white",
                            }}
                        >
                            {category}
                        </Link>
                    );
                })}
            </Box>

            <Box
                sx={{
                    // margin: "0 290px",
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
                    {shopByCategoryList.map((product) => {
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
                                                // width: "389px",
                                                // height: "389px",
                                                width: {
                                                    xs: "150px",
                                                    lg: "170px",
                                                    xl: "300px",
                                                },
                                                height: {
                                                    xs: "150px",
                                                    lg: "170px",
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
                                                width="200px"
                                                style={{
                                                    objectFit: "scale-down",
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontFamily: "Jost",
                                                    fontStyle: "normal",
                                                    fontWeight: "700",
                                                    // fontSize: "25px",
                                                    fontSize: {
                                                        lg: "22px",
                                                        md: "20px",
                                                        xs: "18px",
                                                    },
                                                    color: "#212121",
                                                    // textAlign: "center",
                                                }}
                                            >
                                                {product.productName}
                                            </Typography>
                                            <Typography
                                            // sx={{ textAlign: "center" }}
                                            >
                                                <span
                                                    style={{
                                                        fontFamily: "Jost",
                                                        fontStyle: "normal",
                                                        fontWeight: "400",
                                                        fontSize: "20px",
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
            {/* <Box
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
            </Box> */}
            {/* using flex */}
            {/* <Box
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
                    {shopByCategoryList.map((product) => {
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
                                                width="250px"
                                                style={{
                                                    objectFit: "scale-down",
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
            </Box> */}

            {/* using grid */}
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
                                sx={{
                                    width: "389px",
                                    height: "389px",
                                }}
                            >
                                <img
                                    src={ImageConfig.shoes1}
                                    alt="shandle"
                                    // className="img12"
                                    height="100%"
                                    width="250px"
                                    style={{
                                        objectFit: "scale-down",
                                    }}
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
                                sx={{
                                    width: "389px",
                                    height: "389px",
                                }}
                            >
                                <img
                                    src={ImageConfig.shoes2}
                                    alt="shandle"
                                    // className="img12"
                                    height="100%"
                                    width="250px"
                                    style={{
                                        objectFit: "scale-down",
                                    }}
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
                                sx={{
                                    width: "389px",
                                    height: "389px",
                                }}
                            >
                                <img
                                    src={ImageConfig.shoes3}
                                    alt="shandle"
                                    // className="img12"
                                    height="100%"
                                    width="250px"
                                    style={{
                                        objectFit: "scale-down",
                                    }}
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
                                sx={{
                                    width: "389px",
                                    height: "389px",
                                }}
                            >
                                <img
                                    src={ImageConfig.shoes4}
                                    alt="shandle"
                                    // className="img12"
                                    height="100%"
                                    width="250px"
                                    style={{
                                        objectFit: "scale-down",
                                    }}
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
                                // className="img12"
                                height="100%"
                                width="250px"
                                style={{
                                    objectFit: "scale-down",
                                }}
                            />
                        </Grid>
                    </Grid> */}
            <Box
                // className={"view-all-btn"}
                sx={{ textAlign: "center" }}
            >
                <Button
                    variant="contained"
                    sx={{
                        marginTop: "50px",
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
