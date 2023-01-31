import {
    Box,
    Button,
    InputLabel,
    NativeSelect,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ImageConfig } from "../../images";
import { StepperComp } from "../common/StepperComp";
import { YourOrder } from "../common/YourOrder";
import { setUserDetails } from "../redux/userDetailsSlice";
import { updateUserSelectedProductList } from "../redux/userSelectedProductListSlice";

export const Shipping = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        deliveryDate: "",
        convenientTime: "",
        city: "",
        address: "",
        zipCode: "",
    });

    const productDetails = useSelector(
        (state) => state.userSelectedProductLists.userSelectedProductLists
    );
    const [productData, setProductData] = useState(productDetails);
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "First Name")
            setUserData({ ...userData, firstName: value });
        if (name === "Last Name") setUserData({ ...userData, lastName: value });
        if (name === "Email Address")
            setUserData({ ...userData, emailAddress: value });
        if (name === "Phone Number")
            setUserData({ ...userData, phoneNumber: value });
        if (name === "Delivery Date")
            setUserData({ ...userData, deliveryDate: value });
        if (name === "Convenient Time")
            setUserData({ ...userData, convenientTime: value });
        if (name === "City") setUserData({ ...userData, city: value });
        if (name === "Address")
            setUserData({
                ...userData,
                address: value,
            });
        if (name === "zipCode")
            setUserData({
                ...userData,
                zipCode: value,
            });
    };
    const handleClick = () => {
        dispatch(setUserDetails(userData));
        dispatch(updateUserSelectedProductList(productData));
        navigate("/checkout");
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
                <StepperComp activeStep={0} />
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
                        Contact Information
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "20px",
                        }}
                    >
                        <TextField
                            id="standard-number"
                            label="First Name"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="First Name"
                            onChange={handleChange}
                            variant="standard"
                            placeholder="First Name e.g John,Mary"
                            sx={{
                                fontSize: "22px",
                                width: "45%",
                                "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root":
                                    {
                                        fontSize: "22px",
                                    },
                                "& label+.css-v4u5dn-MuiInputBase-root-MuiInput-root":
                                    {
                                        marginTop: "30px !important",
                                    },
                            }}
                        />
                        <TextField
                            id="standard-number"
                            label="Last Name"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="Last Name"
                            onChange={handleChange}
                            variant="standard"
                            placeholder="Last Name e.g John,Mary"
                            sx={{
                                fontSize: "22px",
                                width: "45%",
                                "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root":
                                    {
                                        fontSize: "22px",
                                    },
                                "& label+.css-v4u5dn-MuiInputBase-root-MuiInput-root":
                                    {
                                        marginTop: "30px !important",
                                    },
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "50px",
                        }}
                    >
                        <TextField
                            id="standard-number"
                            label="Email Address"
                            type="email"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="Email Address"
                            onChange={handleChange}
                            variant="standard"
                            placeholder="Your email@gmail.com"
                            sx={{
                                fontSize: "22px",
                                width: "45%",
                                "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root":
                                    {
                                        fontSize: "22px",
                                    },
                                "& label+.css-v4u5dn-MuiInputBase-root-MuiInput-root":
                                    {
                                        marginTop: "30px !important",
                                    },
                            }}
                        />
                        <TextField
                            id="standard-number"
                            label="Phone Number"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="Phone Number"
                            onChange={handleChange}
                            variant="standard"
                            placeholder="+1-(0000 000 0000)"
                            sx={{
                                fontSize: "22px",
                                width: "45%",
                                "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root":
                                    {
                                        fontSize: "22px",
                                    },
                                "& label+.css-v4u5dn-MuiInputBase-root-MuiInput-root":
                                    {
                                        marginTop: "30px !important",
                                    },
                            }}
                        />
                    </Box>

                    <Typography
                        sx={{
                            fontSize: "22px",
                            fontWeight: "700",
                            marginTop: "80px",
                        }}
                    >
                        Delivery Information
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "20px",
                        }}
                    >
                        <TextField
                            id="standard-number"
                            label="Delivery Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="Delivery Date"
                            onChange={handleChange}
                            variant="standard"
                            placeholder="DD/MM/YYYY"
                            sx={{
                                fontSize: "22px",
                                width: "45%",
                                "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root":
                                    {
                                        fontSize: "22px",
                                    },
                                "& label+.css-v4u5dn-MuiInputBase-root-MuiInput-root":
                                    {
                                        marginTop: "30px !important",
                                    },
                            }}
                        />
                        <TextField
                            id="standard-number"
                            label="Convenient Time"
                            type="time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="Convenient Time"
                            onChange={handleChange}
                            variant="standard"
                            placeholder="1pm-9pm"
                            sx={{
                                fontSize: "22px",
                                width: "45%",
                                "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root":
                                    {
                                        fontSize: "22px",
                                    },
                                "& label+.css-v4u5dn-MuiInputBase-root-MuiInput-root":
                                    {
                                        marginTop: "30px !important",
                                    },
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "50px",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <Box>
                            <InputLabel
                                variant="standard"
                                htmlFor="uncontrolled-native"
                            >
                                City
                            </InputLabel>
                            <NativeSelect
                                defaultValue={0}
                                inputProps={{
                                    // name: "city",
                                    id: "uncontrolled-native",
                                }}
                                name="City"
                                onChange={handleChange}
                                sx={{
                                    width: "150px",
                                    marginTop: "10px",
                                    color: "gray",
                                }}
                            >
                                <option value={0}>---Select City---</option>
                                <option value={"Surat"}>Surat</option>
                                <option value={"Pune"}>Pune</option>
                                <option value={"Mumbai"}>Mumbai</option>
                            </NativeSelect>
                        </Box>
                        <TextField
                            id="standard-number"
                            label="Address"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="Address"
                            onChange={handleChange}
                            variant="standard"
                            placeholder="Click to find Address"
                            sx={{
                                fontSize: "22px",
                                "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root":
                                    {
                                        fontSize: "22px",
                                    },
                                "& label+.css-v4u5dn-MuiInputBase-root-MuiInput-root":
                                    {
                                        marginTop: "30px !important",
                                    },
                            }}
                        />
                        <img
                            src={ImageConfig.searchgrayicon}
                            alt="searchicon"
                            style={{
                                position: "absolute",
                                top: "60%",
                                left: "58%",
                            }}
                        />
                        <TextField
                            id="standard-number"
                            label="Zip code"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="zipCode"
                            onChange={handleChange}
                            variant="standard"
                            placeholder="00000"
                            sx={{
                                fontSize: "22px",
                                "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root":
                                    {
                                        fontSize: "22px",
                                    },
                                "& label+.css-v4u5dn-MuiInputBase-root-MuiInput-root":
                                    {
                                        marginTop: "30px !important",
                                    },
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            marginTop: "90px",
                            marginBottom: "150px",
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
                                fontWeight: "900",
                                fontSize: "22px",
                                lineHeight: "27px",
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                color: "#FFFFFF",
                                backgroundColor: "#111827",
                                width: "objectFit",
                                padding: "15px 100px",
                                textTransform: "inherit",
                            }}
                            onClick={handleClick}
                        >
                            Proceed to Payment
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
