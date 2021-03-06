import { useState } from "react";
import propTypes from "prop-types";

export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepsKeys = Object.keys(steps);

  const [CurrentStep, setCurrentStep] = useState(
    stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
  );

  const totalSteps = stepsKeys.length;
  const indexStep = stepsKeys.indexOf(CurrentStep);

  const nextStep = () => {
    if (+indexStep < totalSteps) setCurrentStep(stepsKeys[indexStep + 1]);
  };

  const prevStep = () => {
    if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
  };

  return <>{props.children(nextStep, prevStep, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
  steps: propTypes.object.isRequired,
  initialStep: propTypes.string,
};
