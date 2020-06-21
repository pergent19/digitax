import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const ApplicationDetails = () => {
    return (
        <div className="applicationDetails">
            <nav id="navbar">
                <div className="logo">
                    <h2>Stark Industries LTD</h2>
                </div>

                <ul className="nav-menu">
                    <li><a href="#home" className="active scroll">Tax Payer Profile</a></li>
                    <li><a href="#about" className="scroll">Application Details</a></li>
                    <li><a href="#service" className="scroll">Forms</a></li>
                    <Link to={`/tax-calculation`}><li><a href="#menu" className="scroll">Tax Calculation</a></li></Link>
                </ul>
            </nav>

            <div className="header-1">
                <div className="row">
                    <div className="col-md-5 p-3 offset-1" id="application-left-col">
                        <div className="d-flex justify-content-around details">
                            <h5>Application Details</h5>
                            <a href="">Update info</a>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="filingPeriod">Filing Period</label>
                                <input type="text" className="form-control" id="filingPeriod" value="Annual" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="taxCalendarDate">Tax Calendar Date</label>
                                <input type="date" className="form-control" id="taxCalendarDate" name="taxCalendarDate" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="dateFiled">Date Filed</label>
                                <input type="date" className="form-control" id="dateFiled" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="birForm">BIR Form</label>
                                <input type="text" className="form-control" id="birForm" name="taxCalendarDate" value="1701A" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="alphaNumTaxCode">Alphanumeric Tax Code</label>
                                <input type="text" className="form-control" id="alphaNumTaxCode" value="Annual" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="amendedReturn">Amended Return?</label>
                                <input type="text" className="form-control" id="amendedReturn" value="No" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="shortPeriodReturn">Short Period Return?</label>
                                <input type="text" className="form-control" id="shortPeriodReturn" value="No" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="claimingForeignTaxCredits">Claiming Foreign Tax Credis?</label>
                                <input type="text" className="form-control" id="claimingForeignTaxCredits" value="No" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="shortPeriodReturn">Foreign Tax Number</label>
                                <input type="text" className="form-control" id="shortPeriodReturn" value="123-456-789" />
                            </div>
                        </div>


                    </div>
                    <div className="col-md-5 ml-4 p-4" id="application-right-col">
                        <div className="d-flex justify-content-around container-aplication">
                            <div className="d-flex container-details-amount align-items-center">
                                <button type="submit" className="btn-details" data-toggle="modal" data-target="#exampleModal2">details</button>


                                <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content p-5">
                                            <div className="modal-header d-flex justify-content-center">
                                                <h5 className="modal-title " id="exampleModalLabel">Amount Due Details</h5>
                                            </div>
                                            <div className="modal-body d-flex justify-content-between">
                                                <h6>Tax Due</h6>
                                                <p>P20,000.00</p>
                                            </div>
                                            <div className="modal-body d-flex justify-content-between">
                                                <h6>Processing Fee</h6>
                                                <p>P200.00</p>
                                            </div>
                                            <div className="modal-body d-flex justify-content-between">
                                                <h6>Transaction Fee</h6>
                                                <p>P500.00</p>
                                            </div>
                                            <div className="modal-footer">
                                                <div className="modal-body d-flex justify-content-between">
                                                    <h6>Total amount Due</h6>
                                                    <p>P20,700.00</p>
                                                </div>

                                            </div>
                                            <div className="d-flex justify-content-center   mb-5">
                                                <button type="button" className="btn-modal">Back</button>                                               </div>

                                        </div>
                                    </div>
                                </div>




                                <h6 className="text-white ml-2">Amount Details: </h6>
                                <h5 className="text-white ml-2">10,000.00</h5>
                            </div>
                            <div className="container-status">
                                <h5 className="mt-1">On-going</h5>
                            </div>
                        </div>
                        <hr className="line mt-5" />
                        <div className="row">
                            <div className="col-md-6 borderBot" id="border">
                                <div className="pb-1">
                                    <input type="checkbox" id="transaction-type" name="taxForm" value="" defaultChecked />
                                    <label htmlFor="taxForm" className="ml-2 text-white"> Tax Form</label>
                                </div>
                                <div className="pb-1">
                                    <input type="checkbox" id="transaction-type" name="taxCalculation" value="" defaultChecked />
                                    <label htmlFor="taxCalculation" className="ml-2 text-white">Tax Calculation</label>
                                </div>
                                <div className="pb-1">
                                    <input type="checkbox" id="transaction-type" name="filingPeriod" value="" disabled />
                                    <label htmlFor="filingPeriod" className="ml-2 text-white"> Filing Period</label>
                                </div>
                                <div className="pb-1">
                                    <input type="checkbox" id="transaction-type" name="birForm" value="" disabled />
                                    <label htmlFor="birForm" className="ml-2 text-white">BIR Form</label>
                                </div>
                            </div>
                            <div className="col-md-6 borderBot">
                                <div className="form-group col-md-12">
                                    <label htmlFor="creationDate" className="text-white">Creation Date</label>
                                    <input type="text" className="form-control text-white" id="creationDate" value="April 5, 2020" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="creationDate" className="text-white">Submission Filing Date</label>
                                    <input type="text" className="form-control text-white" id="creationDate" value="" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="creationDate" className="text-white">Payment Date</label>
                                    <input type="text" className="form-control text-white" id="creationDate" value="" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="creationDate" className="text-white">Filing Code / Payment Code</label>
                                    <input type="text" className="form-control text-white" id="creationDate" value="ABZ - 1234 - XYZ" />
                                </div>
                            </div>
                        </div>
                        <div className="container">

                            <div className="row justify mt-4  container-btn">
                                <div className="col-12 mb-3 d-flex justify-content-center">
                                    <button type="submit" className="submitApplicationBtn" data-toggle="modal" data-target="#exampleModal3">Submit Application</button>
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <button type="submit" className="paymentInstructionBtn">Payment Instruction</button>
                                </div>

                                <div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content modal-contents">
                                            <div className="modal-header d-flex justify-content-center">
                                                <h5 className="modal-title" id="exampleModalLabel">Application Submitted</h5>
                                            </div>
                                            <div className="modal-body d-flex justify-content-center">
                                                <p>Congratulations Your tax filing application has been submitted</p>
                                            </div>
                                            <div className="modal-body d-flex justify-content-between">
                                                <h6>You may pay the amount due using the payment code <span className="paymentCode">ABC - 123 - XYZ</span></h6>

                                            </div>
                                            <div className="modal-body d-flex justify-content-between">
                                                <h6>You may also track the transaction by navigating the tax payer's profile page.</h6>

                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <div className="col-4 ">
                                                    <button type="submit" className="submitApplicationBtn" data-toggle="modal" data-target="#exampleModal3"> Profile</button>
                                                </div>
                                                <div className="col-4">
                                                    <button type="submit" className="paymentInstructionBtn">Payment Portal</button>
                                                </div>
                                            </div>

                                        </div>
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

export default ApplicationDetails;