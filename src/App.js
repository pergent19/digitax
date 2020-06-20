import React from 'react';
import Register from "./Register"
import Registered from "./Registered"
import TaxPayer from "./Taxpayertype"
import BackgroundInfo1 from "./BackgroundInfo1"
import AddressContactInfo from "./AddressContactInfo"
import TaxRegistration from "./TaxRegistration"
import SpouseBackgroundInfo from "./SpouseBackgroundInfo"
import SpouseInfo from "./SpouseInfo"
import FilingPeriod from "./FilingPeriod"
import IncomeSource from "./IncomeSource"
import GeneralInfo from "./GeneralInfo"
import SpouseGeneralInfo from "./SpouseGeneralInfo"
import JointFilingInfo from "./JointFilingInfo"
import ApplicationDetails from './ApplicationDetails';


function App() {
  return (
    <div>
      <div className="mb-5">
        <Register />
      </div>
      <div className="mb-5">
        <TaxPayer />
      </div>
      <div className="mb-5">
        <BackgroundInfo1 />
      </div>
      <div className="mb-5">
        <AddressContactInfo />
      </div>
      <div className="mb-5">
        <TaxRegistration />
      </div>
      <div className="mb-5">
        <SpouseBackgroundInfo />
      </div>
      <div className="mb-5">
        <SpouseInfo />
      </div>
      <div className="mb-5">
        <FilingPeriod />
      </div>
      <div className="mb-5">
        <IncomeSource />
      </div>
      <div className="mb-5">
        <GeneralInfo />
      </div>
      <div className="mb-5">
        <SpouseGeneralInfo />
      </div>
      <div className="mb-5">
        <JointFilingInfo />
      </div>
      <div className="mb-5">
        <ApplicationDetails />
      </div>
    </div >
  );
}

export default App;
