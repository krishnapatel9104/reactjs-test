import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "./userSlice";
import {
    increase,
    increment,
    decrement,
    incrementIfOdd,
} from "../counter/counterSlice";
import { getAmount } from "../counter/counterAPI";

export const User = () => {
    const dispatch = useDispatch();
    const userLoginStatus = useSelector((state) => state.user.isAuthentication);
    let counterValueRedux = Number(useSelector((state) => state.counter.value));
    const [userData, setuserData] = useState({
        email: "",
        password: "",
    });
    const [incrementAmount, setIncrementAmount] = useState(2);
    const handleChange = (event) => {
        if (event.target.id === "email") {
            setuserData({
                ...userData,
                email: event.target.value,
            });
        }
        if (event.target.id === "password") {
            setuserData({
                ...userData,
                password: event.target.value,
            });
        }
    };

    return (
        <>
            {!userLoginStatus && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                    }}
                >
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        placeholder="Enter email"
                        onChange={handleChange}
                        value={userData.email}
                        required
                    />
                    <TextField
                        id="password"
                        label="password"
                        variant="outlined"
                        placeholder="Enter password"
                        sx={{ marginTop: "10px" }}
                        onChange={handleChange}
                        value={userData.passowrd}
                        required
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ marginTop: "30px" }}
                        onClick={() => dispatch(setUserDetails(userData))}
                    >
                        Login
                    </Button>
                </Box>
            )}

            {userLoginStatus && (
                <>
                    <Box sx={{ marginTop: "50px", marginBottom: "50px" }}>
                        Redux Counter
                    </Box>
                    <Box sx={{ marginBottom: "50px" }}>{counterValueRedux}</Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "50px",
                            margintop: "100px",
                        }}
                    >
                        <Box>
                            <Button
                                variant="contained"
                                onClick={() => dispatch(increment())}
                            >
                                Increment
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                variant="contained"
                                onClick={() => dispatch(increase(Number(5)))}
                            >
                                Increase by 5
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                variant="contained"
                                onClick={() => dispatch(decrement())}
                            >
                                Decrement
                            </Button>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <TextField
                                id="amount"
                                label="amount"
                                variant="outlined"
                                placeholder="Enter amount to add"
                                sx={{ marginTop: "30px" }}
                                onChange={(e) =>
                                    setIncrementAmount(e.target.value)
                                }
                                value={incrementAmount}
                            />
                        </Box>
                        <Button
                            variant="contained"
                            sx={{ marginTop: "30px", marginRight: "20px" }}
                            onClick={() =>
                                dispatch(
                                    incrementIfOdd(Number(incrementAmount))
                                )
                            }
                        >
                            Add If Odd
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ marginTop: "30px" }}
                            onClick={() =>
                                dispatch(getAmount(Number(incrementAmount)))
                            }
                        >
                            Add async
                        </Button>
                    </Box>
                </>
            )}
        </>
    );
};
