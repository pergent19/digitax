import React, { Component } from 'react';

const SpouseInfo = () => {
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
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" defaultChecked />
                            <label htmlFor="vehicle1" className="ml-2"> Tax Payer Spouse's Contact Information</label>
                        </div>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" disabled />
                            <label htmlFor="vehicle1" className="ml-2"> Tax Payer Spouse's Tax Registration Information</label>
                        </div>

                    </div>
                </div>
                <div className="col-md-8" id="right-col">
                    <h3 className="font-weight-bolder">Tax Payer Spouse's Tax Registration Information</h3>
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
                                        <option value="filipino">Filipino</option>
                                        <option value="american">American</option>
                                        <option value="chinese">Chinese</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                    </div>

                    <hr />
                    <div className="d-flex justify-content-center buttons">
                        <button className="back">Back</button>
                        <button className="submit" data-toggle="modal" data-target="#exampleModal">Submit</button>


                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content p-5">
                                    <div className="modal-header text-center p-5">
                                        <h5 className="modal-title " id="exampleModalLabel">Tax Payer Profile Creation Successful</h5>
                                    </div>
                                    <div className="modal-body p-5">
                                        Congratulations! You have successfully created a tax payer's profile. <br />
                                        You can now file taxes for the tax payer you just created. Just go to their profile and start a tax filing application.<br />
                                        You can also edit the details in their profile page.
      </div>
                                    <div className="modal-footer d-flex justify-content-center ">

                                        <button type="button" className="btn-modal">Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default SpouseInfo;