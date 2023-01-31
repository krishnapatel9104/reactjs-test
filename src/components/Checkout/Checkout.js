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
import React, { useEffect, useState } from "react";
import { StepperComp } from "../common/StepperComp";
import { YourOrder } from "../common/YourOrder";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentDetails } from "../redux/paymentDetailsSlice";
import { updateUserSelectedProductList } from "../redux/userSelectedProductListSlice";

export const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [paymentData, setPaymentData] = useState({
        paymentMethod: "creditcard",
        cardName: "",
        cardNumber: "",
        expiration: "",
        cvvCode: "",
    });
    const reduxProductDetail = useSelector(
        (state) => state.userSelectedProductLists.userSelectedProductLists
    );
    const [productData, setProductData] = useState(reduxProductDetail);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "paymentMethod")
            setPaymentData({ ...paymentData, paymentMethod: value });
        if (name === "cardName")
            setPaymentData({ ...paymentData, cardName: value });
        if (name === "cardNumber")
            setPaymentData({ ...paymentData, cardNumber: value });
        if (name === "expiration")
            setPaymentData({ ...paymentData, expiration: value });
        if (name === "cvvCode")
            setPaymentData({ ...paymentData, cvvCode: value });
    };
    useEffect(() => {
        console.log("checkout useeffect : ", productData);
    }, [productData]);

    const handleClick = () => {
        dispatch(setPaymentDetails(paymentData));
        dispatch(updateUserSelectedProductList(productData));
        navigate("/confirmation");
    };
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
                        name="paymentMethod"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "50px",
                        }}
                        onChange={handleChange}
                        value={paymentData.paymentMethod}
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
                            name="cardName"
                            sx={{
                                width: "80%",
                            }}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box sx={{ marginTop: "50px", position: "relative" }}>
                        <Input
                            placeholder="Card Number"
                            inputProps={""}
                            name="cardNumber"
                            sx={{
                                width: "80%",
                            }}
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="CVV Code"
                            inputProps={""}
                            name="cvvCode"
                            onChange={handleChange}
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
                            onClick={handleClick}
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
                <YourOrder
                    productDetails={productData}
                    setProductDetails={setProductData}
                />
            </Box>
        </Box>
    );
};
