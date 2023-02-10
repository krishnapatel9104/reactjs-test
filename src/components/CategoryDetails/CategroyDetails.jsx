import {
  Box,
  Button,
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
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const CategroyDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.up("md"));
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
    {
      id: 12,
      value: "Bata",
      isChecked: false,
    },
  ]);
  const [categoryFilterList, setCategoryFilterList] = useState([
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
  const location = useLocation();
  const [filterCategoryData, setFilterCategoryData] = useState([]);
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(filterCategoryData.length / PER_PAGE);
  const indexOfLastRecord = page * PER_PAGE;
  const indexOfFirstRecord = indexOfLastRecord - PER_PAGE;

  useEffect(() => {
    console.log("location pathname : ", location.pathname);
    let mainCatName = location.pathname.split("/")[1];
    let identifier = location.pathname.split("/")[2];
    let categoryName = location.pathname.split("/")[3];
    console.log("maincatname : ", mainCatName);
    console.log("identifier : ", identifier);
    console.log("categoryName : ", categoryName);
    const newProductList = categoryProductList.filter((product) => {
      if (
        product.filter === mainCatName &&
        product.category === categoryName &&
        identifier === "products"
      ) {
        console.log("right product : ", product);
        return product;
      } else if (
        product.filter === mainCatName &&
        product?.designers === categoryName &&
        identifier === "designers"
      ) {
        console.log("right product : ", product);
        return product;
      } else return 0;
    });
    console.log("newproductlist : ", newProductList);
    if (newProductList.length > 0) setFilterCategoryData(newProductList);
  }, [location.pathname]);

  const handleChangeFilter = (e) => {
    e.preventDefault();
    const { name, value, checked } = e.target;
    let changedList = maincategoryfilterList.map((s) => {
      if (s.value.toLowerCase() === value) return { ...s, isChecked: checked };
      return s;
    });
    setMaincategoryfilterList(changedList);

    changedList = brandfilterList.map((s) => {
      if (s.value.toLowerCase() === value) return { ...s, isChecked: checked };
      return s;
    });
    setBrandfilterList(changedList);
    changedList = categoryFilterList.map((s) => {
      if (s.value.toLowerCase() === value) return { ...s, isChecked: checked };
      return s;
    });
    setCategoryFilterList(changedList);
    changedList = sizefilterList.map((s) => {
      if (s.value.toLowerCase() === value) return { ...s, isChecked: checked };
      return s;
    });
    setSizefilterList(changedList);
    if (name === "filter" && checked) {
      let newArray = {
        ...allFiltersArray,
        mainFilter: [...allFiltersArray.mainFilter, value],
      };
      setAllFiltersArray(newArray);
    } else if (name === "filter" && !checked) {
      let newArray = {
        ...allFiltersArray,
        mainFilter: allFiltersArray.mainFilter.filter((v) => v !== value),
      };
      setAllFiltersArray(newArray);
    }
    if (name === "brand" && checked) {
      let newArray = {
        ...allFiltersArray,
        brandFitler: [...allFiltersArray.brandFitler, value],
      };
      setAllFiltersArray(newArray);
    } else if (name === "brand" && !checked) {
      let newArray = {
        ...allFiltersArray,
        brandFitler: allFiltersArray.brandFitler.filter((v) => v !== value),
      };
      setAllFiltersArray(newArray);
    }

    if (name === "category" && checked) {
      let newArray = {
        ...allFiltersArray,
        categoryFilter: [...allFiltersArray.categoryFilter, value],
      };
      setAllFiltersArray(newArray);
    } else if (name === "category" && !checked) {
      let newArray = {
        ...allFiltersArray,
        categoryFilter: allFiltersArray.categoryFilter.filter((v) => v !== value),
      };
      setAllFiltersArray(newArray);
    }

    if (name === "size" && checked) {
      let newArray = {
        ...allFiltersArray,
        sizeFilter: [...allFiltersArray.sizeFilter, value],
      };
      setAllFiltersArray(newArray);
    } else if (name === "size" && !checked) {
      let newArray = {
        ...allFiltersArray,
        sizeFilter: allFiltersArray.sizeFilter.filter((v) => v !== value),
      };
      setAllFiltersArray(newArray);
    }

    if (name === "price") {
      let newArray = {
        ...allFiltersArray,
        priceFilters: value,
      };
      setAllFiltersArray(newArray);
    }
  };

  const handleProductClick = (productDetail) => {
    setIsOpen(!isOpen);
    navigate(`${productDetail.productName.toLowerCase()}`, {
      state: { productDetail: productDetail },
    });
  };

  const [isBrandExtend, setIsBrandExtend] = useState(false);
  const [isCategorydExtend, setIsCategoryExtend] = useState(false);

  const handlerExtendFilters = (type) => {
    if (type === "brand") setIsBrandExtend(!isBrandExtend);
    else if (type === "category") setIsCategoryExtend(!isCategorydExtend);
  };
  useEffect(() => {
    const newProductList = categoryProductList.filter((product) => {
      if (
        allFiltersArray.mainFilter.includes(product.filter.toLowerCase()) ||
        allFiltersArray.brandFitler.includes(product.brand.toLowerCase()) ||
        allFiltersArray.categoryFilter.includes(product.category.toLowerCase()) ||
        allFiltersArray.sizeFilter.includes(product.size.toLowerCase()) ||
        (product.productPrice >= allFiltersArray.priceFilters[0] &&
          product.productPrice <= allFiltersArray.priceFilters[1])
      ) {
        return product;
      } else return 0;
    });
    if (newProductList.length > 0) setFilterCategoryData(newProductList);
  }, [allFiltersArray]);

  useEffect(() => {
    setPage(1);
  }, [filterCategoryData]);

  const handleChangePagination = () => {
    if (page !== count) setPage(page + 1);
    if (page !== 1) setPage(page - 1);
  };
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
                    fontWeight: "600",
                    fontSize: "16px",
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
                    fontWeight: "600",
                    fontSize: "16px",
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
                      fontWeight: "400",
                      fontSize: "20px",
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
                      fontWeight: "500",
                      fontSize: "20px",
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
                  disableSwap
                  getAriaLabel={() => "Minimum distance"}
                />
              </Box>
              {/* <Box>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontWeight: "600",
                    fontSize: "16px",
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
                      key={index}
                      sx={{
                        fontFamily: "Jost",
                        fontWeight: "400",
                        fontSize: "20px",
                        letterSpacing: "0.02em",
                        color: "#1F2937",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={filter.isChecked}
                            value={filter.value.toLowerCase()}
                            name="filter"
                            onChange={(e) => handleChangeFilter(e)}
                          />
                        }
                        label={filter.value}
                      />
                    </FormGroup>
                  );
                })}
              </Box> */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontWeight: "600",
                    fontSize: "16px",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    color: "#1F2937",
                    marginBottom: "10px",
                  }}
                >
                  BRANDS
                </Typography>
                {brandfilterList.map((filter, index) => {
                  if (
                    (isBrandExtend && index < brandfilterList.length) ||
                    (!isBrandExtend && index < 10)
                  ) {
                    return (
                      <FormGroup
                        key={filter.id}
                        sx={{
                          fontFamily: "Jost",
                          fontWeight: "400",
                          fontSize: "20px",
                          letterSpacing: "0.02em",
                          color: "#1F2937",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={filter.isChecked}
                              value={filter.value.toLowerCase()}
                              name="brand"
                              onChange={(e) => handleChangeFilter(e)}
                            />
                          }
                          label={filter.value}
                        />
                      </FormGroup>
                    );
                  }
                })}
                {brandfilterList.length > 10 ? (
                  !isBrandExtend ? (
                    <Button onClick={() => handlerExtendFilters("brand")}>
                      +{brandfilterList.length - 10} more
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handlerExtendFilters("brand")}
                      sx={{ textTransform: "capitalize" }}
                    >
                      See Less
                    </Button>
                  )
                ) : (
                  <></>
                )}
              </Box>
              {/* <Box>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontWeight: "600",
                    fontSize: "16px",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    color: "#1F2937",
                    marginBottom: "10px",
                  }}
                >
                  CATEGORIES
                </Typography>
                {categoryFilterList.map((filter, index) => {
                  if (
                    (isCategorydExtend && index < categoryFilterList.length) ||
                    (!isCategorydExtend && index < 10)
                  ) {
                    return (
                      <FormGroup
                        key={filter.id}
                        sx={{
                          fontFamily: "Jost",
                          fontWeight: "400",
                          fontSize: "20px",
                          letterSpacing: "0.02em",
                          color: "#1F2937",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={filter.isChecked}
                              value={filter.value.toLowerCase()}
                              name="brand"
                              onChange={(e) => handleChangeFilter(e)}
                            />
                          }
                          label={filter.value}
                        />
                      </FormGroup>
                    );
                  }
                })}
                {categoryFilterList.length > 4 ? (
                  !isCategorydExtend ? (
                    <Button onClick={() => handlerExtendFilters("category")}>
                      +{categoryFilterList.length - 4} more
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handlerExtendFilters("category")}
                      sx={{ textTransform: "capitalize" }}
                    >
                      See Less
                    </Button>
                  )
                ) : (
                  <></>
                )}
              </Box> */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontWeight: "600",
                    fontSize: "16px",
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
                      key={index}
                      sx={{
                        fontFamily: "Jost",
                        fontWeight: "400",
                        fontSize: "20px",
                        letterSpacing: "0.02em",
                        color: "#1F2937",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={filter.isChecked}
                            value={filter.value.toLowerCase()}
                            name="size"
                            onChange={(e) => handleChangeFilter(e)}
                          />
                        }
                        label={filter.value}
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
              display: { md: "flex", xs: "none" },
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <Box sx={{ marginTop: "70px" }}>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontWeight: "600",
                  fontSize: "16px",
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
                  fontWeight: "600",
                  fontSize: "16px",
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
                    fontWeight: "400",
                    fontSize: "20px",
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
                    fontWeight: "500",
                    fontSize: "20px",
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
                disableSwap
                getAriaLabel={() => "Minimum distance"}
              />
            </Box>
            {/* <Box>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontWeight: "600",
                  fontSize: "16px",
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
                    key={index}
                    sx={{
                      fontFamily: "Jost",
                      fontWeight: "400",
                      fontSize: "20px",
                      letterSpacing: "0.02em",
                      color: "#1F2937",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={filter.value.toLowerCase()}
                          name="filter"
                          checked={filter.isChecked}
                          onChange={(e) => handleChangeFilter(e)}
                        />
                      }
                      label={filter.value}
                    />
                  </FormGroup>
                );
              })}
            </Box> */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontWeight: "600",
                  fontSize: "16px",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "#1F2937",
                  marginBottom: "10px",
                }}
              >
                BRANDS
              </Typography>
              {brandfilterList.map((filter, index) => {
                if (
                  (isBrandExtend && index < brandfilterList.length) ||
                  (!isBrandExtend && index < 10)
                ) {
                  return (
                    <FormGroup
                      key={filter.id}
                      sx={{
                        fontFamily: "Jost",
                        fontWeight: "400",
                        fontSize: "20px",
                        letterSpacing: "0.02em",
                        color: "#1F2937",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={filter.isChecked}
                            value={filter.value.toLowerCase()}
                            name="brand"
                            onChange={(e) => handleChangeFilter(e)}
                          />
                        }
                        label={filter.value}
                      />
                    </FormGroup>
                  );
                }
              })}
              {brandfilterList.length > 10 ? (
                !isBrandExtend ? (
                  <Button onClick={() => handlerExtendFilters("brand")}>
                    +{brandfilterList.length - 10} more
                  </Button>
                ) : (
                  <Button
                    onClick={() => handlerExtendFilters("brand")}
                    sx={{ textTransform: "capitalize" }}
                  >
                    See Less
                  </Button>
                )
              ) : (
                <></>
              )}
            </Box>
            {/* <Box>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontWeight: "600",
                  fontSize: "16px",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "#1F2937",
                  marginBottom: "10px",
                }}
              >
                CATEGORIES
              </Typography>
              {categoryFilterList.map((filter, index) => {
                if (
                  (isCategorydExtend && index < categoryFilterList.length) ||
                  (!isCategorydExtend && index < 10)
                ) {
                  return (
                    <FormGroup
                      key={filter.id}
                      sx={{
                        fontFamily: "Jost",
                        fontWeight: "400",
                        fontSize: "20px",
                        letterSpacing: "0.02em",
                        color: "#1F2937",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={filter.isChecked}
                            value={filter.value.toLowerCase()}
                            name="brand"
                            onChange={(e) => handleChangeFilter(e)}
                          />
                        }
                        label={filter.value}
                      />
                    </FormGroup>
                  );
                }
              })}
              {categoryFilterList.length > 4 ? (
                !isCategorydExtend ? (
                  <Button onClick={() => handlerExtendFilters("category")}>
                    +{categoryFilterList.length - 4} more
                  </Button>
                ) : (
                  <Button
                    onClick={() => handlerExtendFilters("category")}
                    sx={{ textTransform: "capitalize" }}
                  >
                    See Less
                  </Button>
                )
              ) : (
                <></>
              )}
            </Box> */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontWeight: "600",
                  fontSize: "16px",
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
                    key={index}
                    sx={{
                      fontFamily: "Jost",
                      fontWeight: "400",
                      fontSize: "20px",
                      letterSpacing: "0.02em",
                      color: "#1F2937",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          key={index}
                          checked={filter.isChecked}
                          value={filter.value.toLowerCase()}
                          name="size"
                          onChange={(e) => handleChangeFilter(e)}
                        />
                      }
                      label={filter.value}
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
                  fontWeight: "700",
                  fontSize: {
                    lg: "50px",
                    md: "32px",
                    xs: "25px",
                  },
                  textAlign: "center",
                  color: "#212121",
                }}
              >
                Women Party Dresses
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontWeight: "400",
                  fontSize: "20px",
                  letterSpacing: "0.02em",
                  color: "#4B5563",
                }}
              >
                {filterCategoryData.length}&nbsp;results
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                objectFit: "contain",
              }}
            >
              <Grid container columnSpacing={2}>
                {filterCategoryData.length > 0 ? (
                  filterCategoryData.slice(indexOfFirstRecord, indexOfLastRecord).map((product) => {
                    return (
                      <Grid
                        item
                        key={product.id}
                        sm={6}
                        lg={4}
                        sx={{
                          position: "relative",
                        }}
                      >
                        <img
                          src={product.imageSource}
                          alt="productimg"
                          width="100%"
                          onClick={(e) => handleProductClick(product)}
                        />
                        {product.isNewArrival && (
                          <Box
                            sx={{
                              backgroundColor: "#111827",
                              width: "fit-content",
                              padding: "2px 10px",
                              position: "absolute",
                              top: "0%",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Jost",
                                fontWeight: "400",
                                fontSize: "12px",
                                color: "#FFFFFF",
                              }}
                            >
                              New Arrivals
                            </Typography>
                          </Box>
                        )}
                        <Box
                          sx={{
                            background: "rgba(0, 0, 0, 0.3)",
                            width: "fit-content",
                            padding: "5px 8px",
                            position: "absolute",
                            paddingTop: "10px",
                            top: "3%",
                            right: 0,
                          }}
                        >
                          <img
                            src={"/images/whitelike.png"}
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
                              justifyContent: "space-between",
                              alignItems: "flex-end",
                            }}
                          >
                            <Typography
                              sx={{
                                width: "80%",
                                fontFamily: "Inter",
                                fontWeight: "400",
                                fontSize: "18px",
                                color: "#000000",
                              }}
                            >
                              {product.productName}
                            </Typography>
                          </Box>
                          <img
                            src={"/images/womenproductcart.png"}
                            alt="productimg"
                            height="22px"
                            width="32px"
                          />
                        </Box>
                        <Typography
                          sx={{
                            width: "80%",
                            fontFamily: "Inter",
                            fontWeight: "400",
                            fontSize: "20px",
                            color: "#1B2437",
                            alignItems: "flex-start",
                          }}
                        >
                          $ {product.productPrice}
                        </Typography>
                        {/* </Box> */}
                      </Grid>
                    );
                  })
                ) : (
                  <img
                    src="/images/data-not-found.jpg"
                    alt="data not found"
                    height="300px"
                    width="300px"
                  />
                )}
              </Grid>
              {filterCategoryData.length > 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "70px",
                    marginBottom: "70px",
                    "& .MuiButtonBase-root": {
                      backgroundColor: "#D1D5DB",
                    },
                    "& .MuiPagination-ul> li:first-child > button": {
                      backgroundColor: "#D1D5DB",
                    },
                    "& .MuiPagination-ul>li:last-child > button": {
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
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
