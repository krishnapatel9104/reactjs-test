import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./style.css";
import { ImageConfig } from "../../images/index";

export const Home = () => {
    return (
        <Box className={"mainWrapper"}>
            {/* header section */}
            <Box className={"headerWrapper"}>
                <img
                    src={ImageConfig.headerback}
                    alt={"Majestic"}
                    className={"headerbackimg"}
                />
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
                        <a href>Women</a>
                        <a href>Men</a>
                        <a href>Collection</a>
                        <a href>Outlet</a>
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

                <Box className={"textSection"}>
                    <Typography className={"text1"}>
                        With an outstanding style, only for you
                    </Typography>
                    <Typography className={"text2"}>
                        Exclusively designed for you
                    </Typography>
                </Box>

                <Box className={"imageSection"}>
                    <Box className={"imageCover"}>
                        <img
                            src={ImageConfig.left}
                            alt={"call"}
                            className={"img"}
                        />
                        <Box className={"imageTextHer imageText"}>
                            <Typography className="p">For Her</Typography>
                        </Box>
                        <img
                            src={ImageConfig.right}
                            alt={"cart"}
                            className={"img"}
                        />
                        <Box className={"imageTextHim imageText"}>
                            <Typography className="p">For Him</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box className={"bestdealWrapper"}>
                <Typography className="bestdealheading">Best Deals</Typography>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
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
                        }}
                        className={"griditem"}
                    >
                        <img
                            src={ImageConfig.shandle}
                            alt="shandle"
                            style={{ "margin-bottom": "50px" }}
                        />
                        <Typography className="itemname">
                            Flat Hill Slingback
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <img src={ImageConfig.bangles} alt="shandle" />
                        <Typography className="itemname">
                            Ocean Blue Ring
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <img src={ImageConfig.purse} alt="shandle" />
                        <Typography className="itemname">
                            Brown Leathered Wallet
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <img src={ImageConfig.watch} alt="shandle" />
                        <Typography className="itemname">
                            Silverside Wristwatch
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <img src={ImageConfig.vectorRight} alt="shandle" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
