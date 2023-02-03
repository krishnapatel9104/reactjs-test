import React, { useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import { ImageConfig } from "../../images/index";
import "./style.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
    const navigate = useNavigate();
    const productDetails = useSelector(
        (state) =>
            state.rootReducer.userSelectedProductListSlice
                .userSelectedProductLists
    );
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        navigate("/shipping", {
            state: { productDetail: productDetails },
        });
    };
    const [currentSelectedItem, setCurrentSelectedItem] = useState("");
    const handleClickNavbar = (e) => {
        console.log("clicked ");
        setCurrentSelectedItem(isOpen ? "" : e.target.name);
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Box
                className={"navWrapper"}
                sx={{
                    backgroundColor: isOpen && "white",
                }}
            >
                <Box className={"menuWrapper"}>
                    <Box className={"logo"}>
                        <img
                            src={ImageConfig.logo}
                            alt={"Majestic"}
                            className={"logoimg"}
                        />
                        Majestic
                    </Box>
                    {["Women", "Men", "Collection", "Outlet"].map((item) => {
                        return (
                            <Link
                                name={item}
                                onClick={handleClickNavbar}
                                sx={{
                                    cursor: "pointer",
                                    textDecoration:
                                        currentSelectedItem === item
                                            ? "underline !important"
                                            : "auto",
                                }}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </Box>
                <Box className={"iconWrapper"}>
                    <img
                        src={ImageConfig.call}
                        alt={"call"}
                        className={"icon"}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                        onClick={handleClick}
                    >
                        <img
                            src={ImageConfig.cart}
                            alt={"cart"}
                            className={"icon"}
                            style={{ position: "relative" }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                top: "25%",
                                backgroundColor: "red",
                                left: "76%",
                                borderRadius: "41px",
                                width: "20px",
                                textAlign: "center",
                            }}
                        >
                            <Typography sx={{ color: "white" }}>
                                {productDetails?.length}
                            </Typography>
                        </Box>
                    </Box>
                    <img
                        src={ImageConfig.search}
                        alt={"search"}
                        className={"icon"}
                    />
                    <img
                        src={ImageConfig.login}
                        alt={"login"}
                        className={"icon"}
                    />
                    <img
                        src={ImageConfig.like}
                        alt={"like"}
                        className={"icon"}
                    />
                </Box>
            </Box>
            {isOpen ? (
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
            ) : (
                <></>
            )}
        </>
    );
};

export default Navbar;
