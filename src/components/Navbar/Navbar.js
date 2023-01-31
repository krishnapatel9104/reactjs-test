import React from "react";
import { Box, Typography } from "@mui/material";
import { ImageConfig } from "../../images/index";
import "./style.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const navigate = useNavigate();
    const productDetails = useSelector(
        (state) => state.userSelectedProductLists.userSelectedProductLists
    );
    const handleClick = () => {
        navigate("/shipping", {
            state: { productDetail: productDetails },
        });
    };
    console.log("productCount : ", productDetails?.length);
    return (
        <>
            <Box className={"navWrapper"}>
                <Box className={"menuWrapper"}>
                    <Box className={"logo"}>
                        <img
                            src={ImageConfig.logo}
                            alt={"Majestic"}
                            className={"logoimg"}
                        />
                        Majestic
                    </Box>
                    <a href={" "} onClick={props.clickHandler}>
                        Women
                    </a>
                    <a href={" "}>Men</a>
                    <a href={" "}>Collection</a>
                    <a href={" "}>Outlet</a>
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
        </>
    );
};

export default Navbar;
