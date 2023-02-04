import React, { useState } from "react";
import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { ImageConfig } from "../../images/index";
import "./style.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
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
    const [isMobile, setIsMobile] = useState(false);
    const [currentSelectedItem, setCurrentSelectedItem] = useState("");

    console.log("matched and isopen : ", matches, isOpen);
    if (matches && isOpen) setIsOpen(false);
    const handleClick = () => {
        navigate("/shipping", {
            state: { productDetail: productDetails },
        });
    };

    const handleClickNavbar = (e, item) => {
        setCurrentSelectedItem(isOpen ? "" : e.target.name);
        if (!item) setIsOpen(!isOpen);
    };
    const handleClickMobile = (e) => {
        setIsMobile(!isMobile);
        setCurrentSelectedItem(isOpen ? "" : e.target.name);
        if (!isOpen) setIsOpen(!isOpen);
    };
    return (
        <>
            <Box
                className={"navWrapper"}
                sx={{
                    backgroundColor: isOpen && "white",
                    display: { xs: "none", md: "flex" },
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

            {/* mobile */}
            <Box
                // className={"navWrapper"}
                sx={{
                    backgroundColor: isOpen && "white",
                    display: { md: "none", xs: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "30px 30px",
                }}
            >
                <Box className={"logo"}>
                    <img
                        src={ImageConfig.logo}
                        alt={"Majestic"}
                        className={"logoimg"}
                    />
                    Majestic
                </Box>
                <Box>
                    <img
                        src={"/assests/menu.png"}
                        alt="menuicon"
                        onClick={handleClickMobile}
                    />
                </Box>

                {isMobile && !isOpen ? (
                    <>
                        <Box
                            sx={{
                                display: "block",
                                marginTop: "30px",
                                flexDirection: "column",
                                gap: "21px",
                                position: "absolute",
                                top: "6%",
                                width: "100%",
                                right: "0",
                                backgroundColor: "white",
                                zIndex: 1,
                            }}
                        >
                            {["Women", "Men", "Collection", "Outlet"].map(
                                (item) => {
                                    return (
                                        <List>
                                            <ListItem
                                                sx={{
                                                    paddingLeft: "30px",
                                                    paddingRight: "16px",
                                                }}
                                                onClick={(e) =>
                                                    handleClickNavbar(e, item)
                                                }
                                            >
                                                <Link
                                                    name={item}
                                                    sx={{
                                                        cursor: "pointer",
                                                        color: "black",
                                                        position: "relative",
                                                        textDecoration:
                                                            currentSelectedItem ===
                                                            item
                                                                ? "underline !important"
                                                                : "auto",
                                                    }}
                                                >
                                                    {item}
                                                </Link>
                                                {currentSelectedItem ===
                                                item ? (
                                                    <List
                                                        sx={{
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            position:
                                                                "absolute",
                                                            top: "100%",
                                                            left: "10%",
                                                            zIndex: "1",
                                                            backgroundColor:
                                                                "#EFEFEF",
                                                            width: "max-content",
                                                            color: "white",
                                                            padding:
                                                                "10px 10px",
                                                        }}
                                                    >
                                                        <ListItem>
                                                            <Box
                                                                sx={{
                                                                    display:
                                                                        "flex",
                                                                    justifyContent:
                                                                        "space-between",
                                                                    gap: "50px",
                                                                }}
                                                            >
                                                                <Box
                                                                    // className="menucolumn"
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        flexDirection:
                                                                            "column",
                                                                        gap: "30px",
                                                                    }}
                                                                >
                                                                    <Typography
                                                                        // className="categoryheading"
                                                                        sx={{
                                                                            fontFamily:
                                                                                "Inter",
                                                                            fontStyle:
                                                                                "normal",
                                                                            fontWeight:
                                                                                "400",
                                                                            fontSize:
                                                                                "20px",
                                                                            color: "#1B2437",
                                                                            marginBottom:
                                                                                "25px",
                                                                        }}
                                                                    >
                                                                        Products
                                                                    </Typography>
                                                                    {productList.map(
                                                                        (
                                                                            product,
                                                                            index
                                                                        ) => {
                                                                            return (
                                                                                <a
                                                                                    style={{
                                                                                        color: "#8E8E93",
                                                                                        textDecoration:
                                                                                            "none",
                                                                                    }}
                                                                                    // className="categoryitem"
                                                                                    sx={{
                                                                                        fontFamily:
                                                                                            "Inter",
                                                                                        fontStyle:
                                                                                            "normal",
                                                                                        fontWeight:
                                                                                            "400",
                                                                                        fontSize:
                                                                                            "16px",
                                                                                        lineHeight:
                                                                                            "19px",
                                                                                        color: "#8E8E93",
                                                                                        textDecoration:
                                                                                            "none",
                                                                                    }}
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    href={
                                                                                        "/categorydetails"
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        product
                                                                                    }
                                                                                </a>
                                                                            );
                                                                        }
                                                                    )}
                                                                </Box>
                                                                <Box
                                                                    // className="menucolumn"
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        flexDirection:
                                                                            "column",
                                                                        gap: "30px",
                                                                    }}
                                                                >
                                                                    <Typography
                                                                        // className="categoryheading"
                                                                        sx={{
                                                                            fontFamily:
                                                                                "Inter",
                                                                            fontStyle:
                                                                                "normal",
                                                                            fontWeight:
                                                                                "400",
                                                                            fontSize:
                                                                                "20px",
                                                                            color: "#1B2437",
                                                                            marginBottom:
                                                                                "25px",
                                                                        }}
                                                                    >
                                                                        Designers
                                                                    </Typography>
                                                                    {designersList.map(
                                                                        (
                                                                            product,
                                                                            index
                                                                        ) => {
                                                                            return (
                                                                                <a
                                                                                    style={{
                                                                                        color: "#8E8E93",
                                                                                        textDecoration:
                                                                                            "none",
                                                                                    }}
                                                                                    // className="categoryitem"
                                                                                    sx={{
                                                                                        fontFamily:
                                                                                            "Inter",
                                                                                        fontStyle:
                                                                                            "normal",
                                                                                        fontWeight:
                                                                                            "400",
                                                                                        fontSize:
                                                                                            "16px",
                                                                                        lineHeight:
                                                                                            "19px",
                                                                                        color: "#8E8E93",
                                                                                        textDecoration:
                                                                                            "none",
                                                                                    }}
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    href={
                                                                                        " "
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        product
                                                                                    }
                                                                                </a>
                                                                            );
                                                                        }
                                                                    )}
                                                                </Box>
                                                                <Box
                                                                    // className="menucolumn"
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        flexDirection:
                                                                            "column",
                                                                        gap: "30px",
                                                                    }}
                                                                >
                                                                    <Typography
                                                                        // className="categoryheading"
                                                                        sx={{
                                                                            fontFamily:
                                                                                "Inter",
                                                                            fontStyle:
                                                                                "normal",
                                                                            fontWeight:
                                                                                "400",
                                                                            fontSize:
                                                                                "20px",
                                                                            color: "#1B2437",
                                                                            marginBottom:
                                                                                "25px",
                                                                        }}
                                                                    >
                                                                        Archived
                                                                        collections
                                                                    </Typography>
                                                                    {archivedCollectionsList.map(
                                                                        (
                                                                            product,
                                                                            index
                                                                        ) => {
                                                                            return (
                                                                                <a
                                                                                    style={{
                                                                                        color: "#8E8E93",
                                                                                        textDecoration:
                                                                                            "none",
                                                                                    }}
                                                                                    // className="categoryitem"
                                                                                    sx={{
                                                                                        fontFamily:
                                                                                            "Inter",
                                                                                        fontStyle:
                                                                                            "normal",
                                                                                        fontWeight:
                                                                                            "400",
                                                                                        fontSize:
                                                                                            "16px",
                                                                                        lineHeight:
                                                                                            "19px",
                                                                                        color: "#8E8E93",
                                                                                        textDecoration:
                                                                                            "none",
                                                                                    }}
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    href={
                                                                                        " "
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        product
                                                                                    }
                                                                                </a>
                                                                            );
                                                                        }
                                                                    )}
                                                                </Box>
                                                            </Box>
                                                        </ListItem>
                                                    </List>
                                                ) : (
                                                    <></>
                                                )}
                                            </ListItem>
                                        </List>
                                    );
                                }
                            )}
                            <Box
                                className={"iconWrapper"}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    gap: "30px",
                                    alignItems: "flex-start",
                                    padding: "15px 30px",
                                }}
                            >
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
                                        position: "relative",
                                    }}
                                    onClick={handleClick}
                                >
                                    <img
                                        src={ImageConfig.cart}
                                        alt={"cart"}
                                        className={"icon"}
                                        // style={{ position: "relative" }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "-55%",
                                            backgroundColor: "red",
                                            left: "80%",
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
                    </>
                ) : (
                    <></>
                )}
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
                            padding: {
                                md: "30px 140px",
                                xl: "30px 290px 180px 290px",
                            },
                            borderBottom: "1px solid white",
                            borderBottomLeftRadius: "40px",
                            borderBottomRightRadius: "40px",
                        }}
                    >
                        <Box
                            // className="categoryleftside"
                            sx={{
                                display: "flex",
                                gap: { md: "100px", xl: "150px" },
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
