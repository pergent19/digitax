import React, { Component } from 'react';

class SpouseGeneralInfo extends Component {
    render() {
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
                        <h3 className="font-weight-bolder pt-4">Tax Payer's Spouse General Information </h3>
                        <hr />

                        <div id="bottom-col">

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="amended">Spouse Type</label>
                                    <div className="input-group mb-3">
                                        <select className="custom-select" id="amended">
                                            <option defaultValue>Choose</option>
                                            <option value="single">Yes</option>
                                            <option value="single">No</option>
                                        </select>
                                    </div>
                                </div>

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

                        </div>
                        <hr />
                        <div className="d-flex justify-content-center buttons">
                            <button className="back">Back</button>
                            <button className="submit">Proceed</button>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default SpouseGeneralInfo;


