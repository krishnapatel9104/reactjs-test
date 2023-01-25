import React from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import "./style.css";
import { ImageConfig } from "../../images/index";

export const Home = () => {
    return (
        <Box className={"mainWrapper"}>
            {/* header section */}
            <Box className={"headerWrapper"}>
                <img
                    src={ImageConfig.headerback}
                    alt={"Majestic"}
                    className={"headerbackimg"}
                />
                <Box className={"navWrapper"}>
                    <Box className={"menuWrapper"}>
                        <Box className={"logo"}>
                            <img
                                src={ImageConfig.logo}
                                alt={"Majestic"}
                                className={"logoimg"}
                            />
                            Majestic
                        </Box>
                        <a href={" "}>Women</a>
                        <a href={" "}>Men</a>
                        <a href={" "}>Collection</a>
                        <a href={" "}>Outlet</a>
                    </Box>
                    <Box className={"iconWrapper"}>
                        <img
                            src={ImageConfig.call}
                            alt={"call"}
                            className={"icon"}
                        />
                        <img
                            src={ImageConfig.cart}
                            alt={"cart"}
                            className={"icon"}
                        />
                        <img
                            src={ImageConfig.search}
                            alt={"search"}
                            className={"icon"}
                        />
                        <img
                            src={ImageConfig.login}
                            alt={"login"}
                            className={"icon"}
                        />
                        <img
                            src={ImageConfig.like}
                            alt={"like"}
                            className={"icon"}
                        />
                    </Box>
                </Box>

                <Box className={"textSection"}>
                    <Typography className={"text1"}>
                        With an outstanding style, only for you
                    </Typography>
                    <Typography className={"text2"}>
                        Exclusively designed for you
                    </Typography>
                </Box>

                <Box className={"imageSection"}>
                    <Box className={"imageCover"}>
                        <img
                            src={ImageConfig.left}
                            alt={"call"}
                            className={"img"}
                        />
                        <Box className={"imageTextHer imageText"}>
                            <Typography className="p">For Her</Typography>
                        </Box>
                        <img
                            src={ImageConfig.right}
                            alt={"cart"}
                            className={"img"}
                        />
                        <Box className={"imageTextHim imageText"}>
                            <Typography className="p">For Him</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={"bestdealWrapper"}>
                <Typography className="bestdealheading">Best Deals</Typography>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Grid item sm={2}>
                        <img src={ImageConfig.vectorLeft} alt="shandle" />
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <Box className="imageBox">
                            <img
                                src={ImageConfig.shandle}
                                alt="shandle"
                                className="img12"
                            />
                        </Box>
                        {/* <img
                            src={ImageConfig.shandle}
                            alt="shandle"
                            style={{ marginBottom: "50px", height: "197px" }}
                        /> */}
                        <Typography className="itemname">
                            Flat Hill Slingback
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <Box className="imageBox">
                            <img
                                src={ImageConfig.bangles}
                                alt="shandle"
                                className="img12"
                            />
                        </Box>
                        {/* <img src={ImageConfig.bangles} alt="shandle" /> */}
                        <Typography className="itemname">
                            Ocean Blue Ring
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <Box className="imageBox">
                            <img
                                src={ImageConfig.purse}
                                alt="shandle"
                                className="img12"
                            />
                        </Box>
                        {/* <img src={ImageConfig.purse} alt="shandle" /> */}
                        <Typography className="itemname">
                            Brown Leathered Wallet
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <Box className="imageBox">
                            <img
                                src={ImageConfig.watch}
                                alt="shandle"
                                className="img12"
                            />
                        </Box>
                        {/* <img src={ImageConfig.watch} alt="shandle" /> */}
                        <Typography className="itemname">
                            Silverside Wristwatch
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <img src={ImageConfig.vectorRight} alt="shandle" />
                    </Grid>
                </Grid>
                <Box className={"view-all-btn"}>
                    <Button variant="contained">View All</Button>
                </Box>
            </Box>
            <Box className={"beexclusiveWrapper"}>
                <Grid
                    container
                    spacing={2}
                    rowSpacing={1}
                    columnSpacing={{ sm: 1 }}
                >
                    <Grid item sm={6} className="imageTextSection">
                        <Box className="textSection1">
                            <Typography className="exclusiveText">
                                Exclusive collection 2021
                            </Typography>
                            <Typography className="beexeclusiveText">
                                Be exclusive
                            </Typography>
                            <Typography className="subtextexeclusive">
                                The best everyday option in a Super Saver range
                                within a reasonable price. It is our
                                responsibility to keep you 100 percent stylish.
                                Be smart & trendy with us.
                            </Typography>
                            <Box className={"view-all-btn"}>
                                <Button variant="contained">Explore</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={6} className={"imageTextSection"}>
                        <img src={ImageConfig.imageGirl} alt={"imageGirl"} />
                    </Grid>
                    <Grid item sm={4} className={"imageSection"}>
                        <img src={ImageConfig.purse1} alt={"purse"} />
                    </Grid>
                    <Grid item sm={4} className={"imageSection"}>
                        <img src={ImageConfig.hat} alt={"hat"} />
                    </Grid>
                    <Grid item sm={4} className={"imageSection"}>
                        <img src={ImageConfig.sandle1} alt={"sandle"} />
                    </Grid>
                </Grid>
            </Box>
            {/* checkout new arrivals section */}
            <Box className="newarrivalsWrapper">
                <Typography className="newArrivalsTitle">
                    Checkout New Arrivals
                </Typography>
                <Grid container columnSpacing={1}>
                    <Grid item sm={3} className="newArrivalsItem">
                        <img src={ImageConfig.card1} alt={"card1"} />
                    </Grid>
                    <Grid item sm={3} className="newArrivalsItem">
                        <img src={ImageConfig.card2} alt={"card2"} />
                    </Grid>
                    <Grid item sm={3} className="newArrivalsItem">
                        <img src={ImageConfig.card3} alt={"card3"} />
                    </Grid>
                    <Grid item sm={3} className="newArrivalsItem">
                        <img src={ImageConfig.card4} alt={"card4"} />
                    </Grid>
                </Grid>
            </Box>

            {/* shop by category section */}
            <Box className="shopbycategoryWrapper">
                <Typography className="newArrivalsTitle">
                    Shop By Category
                </Typography>
                <Box className="categoryOption">
                    <Link href="#">For Women</Link>
                    <Link href="#" className="activeCategoryOption">
                        For Men
                    </Link>
                </Box>
                <Box className="categoryList">
                    <Link href="#">T-shirt</Link>
                    <Link href="#">Shirt</Link>
                    <Link href="#" className="activeCategoryListOption">
                        shoes
                    </Link>
                    <Link href="#">Watch</Link>
                    <Link href="#">Subglasses</Link>
                    <Link href="#">Bagpacks</Link>
                </Box>

                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Grid item sm={2}>
                        <img src={ImageConfig.vectorLeft} alt="shandle" />
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <Box className="imageBox">
                            <img
                                src={ImageConfig.shoes1}
                                alt="shandle"
                                className="img12"
                            />
                        </Box>
                        {/* <img
                            src={ImageConfig.shoes1}
                            alt="shandle"
                            style={{ marginBottom: "50px", height: "197px" }}
                        /> */}
                        <Typography className="itemname">
                            Flat Hill Slingback
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <Box className="imageBox">
                            <img
                                src={ImageConfig.shoes2}
                                alt="shandle"
                                className="img12"
                            />
                        </Box>
                        <Typography className="itemname">
                            Ocean Blue Ring
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <Box className="imageBox">
                            <img
                                src={ImageConfig.shoes3}
                                alt="shandle"
                                className="img12"
                            />
                        </Box>
                        <Typography className="itemname">
                            Brown Leathered Wallet
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <Box className="imageBox">
                            <img
                                src={ImageConfig.shoes4}
                                alt="shandle"
                                className="img12"
                            />
                        </Box>
                        <Typography className="itemname">
                            Silverside Wristwatch
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <img
                            src={ImageConfig.vectorRight}
                            alt="shandle"
                            className="img12"
                        />
                    </Grid>
                </Grid>
                <Box className={"view-all-btn"}>
                    <Button variant="contained">View All</Button>
                </Box>
            </Box>

            {/* country lights section */}
            <Box className="countrylightImagesWrapper">
                <Grid container>
                    <Grid item sm={6} className="countryurbenimages">
                        <img src={ImageConfig.card1img} alt={"card3"} />
                    </Grid>
                    <Grid item sm={6} className="countryurbenimages">
                        <img src={ImageConfig.card2img} alt={"card3"} />
                    </Grid>
                </Grid>
            </Box>

            {/* best seller section */}
            <Box className="bestsellerWrapper">
                <Typography className="bestdealheading">Best Seller</Typography>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Grid item sm={2}>
                        <img src={ImageConfig.vectorLeft} alt="shandle" />
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <Box className="imageBox">
                            <img
                                src={ImageConfig.purse2}
                                alt="shandle"
                                className="img12"
                            />
                        </Box>
                        {/* <img
                            src={ImageConfig.shoes1}
                            alt="shandle"
                            style={{ marginBottom: "50px", height: "197px" }}
                        /> */}
                        <Typography className="itemname">
                            Flat Hill Slingback
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <Box className="imageBox">
                            <img
                                src={ImageConfig.earning}
                                alt="shandle"
                                className="img12"
                            />
                        </Box>
                        <Typography className="itemname">
                            Ocean Blue Ring
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <Box className="imageBox">
                            <img
                                src={ImageConfig.watch1}
                                alt="shandle"
                                className="img12"
                            />
                        </Box>
                        <Typography className="itemname">
                            Brown Leathered Wallet
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={2}
                        sx={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                        }}
                        className={"griditem"}
                    >
                        <Box className="imageBox">
                            <img
                                src={ImageConfig.tie}
                                alt="shandle"
                                style={{ objectFit: "contain" }}
                            />
                        </Box>
                        <Typography className="itemname">
                            Silverside Wristwatch
                        </Typography>
                        <Typography className="itemprice">
                            <span className="originalprice">$299</span>
                            &nbsp;&nbsp;
                            <span className="currentprice">$163</span>
                        </Typography>
                    </Grid>
                    <Grid item sm={2}>
                        <img
                            src={ImageConfig.vectorRight}
                            alt="shandle"
                            className="img12"
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* summar section */}
            <Box className="summarImageWrapper">
                <Grid container>
                    <Grid item sm={6}>
                        <img src={ImageConfig.maincard} alt={"card3"} />
                    </Grid>
                    <Grid item sm={6}>
                        <Grid container>
                            <Grid item sm={6}>
                                <img src={ImageConfig.goggles} alt={"card3"} />
                            </Grid>
                            <Grid item sm={6}>
                                <img
                                    src={ImageConfig.shoes1card}
                                    alt={"card3"}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item sm={6}>
                                <img src={ImageConfig.hats} alt={"card3"} />
                            </Grid>
                            <Grid item sm={6}>
                                <img src={ImageConfig.watches} alt={"card3"} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
