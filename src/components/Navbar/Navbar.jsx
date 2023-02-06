import React, { useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Navbar = () => {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down("md"));
  const productList = [
    { id: 1, value: "Clothes" },
    { id: 2, value: "Bags" },
    { id: 3, value: "Accessories" },
    { id: 4, value: "Shoes" },
    { id: 5, value: "Beauty" },
    { id: 6, value: "Denim" },
    { id: 7, value: "Coats & Jackets" },
  ];
  const designersList = [
    { id: 1, value: "Balenciaga" },
    { id: 2, value: "Balmain" },
    { id: 3, value: "Bottega Veneta" },
    { id: 4, value: "Burbery" },
    { id: 5, value: "Dolce & Gabbana" },
    { id: 6, value: "Fendi" },
    { id: 7, value: "Off-White" },
  ];
  const archivedCollectionsList = [
    { id: 1, value: "All Products" },
    { id: 2, value: "Accessories" },
    { id: 3, value: "Bags" },
    { id: 4, value: "Coats" },
    { id: 5, value: "Dresses" },
    { id: 6, value: "Shoes" },
    { id: 7, value: "Suits" },
  ];
  const navigate = useNavigate();
  const productDetails = useSelector(
    (state) => state.rootReducer.userSelectedProductListSlice.userSelectedProductLists
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSelectedItem, setCurrentSelectedItem] = useState("");

  if (matches && isOpen) setIsOpen(false);
  const handleClick = () => {
    if (productDetails.length > 0) {
      navigate("/shipping", {
        state: { productDetail: productDetails },
      });
    } else {
      navigate("/allProducts");
    }
  };

  const handleClickNavbar = (e, item) => {
    setCurrentSelectedItem(isOpen ? "" : e.target.name);
    if (!item) setIsOpen(!isOpen);
  };
  const handleClickMobile = (e) => {
    setIsMobile(!isMobile);
    setCurrentSelectedItem(isOpen ? "" : e.target.name);
    if (!isOpen) setIsOpen(!isOpen);
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: isOpen && "white",
          display: { xs: "none", md: "flex" },

          justifyContent: "space-around",
          position: "absolute",
          top: 0,
          padding: "30px 0px",
          color: "black",
          alignItems: "center",
          width: "100%",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "6px",
              alignItems: "center",
              fontFamily: theme.typography.headerNavbarLink.fontFamily,
              fontWeight: "700",
              fontSize: "16px",
              letterSpacing: "0.085em",
              textTransform: "uppercase",
              color: "#212121",
            }}
          >
            <img src={"/images/logo.png"} alt={"Majestic"} width="35px" height="25px" />
            Majestic
          </Box>
          {["Women", "Men", "Collection", "Outlet"].map((item, index) => {
            return (
              <Link
                key={index}
                name={item}
                onClick={handleClickNavbar}
                sx={{
                  cursor: "pointer",
                  textDecoration: currentSelectedItem === item ? "underline !important" : "auto",
                  fontFamily: theme.typography.headerNavbarLink.fontFamily,
                  fontWeight: "700",
                  fontSize: "16px",
                  color: theme.palette.primary.main,
                }}
              >
                {item}
              </Link>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <img src={"/images/Call.png"} alt={"call"} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onClick={handleClick}
          >
            <img src={"/images/Cart.png"} alt={"cart"} style={{ position: "relative" }} />
            <Box
              sx={{
                position: "absolute",
                top: "25%",
                backgroundColor: "red",
                left: "76%",
                borderRadius: "41px",
                width: "20px",
                textAlign: "center",
              }}
            >
              <Typography sx={{ color: "white" }}>{productDetails?.length}</Typography>
            </Box>
          </Box>
          <img src={"/images/Search.png"} alt={"search"} />
          <img src={"/images/Login.png"} alt={"login"} />
          <img src={"/images/Like.png"} alt={"like"} />
        </Box>
      </Box>

      {/* mobile */}
      <Box
        sx={{
          backgroundColor: isOpen && "white",
          display: { md: "none", xs: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px 30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "6px",
            alignItems: "center",
            fontFamily: theme.typography.headerNavbarLink.fontFamily,
            fontWeight: "700",
            fontSize: "16px",
            letterSpacing: "0.085em",
            textTransform: "uppercase",
            color: "#212121",
          }}
        >
          <img src={"/images/logo.png"} alt={"Majestic"} width="35px" height="25px" />
          Majestic
        </Box>
        <Box>
          <img src={"/images/menu.png"} alt="menuicon" onClick={handleClickMobile} />
        </Box>

        {isMobile && !isOpen ? (
          <>
            <Box
              sx={{
                display: "block",
                marginTop: "30px",
                flexDirection: "column",
                gap: "21px",
                position: "absolute",
                top: "6%",
                width: "100%",
                right: "0",
                backgroundColor: "white",
                zIndex: 2,
              }}
            >
              {["Women", "Men", "Collection", "Outlet"].map((item, index) => {
                return (
                  <Accordion sx={{ backgroundColor: theme.palette.backgroundColor.default }}>
                    <AccordionSummary
                      sx={{ backgroundColor: theme.palette.backgroundColor.default }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{item}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ backgroundColor: theme.palette.backgroundColor.default }}
                    >
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography>Products</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "30px",
                            }}
                          >
                            {productList.map((product) => {
                              return (
                                <Link
                                  style={{
                                    color: theme.palette.navbarSubLink.color,
                                    textDecoration: "none",
                                  }}
                                  sx={{
                                    fontFamily: theme.typography.headerNavbarSubLink.fontFamily,
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: theme.palette.navbarSubLink.color,
                                    textDecoration: "none",
                                  }}
                                  key={product.id}
                                  href={"/allProducts"}
                                >
                                  {product.value}
                                </Link>
                              );
                            })}
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography>Designers</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "30px",
                            }}
                          >
                            {productList.map((product) => {
                              return (
                                <Link
                                  style={{
                                    color: theme.palette.navbarSubLink.color,
                                    textDecoration: "none",
                                  }}
                                  sx={{
                                    fontFamily: theme.typography.headerNavbarSubLink.fontFamily,
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: theme.palette.navbarSubLink.color,
                                    textDecoration: "none",
                                  }}
                                  key={product.id}
                                  href={"/allProducts"}
                                >
                                  {product.value}
                                </Link>
                              );
                            })}
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography>Archived Collections</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "30px",
                            }}
                          >
                            {archivedCollectionsList.map((product) => {
                              return (
                                <Link
                                  style={{
                                    color: theme.palette.navbarSubLink.color,
                                    textDecoration: "none",
                                  }}
                                  sx={{
                                    fontFamily: theme.typography.headerNavbarSubLink.fontFamily,
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: theme.palette.navbarSubLink.color,
                                    textDecoration: "none",
                                  }}
                                  key={product.id}
                                  href={"/allProducts"}
                                >
                                  {product.value}
                                </Link>
                              );
                            })}
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "30px",
                  alignItems: "flex-start",
                  padding: "15px 30px",
                }}
              >
                <img src={"/images/Call.png"} alt={"call"} />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                  onClick={handleClick}
                >
                  <img src={"/images/Cart.png"} alt={"cart"} />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-55%",
                      backgroundColor: "red",
                      left: "80%",
                      borderRadius: "41px",
                      width: "20px",
                      textAlign: "center",
                    }}
                  >
                    <Typography sx={{ color: "white" }}>{productDetails?.length}</Typography>
                  </Box>
                </Box>
                <img src={"/images/Search.png"} alt={"search"} />
                <img src={"/images/Login.png"} alt={"login"} />
                <img src={"/images/Like.png"} alt={"like"} />
              </Box>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Box>
      {isOpen ? (
        <Box
          sx={{
            backgroundColor: "white",
            position: "absolute",
            top: "7%",
            textAlign: "left",
            zIndex: 2,
            color: "black",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: {
                md: "30px 140px",
                xl: "30px 290px 180px 290px",
              },
              borderBottom: "1px solid white",
              borderBottomLeftRadius: "40px",
              borderBottomRightRadius: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: { md: "100px", xl: "150px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: theme.typography.headerNavbarSubLink.fontFamily,
                    fontWeight: "400",
                    fontSize: "24px",
                    color: theme.palette.navbarLink.color,
                    marginBottom: "25px",
                  }}
                >
                  Products
                </Typography>
                {productList.map((product) => {
                  return (
                    <Link
                      style={{
                        color: theme.palette.navbarSubLink.color,
                        textDecoration: "none",
                      }}
                      sx={{
                        fontFamily: theme.typography.headerNavbarSubLink.fontFamily,
                        fontWeight: "400",
                        fontSize: "16px",
                        color: theme.palette.navbarSubLink.color,
                        textDecoration: "none",
                      }}
                      key={product.id}
                      href={"/allProducts"}
                    >
                      {product.value}
                    </Link>
                  );
                })}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: theme.typography.headerNavbarSubLink.fontFamily,
                    fontWeight: "400",
                    fontSize: "24px",
                    color: theme.palette.navbarLink.color,
                    marginBottom: "25px",
                  }}
                >
                  Designers
                </Typography>
                {designersList.map((product) => {
                  return (
                    <Link
                      style={{
                        color: theme.palette.navbarSubLink.color,
                        textDecoration: "none",
                      }}
                      sx={{
                        fontFamily: theme.typography.headerNavbarSubLink.fontFamily,
                        fontWeight: "400",
                        fontSize: "16px",
                        color: theme.palette.navbarSubLink.color,
                        textDecoration: "none",
                      }}
                      key={product.id}
                      href={" "}
                    >
                      {product.value}
                    </Link>
                  );
                })}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: theme.typography.headerNavbarSubLink.fontFamily,
                    fontWeight: "400",
                    fontSize: "24px",
                    color: theme.palette.navbarLink.color,
                    marginBottom: "25px",
                  }}
                >
                  Archived collections
                </Typography>
                {archivedCollectionsList.map((product) => {
                  return (
                    <Link
                      style={{
                        color: "#8E8E93",
                        textDecoration: "none",
                      }}
                      sx={{
                        fontFamily: theme.typography.headerNavbarSubLink.fontFamily,
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#8E8E93",
                        textDecoration: "none",
                      }}
                      key={product.id}
                      href={" "}
                    >
                      {product.value}
                    </Link>
                  );
                })}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  width: "300px",
                  height: "250px",
                }}
              >
                <img
                  src={"/images/catgeorymenuimg.png"}
                  alt="socialIcon"
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
                <Typography
                  sx={{
                    color: theme.palette.navbarLink.color,
                  }}
                >
                  Sales on ChanelAccessories
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Navbar;
