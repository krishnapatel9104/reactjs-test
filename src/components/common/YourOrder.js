import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { useSelector } from "react-redux";

export const YourOrder = (props) => {
    const colourList = ["Red", "Pink", "Yellow", "Black"];
    const sizeList = ["M", "L", "S", "XS"];
    let total = 0;
    const otherDetails = useSelector(
        (state) => state.userSelectedProductLists.otherDetails
    );
    const handleClick = (e, order) => {
        props.setProductDetails(
            props.productDetails.filter((product) => product.id !== order.id)
        );
    };
    const handleQuantityChange = (identifier, order) => {
        if (identifier === "add") {
            props.setProductDetails(
                props.productDetails.map((product) => {
                    return product.id === order.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product;
                })
            );
        }
        if (identifier === "less") {
            props.setProductDetails(
                props.productDetails.map((product) => {
                    return product.id === order.id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product;
                })
            );
        }
    };
    const handleChange = (e, order) => {
        const { name, value } = e.target;
        if (name === "size") {
            props.setProductDetails(
                props.productDetails.map((product) => {
                    return product.id === order.id
                        ? { ...product, size: value }
                        : product;
                })
            );
        }
        if (name === "colour") {
            props.setProductDetails(
                props.productDetails.map((product) => {
                    return product.id === order.id
                        ? { ...product, color: value }
                        : product;
                })
            );
        }
    };
    console.log("updated props.productdetails : ", props.productDetails);
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
                total += order.quantity * order.productPrice;
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
                            <Box>
                                <Button
                                    sx={{ color: "red" }}
                                    onClick={(e) => handleClick(order)}
                                >
                                    <DeleteOutlineSharpIcon />
                                </Button>
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
                                        name="less"
                                        onClick={(e) =>
                                            handleQuantityChange("less", order)
                                        }
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
                                        name="add"
                                        onClick={(e) =>
                                            handleQuantityChange("add", order)
                                        }
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
                                        name="size"
                                        value={order.size}
                                        onChange={(e) => handleChange(e, order)}
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
                                        name="colour"
                                        value={order.color}
                                        onChange={(e) => handleChange(e, order)}
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
