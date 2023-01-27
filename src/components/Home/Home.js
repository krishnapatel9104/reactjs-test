import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import "./style.css";
import { ImageConfig } from "../../images/index";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Navbar from "../Navbar/Navbar";
export const Home = () => {
    const productList = [
        "Clothes",
        "Bags",
        "Accessories",
        "Shoes",
        "Beauty",
        "Denim",
        "Coats & Jackets",
    ];
    const [toggleCategory, setToggleCategory] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const openCategory = (event) => {
        event.preventDefault();
        setIsOpen((prev) => !prev.isOpen);
        if (toggleCategory === 1) setToggleCategory(0.5);
        else setToggleCategory(1);
    };

    useEffect(() => {
        document.getElementById("mainWrapper").style.opacity = toggleCategory;
    }, [toggleCategory, isOpen]);

    return (
        <>
            {toggleCategory === 0.5 && isOpen && (
                <>
                    <Navbar clickHandler={openCategory} />
                    <Box className="categoryWrapper">
                        <Box className="categorysection">
                            <Box className="categoryleftside">
                                <Box className="menucolumn">
                                    <Typography className="categoryheading">
                                        Products
                                    </Typography>
                                    {productList.map((product, index) => {
                                        return (
                                            <a
                                                className="categoryitem"
                                                key={index}
                                                href={"/categorydetails"}
                                            >
                                                {product}
                                            </a>
                                        );
                                    })}
                                </Box>
                                <Box className="menucolumn">
                                    <Typography className="categoryheading">
                                        Help & Support
                                    </Typography>
                                    {productList.map((product, index) => {
                                        return (
                                            <a
                                                className="categoryitem"
                                                key={index}
                                                href={" "}
                                            >
                                                {product}
                                            </a>
                                        );
                                    })}
                                </Box>
                                <Box className="menucolumn">
                                    <Typography className="categoryheading">
                                        Archived collections
                                    </Typography>
                                    {productList.map((product, index) => {
                                        return (
                                            <a
                                                className="categoryitem"
                                                key={index}
                                                href={" "}
                                            >
                                                {product}
                                            </a>
                                        );
                                    })}
                                </Box>
                            </Box>
                            <Box className="categoryrightside">
                                <Box className="categorycontactside">
                                    <img
                                        src={ImageConfig.catgeorymenuimg}
                                        alt="socialIcon"
                                    />
                                    <Typography>
                                        Sales on ChanelAccessories
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </>
            )}
            <Box className={"mainWrapper"} id="mainWrapper">
                {/* header section */}
                <Box className={"headerWrapper"}>
                    {toggleCategory === 1 && (
                        <>
                            <img
                                src={ImageConfig.headerback}
                                alt={"Majestic"}
                                className={"headerbackimg"}
                            />
                            <Navbar clickHandler={openCategory} />
                        </>
                    )}
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
                    <Typography className="bestdealheading">
                        Best Deals
                    </Typography>
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
                                    The best everyday option in a Super Saver
                                    range within a reasonable price. It is our
                                    responsibility to keep you 100 percent
                                    stylish. Be smart & trendy with us.
                                </Typography>
                                <Box className={"view-all-btn"}>
                                    <Button variant="contained">Explore</Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item sm={6} className={"imageTextSection"}>
                            <img
                                src={ImageConfig.imageGirl}
                                alt={"imageGirl"}
                            />
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
                    <Typography className="bestdealheading">
                        Best Seller
                    </Typography>
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
                                    <img
                                        src={ImageConfig.goggles}
                                        alt={"card3"}
                                    />
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
                                    <img
                                        src={ImageConfig.watches}
                                        alt={"card3"}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* gentle formal looks section */}
                <Box className="gentleformallooksection">
                    <Grid container>
                        <Grid item sm={6}>
                            <Box className="textSection1">
                                <Typography className="gentleformalText">
                                    Gentle Formal Looks
                                </Typography>
                                <Typography className="subtextexeclusive">
                                    We provide the top formal apparel package to
                                    make your job look confident and
                                    comfortable. Stay connect.
                                </Typography>
                                <Box className={"view-all-btn"}>
                                    <Button variant="contained">
                                        Explore Collection
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item sm={6}>
                            <img src={ImageConfig.imagemen} alt={"imageGirl"} />
                        </Grid>
                    </Grid>
                </Box>
                {/* card footer section */}
                <Box className="cardfootersection">
                    <Grid container>
                        <Grid item sm={4}>
                            <Box sx={{ position: "relative" }}>
                                <img
                                    src={ImageConfig.cardimg1}
                                    alt={"imageGirl"}
                                    className="maincardimg"
                                />
                                <Box className="secondtextcontainer">
                                    <Box className="cover">
                                        <img
                                            src={ImageConfig.cardimg4}
                                            alt={"imageGirl"}
                                            height="89px"
                                            width="89px"
                                        />
                                        <Box>
                                            <img
                                                src={ImageConfig.view}
                                                alt={"imageGirl"}
                                                className="iconImg"
                                            />
                                            35
                                        </Box>
                                        <Box>
                                            <img
                                                src={ImageConfig.like}
                                                alt={"imageGirl"}
                                                className="iconImg"
                                            />
                                            23
                                        </Box>
                                        <Box>
                                            <img
                                                src={ImageConfig.arrow}
                                                alt={"imageGirl"}
                                                className="iconImg"
                                            />
                                            14
                                        </Box>
                                    </Box>
                                    <Box className="alltxtsection">
                                        <Typography className="txt1">
                                            Kelly Hudson .{" "}
                                            <span>Fashion activist</span>
                                        </Typography>
                                        <Typography className="txt2">
                                            How important are shoes in your
                                            style?
                                        </Typography>
                                        <Typography className="txt3">
                                            Is it possible to assess a person
                                            just on the basis of their footwear?
                                            Obviously, nobody should criticize,
                                            but certainly, shoes say a lot about
                                            someone. It matters for the
                                            outsiders that we meet every day...
                                        </Typography>
                                        <Box className="iconarrow">
                                            <Typography>Read more</Typography>
                                            <span>
                                                <img
                                                    src={ImageConfig.arrow}
                                                    alt={"imageGirl"}
                                                />
                                            </span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item sm={4} style={{ position: "relative" }}>
                            <Box sx={{ position: "relative" }}>
                                <img
                                    src={ImageConfig.cardimg2}
                                    alt={"imageGirl"}
                                    className="maincardimg"
                                />
                                <Box className="secondtextcontainer">
                                    <Box className="cover">
                                        <img
                                            src={ImageConfig.cardimg4}
                                            alt={"imageGirl"}
                                            height="89px"
                                            width="89px"
                                        />
                                        <Box>
                                            <img
                                                src={ImageConfig.view}
                                                alt={"imageGirl"}
                                                className="iconImg"
                                            />
                                            35
                                        </Box>
                                        <Box>
                                            <img
                                                src={ImageConfig.like}
                                                alt={"imageGirl"}
                                                className="iconImg"
                                            />
                                            23
                                        </Box>
                                        <Box>
                                            <img
                                                src={ImageConfig.arrow}
                                                alt={"imageGirl"}
                                                className="iconImg"
                                            />
                                            14
                                        </Box>
                                    </Box>
                                    <Box className="alltxtsection">
                                        <Typography className="txt1">
                                            Kelly Hudson .{" "}
                                            <span>Fashion activist</span>
                                        </Typography>
                                        <Typography className="txt2">
                                            How important are shoes in your
                                            style?
                                        </Typography>
                                        <Typography className="txt3">
                                            Is it possible to assess a person
                                            just on the basis of their footwear?
                                            Obviously, nobody should criticize,
                                            but certainly, shoes say a lot about
                                            someone. It matters for the
                                            outsiders that we meet every day...
                                        </Typography>
                                        <Box className="iconarrow">
                                            <Typography>Read more</Typography>
                                            <span>
                                                <img
                                                    src={ImageConfig.arrow}
                                                    alt={"imageGirl"}
                                                />
                                            </span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item sm={4} style={{ position: "relative" }}>
                            <Box sx={{ position: "relative" }}>
                                <img
                                    src={ImageConfig.cardimg3}
                                    alt={"imageGirl"}
                                    className="maincardimg"
                                />
                                <Box className="secondtextcontainer">
                                    <Box className="cover">
                                        <img
                                            src={ImageConfig.cardimg4}
                                            alt={"imageGirl"}
                                            height="89px"
                                            width="89px"
                                        />
                                        <Box>
                                            <img
                                                src={ImageConfig.view}
                                                alt={"imageGirl"}
                                                className="iconImg"
                                            />
                                            35
                                        </Box>
                                        <Box>
                                            <img
                                                src={ImageConfig.like}
                                                alt={"imageGirl"}
                                                className="iconImg"
                                            />
                                            23
                                        </Box>
                                        <Box>
                                            <img
                                                src={ImageConfig.arrow}
                                                alt={"imageGirl"}
                                                className="iconImg"
                                            />
                                            14
                                        </Box>
                                    </Box>
                                    <Box className="alltxtsection">
                                        <Typography className="txt1">
                                            Kelly Hudson .{" "}
                                            <span>Fashion activist</span>
                                        </Typography>
                                        <Typography className="txt2">
                                            How important are shoes in your
                                            style?
                                        </Typography>
                                        <Typography className="txt3">
                                            Is it possible to assess a person
                                            just on the basis of their footwear?
                                            Obviously, nobody should criticize,
                                            but certainly, shoes say a lot about
                                            someone. It matters for the
                                            outsiders that we meet every day...
                                        </Typography>
                                        <Box className="iconarrow">
                                            <Typography>Read more</Typography>
                                            <span>
                                                <img
                                                    src={ImageConfig.arrow}
                                                    alt={"imageGirl"}
                                                />
                                            </span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* footer slider section */}
                <Box className="footerslidersection">
                    <img
                        src={ImageConfig.footersliderimage}
                        alt="footerslider"
                        className="footersliderimage"
                    />
                    <Box className="overlayfooterslider">
                        <img
                            src={ImageConfig.overlay}
                            alt="footerslider"
                            className="footersliderimage"
                        />
                    </Box>
                    <Box className="footersildercontentwrapper">
                        <Typography className="footerslidertext1">
                            Visit our outlets in
                        </Typography>
                        <Box className="footerslidertext2">
                            <img
                                src={ImageConfig.vectorleftwhite}
                                alt="footerslider"
                            />
                            <Typography className="slidertext2">
                                Berlin
                            </Typography>
                            <img
                                src={ImageConfig.vectorrightwhite}
                                alt="footerslider"
                            />
                        </Box>
                        <Box className="seeaddresssection">
                            <Typography className="footerslidertext3">
                                See Addresses
                            </Typography>
                            <img
                                src={ImageConfig.arrowwhite}
                                alt="footerslider"
                            />
                        </Box>
                    </Box>
                </Box>
                {/* footer section */}
                <Box className="footerWrapper">
                    <Box className="footersection">
                        <Box className="footerleftside">
                            <Box className="menucolumn">
                                <Typography className="footerheading">
                                    Company Info
                                </Typography>
                                <Typography className="footermenuitem">
                                    About Us
                                </Typography>
                                <Typography className="footermenuitem">
                                    Affliate
                                </Typography>
                                <Typography className="footermenuitem">
                                    Fashion Blogger
                                </Typography>
                            </Box>
                            <Box className="menucolumn">
                                <Typography className="footerheading">
                                    Help & Support
                                </Typography>
                                <Typography className="footermenuitem">
                                    Shipping Info
                                </Typography>
                                <Typography className="footermenuitem">
                                    Refunds
                                </Typography>
                                <Typography className="footermenuitem">
                                    How to Order
                                </Typography>
                                <Typography className="footermenuitem">
                                    How to Track
                                </Typography>
                                <Typography className="footermenuitem">
                                    Size Guides
                                </Typography>
                            </Box>
                            <Box className="menucolumn">
                                <Typography className="footerheading">
                                    Customer Care
                                </Typography>
                                <Typography className="footermenuitem">
                                    Contact Us
                                </Typography>
                                <Typography className="footermenuitem">
                                    Payment Methods
                                </Typography>
                                <Typography className="footermenuitem">
                                    Bonus Point
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="footerrightside">
                            <Box className="footercontactside">
                                <Typography className="footerheading">
                                    Signup For The Latest News
                                </Typography>
                                <Box className="searchBox">
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Email"
                                        variant="outlined"
                                    />
                                    <img
                                        src={ImageConfig.arrow}
                                        alt="arrowIcon"
                                        className="arrowIcon"
                                    />
                                </Box>
                                <Box
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "5px",
                                    }}
                                >
                                    <Typography>
                                        <EmailOutlinedIcon />
                                        &nbsp;&nbsp;&nbsp;something@email.com
                                    </Typography>
                                    <Typography>
                                        <img
                                            src={ImageConfig.call}
                                            alt="arrowIcon"
                                        />
                                        &nbsp;&nbsp;&nbsp;+2321354524
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="socialmediaicon">
                        <img src={ImageConfig.fb} alt="socialIcon" />
                        <img src={ImageConfig.instagram} alt="socialIcon" />
                        <img src={ImageConfig.youtube} alt="socialIcon" />
                        <img src={ImageConfig.twitter} alt="socialIcon" />
                    </Box>
                    <Box className="bordersection"></Box>
                    <Box className="copyrightfootersection">
                        <Typography className="copyrighttext">
                            <span>All rights Reserved</span> &copy; Your
                            Company, 2021
                        </Typography>
                        <Typography
                            className="copyrighttext"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={ImageConfig.madewithbyicon}
                                alt="socialIcon"
                            />
                            &nbsp; Themewagon
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
