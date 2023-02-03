import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ImageConfig } from "../../images";

export const CheckoutNewArrivals = () => {
    const checkoutImagesList = [
        ImageConfig.card1,
        ImageConfig.card2,
        ImageConfig.card3,
        ImageConfig.card4,
    ];
    return (
        <Box
            // className="newarrivalsWrapper"
            sx={{
                // padding: "50px 250px",
                padding: {
                    xs: "0px 30px",
                    sm: "50px 65px",
                    md: "50px 200px",
                    lg: "50px 250px",
                },
            }}
        >
            <Typography
                // className="newArrivalsTitle"
                sx={{
                    marginBottom: { md: "30px", lg: "50px" },
                    fontFamily: "Jost",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: {
                        xl: "42px",
                        md: "39px",
                        sm: "28px",
                        xs: "22px",
                    },
                    lineHeight: "56px",
                    color: "#212121",
                    marginTop: "20px",
                    textAlign: "center",
                }}
            >
                Checkout New Arrivals
            </Typography>
            <Grid container columnSpacing={1}>
                {checkoutImagesList.map((product) => {
                    return (
                        <Grid
                            item
                            sm={3}
                            xs={6}
                            // className="newArrivalsItem"
                            sx={{ width: "100%", height: "100%" }}
                        >
                            <img
                                src={product}
                                height="100%"
                                width="100%"
                                alt={"card1"}
                                style={{ objectFit: "cover" }}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};
