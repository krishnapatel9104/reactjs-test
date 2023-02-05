import { Box, Typography } from "@mui/material";
import React from "react";
import { CoverSection } from "./CoverSection";

export const Header = () => {
    return (
        <>
            <CoverSection />
            <Box
                sx={{
                    width: "100%",
                    position: "absolute",
                    marginTop: {
                        // xs: "-348px",
                        xs: "-220px",
                        md: "-370px",
                        lg: "-390px",
                        xl: "-500px",
                    },
                }}
            >
                <Typography
                    sx={{
                        margin: 0,
                        fontFamily: "Jost",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: {
                            xl: "39px",
                            lg: "36px",
                            md: "30px",
                            sm: "25px",
                            xs: "21px",
                        },
                        color: "#424242",
                        textAlign: "center",
                    }}
                >
                    With an outstanding style, only for you
                </Typography>
                <Typography
                    sx={{
                        margin: 0,
                        fontFamily: "Jost",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: {
                            xl: "95px",
                            lg: "75px",
                            md: "55px",
                            sm: "40px",
                            xs: "25px",
                        },
                        textAlign: "center",
                        color: "#212121",
                    }}
                >
                    Exclusively designed for you
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: { xs: "column", sm: "row" },
                    }}
                >
                    <Box
                        sx={{
                            height: {
                                xl: "600px",
                                md: "450px",
                                sm: "250px",
                                xs: "150px",
                            },
                            width: {
                                xl: "600px",
                                md: "450px",
                                sm: "250px",
                                xs: "150px",
                            },
                            position: "relative",
                            backgroundImage: `url("/images/left.png")`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Josefin Sans",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "20px",
                                color: "#424242",
                                gap: "10px",
                                fontSize: {
                                    xl: "20px",
                                    lg: "20px",
                                    md: "18px",
                                    sm: "15px",
                                    xs: "12px",
                                },
                                padding: {
                                    xl: "10px 50px",
                                    lg: "10px 50px",
                                    md: "10px 50px",
                                    sm: "8px 25px",
                                    xs: "3px 10px",
                                },
                                marginTop: {
                                    xl: "300px",
                                    lg: "200px",
                                    md: "200px",
                                    sm: "110px",
                                    xs: "60px",
                                },
                                marginLeft: {
                                    xl: "250px",
                                    lg: "150px",
                                    md: "150px",
                                    sm: "80px",
                                    xs: "50px",
                                },
                                backgroundColor: "white",
                                width: "fit-content",
                            }}
                        >
                            For Her
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            height: {
                                xl: "600px",
                                md: "450px",
                                sm: "250px",
                                xs: "150px",
                            },
                            width: {
                                xl: "600px",
                                md: "450px",
                                sm: "250px",
                                xs: "150px",
                            },
                            position: "relative",
                            backgroundImage: `url("/images/right.png")`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Josefin Sans",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "20px",
                                color: "#424242",
                                gap: "10px",
                                fontSize: {
                                    xl: "20px",
                                    lg: "20px",
                                    md: "18px",
                                    sm: "15px",
                                    xs: "12px",
                                },
                                padding: {
                                    xl: "10px 50px",
                                    lg: "10px 50px",
                                    md: "10px 50px",
                                    sm: "8px 25px",
                                    xs: "3px 10px",
                                },
                                marginTop: {
                                    xl: "300px",
                                    lg: "200px",
                                    md: "200px",
                                    sm: "110px",
                                    xs: "60px",
                                },
                                marginLeft: {
                                    xl: "250px",
                                    lg: "150px",
                                    md: "150px",
                                    sm: "80px",
                                    xs: "50px",
                                },
                                backgroundColor: "white",
                                width: "fit-content",
                            }}
                        >
                            For Him
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
