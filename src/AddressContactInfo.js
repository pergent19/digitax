import React, { Component } from 'react';

const AddressContactInfo = () => {
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
                    <h3 className="font-weight-bolder">Tax Payer Registered Address and Contact Information</h3>
                    <hr />
                    <div id="bottom-col">

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
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="region">Region</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="region">
                                        <option defaultValue>Choose</option>
                                        <option value="Bulacan">NCR</option>
                                        <option value="Metro Manila">Region III</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="number" className="form-control" id="phone" />
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
export default AddressContactInfo;