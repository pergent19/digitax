import React, { Component } from 'react';

const BackgroundInfo1 = () => {
    return (

        <div id="header">

            <div className="row">
                <div className="col-md-4 text-white" id="left-col">
                    <div className="p-4">
                        <h5 className="pb-4">Please Provide Required Details</h5>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" defaultChecked />
                            <label htmlFor="vehicle1" className="ml-2"> Tax Payer Type</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" disabled />
                            <label htmlFor="vehicle1" className="ml-2"> Tax Payer's Background Information</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" disabled />
                            <label htmlFor="vehicle1" className="ml-2">Tax Payer's Contact Information</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" disabled />
                            <label htmlFor="vehicle1" className="ml-2"> Tax Payer's Tax Registration Information</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" disabled />
                            <label htmlFor="vehicle1" className="ml-2"> Tax Payer Spouse's Contact Information</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" disabled />
                            <label htmlFor="vehicle1" className="ml-2"> Tax Payer Spouse's Tax Registration Information</label>
                        </div>

                    </div>
                </div>

                <div className="col-md-8" id="right-col">
                    <h3 className="font-weight-bolder">Tax Payer Background Information</h3>
                    <hr />
                    <div id="bottom-col">
                        <div className="row">
                            <div className="form-group col-12">
                                <label htmlFor="TaxPayersIdNum">Tax Payers Identification Number</label>
                                <input type="text" className="form-control" id="TaxPayersIdNum" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName">Tax Payer's First Name</label>
                                <input type="text" className="form-control" id="firstName" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="middleName">Middle Name</label>
                                <input type="text" className="form-control" id="middleName" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="suffix">Suffix</label>
                                <input type="text" className="form-control" id="suffix" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="bday">Date of Birth</label>
                                <input type="date" className="form-control" id="bday" name="bday" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="civilStatus">Civil Status</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="civilStatus">
                                        <option defaultValue>Choose</option>
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                        <option value="divorced">Divorced</option>
                                        <option value="widowed">Widowed</option>
                                        <option value="others">Others</option>
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

export default BackgroundInfo1;