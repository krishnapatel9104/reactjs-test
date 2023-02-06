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
import { categoryProductList } from "../../data/categoryProductList";
import { useNavigate } from "react-router-dom";
import { usePagination } from "../common/Pagination";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const CategroyDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    if (matches && isOpen) setIsOpen(false);
    const [maincategoryfilterList, setMaincategoryfilterList] = useState([
        { id: 1, value: "women", isChecked: false },
        { id: 2, value: "Ladies", isChecked: false },
        { id: 3, value: "Girls", isChecked: false },
        { id: 4, value: "Babies", isChecked: false },
    ]);
    const [brandfilterList, setBrandfilterList] = useState([
        {
            id: 1,
            value: "H&M",
            isChecked: false,
        },
        {
            id: 2,
            value: "Mark & Spencer",
            isChecked: false,
        },
        {
            id: 3,
            value: "Victoria’s Secret",
            isChecked: false,
        },
        {
            id: 4,
            value: "Dior",
            isChecked: false,
        },
        {
            id: 5,
            value: "Gucci",
            isChecked: false,
        },
        {
            id: 6,
            value: "Fendi",
            isChecked: false,
        },
        {
            id: 7,
            value: "Prada",
            isChecked: false,
        },
        {
            id: 8,
            value: "Chanel",
            isChecked: false,
        },
        {
            id: 9,
            value: "Versace",
            isChecked: false,
        },
        {
            id: 10,
            value: "Dolce & Gabbana",
            isChecked: false,
        },
        {
            id: 11,
            value: "Zara",
            isChecked: false,
        },
    ]);
    const [categoryfilterList, setCategoryfilterList] = useState([
        {
            id: 1,
            value: "Dresses",
            isChecked: false,
        },
        {
            id: 2,
            value: "Tops",
            isChecked: false,
        },
        {
            id: 3,
            value: "Lingerie & Lounge Wear",
            isChecked: false,
        },
        {
            id: 4,
            value: "Blouse",
            isChecked: false,
        },
        {
            id: 5,
            value: "Vintage",
            isChecked: false,
        },
    ]);
    const [sizefilterList, setSizefilterList] = useState([
        {
            id: 1,
            value: "Medium",
            isChecked: false,
        },
        {
            id: 2,
            value: "Large",
            isChecked: false,
        },
        {
            id: 3,
            value: "Plus Size",
            isChecked: false,
        },
        {
            id: 4,
            value: "Sexy Plus Size",
            isChecked: false,
        },
    ]);
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
        e.preventDefault();
        const { name, value, checked } = e.target;
        let changedList = maincategoryfilterList.map((s) => {
            if (s.value.toLowerCase() === value)
                return { ...s, isChecked: checked };
            return s;
        });
        setMaincategoryfilterList(changedList);

        changedList = brandfilterList.map((s) => {
            if (s.value.toLowerCase() === value)
                return { ...s, isChecked: checked };
            return s;
        });
        setBrandfilterList(changedList);
        changedList = categoryfilterList.map((s) => {
            if (s.value.toLowerCase() === value)
                return { ...s, isChecked: checked };
            return s;
        });
        setCategoryfilterList(changedList);
        changedList = sizefilterList.map((s) => {
            if (s.value.toLowerCase() === value)
                return { ...s, isChecked: checked };
            return s;
        });
        setSizefilterList(changedList);
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
        setIsOpen(!isOpen);
        navigate("/product", {
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
            } else return 0;
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
                sx={{
                    marginTop: { xs: "0", md: "150px" },
                }}
            >
                <Navbar />
                <Box
                    sx={{
                        padding: {
                            xl: "0 290px",
                            // lg: "0 140px",
                            md: "0 140px",
                            sm: "0 40px",
                            xs: "0 30px",
                        },
                        display: "flex",
                        gap: "60px",
                    }}
                >
                    {isOpen ? (
                        <Box
                            sx={{
                                width: { xs: "40%", sm: "30%" },
                                display: "flex",
                                flexDirection: "column",
                                gap: "40px",
                                position: "absolute",
                                top: "9%",
                                left: 0,
                                zIndex: 1,
                                backgroundColor: "white",
                                padding: "0 30px",
                            }}
                        >
                            <Box
                                sx={{
                                    marginTop: "50px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
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
                                <img
                                    src={"/images/closeicon.png"}
                                    alt="closeicon"
                                    height="20px"
                                    width="20px"
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                            </Box>
                            <Box>
                                <Typography
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
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Typography
                                        id="range-slider"
                                        gutterBottom
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
                                                        checked={
                                                            filter.isChecked
                                                        }
                                                        // name={filter.value.toLowerCase()}
                                                        value={filter.value.toLowerCase()}
                                                        name="filter"
                                                        onChange={(e) =>
                                                            handleChangeFilter(
                                                                e
                                                            )
                                                        }
                                                    />
                                                }
                                                label={filter.value}
                                                // onChange={(e) =>
                                                //     handleChangeFilter(e)
                                                // }
                                            />
                                        </FormGroup>
                                    );
                                })}
                            </Box>
                            <Box>
                                <Typography
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
                                                                checked={
                                                                    filter.isChecked
                                                                }
                                                                // name={filter.value.toLowerCase()}
                                                                value={filter.value.toLowerCase()}
                                                                name="brand"
                                                                onChange={(e) =>
                                                                    handleChangeFilter(
                                                                        e
                                                                    )
                                                                }
                                                                // value={filter.toLowerCase()}
                                                                // name={"brand"}
                                                            />
                                                        }
                                                        label={filter.value}
                                                        // onChange={(e) =>
                                                        //     handleChangeFilter(
                                                        //         e
                                                        //     )
                                                        // }
                                                    />
                                                </FormGroup>
                                            ) : (
                                                <></>
                                            )}
                                        </>
                                    );
                                })}
                                {brandfilterList.length > 10 ? (
                                    <Typography>+10 more</Typography>
                                ) : (
                                    <div>jkbjkkjkk</div>
                                )}
                            </Box>
                            <Box>
                                <Typography
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
                                                                checked={
                                                                    filter.isChecked
                                                                }
                                                                // name={filter.value.toLowerCase()}
                                                                value={filter.value.toLowerCase()}
                                                                name="category"
                                                                onChange={(e) =>
                                                                    handleChangeFilter(
                                                                        e
                                                                    )
                                                                }
                                                                // value={filter.toLowerCase()}
                                                                // name={
                                                                //     "category"
                                                                // }
                                                            />
                                                        }
                                                        label={filter.value}
                                                        // onChange={(e) =>
                                                        //     handleChangeFilter(
                                                        //         e
                                                        //     )
                                                        // }
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
                                                        checked={
                                                            filter.isChecked
                                                        }
                                                        // name={filter.value.toLowerCase()}
                                                        value={filter.value.toLowerCase()}
                                                        name="size"
                                                        onChange={(e) =>
                                                            handleChangeFilter(
                                                                e
                                                            )
                                                        }
                                                        // value={filter.toLowerCase()}
                                                        // name={"size"}
                                                    />
                                                }
                                                label={filter.value}
                                                // onChange={(e) =>
                                                //     handleChangeFilter(e)
                                                // }
                                            />
                                        </FormGroup>
                                    );
                                })}
                            </Box>
                        </Box>
                    ) : (
                        <></>
                    )}
                    <Box
                        sx={{
                            width: "30%",
                            // display: "flex",
                            display: { md: "flex", xs: "none" },
                            flexDirection: "column",
                            gap: "40px",
                            // position: isMobile && "absolute",
                            // top: isMobile && "20%",
                            // left: isMobile && 0,
                            // zIndex: isMobile && 1,
                            // backgroundColor: isMobile && "white",
                            // padding: isMobile && "0 30px",
                        }}
                    >
                        <Box sx={{ marginTop: "70px" }}>
                            <Typography
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
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    id="range-slider"
                                    gutterBottom
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
                                                    value={filter.value.toLowerCase()}
                                                    name="filter"
                                                    checked={filter.isChecked}
                                                    //name={filter.value.toLowerCase()}
                                                    onChange={(e) =>
                                                        handleChangeFilter(e)
                                                    }
                                                />
                                            }
                                            label={filter.value}
                                            // onChange={(e) =>
                                            //     handleChangeFilter(e)
                                            // }
                                        />
                                    </FormGroup>
                                );
                            })}
                        </Box>
                        <Box>
                            <Typography
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
                                                            key={index}
                                                            checked={
                                                                filter.isChecked
                                                            }
                                                            // name={filter.value.toLowerCase()}
                                                            value={filter.value.toLowerCase()}
                                                            name="brand"
                                                            onChange={(e) =>
                                                                handleChangeFilter(
                                                                    e
                                                                )
                                                            }
                                                            // value={filter.toLowerCase()}
                                                            // name={"brand"}
                                                        />
                                                    }
                                                    label={filter.value}
                                                    // onChange={(e) =>
                                                    //     handleChangeFilter(e)
                                                    // }
                                                />
                                            </FormGroup>
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                );
                            })}
                            {brandfilterList.length > 10 ? (
                                <Typography>+10 more</Typography>
                            ) : (
                                <div>jkbjkkjkk</div>
                            )}
                        </Box>
                        <Box>
                            <Typography
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
                                                            // value={filter.toLowerCase()}
                                                            // name={"category"}
                                                            key={index}
                                                            checked={
                                                                filter.isChecked
                                                            }
                                                            // name={filter.value.toLowerCase()}
                                                            value={filter.value.toLowerCase()}
                                                            name="category"
                                                            onChange={(e) =>
                                                                handleChangeFilter(
                                                                    e
                                                                )
                                                            }
                                                        />
                                                    }
                                                    label={filter.value}
                                                    // onChange={(e) =>
                                                    //     handleChangeFilter(e)
                                                    // }
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
                                                    key={index}
                                                    checked={filter.isChecked}
                                                    // name={filter.value.toLowerCase()}
                                                    value={filter.value.toLowerCase()}
                                                    name="size"
                                                    onChange={(e) =>
                                                        handleChangeFilter(e)
                                                    }
                                                    // value={filter.toLowerCase()}
                                                    // name={"size"}
                                                />
                                            }
                                            label={filter.value}
                                            // onChange={(e) =>
                                            //     handleChangeFilter(e)
                                            // }
                                        />
                                    </FormGroup>
                                );
                            })}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "10%",
                            display: {
                                xs: "flex",
                                md: "none",
                            },
                            flexDirection: "column",
                            gap: "40px",
                            marginTop: "20px",
                            position: "relative",
                        }}
                    >
                        <img
                            src={"/images/arrowicon.png"}
                            // src={"/assests/menu.png"}
                            alt="menuicon"
                            height="25px"
                            width="25px"
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "70%",
                        }}
                    >
                        <Box
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
                                    fontSize: {
                                        lg: "50px",
                                        md: "32px",
                                        xs: "25px",
                                    },
                                    lineHeight: "72px",
                                    textAlign: "center",
                                    color: "#212121",
                                }}
                            >
                                Women Party Dresses
                            </Typography>
                            <Typography
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
                                {showCategoryProductList.currentData(1).length}{" "}
                                results
                            </Typography>
                        </Box>
                        <Box
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
                                                item
                                                key={product.id}
                                                sm={6}
                                                lg={4}
                                                sx={{ position: "relative" }}
                                            >
                                                <img
                                                    src={product.imageSource}
                                                    alt="productimg"
                                                    width="100%"
                                                    onClick={(e) =>
                                                        handleProductClick(
                                                            product
                                                        )
                                                    }
                                                />
                                                {product.isNewArrival && (
                                                    <Box
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
                                                    sx={{
                                                        background:
                                                            "rgba(0, 0, 0, 0.3)",
                                                        width: "fit-content",
                                                        padding: "5px 8px",
                                                        position: "absolute",
                                                        paddingTop: "10px",
                                                        top: "3%",
                                                        right: 0,
                                                    }}
                                                >
                                                    <img
                                                        src={
                                                            "/images/whitelike.png"
                                                        }
                                                        alt="productimg"
                                                        width="25px"
                                                        height="22px"
                                                    />
                                                </Box>

                                                <Box
                                                    sx={{
                                                        padding: "10px",
                                                        display: "flex",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between",
                                                            alignItems:
                                                                "flex-end",
                                                        }}
                                                    >
                                                        <Typography
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
                                                    </Box>
                                                    <img
                                                        src={
                                                            "/images/womenproductcart.png"
                                                        }
                                                        alt="productimg"
                                                        // width="20%"
                                                        height="22px"
                                                        width="32px"
                                                    />
                                                </Box>
                                                <Typography
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
                                                {/* </Box> */}
                                            </Grid>
                                        );
                                    })}
                            </Grid>
                            <Box
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
