import { Box, Typography } from "@mui/material";
import React from "react";

export const FooterSliderSection = () => {
    return (
        <Box
            // className="footerslidersection"
            sx={{
                position: "relative",
            }}
        >
            <img
                src={"/images/footersliderimage.png"}
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
                    src={"/images/overlay.png"}
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
                    top: { xs: "15%", sm: "20%", md: "20%", lg: "30%" },
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: "10px", md: "20px" },
                    left: { xs: "35%", sm: "40%", md: "35%", lg: "42%" },
                    alignItems: "center",
                }}
            >
                <Typography
                    // className="footerslidertext1"
                    sx={{
                        fontFamily: "Jost",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: {
                            lg: "39px",
                            md: "32px",
                            sm: "22px",
                            xs: "18px",
                        },
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
                            src={"/images/vectorleftwhite.png"}
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
                                fontSize: {
                                    lg: "95px",
                                    md: "75px",
                                    sm: "32px",
                                    xs: "22px",
                                },
                                textAlign: "center",
                                color: "#FFFFFF",
                            }}
                        >
                            Berlin
                        </Typography>
                    </Box>
                    <Box>
                        <img
                            src={"/images/vectorrightwhite.png"}
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
                            fontSize: {
                                lg: "20px",
                                sm: "18px",
                                xs: "16px",
                            },
                            color: "#FFFFFF",
                        }}
                    >
                        See Addresses
                    </Typography>
                    <img src={"/images/arrowwhite.png"} alt="footerslider" />
                </Box>
            </Box>
        </Box>
    );
};
