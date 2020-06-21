import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const TaxRegistration = () => {
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
                    <h3 className="font-weight-bolder">Tax Registration Info</h3>
                    <hr />
                    <div id="bottom-col">

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="taxPayerType">Tax Payer Type</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="taxPayerType">
                                        <option defaultChecked>Choose</option>
                                        <option value="singleProprietor">Single Proprietor</option>
                                        <option value="employed">Employed</option>
                                        <option value="selfPracticingProfessional">Self Practicing Professional</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="alphaCode">Alphanumeric Tax Code</label>
                                <input type="text" className="form-control" id="alphaCode" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="citizenship">Citizenship</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="citizenship">
                                        <option defaultChecked>Choose</option>
                                        <option value="filipino">Filipinp</option>
                                        <option value="american">American</option>
                                        <option value="chinese">Chinese</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="foreignTaxCode">Foreign Tax Code (if applicable)</label>
                                <input type="text" className="form-control" id="foreignTaxCode" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="rdoCode">RDO Code</label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" id="rdoCode">
                                        <option defaultChecked>Choose</option>
                                        <option value="filipino">Filipinp</option>
                                        <option value="american">American</option>
                                        <option value="chinese">Chinese</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="foreignTaxCode">Upload Tax Payer's Photo</label>
                                <input type="file" className="form-control" id="foreignTaxCode" />
                            </div>
                        </div>

                        <hr />
                        <div className="d-flex justify-content-center buttons">
                            <Link to={`/address-info`}><button className="back">Back</button></Link>
                            <Link to={`/spouse-background`}><button className="submit">Proceed</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaxRegistration;