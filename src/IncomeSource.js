import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const IncomeSource = () => {
    return (
        <div id="income-source-section">
            <div className="row">
                <div className="col-md-4 text-white" id="left-col">
                    <div className="p-4">
                        <h5 className="pb-2">Tax Filing</h5>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="filingPeriod" value="" defaultChecked />
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
                    <h3 className="font-weight-bolder pt-4">Income Source </h3>
                    <hr />
                    <p>Select Source of Income for this Filing.</p>
                    <div className="d-flex justify-content-center" id="bottom-col">

                        <div className="card-col" id="indiv">
                            <input type="radio" id="1701" name="select" value="1701" />
                            <label htmlFor="1701" className="radio-cards">

                                <p>Self employed Individuas, Estates, and Trusts</p>
                            </label>

                        </div>
                        <div className="card-col" id="non-indiv">


                            <input type="radio" id="1701A" name="select" value="1701A" />
                            <label htmlFor="1701A" className="radio-cards">
                                <p>Individual earning PURELEY from Business/Profession</p>
                            </label>

                        </div>

                        <div className="card-col" id="non-indiv">


                            <input type="radio" id="1700" name="select" value="1700" />
                            <label htmlFor="1700" className="radio-cards">

                                <p>Individuals earning PURELY from Compensation</p>
                            </label>

                        </div>

                    </div>
                    <hr />
                    <div className="d-flex justify-content-center buttons">
                        <Link to={`/filing-period`}><button className="back">Back</button></Link>
                        <Link to={`/general-info`}><button className="submit">Proceed</button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default IncomeSource;