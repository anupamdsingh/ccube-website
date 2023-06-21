import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import Application from "./Application";
import Application1 from "./Application1";
import Buttons from "@/src/components/buttons";
function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = [
    { label: "Step 1", component: <Application handleNext={handleNext} /> },
    { label: "Step 2", component: <Application1 handleNext={handleNext} /> },
  ];

  return (
    <div className="flex w-full bg-slate-00 h-screen flex-col justify-center items-center bg-slate-100">
      <div className="w-1/2 bg-white flex flex-col rounded shadow-lg ">
        <div className="flex justify-center">
          <div className="w-4/5 pt-4 ">
            <Stepper activeStep={activeStep}>
              {steps.map(({ label }) => (
                <Step className="bg-indio-500" color="#ffffff" key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </div>
        <div className="pt-10">{steps[activeStep].component}</div>

        <div className="px-10 pt-14 pb-14">
          {activeStep < steps.length - 1 && (
            <div className="flex justify-center">
              <div className="w-1/5" onClick={handleNext}>
                <Buttons type="primary" Name="Next Step" />
              </div>
            </div>
          )}
          <div className="flex justify-between">
            {activeStep > 0 && (
              <div className="w-1/5" onClick={handleBack}>
                <Buttons type="primary" Name="Back" />
              </div>
            )}
            {activeStep === steps.length - 1 && (
              <div
                className="w-1/5"
                onClick={() => console.log("Form submitted!")}
              >
                <Buttons type="secondary" Name="Submit" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepperForm;
