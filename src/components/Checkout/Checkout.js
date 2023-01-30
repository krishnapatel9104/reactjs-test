import {
    Box,
    Button,
    FormControlLabel,
    Input,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ImageConfig } from "../../images";
import React from "react";
import { StepperComp } from "../common/StepperComp";
import { YourOrder } from "../common/YourOrder";

export const Checkout = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                marginTop: "50px",
                display: "flex",
                padding: "0 125px 0 50px",
                gap: "10px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    flexDirection: "column",
                }}
            >
                <StepperComp activeStep={1} />
                <Box
                    sx={{
                        padding: "0 140px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "22px",
                            fontWeight: "700",
                            marginTop: "80px",
                        }}
                    >
                        Payment Method
                    </Typography>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="creditcard"
                        name="radio-buttons-group"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "50px",
                        }}
                    >
                        <Box>
                            <FormControlLabel
                                value="creditcard"
                                control={<Radio />}
                            />
                            <img
                                src={ImageConfig.paymenticon1}
                                alt="paymentoption1"
                                height="34px"
                                width="46px"
                            />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <FormControlLabel
                                value="paypal"
                                control={<Radio />}
                            />
                            <img
                                src={ImageConfig.paymenticon2}
                                alt="paymentoption1"
                                height="80px"
                                width="100px"
                            />
                        </Box>
                        <Box>
                            <FormControlLabel
                                value="other"
                                control={<Radio />}
                            />
                            <img
                                src={ImageConfig.paymenticon3}
                                alt="paymentoption1"
                                height="34px"
                                width="46px"
                            />
                        </Box>
                    </RadioGroup>
                    <Typography
                        sx={{
                            fontSize: "22px",
                            fontWeight: "700",
                            marginTop: "50px",
                        }}
                    >
                        Payment Details
                    </Typography>
                    <Box sx={{ marginTop: "20px" }}>
                        <Input
                            placeholder="Enter Name Card"
                            inputProps={""}
                            name="enternamecard"
                            sx={{
                                width: "80%",
                            }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "50px", position: "relative" }}>
                        <Input
                            placeholder="Card Number"
                            inputProps={""}
                            name="cardnumber"
                            sx={{
                                width: "80%",
                            }}
                        />
                        <img
                            src={ImageConfig.visa}
                            alt="visa"
                            style={{
                                position: "absolute",
                                top: "20%",
                                left: "487px",
                            }}
                        />
                        <img
                            src={ImageConfig.visaangle}
                            alt="visaangle"
                            style={{
                                position: "absolute",
                                top: "30%",
                                left: "540px",
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "50px",
                            width: "80%",
                        }}
                    >
                        <Input
                            placeholder="Expiration"
                            inputProps={""}
                            name="expiration"
                        />
                        <Input
                            placeholder="CVV Code"
                            inputProps={""}
                            name="cvvcode"
                        />
                    </Box>
                    <Box
                        sx={{
                            marginTop: "50px",
                            fontFamily: "Nunito",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "25px",
                            color: "#C4C4C4",
                            letterSpacing: "1.5px",
                        }}
                    >
                        By Clicking *Confirm Payment* I agree to
                        <br /> company terms of services
                    </Box>
                    <Box
                        sx={{
                            marginTop: "90px",
                            marginBottom: "150px",
                            display: "flex",
                            gap: "20px",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                fontFamily: "Nunito",
                                fontSyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "27px",
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                color: "#111827",
                                width: "45px",
                                height: "60px",
                                padding: "15px 100px",
                                textTransform: "inherit",
                                backgroundColor: "white",
                                border: "1px solid black",
                            }}
                            onClick={() => navigate("/Shipping")}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                fontFamily: "Nunito",
                                fontSyle: "normal",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "27px",
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                color: "#FFFFFF",
                                width: "objectFit",
                                padding: "20px 80px",
                                textTransform: "inherit",
                                backgroundColor: "#111827",
                            }}
                            onClick={() => navigate("/confirmationpage")}
                        >
                            Confirm Payment of: $131.95
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    borderRadius: "34px",
                    width: "70%",
                    paddingTop: "40px",
                }}
            >
                <YourOrder />
            </Box>
        </Box>
    );
};
