import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import theme from "../../theme";

export const Footer = () => {
  return (
    <Box
      sx={{
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          justifyContent: { xs: "flex-start", sm: "space-between" },
          padding: {
            xs: "0 50px",
            sm: "0 70px",
            md: "0 80px",
            lg: "0 170px",
          },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: {
              xs: "50px",
              sm: "20px",
              md: "30px",
              lg: "80px",
              xl: "120px",
            },
            textAlign: "left",
            justifyContent: { xs: "flex-start", md: "inherit" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "20px", sm: "30px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "700",
                fontSize: { xs: "17px", md: "20px" },
                color: theme.palette.primary.main,
              }}
            >
              Company Info
            </Typography>
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "400",
                fontSize: "16px",
                color: theme.palette.footerSubLink.color,
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "400",
                fontSize: "16px",
                color: theme.palette.footerSubLink.color,
              }}
            >
              Affliate
            </Typography>
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "400",
                fontSize: "16px",
                color: theme.palette.footerSubLink.color,
              }}
            >
              Fashion Blogger
            </Typography>
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
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "700",
                fontSize: { xs: "17px", md: "20px" },
                color: theme.palette.primary.main,
              }}
            >
              Help & Support
            </Typography>
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "400",
                fontSize: "16px",
                color: theme.palette.footerSubLink.color,
              }}
            >
              Shipping Info
            </Typography>
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "400",
                fontSize: "16px",
                color: theme.palette.footerSubLink.color,
              }}
            >
              Refunds
            </Typography>
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "400",
                fontSize: "16px",
                color: theme.palette.footerSubLink.color,
              }}
            >
              How to Order
            </Typography>
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "400",
                fontSize: "16px",
                color: theme.palette.footerSubLink.color,
              }}
            >
              How to Track
            </Typography>
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "400",
                fontSize: "16px",
                color: theme.palette.footerSubLink.color,
              }}
            >
              Size Guides
            </Typography>
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
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "700",
                fontSize: { xs: "17px", md: "20px" },
                color: theme.palette.primary.main,
              }}
            >
              Customer Care
            </Typography>
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "400",
                fontSize: "16px",
                color: theme.palette.footerSubLink.color,
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "400",
                fontSize: "16px",
                color: theme.palette.footerSubLink.color,
              }}
            >
              Payment Methods
            </Typography>
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "400",
                fontSize: "16px",
                color: theme.palette.footerSubLink.color,
              }}
            >
              Bonus Point
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "left",
            marginTop: { xs: "35px", sm: "0" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                fontFamily: theme.typography.titleHeading.fontFamily,
                fontWeight: "700",
                fontSize: { xs: "17px", md: "20px" },
                color: theme.palette.primary.main,
              }}
            >
              Signup For The Latest News
            </Typography>
            <Box
              sx={{
                marginBottom: "10px",
                position: "relative",
              }}
            >
              <TextField id="outlined-basic" label="Enter Email" variant="outlined" />
              <img
                src={"/images/arrow.png"}
                alt="arrowIcon"
                width="15px"
                height="15px"
                style={{
                  position: "absolute",
                  top: "35%",
                  right: { xs: "40%", sm: "10%" },
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  color: theme.palette.footerSubLink.color,
                }}
              >
                <EmailOutlinedIcon
                  sx={{
                    fontSize: { xs: "17px", md: "20px" },
                  }}
                />
                &nbsp;&nbsp;&nbsp;something@email.com
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  color: theme.palette.footerSubLink.color,
                }}
              >
                <img
                  src={"/images/Call.png"}
                  alt="arrowIcon"
                  width="15px"
                  height="15px"
                  sx={{
                    fontSize: { xs: "17px", md: "20px" },
                  }}
                />
                &nbsp;&nbsp;&nbsp;+2321354524
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <img src={"/images/fb.png"} alt="socialIcon" />
        <img src={"/images/instagram.png"} alt="socialIcon" />
        <img src={"/images/youtube.png"} alt="socialIcon" />
        <img src={"/images/twitter.png"} alt="socialIcon" />
      </Box>
      <Box
        sx={{
          border: "1px solid #9E9E9E",
          padding: "0",
          marginLeft: { md: "80px", lg: "170px" },
          width: { xs: "85%", sm: "82%" },
          margin: "30px auto 17px auto",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-around", md: "space-between" },
          padding: { xs: "0 40px", lg: "0 170px" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography
          sx={{
            fontFamily: theme.typography.titleHeading.fontFamily,
            fontWeight: "700",
            fontSize: "14px",
            color: "#6C7E99",
          }}
        >
          <span
            style={{
              fontFamily: theme.typography.titleHeading.fontFamily,
              fontWeight: "400",
              fontSize: "14px",
              color: "#7E92B3",
            }}
          >
            All rights Reserved
          </span>{" "}
          &copy; Your Company, 2021
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontFamily: theme.typography.titleHeading.fontFamily,
            fontWeight: "700",
            fontSize: "14px",
            color: "#6C7E99",
          }}
        >
          <img src={"/images/madewithbyicon.png"} alt="socialIcon" />
          &nbsp; Themewagon
        </Typography>
      </Box>
    </Box>
  );
};
