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
import TaxCalculation from "./TaxCalculation"
import Transaction from "./Transactions"
import Dashboard from "./Dashboard"
import Navbar from "./Navbar";
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom"


function App() {
  return (

    <Router>


      <Switch>


        <Route path="/welcome">
          <Register />
        </Route>
        <Route path="/registered-business">
          <Registered />
        </Route>
        <Route path="/tax-payer">
          <TaxPayer />
        </Route>
        <Route path="/background-info">
          <BackgroundInfo1 />
        </Route>
        <Route path="/address-info">
          <AddressContactInfo />
        </Route>
        <Route path="/tax-registration">
          <TaxRegistration />
        </Route>
        <Route path="/spouse-background">
          <SpouseBackgroundInfo />
        </Route>
        <Route path="/spouse-info">
          <SpouseInfo />
        </Route>
        <Route path="/filing-period">
          <FilingPeriod />
        </Route>
        <Route path="/income-source">
          <IncomeSource />
        </Route>
        <Route path="/general-info">
          <GeneralInfo />
        </Route>
        <Route path="/spouse-geninfo">
          <SpouseGeneralInfo />
        </Route>
        <Route path="/joint-filing">
          <JointFilingInfo />
        </Route>
        <Route path="/application-details">
          <ApplicationDetails />
        </Route>
        <Route path="/tax-calculation">
          <TaxCalculation />
        </Route>
        <Route path="/transaction">
          <Transaction />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>




  );
}

export default App;










