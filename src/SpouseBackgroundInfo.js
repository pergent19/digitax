import React, { Component } from 'react';

const SpouseBackgroundInfo = () => {
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
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" defaultChecked />
                            <label htmlFor="vehicle1" className="ml-2"> Tax Payer's Background Information</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" defaultChecked />
                            <label htmlFor="vehicle1" className="ml-2">Tax Payer's Contact Information</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" defaultChecked />
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
                    <h3 className="font-weight-bolder">Tax Payer's Spouse Background Information</h3>
                    <hr />
                    <div id="bottom-col">
                        <div className="row">
                            <div className="form-group col-12">
                                <label htmlFor="TaxPayersIdNum">Tax Payer's Spouse Identification Number</label>
                                <input type="number" className="form-control" id="TaxPayersIdNum" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName">Spouse's First Name</label>
                                <input type="text" className="form-control" id="firstName" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">Spouse's Last Name</label>
                                <input type="text" className="form-control" id="lastName" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="middleName">Spouse's Middle Name</label>
                                <input type="text" className="form-control" id="middleName" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="suffix"> Spouse'sSuffix</label>
                                <input type="text" className="form-control" id="suffix" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="emailadd">Spouse's Date of Birth</label>
                                <input type="date" className="form-control" id="bday" name="emailadd" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="bday">Spouse's Email Address</label>
                                <input type="email" className="form-control" id="emailadd" name="emailadd" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="phone">Spouse's Phone Number</label>
                                <input type="number" className="form-control" id="phone" name="phone" />
                            </div>

                        </div>
                    </div>

                    <hr />
                    <div className="d-flex justify-content-center buttons">
                        <button className="back">Back</button>
                        <button className="submit" >Proceed</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpouseBackgroundInfo;