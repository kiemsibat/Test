import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SelectComponent from "./SelectComponents";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Step1", "Step2", "Step3", "Review"];
}

export default function HorizontalLabelPositionBelowStepper() {
  const [meal, setMeal] = useState("");
  const [number, setNumber] = useState(1);
  const [restaurant, setRestaurant] = useState("");
  const[serving, setServing] = useState(0);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  function getStepContent(stepIndex) {
    // const [meal,setMeal] = useState('');
    const handleAddDish = () => {
      console.log("add dish");
    };
    const handleChangeNumber = (e) => {
      setNumber(e.target.value);
      console.log('handleChangeNumber :',e.target.value)
    }

    const handleChangeServing = (e) => {
      setServing(e.target.value);
      console.log('handleChangeServing :',e.target.value)
    }
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <div style={{ marginLeft: "-50px", fontWeight: "bold" }}>
              Please Select a meal
            </div>
            <SelectComponent title="" style={{ marginLeft: "-50px" }} />
            <div
              style={{
                marginLeft: "30px",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Please Enter Number of people{" "}
            </div>
            <input value={number} onInput={handleChangeNumber} type="number" />
          </div>
        );

      case 1:
        return (
          <>
            <div style={{ marginLeft: "-50px", fontWeight: "bold" }}>
              Please Select a Restaurant
            </div>
            <SelectComponent title="" style={{ marginLeft: "-50px" }} />
          </>
        );
      case 2:
        return (
          <>
            <div style={{ display: "flex" }}>
              <div style={{ fontWeight: "bold", marginLeft: "550px" }}>
                <div> Please Select a Dish</div>
                <SelectComponent title="" />
                <AddCircleOutlineIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleAddDish}
                />
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  marginLeft: "20px",
                }}
              >
                <div style={{ marginBottom: "30px" }}>
                  Please Enter No. of servings{" "}
                </div>
                <input
                  onInput={handleChangeServing}
                  value={serving}
                  type="number"
                  // defaultValue="1"
                />
              </div>
            </div>
          </>
        );
      case 3:
              return <>{serving}{number}</>;
      default:
        return "Unknown stepIndex";
    }
  }
  // console.log(number);
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
