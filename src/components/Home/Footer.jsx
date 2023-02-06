import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const Footer = () => {
    return (
        <Box
            sx={{
                marginBottom: "20px",
            }}
        >
            <Box
                sx={{
                    marginTop: "50px",
                    display: "flex",
                    justifyContent: { xs: "center", sm: "space-between" },
                    padding: {
                        xs: "0 100px",
                        sm: "0 70px",
                        md: "0 80px",
                        lg: "0 170px",
                    },
                    flexDirection: { xs: "column", sm: "row" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: {
                            xs: "20px",
                            sm: "20px",
                            md: "30px",
                            lg: "80px",
                            xl: "120px",
                        },
                        textAlign: "left",
                        justifyContent: { xs: "center", md: "inherit" },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: "20px", sm: "30px" },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Jost",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: { xs: "17px", md: "20px" },
                                lineHeight: "29px",
                                color: "#212121",
                            }}
                        >
                            Company Info
                        </Typography>
                        <Typography
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
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "30px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Jost",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: { xs: "17px", md: "20px" },
                                lineHeight: "29px",
                                color: "#212121",
                            }}
                        >
                            Help & Support
                        </Typography>
                        <Typography
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
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "30px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Jost",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: { xs: "17px", md: "20px" },
                                lineHeight: "29px",
                                color: "#212121",
                            }}
                        >
                            Customer Care
                        </Typography>
                        <Typography
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
                    sx={{
                        textAlign: "left",
                        marginTop: { xs: "35px", sm: "0" },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Jost",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: { xs: "17px", md: "20px" },
                                color: "#212121",
                            }}
                        >
                            Signup For The Latest News
                        </Typography>
                        <Box
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
                                src={"/images/arrow.png"}
                                alt="arrowIcon"
                                width="15px"
                                height="15px"
                                style={{
                                    position: "absolute",
                                    top: "35%",
                                    right: { xs: "40%", sm: "10%" },
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
                            <Typography
                                sx={{
                                    fontSize: { xs: "14px", md: "20px" },
                                }}
                            >
                                <EmailOutlinedIcon
                                    sx={{
                                        fontSize: { xs: "17px", md: "20px" },
                                    }}
                                />
                                &nbsp;&nbsp;&nbsp;something@email.com
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: "14px", md: "20px" },
                                }}
                            >
                                <img
                                    src={"/images/Call.png"}
                                    alt="arrowIcon"
                                    width="15px"
                                    height="15px"
                                    sx={{
                                        fontSize: { xs: "17px", md: "20px" },
                                    }}
                                />
                                &nbsp;&nbsp;&nbsp;+2321354524
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    justifyContent: "center",
                    marginTop: "50px",
                }}
            >
                <img src={"/images/fb.png"} alt="socialIcon" />
                <img src={"/images/instagram.png"} alt="socialIcon" />
                <img src={"/images/youtube.png"} alt="socialIcon" />
                <img src={"/images/twitter.png"} alt="socialIcon" />
            </Box>
            <Box
                sx={{
                    border: "1px solid #9E9E9E",
                    padding: "0",
                    marginLeft: { md: "80px", lg: "170px" },
                    width: { xs: "68%", sm: "82%" },
                    margin: "30px auto 17px auto",
                }}
            ></Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: { xs: "space-around", md: "space-between" },
                    padding: { xs: "0 80px", lg: "0 170px" },
                    flexDirection: { xs: "column", sm: "row" },
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "Jost",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "14px",
                        color: "#6C7E99",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "Jost",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "14px",
                            color: "#7E92B3",
                        }}
                    >
                        All rights Reserved
                    </span>{" "}
                    &copy; Your Company, 2021
                </Typography>
                <Typography
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
                    <img src={"/images/madewithbyicon.png"} alt="socialIcon" />
                    &nbsp; Themewagon
                </Typography>
            </Box>
        </Box>
    );
};
