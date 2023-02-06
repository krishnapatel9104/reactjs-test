import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

export const BeExclusive = () => {
    return (
        <Box
            sx={{
                // marginTop: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: {
                    xs: "0px 30px",
                    sm: "50px 65px",
                    lg: "50px 250px",
                },
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
                    xs={6}
                    sx={{
                        height: { xs: "350px", md: "500px", xl: "700px" },
                        backgroundColor: "#EEEEEE",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 0,
                        paddingTop: 0,
                        padding: { xs: "0 10px" },
                        // paddingLeft: "40px",
                        // paddingTop: "65px",
                        // gap: "10px",
                    }}
                >
                    <Box
                        sx={{
                            padding: { sm: "0 10px", md: "0 30px" },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Jost",
                                fontStyle: "normal",
                                fontWeight: "700",
                                color: "#616161",
                                fontSize: {
                                    xs: "14px",
                                    md: "20px",
                                    lg: "36px",
                                    xl: "42px",
                                    // sm: "15px",
                                    // xs: "12px",
                                },
                            }}
                        >
                            Exclusive collection 2021
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Jost",
                                fontStyle: "normal",
                                fontWeight: "700",
                                color: "#212121",
                                // fontSize: "61px",
                                fontSize: {
                                    xs: "24px",
                                    md: "28px",
                                    lg: "44px",
                                    xl: "48px",
                                    // sm: "15px",
                                    // xs: "12px",
                                },
                            }}
                        >
                            Be exclusive
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: "left",
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: {
                                    xs: "12px",
                                    md: "18px",
                                },
                                lineHeight: "140%",
                                color: "#424242",
                            }}
                        >
                            The best everyday option in a Super Saver range
                            within a reasonable price. It is our
                            responsibility to keep you 100 percent stylish. Be
                            smart & trendy with us.
                        </Typography>
                        <Box sx={{ textAlign: "left" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    marginTop: "50px",
                                    padding: {
                                        xs: "5px 20px",
                                        sm: "2px 15px",
                                        md: "10px 40px",
                                    },
                                    background: "#212121",
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    fontSize: {
                                        xs: "15px",
                                        sm: "12px",
                                        md: "20px",
                                    },
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
                    xs={6}
                    sx={{
                        height: { xs: "350px", md: "500px", xl: "700px" },
                        paddingTop: 0,
                    }}
                >
                    <img
                        src={"/images/Image.png"}
                        alt={"imageGirl"}
                        width="100%"
                        height="100%"
                        style={{ objectFit: "cover" }}
                    />
                </Grid>
                <Grid
                    item
                    sm={4}
                    xs={4}
                    sx={{
                        paddingLeft: 0,
                    }}
                >
                    <img
                        src={"/images/Item1.png"}
                        alt={"purse"}
                        height="100%"
                        width="100%"
                        style={{ objectFit: "cover" }}
                    />
                </Grid>
                <Grid
                    item
                    sm={4}
                    xs={4}
                    sx={{
                        paddingLeft: 0,
                    }}
                >
                    <img
                        src={"/images/Item2.png"}
                        alt={"hat"}
                        height="100%"
                        width="100%"
                        style={{ objectFit: "cover" }}
                    />
                </Grid>
                <Grid
                    item
                    sm={4}
                    xs={4}
                    sx={{
                        paddingLeft: 0,
                    }}
                >
                    <img
                        src={"/images/Item3.png"}
                        alt={"sandle"}
                        height="100%"
                        width="100%"
                        style={{ objectFit: "cover" }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
