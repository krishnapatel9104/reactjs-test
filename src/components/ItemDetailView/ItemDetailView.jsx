import { Box, Button, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
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
import { setUserSelectedProductList } from "../../store/reducers/userSelectedProductListSlice";
import { useDispatch } from "react-redux";
export const ItemDetailView = () => {
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const navigate = useNavigate();
    const { state } = useLocation();
    const dispatch = useDispatch();
    const [productDetail, setProductDetail] = useState(state.productDetail);
    const changeSizeHandler = (size) => {
        setProductDetail({ ...productDetail, size: size });
    };
    console.log("productdetail : ", productDetail);

    const handleShopNow = () => {
        dispatch(setUserSelectedProductList(productDetail));
        navigate("/shipping");
    };
    const handleAddToCart = () => {
        dispatch(setUserSelectedProductList(productDetail));
    };
    return (
        <>
            <Box
                sx={{
                    marginTop: { xs: "0", md: "150px" },
                }}
            >
                <Navbar />
                <Box
                    sx={{
                        padding: {
                            lg: "0 145px",
                            md: "0 5px",
                            xs: "0 25px",
                        },
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "center",

                        display: "flex",
                        gap: "60px",
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "100%", md: "45%" },
                            textAlign: "center",
                            marginTop: "100px",
                            "& .swiper-button-next, .swiper-button-prev": {
                                color: "#D1D1D6",
                            },
                        }}
                    >
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
                        >
                            {[1, 2, 3, 4, 5].map((item, index) => {
                                return (
                                    <Box key={index}>
                                        <SwiperSlide>
                                            <img
                                                src={productDetail.imageSource}
                                                alt="likeicon"
                                            />
                                        </SwiperSlide>
                                    </Box>
                                );
                            })}
                        </Swiper>
                        <Box
                            sx={{
                                marginTop: "70px",
                                "& .swiper-button-next, .swiper-button-prev": {
                                    color: "#D1D1D6",
                                },
                            }}
                        >
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
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                {productDetail.imageDifferentAngle.map(
                                    (item, index) => {
                                        return (
                                            <Box key={index}>
                                                <SwiperSlide
                                                    sx={{
                                                        marginTop: "50px",
                                                        textAlign: "center",
                                                        fontSize: "18px",
                                                        background: "#fff",
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <img
                                                        src={item}
                                                        alt="likeicon"
                                                        style={{
                                                            display: "block",
                                                        }}
                                                        height="130px"
                                                        width="100px"
                                                    />
                                                </SwiperSlide>
                                            </Box>
                                        );
                                    }
                                )}
                            </Swiper>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: { xs: "100%", md: "40%" },
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <Button
                                    variant="contained"
                                    sx={{
                                        fontFamily: "Inter",
                                        fontWeight: 700,
                                        fontSize: "14px",
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
                            <Box>
                                <img
                                    src={"/images/Like.png"}
                                    alt="likeicon"
                                    style={{
                                        width: "26px",
                                        height: "25px",
                                        padding: "6px",
                                        paddingTop: "10px",
                                        border: "1px solid #E5E5EA",
                                        borderRadius: "26px",
                                        backgroundColor: "#E5E5EA",
                                    }}
                                />
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: {
                                    lg: "44px",
                                    sm: "35px",
                                    xs: "26px",
                                },
                                fontFamily: "Inter",
                                fontWeight: "400",
                                color: "#1B2437",
                            }}
                        >
                            {productDetail.productName}
                        </Typography>
                        <Box
                            sx={{
                                flexDirection: { xs: "column", lg: "row" },
                                alignItems: { xs: "flex-start", lg: "center" },
                                display: "flex",
                                gap: "20px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "10px",
                                }}
                            >
                                {Array.from(
                                    Array(productDetail.reviewRate),
                                    (e, index) => {
                                        return (
                                            <img
                                                src={"/images/star.png"}
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
                                                src={"/images/graystar.png"}
                                                alt="likeicon"
                                                key={index}
                                            />
                                        );
                                    }
                                )}
                            </Box>
                            <Box>132 reviews</Box>
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
                                    <Typography
                                        sx={{
                                            fontFamily: "Inter",
                                            fontWeight: "400",
                                            fontSize: "16px",
                                            color: "#8E8E93",
                                        }}
                                    >
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
                        <Box
                            sx={{
                                flexDirection: {
                                    xs: "column",
                                    md: "column",
                                    sm: "row",
                                    lg: "row",
                                },
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "50px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        gap: { xs: "110px" },
                                        display: "flex",
                                    }}
                                >
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
                                <Box
                                    sx={{
                                        gap: { xs: "20px" },
                                        marginTop: { xs: "25px", lg: "50px" },
                                        display: "flex",
                                    }}
                                >
                                    {["XS", "S", "M"].map((size) => {
                                        return (
                                            <Button
                                                sx={{
                                                    color:
                                                        productDetail.size ===
                                                        size
                                                            ? "white"
                                                            : "black",
                                                    width: "fit-content",
                                                    border: "1px solid #000000",
                                                    padding: "10px 20px",
                                                    backgroundColor:
                                                        productDetail.size ===
                                                        size
                                                            ? "#1B2437 !important"
                                                            : "white",
                                                }}
                                                onClick={(e) =>
                                                    changeSizeHandler(size)
                                                }
                                            >
                                                {size}
                                            </Button>
                                        );
                                    })}
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    gap: { lg: "45px", xs: "20px" },
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography>Color</Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "20px",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            padding: "20px 6px",
                                            backgroundColor: "#1B2437",
                                        }}
                                    >
                                        <Button></Button>
                                    </Box>
                                    <Box
                                        sx={{
                                            padding: "15px 0px",
                                            backgroundColor: "#127681",
                                        }}
                                    >
                                        <Button></Button>
                                    </Box>
                                    <Box
                                        sx={{
                                            padding: "15px 0px",
                                            backgroundColor: "#32E0C4",
                                        }}
                                    >
                                        <Button></Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontSize: "34px",
                                color: "#1B2437",
                                marginTop: "20px",
                            }}
                        >
                            $ {productDetail.productPrice}
                        </Typography>
                        <Box
                            sx={{
                                flexDirection: { xs: "column", sm: "row" },
                                gap: { xs: "25px", sm: "50px" },
                                display: "flex",
                                marginTop: "25px",
                            }}
                        >
                            <Button
                                variant="contained"
                                onClick={handleShopNow}
                                sx={{
                                    background: "#1B2437",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    padding: "15px 20px",
                                    textTransform: "inherit",
                                }}
                            >
                                Shop Now
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    background: "#F5F5F5",
                                    color: "black",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    padding: "15px 20px",
                                    textTransform: "inherit",
                                }}
                                onClick={handleAddToCart}
                            >
                                Add to cart
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
