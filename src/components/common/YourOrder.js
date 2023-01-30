import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { useSelector } from "react-redux";

export const YourOrder = (props) => {
    const [colour, setColour] = useState("Red");
    const [size, setSize] = useState("Medium");
    const colourList = ["Red", "Pink", "Yellow", "Black"];
    const sizeList = ["Medium", "Large", "Small", "Extra small"];
    let total = 0;
    const otherDetails = useSelector(
        (state) => state.userSelectedProductLists.otherDetails
    );
    return (
        <Box
            sx={{
                color: "#616161",
                padding: "50px",
                backgroundColor: "#EFEFF4",
            }}
        >
            <Typography
                sx={{
                    fontSize: "25px",
                    fontWeight: "700",
                }}
            >
                Your Order
            </Typography>
            {props.productDetails.map((order) => {
                total = order.quantity * order.productPrice;
                return (
                    <>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "50px",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: "19px",
                                    fontWeight: "500",
                                }}
                            >
                                {order.productName}
                            </Box>
                            <Box sx={{ color: "red" }}>
                                <DeleteOutlineSharpIcon />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "20px",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <img
                                    src={order.imageSource}
                                    alt="imageicon"
                                    height="65px"
                                    width="55px"
                                />
                            </Box>
                            <Box
                                sx={{
                                    opacity: "0.8",
                                }}
                            >
                                {order.productDesc.map((desc) => {
                                    return <Typography>-{desc}</Typography>;
                                })}
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontWeight: "500",
                                    }}
                                >
                                    Quantity
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "20px",
                                        marginTop: "25px",
                                        alignItems: "center",
                                    }}
                                >
                                    <Button
                                        sx={{
                                            border: "2px solid red",
                                            color: "red",
                                            minWidth: 0,
                                            padding: 0,
                                        }}
                                    >
                                        <RemoveSharpIcon />
                                    </Button>
                                    {order.quantity}
                                    <Button
                                        sx={{
                                            border: "2px solid red",
                                            color: "red",
                                            minWidth: 0,
                                            padding: 0,
                                        }}
                                    >
                                        <AddSharpIcon />
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-end",
                                marginTop: "20px",
                            }}
                        >
                            <Box>
                                <Box
                                    sx={{
                                        fontWeight: "500",
                                        fontSize: "16px",
                                    }}
                                >
                                    Size
                                </Box>
                                <Box sx={{ marginTop: "20px" }}>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        value={size}
                                        onChange={(e) =>
                                            setSize(e.target.value)
                                        }
                                        sx={{ width: "170px" }}
                                    >
                                        {sizeList.map((s) => (
                                            <MenuItem
                                                key={s}
                                                value={s}
                                                sx={{ padding: "10px 10px" }}
                                            >
                                                {s}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Box>
                            </Box>
                            <Box>
                                <Box
                                    sx={{
                                        fontWeight: "500",
                                        fontSize: "16px",
                                    }}
                                >
                                    Colour
                                </Box>
                                <Box sx={{ marginTop: "20px" }}>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        value={colour}
                                        onChange={(e) =>
                                            setColour(e.target.value)
                                        }
                                        sx={{ width: "170px" }}
                                    >
                                        {colourList.map((color) => (
                                            <MenuItem
                                                key={color}
                                                value={color}
                                                sx={{ padding: "10px 10px" }}
                                            >
                                                {color}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Box>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        color: "#616161",
                                        fontSize: "22px",
                                        fontWeight: "700",
                                    }}
                                >
                                    ${order.productPrice}
                                </Typography>
                            </Box>
                        </Box>
                    </>
                );
            })}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "30px",
                }}
            >
                <Box
                    sx={{
                        color: "#616161",
                        opacity: "0.8",
                        fontSize: "16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <Typography>Subtotal</Typography>
                    <Typography>Shipping</Typography>
                    <Typography>Vat,tax</Typography>
                    <Typography
                        sx={{
                            color: "#616161",
                            fontSize: "22px",
                            fontWeight: "700",
                            marginTop: "25px",
                        }}
                    >
                        Total
                    </Typography>
                </Box>
                <Box
                    sx={{
                        color: "#616161",
                        opacity: "0.8",
                        fontSize: "18px",
                        fontWeight: "600",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <Typography>${total}</Typography>
                    <Typography>${otherDetails.Shipping}</Typography>
                    <Typography>${otherDetails.vatAndTax}</Typography>
                    <Typography
                        sx={{
                            color: "#616161",
                            fontSize: "22px",
                            fontWeight: "700",
                            marginTop: "25px",
                        }}
                    >
                        $
                        {total + otherDetails.Shipping + otherDetails.vatAndTax}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
