import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const TaxCalculation = () => {
    return (
        <div className="applicationDetails">
            <nav id="navbar">
                <div className="logo">
                    <h2>Stark Industries LTD</h2>
                </div>

                <ul className="nav-menu">
                    <li><a href="#home" className="active scroll">Tax Payer Profile</a></li>
                    <Link to={`/application-details`}><li><a href="#about" className="scroll">Application Details</a></li></Link>
                    <li><a href="#service" className="scroll">Forms</a></li>
                    <li><a href="#menu" className="scroll">Tax Calculation</a></li>
                </ul>
            </nav>

            <div className="header-1-tax-calculation">
                <div className="row">
                    <div className="col-md-5 p-3 offset-1" id="application-left-col">
                        <div className="d-flex justify-content-around align-items-center details1">
                            <h5>8% Income Tax Rate - Tax Payer Input</h5>
                            <div className="">
                                <div className="form-group col-md-12">
                                    <div className="input-group mb-3">
                                        <select className="custom-select" id="taxPayerOrSpouse">
                                            <option value="single" defaultValue>Tax Payer</option>
                                            <option value="single">Spouse</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="form-group col-md-6 ">
                                <p id="tax-calcu-p">1. Sales/Revenues/Receipts/Fees</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 offset-6">
                                <input type="" name="" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p id="tax-calcu-p">2. Less: Sales Returns, Allowances, and Discounts</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 offset-6">
                                <input type="" name="" className="form-control" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <p id="tax-calcu-p">3. Add: Other Non-Operating Income</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="" name="" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="" name="" className="form-control" />
                            </div>

                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="" name="" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="" name="" className="form-control" />
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <p id="tax-calcu-p">4. Less: Allowable deductions from gross sales and other non  operating income of PURELY self-employed individuals and/or professionals in the amount of P 250,000.00</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-6">

                                <input type="" name="" className="form-control" />

                            </div>
                        </div>




                    </div>
                    <div className="col-md-5 ml-4 p-4" id="application-right-col">
                        <div className="">
                            <h5 className="text-white">Automatic Calculations</h5>
                        </div>
                        <hr className="line" />
                        <div className="row">
                            <div className="col-md-12" >
                                <h6 className="text-white">Tax Due:</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-12">
                                <input type="" name="tax-due" className="form-control " id="tax-due-form" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" >
                                <h6 className="text-white">Tax Rate:</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="" name="tax-rate" className="form-control " id="tax-rate-form" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" >
                                <h6 className="text-white">Taxable Income/Loss:</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="" name="tax-rate" className="form-control " id="tax-rate-form" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12" >
                                <h6 className="text-white">Total Taxable Income:</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="" name="tax-rate" className="form-control " id="tax-rate-form" />
                            </div>
                        </div>
                        <hr className="line mt-5" />
                        <div className="container">

                            <div className="row justify mt-4  container-btn">
                                <div className="col-12 mb-3 d-flex justify-content-center">
                                    <button type="submit" className="submitApplicationBtn">Review Application</button>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TaxCalculation;