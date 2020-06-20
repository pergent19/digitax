import React, { Component } from 'react';

const JointFilingInfo = () => {
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
                            <input type="checkbox" id="transaction-type" name="generalInfo" value="" defaultChecked />
                            <label htmlFor="generalInfo" className="ml-2">General Information</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="jointFilingInfo" value="" disabled />
                            <label htmlFor="jointFilingInfo" className="ml-2"> Joint Filing Information</label>
                        </div>


                    </div>
                </div>
                <div className="col-md-8" id="right-col">
                    <h3 className="font-weight-bolder pt-4">Joint Filing Information </h3>
                    <hr />

                    <div id="bottom-col">

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="incomeSpouse">Spouse has income?</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="incomeSpouse">
                                        <option defaultValue>Choose</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="jointFilingSpouse">Joint Filing with Spouse?</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="jointFilingSpouse">
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
                        <button className="back">Back</button>
                        <button className="submit">Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JointFilingInfo;