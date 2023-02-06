import React, { useState } from "react";
import { Box, Link, List, ListItem, Typography } from "@mui/material";
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
                sx={{
                    backgroundColor: isOpen && "white",
                    display: { xs: "none", md: "flex" },

                    justifyContent: "space-around",
                    position: "absolute",
                    top: 0,
                    padding: "30px 0px",
                    color: "black",
                    alignItems: "center",
                    width: "100%",
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: "32px",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: "6px",
                            alignItems: "center",
                            fontFamily: "Josefin Sans",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "16px",
                            lineHeight: "16px",
                            letterSpacing: "0.085em",
                            textTransform: "uppercase",
                            color: "#212121",
                        }}
                    >
                        <img
                            src={"/images/logo.png"}
                            alt={"Majestic"}
                            width="35px"
                            height="25px"
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
                                    fontFamily: "Josefin Sans",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    fontSize: "16px",
                                    lineHeight: "16px",
                                    color: "#212121",
                                }}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "30px",
                        alignItems: "center",
                    }}
                >
                    <img src={"/images/Call.png"} alt={"call"} />
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                        onClick={handleClick}
                    >
                        <img
                            src={"/images/Cart.png"}
                            alt={"cart"}
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
                    <img src={"/images/Search.png"} alt={"search"} />
                    <img src={"/images/Login.png"} alt={"login"} />
                    <img src={"/images/Like.png"} alt={"like"} />
                </Box>
            </Box>

            {/* mobile */}
            <Box
                sx={{
                    backgroundColor: isOpen && "white",
                    display: { md: "none", xs: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "30px 30px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: "6px",
                        alignItems: "center",
                        fontFamily: "Josefin Sans",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "16px",
                        letterSpacing: "0.085em",
                        textTransform: "uppercase",
                        color: "#212121",
                    }}
                >
                    <img
                        src={"/images/logo.png"}
                        alt={"Majestic"}
                        width="35px"
                        height="25px"
                    />
                    Majestic
                </Box>
                <Box>
                    <img
                        src={"/images/menu.png"}
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
                                zIndex: 2,
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
                                                        fontFamily:
                                                            "Josefin Sans",
                                                        fontStyle: "normal",
                                                        fontWeight: "700",
                                                        fontSize: "16px",
                                                        lineHeight: "16px",
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
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        flexDirection:
                                                                            "column",
                                                                        gap: "30px",
                                                                    }}
                                                                >
                                                                    <Typography
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
                                                                                        "/allProducts"
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
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        flexDirection:
                                                                            "column",
                                                                        gap: "30px",
                                                                    }}
                                                                >
                                                                    <Typography
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
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        flexDirection:
                                                                            "column",
                                                                        gap: "30px",
                                                                    }}
                                                                >
                                                                    <Typography
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
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    gap: "30px",
                                    alignItems: "flex-start",
                                    padding: "15px 30px",
                                }}
                            >
                                <img src={"/images/Call.png"} alt={"call"} />
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
                                        src={"/images/Cart.png"}
                                        alt={"cart"}
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
                                    src={"/images/Search.png"}
                                    alt={"search"}
                                />
                                <img src={"/images/Login.png"} alt={"login"} />
                                <img src={"/images/Like.png"} alt={"like"} />
                            </Box>
                        </Box>
                    </>
                ) : (
                    <></>
                )}
            </Box>
            {isOpen ? (
                <Box
                    sx={{
                        backgroundColor: "white",
                        position: "absolute",
                        top: "7%",
                        textAlign: "left",
                        zIndex: 2,
                        color: "black",
                        width: "100%",
                    }}
                >
                    <Box
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
                            sx={{
                                display: "flex",
                                gap: { md: "100px", xl: "150px" },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "30px",
                                }}
                            >
                                <Typography
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
                                            href={"/allProducts"}
                                        >
                                            {product}
                                        </a>
                                    );
                                })}
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "30px",
                                }}
                            >
                                <Typography
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
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "30px",
                                }}
                            >
                                <Typography
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
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "left",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "300px",
                                    height: "250px",
                                }}
                            >
                                <img
                                    src={"/images/catgeorymenuimg.png"}
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
