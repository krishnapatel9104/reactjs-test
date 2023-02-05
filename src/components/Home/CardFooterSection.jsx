import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const CardFooterSection = () => {
    const cardFooterInformation = [
        {
            id: "1",
            imageSource: "/images/cardimg1.png",
            secondaryImageSource: "/images/cardimg4.png",
            views: 35,
            likes: 23,
            shares: 14,
            title: "Kelly Hudson",
            subTitle: "Fashion activist",
            question: "How important are shoes in your style?",
            answer: "Is it possible to assess a person just on the basis of their footwear? Obviously, nobody should criticize, but certainly, shoes say a lot about someone. It matters for the outsiders that we meet every day...",
        },
        {
            id: "2",
            imageSource: "/images/cardimg2.png",
            secondaryImageSource: "/images/cardimg4.png",
            views: 35,
            likes: 23,
            shares: 14,
            title: "Judy Garland",
            subTitle: "Fashion activist",
            question: "How important are shoes in your style?",
            answer: "Is it possible to assess a person just on the basis of their footwear? Obviously, nobody should criticize, but certainly, shoes say a lot about someone. It matters for the outsiders that we meet every day...",
        },
        {
            id: "3",
            imageSource: "/images/cardimg3.png",
            secondaryImageSource: "/images/cardimg4.png",
            views: 35,
            likes: 23,
            shares: 14,
            title: "Rachel Green",
            subTitle: "Fashion activist",
            question: "How important are shoes in your style?",
            answer: "Is it possible to assess a person just on the basis of their footwear? Obviously, nobody should criticize, but certainly, shoes say a lot about someone. It matters for the outsiders that we meet every day...",
        },
    ];
    return (
        <Box
            // className="cardfootersection"
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
            <Grid
                container
                sx={{
                    flexDirection: { xs: "row" },
                }}
            >
                {cardFooterInformation.map((product) => {
                    return (
                        <Grid item xs={12} sm={6} lg={4} xl={4}>
                            <Box
                                sx={{
                                    position: "relative",
                                    marginBottom: {
                                        xs: "500px",
                                        sm: "400px",
                                        md: "450px",
                                    },
                                }}
                            >
                                <img
                                    src={product.imageSource}
                                    alt={"imageGirl"}
                                    // className="maincardimg"
                                    height="100%"
                                    width="100%"
                                    style={{ objectFit: "cover" }}
                                />
                                <Box
                                    // className="secondtextcontainer"
                                    sx={{
                                        position: "absolute",
                                        top: "90%",
                                        padding: {
                                            xs: "0 20px",
                                            sm: "0 70px",
                                            md: "0 50px",
                                            lg: "0 15px",
                                            xl: "0 65px",
                                        },
                                    }}
                                >
                                    <Box
                                        // className="cover"
                                        sx={{
                                            display: "flex",
                                            gap: "20px",
                                            alignItems: "center",
                                            background: "#FCFCFC",
                                            marginBottom: "25px",
                                        }}
                                    >
                                        <img
                                            src={product.secondaryImageSource}
                                            alt={"imageGirl"}
                                            height="89px"
                                            width="89px"
                                        />
                                        <Box>
                                            <img
                                                src={"/images/view.png"}
                                                alt={"imageGirl"}
                                                // className="iconImg"
                                                width="17px"
                                                heigh="14px"
                                                style={{ marginRight: "10px" }}
                                            />
                                            {product.views}
                                        </Box>
                                        <Box>
                                            <img
                                                src={"/images/Like.png"}
                                                alt={"imageGirl"}
                                                // className="iconImg"
                                                width="17px"
                                                heigh="14px"
                                                style={{ marginRight: "10px" }}
                                            />
                                            {product.likes}
                                        </Box>
                                        <Box>
                                            <img
                                                src={"/images/arrow.png"}
                                                alt={"imageGirl"}
                                                // className="iconImg"
                                                width="17px"
                                                heigh="14px"
                                                style={{ marginRight: "10px" }}
                                            />
                                            {product.shares}
                                        </Box>
                                    </Box>
                                    <Box
                                        // className="alltxtsection"
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "30px",
                                            textAlign: "left",
                                        }}
                                    >
                                        <Typography
                                            // className="txt1"
                                            sx={{
                                                fontFamily: "Jost",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "16px",
                                                lineHeight: "23px",
                                                color: "#424242",
                                                textAlign: "left",
                                            }}
                                        >
                                            {product.title} .
                                            <span
                                                style={{
                                                    fontFamily: "Jost",
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "16px",
                                                    lineHeight: "23px",
                                                    color: "#424242",
                                                }}
                                            >
                                                {product.subTitle}
                                            </span>
                                        </Typography>
                                        <Typography
                                            // className="txt2"
                                            sx={{
                                                fontFamily: "Jost",
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "25px",
                                                lineHeight: "120%",
                                                color: "#212121",
                                            }}
                                        >
                                            {product.question}
                                        </Typography>
                                        <Typography
                                            // className="txt3"
                                            sx={{
                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "16px",
                                                lineHeight: "140%",
                                                color: "#424242",
                                            }}
                                        >
                                            {product.answer}
                                        </Typography>
                                        <Box
                                            // className="iconarrow"
                                            sx={{
                                                display: "flex",
                                                gap: "15px",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography>Read more</Typography>
                                            <span>
                                                <img
                                                    src={"/images/arrow.png"}
                                                    alt={"imageGirl"}
                                                    width="18px"
                                                    height="18px"
                                                />
                                            </span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};
