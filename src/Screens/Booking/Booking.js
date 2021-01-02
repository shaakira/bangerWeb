import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NavBar from "../../Components/NavBar/NavBar";
import BookingStep1 from "./BookingSteps/BookingStep1/BookingStep1";
import { MDBBtn ,MDBIcon,} from "mdbreact";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  line: {
    height: 1,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
    marginTop: 7,
    marginLeft: 22,
    marginRight: 22,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "white",
    zIndex: 1,
    color: "#ccc",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    border: "1.5px solid #ffb700",
    fontSize: 20,
  },
  active: {
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    backgroundColor: "#ffb700",
    border: "1.5px solid #ffb700",
    fontSize: 20,
    color: "white",
  },
  completed: {
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    backgroundColor: "white",
    border: "1.5px solid #ffb700",
    fontSiz: 18,
    color: "#ccc",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {completed ? <Check /> : icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "3rem",
  },
  button: {
    marginLeft:'4rem'
  },
  nextButton:{
float:'right',
marginRight:'4rem'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  topNav: {
    height: "80px",
    backgroundColor: "#262626",
    color: "white",
    marginTop: "65px",
  },
  topText:{
      float:'right',
      marginRight:'3rem',
      marginTop:'1.5rem'
  }
}));

function getSteps() {
  return [
    "Pickup Date & Time",
    "Select Equipment",
    "Driver Details",
    "Booking Summary",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BookingStep1 />;
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

export default function CustomizedSteppers() {
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

  return (
    <div>
      <NavBar />
      <div className={classes.topNav}>
          <p className={classes.topText}>FIND A CAR {" > "} BOOK</p></div>
      <div className={classes.root}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
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
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div style={{marginTop:'4rem'}}>
                <MDBBtn
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                  outline
                  color='amber'
                  style={{visibility: activeStep===0?'hidden':'visible'}}
               
                >
                    <MDBIcon icon="chevron-left" style={{marginRight:'0.5rem'}}/>
                  Back
                </MDBBtn>
                <MDBBtn
                  variant="contained"
                  color="amber"
                  onClick={handleNext}
                  className={classes.nextButton}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                
                  <MDBIcon icon="chevron-right" style={{marginLeft:'0.5rem'}} />
                </MDBBtn>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
