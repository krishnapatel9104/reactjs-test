import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { ImageConfig } from "../images/index";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Navbar from "./Navbar/Navbar";
import { bestDealProductDetails } from "./../data/bestDeal";
import { shopByCategoryList } from "./../data/shopByCategoryList";
import { bestSellerProductDetails } from "./../data/bestSeller";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export const Home = () => {
    const productList = [
        "Clothes",
        "Bags",
        "Accessories",
        "Shoes",
        "Beauty",
        "Denim",
        "Coats & Jackets",
    ];
    const designersList = [
        "Balenciaga",
        "Balmain",
        "Bottega Veneta",
        "Burbery",
        "Dolce & Gabbana",
        "Fendi",
        "Off-White",
    ];
    const archivedCollectionsList = [
        "All Products",
        "Accessories",
        "Bags",
        "Coats",
        "Dresses",
        "Shoes",
        "Suits",
    ];
    const shopByCategory = [
        "T-Shirt",
        "Shirt",
        "Shoes",
        "Watch",
        "Sunglasses",
        "Bagpacks",
    ];
    const [toggleCategory, setToggleCategory] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const openCategory = (event) => {
        event.preventDefault();
        setIsOpen((prev) => !prev.isOpen);
        if (toggleCategory === 1) setToggleCategory(0.5);
        else setToggleCategory(1);
    };

    useEffect(() => {
        document.getElementById("mainWrapper").style.opacity = toggleCategory;
    }, [toggleCategory, isOpen]);

    return (
        <>
            {toggleCategory === 0.5 && isOpen && (
                <>
                    <Navbar clickHandler={openCategory} />
                    <Box
                        // className="categoryWrapper"
                        sx={{
                            backgroundColor: "white",
                            position: "absolute",
                            top: "7%",
                            textAlign: "left",
                            zIndex: 1,
                            color: "black",
                            width: "100%",
                        }}
                    >
                        <Box
                            // className="categorysection"
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "30px 290px 180px 290px",
                                borderBottom: "1px solid white",
                                borderBottomLeftRadius: "40px",
                                borderBottomRightRadius: "40px",
                            }}
                        >
                            <Box
                                // className="categoryleftside"
                                sx={{
                                    display: "flex",
                                    gap: "150px",
                                }}
                            >
                                <Box
                                    // className="menucolumn"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "30px",
                                    }}
                                >
                                    <Typography
                                        // className="categoryheading"
                                        sx={{
                                            fontFamily: "Inter",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            fontSize: "24px",
                                            lineHeight: "29px",
                                            color: "#1B2437",
                                            marginBottom: "25px",
                                        }}
                                    >
                                        Products
                                    </Typography>
                                    {productList.map((product, index) => {
                                        return (
                                            <a
                                                style={{
                                                    color: "#8E8E93",
                                                    textDecoration: "none",
                                                }}
                                                // className="categoryitem"
                                                sx={{
                                                    fontFamily: "Inter",
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "16px",
                                                    lineHeight: "19px",
                                                    color: "#8E8E93",
                                                    textDecoration: "none",
                                                }}
                                                key={index}
                                                href={"/categorydetails"}
                                            >
                                                {product}
                                            </a>
                                        );
                                    })}
                                </Box>
                                <Box
                                    // className="menucolumn"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "30px",
                                    }}
                                >
                                    <Typography
                                        // className="categoryheading"
                                        sx={{
                                            fontFamily: "Inter",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            fontSize: "24px",
                                            lineHeight: "29px",
                                            color: "#1B2437",
                                            marginBottom: "25px",
                                        }}
                                    >
                                        Designers
                                    </Typography>
                                    {designersList.map((product, index) => {
                                        return (
                                            <a
                                                style={{
                                                    color: "#8E8E93",
                                                    textDecoration: "none",
                                                }}
                                                // className="categoryitem"
                                                sx={{
                                                    fontFamily: "Inter",
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "16px",
                                                    lineHeight: "19px",
                                                    color: "#8E8E93",
                                                    textDecoration: "none",
                                                }}
                                                key={index}
                                                href={" "}
                                            >
                                                {product}
                                            </a>
                                        );
                                    })}
                                </Box>
                                <Box
                                    // className="menucolumn"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "30px",
                                    }}
                                >
                                    <Typography
                                        // className="categoryheading"
                                        sx={{
                                            fontFamily: "Inter",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            fontSize: "24px",
                                            lineHeight: "29px",
                                            color: "#1B2437",
                                            marginBottom: "25px",
                                        }}
                                    >
                                        Archived collections
                                    </Typography>
                                    {archivedCollectionsList.map(
                                        (product, index) => {
                                            return (
                                                <a
                                                    style={{
                                                        color: "#8E8E93",
                                                        textDecoration: "none",
                                                    }}
                                                    // className="categoryitem"
                                                    sx={{
                                                        fontFamily: "Inter",
                                                        fontStyle: "normal",
                                                        fontWeight: "400",
                                                        fontSize: "16px",
                                                        lineHeight: "19px",
                                                        color: "#8E8E93",
                                                        textDecoration: "none",
                                                    }}
                                                    key={index}
                                                    href={" "}
                                                >
                                                    {product}
                                                </a>
                                            );
                                        }
                                    )}
                                </Box>
                            </Box>
                            <Box
                                // className="categoryrightside"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: "left",
                                }}
                            >
                                <Box
                                    // className="categorycontactside"
                                    sx={{
                                        width: "300px",
                                        height: "250px",
                                    }}
                                >
                                    <img
                                        src={ImageConfig.catgeorymenuimg}
                                        alt="socialIcon"
                                        width="100%"
                                        height="100%"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <Typography>
                                        Sales on ChanelAccessories
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </>
            )}
            <Box className={"mainWrapper"} id="mainWrapper">
                {/* header section */}
                <Box
                    // className={"headerWrapper"}
                    sx={{
                        position: "relative",
                        height: "770px",
                        top: 0,
                    }}
                >
                    {toggleCategory === 1 && (
                        <>
                            <img
                                src={ImageConfig.headerback}
                                alt={"Majestic"}
                                height="100%"
                                width="100%"
                                // className={"headerbackimg"}
                                style={{
                                    objectFit: "contain",
                                    opacity: 0.2,
                                }}
                            />
                            <Navbar clickHandler={openCategory} />
                        </>
                    )}
                    <Box
                        // className={"textSection"}
                        sx={{
                            position: "absolute",
                            top: "20%",
                            left: "22%",
                            transform: "translate(-50px,50px)",
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            // className="text1"
                            sx={{
                                margin: 0,
                                fontFamily: "Jost",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "39px",
                                lineHeight: "56px",
                                color: "#424242",
                            }}
                        >
                            With an outstanding style, only for you
                        </Typography>
                        <Typography
                            // className={"text2"}
                            sx={{
                                margin: 0,
                                fontFamily: "Jost",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "95px",
                                lineHeight: "137px",
                                textAlign: "center",
                                color: "#212121",
                            }}
                        >
                            Exclusively designed for you
                        </Typography>
                    </Box>

                    <Box
                        // className={"imageSection"}
                        sx={{
                            paddingLeft: 0,
                        }}
                    >
                        <Box
                            // className={"imageCover"}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                position: "absolute",
                                height: "650px",
                                left: "15%",
                                top: "55%",
                                background: "#212121",
                            }}
                        >
                            <img
                                src={ImageConfig.left}
                                alt={"call"}
                                // className={"img"}
                            />
                            <Box
                                // className={"imageTextHer imageText"}
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "absolute",
                                    left: "calc(30% - 260px/2 - 5px)",
                                    bottom: "305px",
                                    background: "#FFFFFF",
                                }}
                            >
                                <Typography
                                    // className="p"
                                    sx={{
                                        fontFamily: "Josefin Sans",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "20px",
                                        lineHeight: "20px",
                                        color: "#424242",
                                        padding: "10px 50px",
                                        gap: "10px",
                                    }}
                                >
                                    For Her
                                </Typography>
                            </Box>
                            <img
                                src={ImageConfig.right}
                                alt={"cart"}
                                // className={"img"}
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    background: "#EEEEEE",
                                }}
                            />
                            <Box
                                // className={"imageTextHim imageText"}
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "absolute",
                                    left: "calc(80% - 260px/2 - 5px)",
                                    bottom: "305px",
                                    background: "#FFFFFF",
                                }}
                            >
                                <Typography
                                    // className="p"
                                    sx={{
                                        fontFamily: "Josefin Sans",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "20px",
                                        lineHeight: "20px",
                                        color: "#424242",
                                        padding: "10px 50px",
                                        gap: "10px",
                                    }}
                                >
                                    For Him
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    // className={"bestdealWrapper"}
                    sx={{
                        marginTop: "370px",
                    }}
                >
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
                                                        src={
                                                            product.imageSource
                                                        }
                                                        alt="shandle"
                                                        height="100%"
                                                        width="100%"
                                                        style={{
                                                            objectFit:
                                                                "contain",
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
                                                                fontFamily:
                                                                    "Jost",
                                                                fontStyle:
                                                                    "normal",
                                                                fontWeight:
                                                                    "400",
                                                                fontSize:
                                                                    "20px",
                                                                lineHeight:
                                                                    "29px",
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
                                                                fontFamily:
                                                                    "Jost",
                                                                fontStyle:
                                                                    "normal",
                                                                fontWeight:
                                                                    "400",
                                                                fontSize:
                                                                    "20px",
                                                                lineHeight:
                                                                    "29px",
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
                <Box
                    // className={"beexclusiveWrapper"}
                    sx={{
                        marginTop: "50px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "50px 250px",
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        rowSpacing={1}
                        columnSpacing={{ sm: 1 }}
                    >
                        <Grid
                            item
                            sm={6}
                            // className="imageTextSection"
                            sx={{
                                height: "700px",
                                paddingTop: 0,
                            }}
                        >
                            <Box
                                // className="textSection1"
                                sx={{
                                    display: "flex",
                                    backgroundColor: "#EEEEEE",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    padding: "215px 70px",
                                    gap: "10px",
                                }}
                            >
                                <Typography
                                    // className="exclusiveText"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "39px",
                                        lineHeight: "50px",
                                        color: "#616161",
                                    }}
                                >
                                    Exclusive collection 2021
                                </Typography>
                                <Typography
                                    // className="beexeclusiveText"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "61px",
                                        lineHeight: "70px",
                                        color: "#212121",
                                    }}
                                >
                                    Be exclusive
                                </Typography>
                                <Typography
                                    // className="subtextexeclusive"
                                    sx={{
                                        textAlign: "left",
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "140%",
                                        color: "#424242",
                                    }}
                                >
                                    The best everyday option in a Super Saver
                                    range within a reasonable price. It is our
                                    responsibility to keep you 100 percent
                                    stylish. Be smart & trendy with us.
                                </Typography>
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
                                        Explore
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            sm={6}
                            // className={"imageTextSection"}
                            sx={{
                                height: "700px",
                                paddingTop: 0,
                            }}
                        >
                            <img
                                src={ImageConfig.imageGirl}
                                alt={"imageGirl"}
                                width="100%"
                                height="100%"
                            />
                        </Grid>
                        <Grid
                            item
                            sm={4}
                            // className={"imageSection"}
                            sx={{
                                paddingLeft: 0,
                            }}
                        >
                            <img
                                src={ImageConfig.purse1}
                                alt={"purse"}
                                height="100%"
                                width="100%"
                                style={{ objectFit: "cover" }}
                            />
                        </Grid>
                        <Grid
                            item
                            sm={4}
                            // className={"imageSection"}
                            sx={{
                                paddingLeft: 0,
                            }}
                        >
                            <img
                                src={ImageConfig.hat}
                                alt={"hat"}
                                height="100%"
                                width="100%"
                                style={{ objectFit: "cover" }}
                            />
                        </Grid>
                        <Grid
                            item
                            sm={4}
                            // className={"imageSection"}
                            sx={{
                                paddingLeft: 0,
                            }}
                        >
                            <img
                                src={ImageConfig.sandle1}
                                alt={"sandle"}
                                height="100%"
                                width="100%"
                                style={{ objectFit: "cover" }}
                            />
                        </Grid>
                    </Grid>
                </Box>
                {/* checkout new arrivals section */}
                <Box
                    // className="newarrivalsWrapper"
                    sx={{
                        padding: "50px 250px",
                    }}
                >
                    <Typography
                        // className="newArrivalsTitle"
                        sx={{
                            marginBottom: "50px",
                            fontFamily: "Jost",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "39px",
                            lineHeight: "56px",
                            color: "#212121",
                            marginTop: "20px",
                            textAlign: "center",
                        }}
                    >
                        Checkout New Arrivals
                    </Typography>
                    <Grid container columnSpacing={1}>
                        <Grid
                            item
                            sm={3}
                            // className="newArrivalsItem"
                            sx={{ width: "389px", height: "650px" }}
                        >
                            <img
                                src={ImageConfig.card1}
                                height="650px"
                                width="100%"
                                alt={"card1"}
                            />
                        </Grid>
                        <Grid
                            item
                            sm={3}
                            // className="newArrivalsItem"
                            sx={{ width: "389px", height: "650px" }}
                        >
                            <img
                                src={ImageConfig.card2}
                                height="650px"
                                width="100%"
                                alt={"card2"}
                            />
                        </Grid>
                        <Grid
                            item
                            sm={3}
                            // className="newArrivalsItem"
                            sx={{ width: "389px", height: "650px" }}
                        >
                            <img
                                src={ImageConfig.card3}
                                height="650px"
                                width="100%"
                                alt={"card3"}
                            />
                        </Grid>
                        <Grid
                            item
                            sm={3}
                            // className="newArrivalsItem"
                            sx={{ width: "389px", height: "650px" }}
                        >
                            <img
                                src={ImageConfig.card4}
                                height="650px"
                                width="100%"
                                alt={"card4"}
                            />
                        </Grid>
                    </Grid>
                </Box>
                {/* shop by category section */}
                <Box>
                    <Typography
                        // className="newArrivalsTitle"
                        sx={{
                            marginBottom: "50px",
                            fontFamily: "Jost",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "39px",
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
                            justifyContent: "center",
                            gap: "30px",
                            marginBottom: "40px",
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
                                        padding: index === 2 ? "14px 24px" : 0,
                                        background:
                                            index === 2 ? "#E0E0E0" : "white",
                                    }}
                                >
                                    {category}
                                </Link>
                            );
                        })}
                    </Box>
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
                                                        src={
                                                            product.imageSource
                                                        }
                                                        alt="shandle"
                                                        height="100%"
                                                        width="250px"
                                                        style={{
                                                            objectFit:
                                                                "scale-down",
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
                                                                fontFamily:
                                                                    "Jost",
                                                                fontStyle:
                                                                    "normal",
                                                                fontWeight:
                                                                    "400",
                                                                fontSize:
                                                                    "20px",
                                                                lineHeight:
                                                                    "29px",
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
                                                                fontFamily:
                                                                    "Jost",
                                                                fontStyle:
                                                                    "normal",
                                                                fontWeight:
                                                                    "400",
                                                                fontSize:
                                                                    "20px",
                                                                lineHeight:
                                                                    "29px",
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
                {/* country lights section */}
                <Box
                    // className="countrylightImagesWrapper"
                    sx={{
                        padding: "50px 250px",
                    }}
                >
                    <Grid container>
                        <Grid
                            item
                            sm={6}
                            // className="countryurbenimages"
                            sx={{
                                width: "782px",
                                height: "782px",
                                display: "flex",
                            }}
                        >
                            <img
                                src={ImageConfig.card1img}
                                alt={"card3"}
                                width="666px"
                                height="782px"
                                style={{ objectFit: "contain" }}
                            />
                        </Grid>
                        <Grid
                            item
                            sm={6}
                            // className="countryurbenimages"
                            sx={{
                                width: "782px",
                                height: "782px",
                                display: "flex",
                            }}
                        >
                            <img
                                src={ImageConfig.card2img}
                                alt={"card3"}
                                width="666px"
                                height="782px"
                                style={{ objectFit: "contain" }}
                            />
                        </Grid>
                    </Grid>
                </Box>
                {/* best seller section */}
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
                                                        src={
                                                            product.imageSource
                                                        }
                                                        alt="shandle"
                                                        height="250px"
                                                        width="250px"
                                                        style={{
                                                            objectFit:
                                                                "contain",
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
                                                                fontFamily:
                                                                    "Jost",
                                                                fontStyle:
                                                                    "normal",
                                                                fontWeight:
                                                                    "400",
                                                                fontSize:
                                                                    "20px",
                                                                lineHeight:
                                                                    "29px",
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
                                                                fontFamily:
                                                                    "Jost",
                                                                fontStyle:
                                                                    "normal",
                                                                fontWeight:
                                                                    "400",
                                                                fontSize:
                                                                    "20px",
                                                                lineHeight:
                                                                    "29px",
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
                {/* summar section */}
                <Box
                    // className="summarImageWrapper"
                    sx={{
                        padding: "50px 250px",
                        marginTop: "50px",
                    }}
                >
                    <Grid container>
                        <Grid item sm={6}>
                            <img
                                src={ImageConfig.maincard}
                                alt={"card3"}
                                height="100%"
                                width="100%"
                                style={{ objectFit: "cover" }}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <Grid container>
                                <Grid item sm={6}>
                                    <img
                                        src={ImageConfig.goggles}
                                        alt={"card3"}
                                        height="100%"
                                        width="100%"
                                        style={{ objectFit: "cover" }}
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <img
                                        src={ImageConfig.shoes1card}
                                        alt={"card3"}
                                        height="100%"
                                        width="100%"
                                        style={{ objectFit: "cover" }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item sm={6}>
                                    <img
                                        src={ImageConfig.hats}
                                        alt={"card3"}
                                        height="100%"
                                        width="100%"
                                        style={{ objectFit: "cover" }}
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <img
                                        src={ImageConfig.watches}
                                        alt={"card3"}
                                        height="100%"
                                        width="100%"
                                        style={{ objectFit: "cover" }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* gentle formal looks section */}
                <Box
                    // className="gentleformallooksection"
                    sx={{
                        padding: "50px 250px",
                        marginTop: "50px",
                    }}
                >
                    <Grid container>
                        <Grid item sm={6}>
                            <Box
                                // className="textSection1"
                                sx={{
                                    display: "flex",
                                    backgroundColor: "#EEEEEE",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    padding: "215px 70px",
                                    gap: "10px",
                                }}
                            >
                                <Typography
                                    // className="gentleformalText"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "40px",
                                        lineHeight: "88px",
                                        color: "#212121",
                                    }}
                                >
                                    Gentle Formal Looks
                                </Typography>
                                <Typography
                                    // className="subtextexeclusive"
                                    sx={{
                                        textAlign: "left",
                                        fontFamily: "Lato",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "140%",
                                        color: "#424242",
                                    }}
                                >
                                    We provide the top formal apparel package to
                                    make your job look confident and
                                    comfortable. Stay connect.
                                </Typography>
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
                                        Explore Collection
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item sm={6}>
                            <img
                                src={ImageConfig.imagemen}
                                alt={"imageGirl"}
                                height="100%"
                                width="100%"
                                style={{ objectFit: "cover" }}
                            />
                        </Grid>
                    </Grid>
                </Box>
                {/* card footer section */}
                <Box
                    // className="cardfootersection"
                    sx={{
                        padding: "50px 250px",
                        marginTop: "50px",
                    }}
                >
                    <Grid container>
                        <Grid item sm={4}>
                            <Box sx={{ position: "relative" }}>
                                <img
                                    src={ImageConfig.cardimg1}
                                    alt={"imageGirl"}
                                    // className="maincardimg"
                                    height="100%"
                                    width="100%"
                                    style={{ objectFit: "cover" }}
                                />
                                <Box
                                    // className="secondtextcontainer"
                                    sx={{
                                        position: "absolute",
                                        top: "90%",
                                        padding: "0 64px",
                                    }}
                                >
                                    <Box
                                        // className="cover"
                                        sx={{
                                            display: "flex",
                                            gap: "20px",
                                            alignItems: "center",
                                            background: "#FCFCFC",
                                            marginBottom: "25px",
                                        }}
                                    >
                                        <img
                                            src={ImageConfig.cardimg4}
                                            alt={"imageGirl"}
                                            height="89px"
                                            width="89px"
                                        />
                                        <Box>
                                            <img
                                                src={ImageConfig.view}
                                                alt={"imageGirl"}
                                                // className="iconImg"
                                                width="17px"
                                                heigh="14px"
                                                style={{ marginRight: "10px" }}
                                            />
                                            35
                                        </Box>
                                        <Box>
                                            <img
                                                src={ImageConfig.like}
                                                alt={"imageGirl"}
                                                // className="iconImg"
                                                width="17px"
                                                heigh="14px"
                                                style={{ marginRight: "10px" }}
                                            />
                                            23
                                        </Box>
                                        <Box>
                                            <img
                                                src={ImageConfig.arrow}
                                                alt={"imageGirl"}
                                                // className="iconImg"
                                                width="17px"
                                                heigh="14px"
                                                style={{ marginRight: "10px" }}
                                            />
                                            14
                                        </Box>
                                    </Box>
                                    <Box
                                        // className="alltxtsection"
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "30px",
                                            textAlign: "left",
                                        }}
                                    >
                                        <Typography
                                            // className="txt1"
                                            sx={{
                                                fontFamily: "Jost",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "16px",
                                                lineHeight: "23px",
                                                color: "#424242",
                                                textAlign: "left",
                                            }}
                                        >
                                            Kelly Hudson .{" "}
                                            <span
                                                style={{
                                                    fontFamily: "Jost",
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "16px",
                                                    lineHeight: "23px",
                                                    color: "#424242",
                                                }}
                                            >
                                                Fashion activist
                                            </span>
                                        </Typography>
                                        <Typography
                                            // className="txt2"
                                            sx={{
                                                fontFamily: "Jost",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "25px",
                                                lineHeight: "120%",
                                                color: "#212121",
                                            }}
                                        >
                                            How important are shoes in your
                                            style?
                                        </Typography>
                                        <Typography
                                            // className="txt3"
                                            sx={{
                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "16px",
                                                lineHeight: "140%",
                                                color: "#424242",
                                            }}
                                        >
                                            Is it possible to assess a person
                                            just on the basis of their footwear?
                                            Obviously, nobody should criticize,
                                            but certainly, shoes say a lot about
                                            someone. It matters for the
                                            outsiders that we meet every day...
                                        </Typography>
                                        <Box
                                            // className="iconarrow"
                                            sx={{
                                                display: "flex",
                                                gap: "15px",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography>Read more</Typography>
                                            <span>
                                                <img
                                                    src={ImageConfig.arrow}
                                                    alt={"imageGirl"}
                                                    width="18px"
                                                    height="18px"
                                                />
                                            </span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item sm={4} style={{ position: "relative" }}>
                            <Box sx={{ position: "relative" }}>
                                <img
                                    src={ImageConfig.cardimg2}
                                    alt={"imageGirl"}
                                    // className="maincardimg"
                                    height="100%"
                                    width="100%"
                                    style={{ objectFit: "cover" }}
                                />
                                <Box
                                    // className="secondtextcontainer"
                                    sx={{
                                        position: "absolute",
                                        top: "90%",
                                        padding: "0 64px",
                                    }}
                                >
                                    <Box
                                        // className="cover"
                                        sx={{
                                            display: "flex",
                                            gap: "20px",
                                            alignItems: "center",
                                            background: "#FCFCFC",
                                            marginBottom: "25px",
                                        }}
                                    >
                                        <img
                                            src={ImageConfig.cardimg4}
                                            alt={"imageGirl"}
                                            height="89px"
                                            width="89px"
                                        />
                                        <Box>
                                            <img
                                                src={ImageConfig.view}
                                                alt={"imageGirl"}
                                                // className="iconImg"
                                                width="17px"
                                                heigh="14px"
                                                style={{ marginRight: "10px" }}
                                            />
                                            35
                                        </Box>
                                        <Box>
                                            <img
                                                src={ImageConfig.like}
                                                alt={"imageGirl"}
                                                // className="iconImg"
                                                width="17px"
                                                heigh="14px"
                                                style={{ marginRight: "10px" }}
                                            />
                                            23
                                        </Box>
                                        <Box>
                                            <img
                                                src={ImageConfig.arrow}
                                                alt={"imageGirl"}
                                                // className="iconImg"
                                                width="17px"
                                                heigh="14px"
                                                style={{ marginRight: "10px" }}
                                            />
                                            14
                                        </Box>
                                    </Box>
                                    <Box
                                        // className="alltxtsection"
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "30px",
                                            textAlign: "left",
                                        }}
                                    >
                                        <Typography
                                            // className="txt1"
                                            sx={{
                                                fontFamily: "Jost",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "16px",
                                                lineHeight: "23px",
                                                color: "#424242",
                                                textAlign: "left",
                                            }}
                                        >
                                            Kelly Hudson .{" "}
                                            <span>Fashion activist</span>
                                        </Typography>
                                        <Typography
                                            // className="txt2"
                                            sx={{
                                                fontFamily: "Jost",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "25px",
                                                lineHeight: "120%",
                                                color: "#212121",
                                            }}
                                        >
                                            How important are shoes in your
                                            style?
                                        </Typography>
                                        <Typography
                                            // className="txt3"
                                            sx={{
                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "16px",
                                                lineHeight: "140%",
                                                color: "#424242",
                                            }}
                                        >
                                            Is it possible to assess a person
                                            just on the basis of their footwear?
                                            Obviously, nobody should criticize,
                                            but certainly, shoes say a lot about
                                            someone. It matters for the
                                            outsiders that we meet every day...
                                        </Typography>
                                        <Box
                                            // className="iconarrow"
                                            sx={{
                                                display: "flex",
                                                gap: "15px",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography>Read more</Typography>
                                            <span>
                                                <img
                                                    src={ImageConfig.arrow}
                                                    alt={"imageGirl"}
                                                    width="18px"
                                                    height="18px"
                                                />
                                            </span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item sm={4} style={{ position: "relative" }}>
                            <Box sx={{ position: "relative" }}>
                                <img
                                    src={ImageConfig.cardimg3}
                                    alt={"imageGirl"}
                                    // className="maincardimg"
                                    height="100%"
                                    width="100%"
                                    style={{ objectFit: "cover" }}
                                />
                                <Box
                                    // className="secondtextcontainer"
                                    sx={{
                                        position: "absolute",
                                        top: "90%",
                                        padding: "0 64px",
                                    }}
                                >
                                    <Box
                                        // className="cover"
                                        sx={{
                                            display: "flex",
                                            gap: "20px",
                                            alignItems: "center",
                                            background: "#FCFCFC",
                                            marginBottom: "25px",
                                        }}
                                    >
                                        <img
                                            src={ImageConfig.cardimg4}
                                            alt={"imageGirl"}
                                            height="89px"
                                            width="89px"
                                        />
                                        <Box>
                                            <img
                                                src={ImageConfig.view}
                                                alt={"imageGirl"}
                                                className="iconImg"
                                            />
                                            35
                                        </Box>
                                        <Box>
                                            <img
                                                src={ImageConfig.like}
                                                alt={"imageGirl"}
                                                className="iconImg"
                                            />
                                            23
                                        </Box>
                                        <Box>
                                            <img
                                                src={ImageConfig.arrow}
                                                alt={"imageGirl"}
                                                className="iconImg"
                                            />
                                            14
                                        </Box>
                                    </Box>
                                    <Box
                                        // className="alltxtsection"
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "30px",
                                            textAlign: "left",
                                        }}
                                    >
                                        <Typography
                                            // className="txt1"
                                            sx={{
                                                fontFamily: "Jost",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "16px",
                                                lineHeight: "23px",
                                                color: "#424242",
                                                textAlign: "left",
                                            }}
                                        >
                                            Kelly Hudson .{" "}
                                            <span>Fashion activist</span>
                                        </Typography>
                                        <Typography
                                            // className="txt2"
                                            sx={{
                                                fontFamily: "Jost",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "25px",
                                                lineHeight: "120%",
                                                color: "#212121",
                                            }}
                                        >
                                            How important are shoes in your
                                            style?
                                        </Typography>
                                        <Typography
                                            // className="txt3"
                                            sx={{
                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "16px",
                                                lineHeight: "140%",
                                                color: "#424242",
                                            }}
                                        >
                                            Is it possible to assess a person
                                            just on the basis of their footwear?
                                            Obviously, nobody should criticize,
                                            but certainly, shoes say a lot about
                                            someone. It matters for the
                                            outsiders that we meet every day...
                                        </Typography>
                                        <Box
                                            // className="iconarrow"
                                            sx={{
                                                display: "flex",
                                                gap: "15px",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography>Read more</Typography>
                                            <span>
                                                <img
                                                    src={ImageConfig.arrow}
                                                    alt={"imageGirl"}
                                                    width="18px"
                                                    height="18px"
                                                />
                                            </span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* footer slider section */}
                <Box
                    // className="footerslidersection"
                    sx={{
                        marginTop: "400px",
                        position: "relative",
                    }}
                >
                    <img
                        src={ImageConfig.footersliderimage}
                        alt="footerslider"
                        // className="footersliderimage"
                        width="100%"
                        height="100%"
                        style={{ objectFit: "cover" }}
                    />
                    <Box
                        // className="overlayfooterslider"
                        sx={{
                            position: "absolute",
                            top: "0%",
                        }}
                    >
                        <img
                            src={ImageConfig.overlay}
                            alt="footerslider"
                            // className="footersliderimage"
                            width="100%"
                            height="100%"
                            style={{ objectFit: "cover" }}
                        />
                    </Box>
                    <Box
                        // className="footersildercontentwrapper"
                        sx={{
                            position: "absolute",
                            top: "25%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            left: "42%",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            // className="footerslidertext1"
                            sx={{
                                fontFamily: "Jost",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "39px",
                                lineHeight: "56px",
                                textAlign: "center",
                                color: "#E0E0E0",
                            }}
                        >
                            Visit our outlets in
                        </Typography>
                        <Box
                            // className="footerslidertext2"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box>
                                <img
                                    src={ImageConfig.vectorleftwhite}
                                    alt="footerslider"
                                    width="20px"
                                    height="20px"
                                />
                            </Box>
                            <Box>
                                <Typography
                                    // className="slidertext2"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "95px",
                                        lineHeight: "137px",
                                        textAlign: "center",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Berlin
                                </Typography>
                            </Box>
                            <Box>
                                <img
                                    src={ImageConfig.vectorrightwhite}
                                    alt="footerslider"
                                    width="20px"
                                    height="20px"
                                />
                            </Box>
                        </Box>
                        <Box
                            // className="seeaddresssection"
                            sx={{
                                display: "flex",
                                gap: "5px",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                // className="footerslidertext3"
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    lineHeight: "29px",
                                    color: "#FFFFFF",
                                }}
                            >
                                See Addresses
                            </Typography>
                            <img
                                src={ImageConfig.arrowwhite}
                                alt="footerslider"
                            />
                        </Box>
                    </Box>
                </Box>
                {/* footer section */}
                <Box
                    // className="footerWrapper"
                    sx={{
                        marginBottom: "20px",
                    }}
                >
                    <Box
                        // className="footersection"
                        sx={{
                            marginTop: "50px",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "0 170px",
                        }}
                    >
                        <Box
                            // className="footerleftside"
                            sx={{
                                display: "flex",
                                gap: "120px",
                                textAlign: "left",
                            }}
                        >
                            <Box
                                // className="menucolumn"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "30px",
                                }}
                            >
                                <Typography
                                    // className="footerheading"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        color: "#212121",
                                    }}
                                >
                                    Company Info
                                </Typography>
                                <Typography
                                    // className="footermenuitem"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "23px",
                                        color: "#616161",
                                    }}
                                >
                                    About Us
                                </Typography>
                                <Typography
                                    // className="footermenuitem"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "23px",
                                        color: "#616161",
                                    }}
                                >
                                    Affliate
                                </Typography>
                                <Typography
                                    // className="footermenuitem"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "23px",
                                        color: "#616161",
                                    }}
                                >
                                    Fashion Blogger
                                </Typography>
                            </Box>
                            <Box
                                // className="menucolumn"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "30px",
                                }}
                            >
                                <Typography
                                    // className="footerheading"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        color: "#212121",
                                    }}
                                >
                                    Help & Support
                                </Typography>
                                <Typography
                                    // className="footermenuitem"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "23px",
                                        color: "#616161",
                                    }}
                                >
                                    Shipping Info
                                </Typography>
                                <Typography
                                    // className="footermenuitem"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "23px",
                                        color: "#616161",
                                    }}
                                >
                                    Refunds
                                </Typography>
                                <Typography
                                    // className="footermenuitem"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "23px",
                                        color: "#616161",
                                    }}
                                >
                                    How to Order
                                </Typography>
                                <Typography
                                    // className="footermenuitem"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "23px",
                                        color: "#616161",
                                    }}
                                >
                                    How to Track
                                </Typography>
                                <Typography
                                    // className="footermenuitem"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "23px",
                                        color: "#616161",
                                    }}
                                >
                                    Size Guides
                                </Typography>
                            </Box>
                            <Box
                                // className="menucolumn"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "30px",
                                }}
                            >
                                <Typography
                                    // className="footerheading"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        color: "#212121",
                                    }}
                                >
                                    Customer Care
                                </Typography>
                                <Typography
                                    // className="footermenuitem"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "23px",
                                        color: "#616161",
                                    }}
                                >
                                    Contact Us
                                </Typography>
                                <Typography
                                    // className="footermenuitem"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "23px",
                                        color: "#616161",
                                    }}
                                >
                                    Payment Methods
                                </Typography>
                                <Typography
                                    // className="footermenuitem"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        lineHeight: "23px",
                                        color: "#616161",
                                    }}
                                >
                                    Bonus Point
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            // className="footerrightside"
                            sx={{ textAlign: "left" }}
                        >
                            <Box
                                // className="footercontactside"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}
                            >
                                <Typography
                                    // className="footerheading"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        color: "#212121",
                                    }}
                                >
                                    Signup For The Latest News
                                </Typography>
                                <Box
                                    // className="searchBox"
                                    sx={{
                                        marginBottom: "10px",
                                        position: "relative",
                                    }}
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Email"
                                        variant="outlined"
                                    />
                                    <img
                                        src={ImageConfig.arrow}
                                        alt="arrowIcon"
                                        // className="arrowIcon"
                                        width="15px"
                                        height="15px"
                                        style={{
                                            position: "absolute",
                                            left: "205px",
                                            top: "20px",
                                        }}
                                    />
                                </Box>
                                <Box
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px",
                                    }}
                                >
                                    <Typography>
                                        <EmailOutlinedIcon />
                                        &nbsp;&nbsp;&nbsp;something@email.com
                                    </Typography>
                                    <Typography>
                                        <img
                                            src={ImageConfig.call}
                                            alt="arrowIcon"
                                            width="15px"
                                            height="15px"
                                        />
                                        &nbsp;&nbsp;&nbsp;+2321354524
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        // className="socialmediaicon"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            justifyContent: "center",
                            marginTop: "50px",
                        }}
                    >
                        <img src={ImageConfig.fb} alt="socialIcon" />
                        <img src={ImageConfig.instagram} alt="socialIcon" />
                        <img src={ImageConfig.youtube} alt="socialIcon" />
                        <img src={ImageConfig.twitter} alt="socialIcon" />
                    </Box>
                    <Box
                        // className="bordersection"
                        sx={{
                            border: "1px solid #9E9E9E",
                            padding: "0",
                            marginTop: "30px",
                            marginBottom: "17px",
                            marginLeft: "170px",
                            width: "82%",
                        }}
                    ></Box>
                    <Box
                        // className="copyrightfootersection"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "0 170px",
                        }}
                    >
                        <Typography
                            // className="copyrighttext"
                            sx={{
                                fontFamily: "Jost",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "14px",
                                lineHeight: "140%",
                                color: "#6C7E99",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "14px",
                                    lineHeight: "140%",
                                    color: "#7E92B3",
                                }}
                            >
                                All rights Reserved
                            </span>{" "}
                            &copy; Your Company, 2021
                        </Typography>
                        <Typography
                            // className="copyrighttext"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                fontFamily: "Jost",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "14px",
                                lineHeight: "140%",
                                color: "#6C7E99",
                            }}
                        >
                            <img
                                src={ImageConfig.madewithbyicon}
                                alt="socialIcon"
                            />
                            &nbsp; Themewagon
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
