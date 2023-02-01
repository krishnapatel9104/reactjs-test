import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StepperComp } from "../common/StepperComp";

export const ConfirmationPage = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                textAlign: "center",
                marginTop: "50px",
            }}
        >
            <Box>
                <StepperComp activeStep={2} />
            </Box>
            <Typography
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "28px",
                    marginTop: "50px",
                }}
            >
                Your order is confirmed
            </Typography>
            <Typography
                sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "21px",
                    marginTop: "50px",
                }}
            >
                Thank you for shopping with us Your order will
                <br /> reach you on 18 Jan 2022.
            </Typography>
            <Box
                sx={{
                    marginTop: "500px",
                    marginBottom: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        fontFamily: "Nunito",
                        fontSyle: "normal",
                        fontWeight: "700",
                        fontSize: "30px",
                        lineHeight: "35px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        color: "#FFFFFF",
                        backgroundColor: "#111827",
                        width: "objectFit",
                        padding: "15px 100px",
                        textTransform: "inherit",
                    }}
                    onClick={() => navigate("/")}
                >
                    Continue Shopping
                </Button>
            </Box>
        </Box>
    );
};
