import { Box, Grid } from "@mui/material";
import React from "react";
import { ImageConfig } from "../../images";

export const SummerSection = () => {
    const summerSectionImageList = [
        ImageConfig.goggles,
        ImageConfig.shoes1card,
        ImageConfig.hats,
        ImageConfig.watches,
    ];
    return (
        <Box
            // className="summarImageWrapper"
            sx={{
                // padding: "50px 250px",
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
                        src={ImageConfig.maincard}
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
                                <Grid item sm={6} xs={6}>
                                    <img
                                        src={product}
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
