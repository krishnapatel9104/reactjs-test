import { Box, Grid } from "@mui/material";
import React from "react";
import { ImageConfig } from "../../images";

export const CountryLightSection = () => {
    const CountryLightImagesList = [ImageConfig.card1img, ImageConfig.card2img];
    return (
        <Box
            // className="countrylightImagesWrapper"
            sx={{
                // padding: "50px 250px",
                marginTop: { xs: "100px" },
                padding: {
                    xs: "0px 30px",
                    sm: "50px 65px",
                    lg: "50px 250px",
                },
            }}
        >
            <Grid container>
                {CountryLightImagesList.map((product) => {
                    return (
                        <Grid
                            item
                            sm={6}
                            xs={6}
                            // className="countryurbenimages"
                            sx={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                            }}
                        >
                            <img
                                src={product}
                                alt={"card3"}
                                width="100%"
                                height="100%"
                                style={{ objectFit: "contain" }}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};
