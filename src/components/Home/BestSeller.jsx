import React from "react";

import { Button, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Keyboard, Scrollbar, Pagination, Navigation } from "swiper";
import { bestSellerProductDetails } from "../../data/bestSeller";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";

export const BestSeller = () => {
  const navigator = useNavigate();
  const handleClick = () => {
    console.log("btn clicked");
    navigator("/women/products/accessories");
  };
  return (
    <Box
      sx={{
        marginTop: { xs: "30px", md: "100px" },
      }}
    >
      <Typography
        sx={{
          fontFamily: theme.typography.titleHeading.fontFamily,
          fontWeight: "700",
          fontSize: {
            xl: "42px",
            md: "39px",
            sm: "28px",
            xs: "22px",
          },
          color: theme.palette.primary.main,
          textAlign: "center",
          marginBottom: { xs: "30px", md: "100px" },
        }}
      >
        Best Seller
      </Typography>
      <Box
        sx={{
          margin: {
            xl: "0 150px",
            lg: "0 100px",
            md: "0 100px",
            sm: "100px",
            xs: "0 40px",
          },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: { sm: "50px", md: "60px", lg: "100px" },
          "& .swiper-button-next, .swiper-button-prev": {
            color: "#D1D1D6",
          },
        }}
      >
        <Box
          className="swiper-button image-swiper-button-prev"
          sx={{
            height: { xs: "15px", sm: "20px", md: "20px", lg: "30px" },
            width: { xs: "50px", sm: "30px", md: "25px", lg: "25px" },
          }}
        >
          <img
            src={"/images/vectorLeft.png"}
            alt="left"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          breakpoints={{
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 1,
            },
            960: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            600: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          {bestSellerProductDetails.map((product) => {
            return (
              <Box key={product.id}>
                <SwiperSlide
                  style={{
                    fontSize: "18px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={handleClick}
                >
                  <Box
                    sx={{
                      marginLeft: "10px",
                      gap: "50px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        width: {
                          xs: "150px",
                          lg: "200px",
                          xl: "300px",
                        },
                        height: {
                          xs: "150px",
                          lg: "200px",
                          xl: "300px",
                        },
                        gap: "30px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        src={product.imageSource}
                        alt="shandle"
                        height="100%"
                        width="100%"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: theme.typography.titleHeading.fontFamily,
                          fontWeight: "700",
                          fontSize: {
                            lg: "22px",
                            md: "20px",
                            xs: "18px",
                          },
                          color: theme.palette.primary.main,
                        }}
                      >
                        {product.productName}
                      </Typography>
                      <Typography>
                        <span
                          style={{
                            fontFamily: theme.typography.titleHeading.fontFamily,
                            fontWeight: "400",
                            fontSize: "20px",
                            textDecorationLine: "line-through",
                            color: theme.palette.originalPrice.color,
                          }}
                        >
                          ${product.productOriginalPrice}
                        </span>
                        &nbsp;&nbsp;
                        <span
                          className="currentprice"
                          style={{
                            fontFamily: theme.typography.titleHeading.fontFamily,
                            fontWeight: "400",
                            fontSize: "20px",
                            color: theme.palette.currentPrice.color,
                          }}
                        >
                          ${product.productCurrentPrice}
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                </SwiperSlide>
              </Box>
            );
          })}
        </Swiper>
        <Box
          className="swiper-button image-swiper-button-next"
          sx={{
            height: { xs: "15px", sm: "20px", md: "20px", lg: "30px" },
            width: { xs: "50px", sm: "30px", md: "25px", lg: "25px" },
          }}
        >
          <img
            src={"/images/vectorRight.png"}
            alt="left"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            marginTop: { md: "100px" },
            marginBottom: { xs: "0", md: "70px" },
            padding: "10px 40px",
            background: "#212121",
            fontFamily: theme.typography.titleHeading.fontFamily,
            fontWeight: "700",
            fontSize: "20px",
            color: "#FFFFFF",
          }}
          onClick={handleClick}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
};
