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
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { ImageConfig } from "../../images/index";
import { categoryProductList } from "../../data/categoryProductList";
import { useNavigate } from "react-router-dom";
import { usePagination } from "../common/Pagination";

export const CategroyDetails = () => {
    const maincategoryfilterList = ["women", "Ladies", "Girls", "Babies"];
    const brandfilterList = [
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
    const categoryfilterList = [
        "Dresses",
        "Tops",
        "Lingerie & Lounge Wear",
        "Blouse",
        "Vintage",
    ];
    const sizefilterList = ["Medium", "Large", "Plus Size", "Sexy Plus Size"];
    const [allFiltersArray, setAllFiltersArray] = useState({
        mainFilter: [],
        brandFitler: [],
        categoryFilter: [],
        sizeFilter: [],
        priceFilters: [100, 300],
    });

    const navigate = useNavigate();
    const [temp, setTemp] = useState([]);
    const [page, setPage] = useState(1);
    const PER_PAGE = 9;
    const count = Math.ceil(categoryProductList.length / PER_PAGE);
    const handleChangeFilter = (e) => {
        const { name, value, checked } = e.target;
        // mainCategoryFilter
        if (name === "filter" && checked) {
            let newArray = {
                ...allFiltersArray,
                mainFilter: [...allFiltersArray.mainFilter, value],
            };
            setAllFiltersArray(newArray);
        } else if (name === "filter" && !checked) {
            let newArray = {
                ...allFiltersArray,
                mainFilter: allFiltersArray.mainFilter.filter(
                    (v) => v !== value
                ),
            };
            setAllFiltersArray(newArray);
        }

        //brand
        if (name === "brand" && checked) {
            let newArray = {
                ...allFiltersArray,
                brandFitler: [...allFiltersArray.brandFitler, value],
            };
            setAllFiltersArray(newArray);
        } else if (name === "brand" && !checked) {
            let newArray = {
                ...allFiltersArray,
                brandFitler: allFiltersArray.brandFitler.filter(
                    (v) => v !== value
                ),
            };
            setAllFiltersArray(newArray);
        }

        //category
        if (name === "category" && checked) {
            let newArray = {
                ...allFiltersArray,
                categoryFilter: [...allFiltersArray.categoryFilter, value],
            };
            setAllFiltersArray(newArray);
        } else if (name === "category" && !checked) {
            let newArray = {
                ...allFiltersArray,
                categoryFilter: allFiltersArray.categoryFilter.filter(
                    (v) => v !== value
                ),
            };
            setAllFiltersArray(newArray);
        }

        //size
        if (name === "size" && checked) {
            let newArray = {
                ...allFiltersArray,
                sizeFilter: [...allFiltersArray.sizeFilter, value],
            };
            setAllFiltersArray(newArray);
        } else if (name === "size" && !checked) {
            let newArray = {
                ...allFiltersArray,
                sizeFilter: allFiltersArray.sizeFilter.filter(
                    (v) => v !== value
                ),
            };
            setAllFiltersArray(newArray);
        }

        //price
        if (name === "price") {
            let newArray = {
                ...allFiltersArray,
                priceFilters: value,
            };
            setAllFiltersArray(newArray);
        }
    };
    const handleChangePagination = (e, p) => {
        setPage(p);
        showCategoryProductList.jump(p);
    };
    const handleProductClick = (productDetail) => {
        navigate("/itemdetailview", {
            state: { productDetail: productDetail },
        });
    };

    useEffect(() => {
        let newProductList = categoryProductList.filter((product) => {
            if (
                allFiltersArray.mainFilter.includes(
                    product.filter.toLowerCase()
                ) ||
                allFiltersArray.brandFitler.includes(
                    product.brand.toLowerCase()
                ) ||
                allFiltersArray.categoryFilter.includes(
                    product.category.toLowerCase()
                ) ||
                allFiltersArray.sizeFilter.includes(
                    product.size.toLowerCase()
                ) ||
                (product.productPrice >= allFiltersArray.priceFilters[0] &&
                    product.productPrice <= allFiltersArray.priceFilters[1])
            ) {
                return product;
            }
        });
        setTemp(newProductList);
    }, [allFiltersArray]);

    const showCategoryProductList = usePagination(
        temp.length ? temp : categoryProductList,
        PER_PAGE
    );

    return (
        <>
            <Box
                // className="categorydetailwrapper"
                sx={{
                    marginTop: "150px",
                }}
            >
                <Navbar />
                <Box
                    // className="categorydetailsection"
                    sx={{
                        padding: "0 290px",
                        display: "flex",
                        gap: "60px",
                    }}
                >
                    <Box
                        // className="filtersidebar"
                        sx={{
                            width: "30%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "40px",
                        }}
                    >
                        <Box sx={{ marginTop: "70px" }}>
                            <Typography
                                // className="filterheading"
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    lineHeight: "23px",
                                    letterSpacing: "0.02em",
                                    textTransform: "uppercase",
                                    color: "#1F2937",
                                    marginBottom: "10px",
                                }}
                            >
                                Filter
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                // className="filterheading"
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    lineHeight: "23px",
                                    letterSpacing: "0.02em",
                                    textTransform: "uppercase",
                                    color: "#1F2937",
                                    marginBottom: "10px",
                                }}
                            >
                                PRICES
                            </Typography>
                            <Box
                                // className="rangepricefilter"
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    id="range-slider"
                                    gutterBottom
                                    // className="rangetxt"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        letterSpacing: "0.02em",
                                        color: "#4B5563",
                                    }}
                                >
                                    Range
                                </Typography>
                                <Typography
                                    id="range-slider"
                                    gutterBottom
                                    // className="pricerangevalue"
                                    sx={{
                                        fontFamily: "Jost",
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "20px",
                                        lineHeight: "29px",
                                        letterSpacing: "0.02em",
                                        color: "#1F2937",
                                    }}
                                >
                                    ${allFiltersArray.priceFilters[0]}-$
                                    {allFiltersArray.priceFilters[1]}
                                </Typography>
                            </Box>
                            <Slider
                                // className="sliderpricerange"
                                sx={{
                                    color: "#EB5757",
                                }}
                                value={allFiltersArray.priceFilters}
                                onChange={(e) => handleChangeFilter(e)}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                max={2000}
                                min={1}
                                name="price"
                            />
                        </Box>
                        <Box>
                            <Typography
                                // className="filterheading"
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    lineHeight: "23px",
                                    letterSpacing: "0.02em",
                                    textTransform: "uppercase",
                                    color: "#1F2937",
                                    marginBottom: "10px",
                                }}
                            >
                                FILTERS
                            </Typography>
                            {maincategoryfilterList.map((filter, index) => {
                                return (
                                    <FormGroup
                                        // className="filteritem"
                                        sx={{
                                            fontFamily: "Jost",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            fontSize: "20px",
                                            lineHeight: "29px",
                                            letterSpacing: "0.02em",
                                            color: "#1F2937",
                                        }}
                                    >
                                        <FormControlLabel
                                            key={index}
                                            control={
                                                <Checkbox
                                                    value={filter.toLowerCase()}
                                                    name={"filter"}
                                                />
                                            }
                                            label={filter}
                                            onChange={(e) =>
                                                handleChangeFilter(e)
                                            }
                                        />
                                    </FormGroup>
                                );
                            })}
                        </Box>
                        <Box>
                            <Typography
                                // className="filterheading"
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    lineHeight: "23px",
                                    letterSpacing: "0.02em",
                                    textTransform: "uppercase",
                                    color: "#1F2937",
                                    marginBottom: "10px",
                                }}
                            >
                                BRANDS
                            </Typography>
                            {brandfilterList.map((filter, index) => {
                                return (
                                    <>
                                        {index < 10 ? (
                                            <FormGroup
                                                // className="filteritem"
                                                sx={{
                                                    fontFamily: "Jost",
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "20px",
                                                    lineHeight: "29px",
                                                    letterSpacing: "0.02em",
                                                    color: "#1F2937",
                                                }}
                                            >
                                                <FormControlLabel
                                                    key={index}
                                                    control={
                                                        <Checkbox
                                                            value={filter.toLowerCase()}
                                                            name={"brand"}
                                                        />
                                                    }
                                                    label={filter}
                                                    onChange={(e) =>
                                                        handleChangeFilter(e)
                                                    }
                                                />
                                            </FormGroup>
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                );
                            })}
                            {brandfilterList.length > 10 ? (
                                <Typography className="moreoption">
                                    +10 more
                                </Typography>
                            ) : (
                                <div>jkbjkkjkk</div>
                            )}
                        </Box>
                        <Box className="categoryfilter">
                            <Typography
                                // className="filterheading"
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    lineHeight: "23px",
                                    letterSpacing: "0.02em",
                                    textTransform: "uppercase",
                                    color: "#1F2937",
                                    marginBottom: "10px",
                                }}
                            >
                                CATEGORIES
                            </Typography>
                            {categoryfilterList.map((filter, index) => {
                                return (
                                    <>
                                        {index < 4 ? (
                                            <FormGroup
                                                // className="filteritem"
                                                sx={{
                                                    fontFamily: "Jost",
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: "20px",
                                                    lineHeight: "29px",
                                                    letterSpacing: "0.02em",
                                                    color: "#1F2937",
                                                }}
                                            >
                                                <FormControlLabel
                                                    key={index}
                                                    control={
                                                        <Checkbox
                                                            value={filter.toLowerCase()}
                                                            name={"category"}
                                                        />
                                                    }
                                                    label={filter}
                                                    onChange={(e) =>
                                                        handleChangeFilter(e)
                                                    }
                                                />
                                            </FormGroup>
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                );
                            })}
                            {categoryfilterList.length > 4 ? (
                                <Typography
                                    // className="moreoption"
                                    sx={{
                                        marginTop: "20px",
                                    }}
                                >
                                    +10 more
                                </Typography>
                            ) : (
                                <></>
                            )}
                        </Box>
                        <Box>
                            <Typography
                                // className="filterheading"
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    lineHeight: "23px",
                                    letterSpacing: "0.02em",
                                    textTransform: "uppercase",
                                    color: "#1F2937",
                                    marginBottom: "10px",
                                }}
                            >
                                SIZE
                            </Typography>
                            {sizefilterList.map((filter, index) => {
                                return (
                                    <FormGroup
                                        // className="filteritem"
                                        sx={{
                                            fontFamily: "Jost",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            fontSize: "20px",
                                            lineHeight: "29px",
                                            letterSpacing: "0.02em",
                                            color: "#1F2937",
                                        }}
                                    >
                                        <FormControlLabel
                                            key={index}
                                            control={
                                                <Checkbox
                                                    value={filter.toLowerCase()}
                                                    name={"size"}
                                                />
                                            }
                                            label={filter}
                                            onChange={(e) =>
                                                handleChangeFilter(e)
                                            }
                                        />
                                    </FormGroup>
                                );
                            })}
                        </Box>
                    </Box>
                    <Box
                        // className="filterproductsection"
                        sx={{
                            width: "70%",
                        }}
                    >
                        <Box
                            // className="rightsideheading"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                marginBottom: "15px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    fontSize: "50px",
                                    lineHeight: "72px",
                                    textAlign: "center",
                                    color: "#212121",
                                }}
                            >
                                Women Party Dresses
                            </Typography>
                            <Typography
                                // className="totalresult"
                                sx={{
                                    fontFamily: "Jost",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    lineHeight: "29px",
                                    letterSpacing: "0.02em",
                                    color: "#4B5563",
                                }}
                            >
                                568 results
                            </Typography>
                        </Box>
                        <Box
                            // className="productListSection"
                            sx={{
                                width: "100%",
                                objectFit: "contain",
                            }}
                        >
                            <Grid container columnSpacing={2}>
                                {showCategoryProductList
                                    .currentData()
                                    .map((product, index) => {
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
                                                    width="100%"
                                                    key={index}
                                                    onClick={(e) =>
                                                        handleProductClick(
                                                            product
                                                        )
                                                    }
                                                />
                                                {product.isNewArrival && (
                                                    <Box
                                                        // className="newArrival"
                                                        sx={{
                                                            backgroundColor:
                                                                "#111827",
                                                            width: "fit-content",
                                                            padding: "2px 10px",
                                                            position:
                                                                "absolute",
                                                            top: "0%",
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontFamily:
                                                                    "Jost",
                                                                fontStyle:
                                                                    "normal",
                                                                fontWeight:
                                                                    "400",
                                                                fontSize:
                                                                    "12px",
                                                                lineHeight:
                                                                    "17px",
                                                                color: "#FFFFFF",
                                                            }}
                                                        >
                                                            New Arrivals
                                                        </Typography>
                                                    </Box>
                                                )}
                                                <Box
                                                    // className="likeiconsection"
                                                    sx={{
                                                        background:
                                                            "rgba(0, 0, 0, 0.3)",
                                                        width: "fit-content",
                                                        padding: "5px 8px",
                                                        position: "absolute",
                                                        paddingTop: "10px",
                                                        top: "3%",
                                                        left: "85.5%",
                                                    }}
                                                >
                                                    <img
                                                        src={
                                                            ImageConfig.whitelike
                                                        }
                                                        alt="productimg"
                                                        width="25px"
                                                        height="22px"
                                                    />
                                                </Box>
                                                <Box sx={{ padding: "10px" }}>
                                                    <Box
                                                        // className="productlistdesc"
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between",
                                                            alignItems:
                                                                "flex-end",
                                                        }}
                                                    >
                                                        <Typography
                                                            // className="productname"
                                                            sx={{
                                                                width: "80%",
                                                                fontFamily:
                                                                    "Inter",
                                                                fontStyle:
                                                                    "normal",
                                                                fontWeight:
                                                                    "400",
                                                                fontSize:
                                                                    "18px",
                                                                lineHeight:
                                                                    "23px",
                                                                color: "#000000",
                                                            }}
                                                        >
                                                            {
                                                                product.productName
                                                            }
                                                        </Typography>
                                                        <img
                                                            src={
                                                                ImageConfig.womenproductcart
                                                            }
                                                            alt="productimg"
                                                            // className="carticon"
                                                            // width="20%"
                                                            height="22px"
                                                            width="32px"
                                                        />
                                                    </Box>
                                                    <Typography
                                                        // className="productprice"
                                                        sx={{
                                                            width: "80%",
                                                            fontFamily: "Inter",
                                                            fontStyle: "normal",
                                                            fontWeight: "400",
                                                            fontSize: "20px",
                                                            lineHeight: "41px",
                                                            color: "#1B2437",
                                                            alignItems:
                                                                "flex-start",
                                                        }}
                                                    >
                                                        $ {product.productPrice}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        );
                                    })}
                            </Grid>
                            <Box
                                // className="paginationsection"
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginTop: "70px",
                                    marginBottom: "70px",
                                    "& .MuiButtonBase-root": {
                                        backgroundColor: "#D1D5DB",
                                    },
                                    "& .MuiPagination-ul> li:first-child > button":
                                        {
                                            backgroundColor: "#D1D5DB",
                                        },
                                    "& .MuiPagination-ul>li:last-child > button":
                                        {
                                            backgroundColor: "#1F2937",
                                            color: "white",
                                        },
                                }}
                            >
                                <Pagination
                                    count={count}
                                    variant="outlined"
                                    shape="rounded"
                                    page={page}
                                    onChange={handleChangePagination}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
