import React, { useContext } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ColorContext } from "../../Context/Context";
import { useHistory } from "react-router";
import CooperateRegistration from "../../Pages/Register/CorporateRegistration";
import CorporateUpload from "../../Pages/Register/CorporateUpload";
import "./CorporateRegStepper.css"
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: ({ color }) => color.mode,
      borderColor: "#72FAEC",
      //    color: console.log(Color)
    },
  },
  completed: {
    "& $line": {
      // borderColor: ({ color }) => color.mode === 'light' ? '#44968d' : '#72faec',
      borderColor: "#72faec",
    },
  },
  line: {
    borderColor: "#44968d",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    // color:'white',
    color: ({ color }) => (color.mode === "dark" ? "white" : "black"),
    fontSize: ".7rem",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  completed: {
    color: "#1EE834",
  },
  size: {
    fontSize: ".6rem",
  },
}));

const CustomStepper = withStyles((theme) => {
  console.log(theme);
  return {
    root: {
      "& .text": {
        color: (props) => props.color,
      },
    },
  };
})(StepLabel);

function getSteps() {
  return ["COMPANY DETAILS", "KYC"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CooperateRegistration />;
    case 1:
      return <CorporateUpload />;
    default:
      return "Unknown step";
  }
}

export default function CorporateRegisterStepper() {
  const history = useHistory();
  const { color } = useContext(ColorContext);
  let { mode } = color;
  const style = {
    bggreen: "#27BDAD",
    bgblue: "#3C66C4",
    bgred: "#CF4332",
    bgblack: "#0E2725",
    bgwhite: "#FFFFFF",
    bgdarkgreen: "#72FAEC",
  };

  const classes = useStyles({ color });
  // const theme = useTheme();
  // console.log(theme)
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1) {
      history.push("/login");
    }
  };
  // console.log(classes.)

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //     setActiveStep(0);
  // };

  return (
    <div className="cr_stepper">
      <div className={classes.root}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<QontoConnector color={color} />}
        >
          {steps.map((label, i) => (
            <Step
              key={label}
              className={color.mode === "dark" ? "colors" : "color_light_step"}
            >
              <CustomStepper
                color={
                  activeStep >= i
                    ? "inherit"
                    : `${color.mode === "dark" ? "#fff" : "black"}`
                }
                className={classes.size}
              >
                <span className="text">{label}</span>
              </CustomStepper>
            </Step>
          ))}
        </Stepper>
        <div>
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
              {/* <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={
                  color.mode === "dark"
                  ? "stepper_CBtn_back"
                  : "l_stepper_CBtn_back"
                }
                >
                Back
            </Button> */}
              {/* <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={
                  color.mode === "dark"
                  ? "stepper_CBtn_nxt"
                  : "l_stepper_CBtn_nxt"
                }
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button> */}
              <button
                onClick={handleNext}
                className={
                  color.mode === "dark"
                    ? "stepper_CBtn_nxt"
                    : "l_stepper_CBtn_nxt"
                }
                style={{
                  padding: "8px 120px",
                  border: "none",
                  backgroundColor:
                    mode === "light" ? style.bggreen : style.bgdarkgreen,
                  color: mode === "light" ? style.bgwhite : style.bgblack,
                }}
                className="cus_btn1"
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
