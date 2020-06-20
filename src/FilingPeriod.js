import React, { Component } from 'react';
import quarter from "../src/images/quarter.png"
import calendar from "../src/images/calendar.png"

const FilingPeriod = () => {
    return (
        <div id="tax-payer-section">
            <div className="row">
                <div className="col-md-4 text-white" id="left-col">
                    <div className="p-4">
                        <h5 className="pb-2">Tax Filing</h5>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="filingPeriod" value="" disabled />
                            <label htmlFor="filingPeriod" className="ml-2"> Filing Period</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="birForm" value="" disabled />
                            <label htmlFor="birForm" className="ml-2">BIR Form</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="generalInfo" value="" disabled />
                            <label htmlFor="generalInfo" className="ml-2">General Information</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="jointFilingInfo" value="" disabled />
                            <label htmlFor="jointFilingInfo" className="ml-2"> Joint Filing Information</label>
                        </div>


                    </div>
                </div>
                <div className="col-md-8" id="right-col">
                    <h3 className="font-weight-bolder pt-4">Filing Period</h3>
                    <hr />
                    <p>Select Period of Application</p>

                    <div className="d-flex justify-content-center" id="bottom-col">

                        <div className="card-col" id="indiv">
                            <input type="radio" id="AnnualFiling" name="select" value="AnnualFiling" />
                            <label htmlFor="AnnualFiling" className="radio-cards">
                                <img src={calendar} className="icons" alt="" />
                                <p>Annual Filing</p>
                            </label>

                        </div>
                        <div className="card-col" id="non-indiv">


                            <input type="radio" id="QuarterFiling" name="select" value="QuarterFiling" />
                            <label htmlFor="QuarterFiling" className="radio-cards">
                                <img src={quarter} className="icons" alt="" />
                                <p>Quarter Filing</p>
                            </label>

                        </div>

                    </div>
                    <hr />
                    <div className="d-flex justify-content-center buttons">
                        <button className="back">Cancel</button>
                        <button className="submit">Proceed</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilingPeriod;