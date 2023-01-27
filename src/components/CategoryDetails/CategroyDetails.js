import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Pagination,
    Slider,
    Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import { ImageConfig } from "../../images/index";
import { categoryProductList } from "./../../data/categoryProductList";
import { useNavigate } from "react-router-dom";

export const CategroyDetails = () => {
    const maincategoryfilter = ["Women", "Ladies", "Girls", "Babies"];
    const brandfilter = [
        "H&M",
        "Mark & Spencer",
        "Victoria’s Secret",
        "Dior",
        "Gucci",
        "Fendi",
        "Prada",
        "Chanel",
        "Versace",
        "Dolce & Gabbana",
        "Zara",
    ];
    const categoryfilter = [
        "Dresses",
        "Tops",
        "Lingerie & Lounge Wear",
        "Blouse",
        "Vintage",
    ];
    const sizefilter = ["Medium", "Large", "Plus Size", "Sexy Plus Size"];
    const navigate = useNavigate();
    const [value, setValue] = React.useState([20, 80]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function valuetext(value) {
        return `$${value}`;
    }
    const handleProductClick = (productDetail) => {
        console.log("click img  : ", productDetail);
        navigate("/itemdetailview");
    };
    return (
        <>
            <Box className="categorydetailwrapper">
                <Navbar />
                <Box className="categorydetailsection">
                    <Box className="filtersidebar">
                        <Box sx={{ marginTop: "70px" }}>
                            <Typography className="filterheading">
                                Filter
                            </Typography>
                        </Box>
                        <Box className="pricefilter">
                            <Typography className="filterheading">
                                PRICES
                            </Typography>
                            <Box className="rangepricefilter">
                                <Typography
                                    id="range-slider"
                                    gutterBottom
                                    className="rangetxt"
                                >
                                    Range
                                </Typography>
                                <Typography
                                    id="range-slider"
                                    gutterBottom
                                    className="pricerangevalue"
                                >
                                    $120-$300
                                </Typography>
                            </Box>
                            <Slider
                                className="sliderpricerange"
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                            />
                        </Box>
                        <Box className="maincategoryfilter">
                            <Typography className="filterheading">
                                FILTERS
                            </Typography>
                            {maincategoryfilter.map((filter, index) => {
                                return (
                                    <FormGroup className="filteritem">
                                        <FormControlLabel
                                            key={index}
                                            control={<Checkbox />}
                                            label={filter}
                                        />
                                    </FormGroup>
                                );
                            })}
                        </Box>
                        <Box className="brandfilter">
                            <Typography className="filterheading">
                                BRANDS
                            </Typography>
                            {brandfilter.map((filter, index) => {
                                return (
                                    <>
                                        {index < 10 ? (
                                            <FormGroup className="filteritem">
                                                <FormControlLabel
                                                    key={index}
                                                    control={<Checkbox />}
                                                    label={filter}
                                                />
                                            </FormGroup>
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                );
                            })}
                            {brandfilter.length > 10 ? (
                                <Typography className="moreoption">
                                    +10 more
                                </Typography>
                            ) : (
                                <div>jkbjkkjkk</div>
                            )}
                        </Box>
                        <Box className="categoryfilter">
                            <Typography className="filterheading">
                                CATEGORIES
                            </Typography>
                            {categoryfilter.map((filter, index) => {
                                return (
                                    <>
                                        {index < 4 ? (
                                            <FormGroup className="filteritem">
                                                <FormControlLabel
                                                    key={index}
                                                    control={<Checkbox />}
                                                    label={filter}
                                                />
                                            </FormGroup>
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                );
                            })}
                            {categoryfilter.length > 4 ? (
                                <Typography className="moreoption">
                                    +10 more
                                </Typography>
                            ) : (
                                <div>jkbjkkjkk</div>
                            )}
                        </Box>
                        <Box className="sizefilter">
                            <Typography className="filterheading">
                                SIZE
                            </Typography>
                            {sizefilter.map((filter, index) => {
                                return (
                                    <FormGroup className="filteritem">
                                        <FormControlLabel
                                            key={index}
                                            control={<Checkbox />}
                                            label={filter}
                                        />
                                    </FormGroup>
                                );
                            })}
                        </Box>
                    </Box>
                    <Box className="filterproductsection">
                        <Box className="rightsideheading">
                            <Typography>Women Party Dresses</Typography>
                            <Typography className="totalresult">
                                568 results
                            </Typography>
                        </Box>
                        <Box className="productListSection">
                            <Grid container columnSpacing={2}>
                                {categoryProductList.map((product, index) => {
                                    return (
                                        <Grid
                                            key={index}
                                            item
                                            sm={4}
                                            sx={{ position: "relative" }}
                                        >
                                            <img
                                                src={product.imageSource}
                                                alt="productimg"
                                                key={index}
                                                onClick={(e) =>
                                                    handleProductClick(product)
                                                }
                                            />
                                            {product.isNewArrival && (
                                                <Box className="newArrival">
                                                    <Typography>
                                                        New Arrivals
                                                    </Typography>
                                                </Box>
                                            )}
                                            <Box className="likeiconsection">
                                                <img
                                                    src={ImageConfig.whitelike}
                                                    alt="productimg"
                                                />
                                            </Box>
                                            <Box sx={{ padding: "10px" }}>
                                                <Box className="productlistdesc">
                                                    <Typography className="productname">
                                                        {product.productName}
                                                    </Typography>
                                                    <img
                                                        src={
                                                            ImageConfig.womenproductcart
                                                        }
                                                        alt="productimg"
                                                        className="carticon"
                                                    />
                                                </Box>
                                                <Typography className="productprice">
                                                    $ {product.productPrice}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                            <Box className="paginationsection">
                                <Pagination
                                    count={10}
                                    variant="outlined"
                                    shape="rounded"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
