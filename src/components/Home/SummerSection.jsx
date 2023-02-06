import { Box, Grid } from "@mui/material";
import React from "react";

export const SummerSection = () => {
    const summerSectionImageList = [
        {
            id: 1,
            productImage: "/images/goggles.png",
        },
        {
            id: 2,
            productImage: "/images/shoes1card.png",
        },
        {
            id: 3,
            productImage: "/images/hats.png",
        },
        {
            id: 4,
            productImage: "/images/watches.png",
        },
    ];
    return (
        <Box
            sx={{
                marginTop: "50px",
                padding: {
                    xs: "0px 30px",
                    sm: "50px 65px",
                    lg: "50px 250px",
                },
            }}
        >
            <Grid container>
                <Grid item sm={6}>
                    <img
                        src={"/images/maincard.png"}
                        alt={"card3"}
                        height="100%"
                        width="100%"
                        style={{ objectFit: "cover" }}
                    />
                </Grid>
                <Grid item sm={6}>
                    <Grid container>
                        {summerSectionImageList.map((product) => {
                            return (
                                <Grid item sm={6} xs={6} key={product.id}>
                                    <img
                                        src={product.productImage}
                                        alt={"card3"}
                                        height="100%"
                                        width="100%"
                                        style={{ objectFit: "cover" }}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};
