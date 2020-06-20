import React, { Component } from 'react';

const BackgroundInfo2 = () => {
    return (
        <div id="header">

            <div className="row">
                <div className="col-md-4 text-white" id="left-col">
                    <h5 className="pb-4">Pease Provide Required Details </h5>
                    <div className="pb-1">
                        <input type="checkbox" id="vehicle1" name="taxPayerType" value="" defaultChecked />
                        <label htmlFor="taxPayerType" className="ml-2"> Tax Payer Type</label>
                    </div>
                    <div className="pb-1">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" defaultChecked />
                        <label htmlFor="vehicle1" className="ml-2"> Tax Payer Background Information Part 1</label>
                    </div>
                    <div className="pb-1">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" disabled />
                        <label htmlFor="vehicle1" className="ml-2"> Tax Payer Background Information Part 2</label>
                    </div>
                    <div className="pb-1">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" disabled />
                        <label htmlFor="vehicle1" className="ml-2"> Tax Registration Information</label>
                    </div>
                </div>
                <div className="col-md-8" id="right-col">
                    <h3 className="font-weight-bolder">Tax Payer Backgroud Information Part 2</h3>
                    <hr />
                    <div id="bottom-col">
                        <div className="row">
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
                            <div className="form-group col-md-6">
                                <label htmlFor="ifMarried">If Married, Spouse has an income?</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="ifMarried">
                                        <option defaultValue>Choose</option>
                                        <option value="single">Yes</option>
                                        <option value="single">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="houseNo">Tax Payer's Residence House No.</label>
                                <input type="text" className="form-control" id="houseNo" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="suffix">Street</label>
                                <input type="text" className="form-control" id="suffix" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="barangay">Barangay</label>
                                <input type="email" className="form-control" id="barangay" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="municipality">City/Municipality</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="municipality">
                                        <option defaultValue>Choose</option>
                                        <option value="Bulacan">Bulacan</option>
                                        <option value="Metro Manila">Metro Manila</option>
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

export default BackgroundInfo2;