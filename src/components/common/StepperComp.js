import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ImageConfig } from "../../images";
import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#C4C4C4",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#111827",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: active ? (
            <img
                src={ImageConfig.currentstep}
                height="20px"
                width="20px"
                alt="icon"
            />
        ) : completed ? (
            <img src={ImageConfig.prevstep} alt="icon" />
        ) : (
            <img src={ImageConfig.nextstep} alt="icon" />
        ),
        2: active ? (
            <img
                src={ImageConfig.currentstep}
                height="20px"
                width="20px"
                alt="icon"
            />
        ) : completed ? (
            <img src={ImageConfig.prevstep} alt="icon" />
        ) : (
            <img src={ImageConfig.nextstep} alt="icon" />
        ),
        3: active ? (
            <img
                src={ImageConfig.currentstep}
                height="20px"
                width="20px"
                alt="icon"
            />
        ) : completed ? (
            <img src={ImageConfig.prevstep} alt="icon" />
        ) : (
            <img src={ImageConfig.nextstep} alt="icon" />
        ),
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

const steps = ["Shipping", "Billing", "Confirmation"];

export const StepperComp = (props) => {
    return (
        <Stack sx={{ width: "100%" }} spacing={4}>
            <Stepper
                alternativeLabel
                activeStep={props.activeStep}
                connector={<ColorlibConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
};
