import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import theme from "../../theme";

export const CheckoutNewArrivals = () => {
    const checkoutImagesList = [
        {
            id: 1,
            productImage: "/images/Card1.jpg",
        },
        {
            id: 2,
            productImage: "/images/Card2.png",
        },
        {
            id: 3,
            productImage: "/images/Card3.png",
        },
        {
            id: 4,
            productImage: "/images/Card4.png",
        },
    ];
    return (
        <Box
            sx={{
                padding: {
                    xs: "0px 30px",
                    sm: "50px 65px",
                    md: "50px 200px",
                    lg: "50px 250px",
                },
            }}
        >
            <Typography
                sx={{
                    marginBottom: { xs: "40px", md: "30px", lg: "50px" },
                    fontFamily: theme.typography.titleHeading.fontFamily,
                    fontWeight: "700",
                    fontSize: {
                        xl: "42px",
                        md: "39px",
                        sm: "28px",
                        xs: "22px",
                    },
                    color: "#212121",
                    marginTop: { xs: "40px", sm: "0px" },
                    textAlign: "center",
                }}
            >
                Checkout New Arrivals
            </Typography>
            <Grid container columnSpacing={1}>
                {checkoutImagesList.map((product) => {
                    return (
                        <Grid
                            key={product.id}
                            item
                            sm={3}
                            xs={6}
                            sx={{ width: "100%", height: "100%" }}
                        >
                            <img
                                src={product.productImage}
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
