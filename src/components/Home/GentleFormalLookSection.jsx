import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";

export const GentleFormalLookSection = () => {
    return (
        <Box
            sx={{
                padding: {
                    xs: "0px 30px",
                    sm: "50px 65px",
                    lg: "50px 250px",
                },
                marginTop: "50px",
                marginBottom: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Grid container>
                <Grid
                    item
                    sm={6}
                    sx={{
                        height: { xs: "500px", xl: "700px" },
                        backgroundColor: "#EEEEEE",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 0,
                        paddingTop: 0,
                    }}
                >
                    <Box
                        sx={{
                            padding: "0 40px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily:
                                    theme.typography.titleHeading.fontFamily,
                                fontWeight: "700",
                                fontSize: {
                                    xs: "22px",
                                    md: "36px",
                                    lg: "40px",
                                    xl: "42px",
                                },
                                color: theme.palette.primary.main,
                            }}
                        >
                            Gentle Formal Looks
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: "left",
                                fontFamily: theme.typography.desc.fontFamily,
                                fontWeight: "400",
                                fontSize: "16px",
                                color: theme.palette.secondary.main,
                            }}
                        >
                            We provide the top formal apparel package to make
                            your job look confident and comfortable. Stay
                            connect.
                        </Typography>
                        <Box sx={{ textAlign: "left" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    marginTop: "50px",
                                    padding: "10px 40px",
                                    background: "#212121",
                                    fontFamily:
                                        theme.typography.titleHeading
                                            .fontFamily,
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    color: "#FFFFFF",
                                }}
                            >
                                Explore Collection
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    sm={6}
                    sx={{
                        height: { xs: "500px", xl: "700px" },
                    }}
                >
                    <img
                        src={"/images/Imagemen.png"}
                        alt={"imageGirl"}
                        height="100%"
                        width="100%"
                        style={{ objectFit: "cover" }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
