import React from "react";
import { Button, Typography, Box, Link } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Keyboard, Scrollbar, Pagination, Navigation } from "swiper";
import { shopByCategoryList } from "../../data/shopByCategoryList";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";

export const ShopByCategory = () => {
  const navigator = useNavigate();
  const handleClick = () => {
    console.log("btn clicked");
    navigator("/men/products/shoes");
  };
  const shopByCategory = [
    {
      id: 1,
      value: "TShirt",
    },
    {
      id: 2,
      value: "Shirt",
    },
    {
      id: 3,
      value: "Shoes",
    },
    {
      id: 4,
      value: "Watch",
    },
    {
      id: 5,
      value: "Sunglasses",
    },
    {
      id: 6,
      value: "Bagpacks",
    },
  ];
  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "50px",
          fontFamily: theme.typography.titleHeading.fontFamily,
          fontWeight: "700",
          fontSize: {
            xl: "42px",
            md: "39px",
            sm: "28px",
            xs: "22px",
          },
          color: theme.palette.primary.main,
          marginTop: { xs: "40px", sm: "20px" },
          textAlign: "center",
        }}
      >
        Shop By Category
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "40px",
        }}
      >
        <Link
          href="#"
          sx={{
            textDecoration: "none",
            fontFamily: theme.typography.titleHeading.fontFamily,
            fontWeight: "400",
            fontSize: "25px",
            color: "#757575",
          }}
        >
          For Women
        </Link>
        <Link
          href="#"
          sx={{
            color: theme.palette.primary.main, //foractive
            borderBottom: "1px solid #757575", //foractive
            textDecoration: "none",
            fontFamily: theme.typography.titleHeading.fontFamily,
            fontWeight: "400",
            fontSize: "25px",
          }}
        >
          For Men
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          marginBottom: "40px",
          justifyContent: { xs: "space-between", sm: "center" },
          paddingBottom: { xs: "7px", sm: "0" },
          overflow: { xs: "scroll", sm: "hidden" },
        }}
      >
        {shopByCategory.map((category) => {
          return (
            <Link
              key={category.id}
              href="#"
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "400",
                fontSize: "20px",
                textDecoration: "none",
                color: "#000000",
                padding: category.id === 2 ? { xs: "7px 10px", sm: "14px 24px" } : 0,
                background: category.id === 2 ? "#E0E0E0" : "white",
              }}
            >
              {category.value}
            </Link>
          );
        })}
      </Box>

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
        <Box className="swiper-button image-swiper-button-prev">
          <img src={"/images/vectorLeft.png"} alt="left" />
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
          {shopByCategoryList.map((product, index) => {
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
                          lg: "170px",
                          xl: "300px",
                        },
                        height: {
                          xs: "150px",
                          lg: "170px",
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
                        width="200px"
                        style={{
                          objectFit: "scale-down",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: theme.typography.headerNavbarLink.fontFamily,
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
                            fontFamily: theme.typography.headerNavbarLink.fontFamily,
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
                            fontFamily: theme.typography.headerNavbarLink.fontFamily,
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
        <Box className="swiper-button image-swiper-button-next">
          <img src={"/images/vectorRight.png"} alt="left" />
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            marginTop: "50px",
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
