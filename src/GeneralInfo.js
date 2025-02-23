import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const GeneralInfo = () => {
    return (
        <div id="income-source-section">
            <div className="row">
                <div className="col-md-4 text-white" id="general-left-col">
                    <div className="p-4">
                        <h5 className="pb-2">Tax Filing</h5>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="filingPeriod" value="" defaultChecked />
                            <label htmlFor="filingPeriod" className="ml-2"> Filing Period</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="birForm" value="" defaultChecked />
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
                    <h3 className="font-weight-bolder pt-4">Tax Payer's General Information </h3>
                    <hr />

                    <div id="genearal-bottom-col">

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="taxYear">Tax Filing for the year</label>
                                <input type="date" className="form-control" id="datepicker" id="taxYear" name="taxYear" />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="amended">Amended Return?</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="amended">
                                        <option defaultValue>Choose</option>
                                        <option value="single">Yes</option>
                                        <option value="single">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="form-group col-md-6">
                                <label htmlFor="shortReturn">Short Period Return?</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="shortReturn">
                                        <option defaultValue>Choose</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="alphaNumTaxCode">Alphanumeric Tax Code</label>
                                <input type="text" className="form-control" id="alphaNumTaxCode" />
                            </div>
                        </div>

                        <div className="row">

                            <div className="form-group col-md-6">
                                <label htmlFor="foreignTax">Claiming Foreign Tax Credit?</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="claimingForeinTax">
                                        <option defaultValue>Choose</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="foreignTax">Foreign Tax Number</label>
                                <input type="number" className="form-control" id="foreignTax" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="taxRate">Tax Rate</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="taxRate">
                                        <option defaultValue>Choose</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>




                    </div>
                    <hr />
                    <div className="d-flex justify-content-center buttons">
                        <Link to={`/income-source`}><button className="back">Back</button></Link>
                        <Link to={`/joint-filing`}> <button className="submit">Proceed</button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default GeneralInfo;