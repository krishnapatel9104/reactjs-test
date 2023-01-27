import React from "react";
import { Box } from "@mui/material";
import { ImageConfig } from "../../images/index";
import "./style.css";

const Navbar = (props) => {
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
                    <img
                        src={ImageConfig.cart}
                        alt={"cart"}
                        className={"icon"}
                    />
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
