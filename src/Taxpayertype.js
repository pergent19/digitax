import React, { Component } from 'react';
import company from "../src/images/assets/corporate.svg"
import { Link } from 'react-router-dom'
import person from "../src/images/assets/person.svg"
const Taxpayertype = () => {
    return (
        <div id="tax-payer-section">
            <div className="row">
                <div className="col-md-4 text-white" id="left-col">
                    <div className="p-4">
                        <h5 className="pb-4">Please Provide Required Details</h5>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" disabled />
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
                    <h3 className="font-weight-bolder pt-4">Tax Payer Type</h3>
                    <hr />
                    <p>What is the organization classification of the tax payer?</p>

                    <div className="d-flex justify-content-center" id="bottom-col">

                        <div className="card-col" id="indiv">
                            <input type="radio" id="control_05" name="select" value="3" />
                            <label htmlFor="control_05" className="radio-cards">
                                <img src={person} className="icons" alt="" />
                                <p>Individual</p>
                            </label>

                        </div>
                        <div className="card-col" id="non-indiv">


                            <input type="radio" id="control_04" name="select" value="4" />
                            <label htmlFor="control_04" className="radio-cards">
                                <img src={company} className="icons" alt="" />
                                <p>Non-individual</p>
                            </label>

                        </div>

                    </div>
                    <hr />
                    <div className="d-flex justify-content-center buttons">
                        <Link to={`/registered-business`}><button className="back">Back</button></Link>
                        <Link to={`/background-info`}><button className="submit">Proceed</button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Taxpayertype;