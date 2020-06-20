import React, { Component } from 'react';
import taxFiling from "../src/images/tax.png"
import register from "../src/images/register.png"
import creditCard from "../src/images/assets/credit-card.png"

const Register = () => {
    return (
        <div id="register-section">
            <div className="row">
                <div className="col-md-4 text-white" id="left-col">
                    <div className="p-4">
                        <h5 className="pb-4">Welcome to Digitax</h5>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="transaction-type" value="" defaultChecked />
                            <label htmlFor="transaction-type" className="ml-2"> Choose Transaction Type</label>
                        </div>

                    </div>
                </div>
                <div className="col-md-8" id="right-col">
                    <h3 className="font-weight-bolder pt-4">Transaction Type</h3>
                    <hr />
                    <p>Choose Transaction</p>

                    <div className="row" id="bottom-col">

                        <div className="col-12 col-md-4 col-lg-4 col-sm-4">


                            <input type="radio" id="register" name="select" value="register" />
                            <label htmlFor="register" className="radio-cards">
                                <img src={register} className="icons" alt="" />
                                <p>Register</p>
                            </label>

                        </div>
                        <div className=" col-12 col-md-4 col-lg-4 col-sm-4">


                            <input type="radio" id="taxFiling" name="select" value="taxFiling" />
                            <label htmlFor="taxFiling" className="radio-cards">
                                <img src={taxFiling} className="icons" alt="" />
                                <p>Tax Filing</p>
                            </label>

                        </div>
                        <div className=" col-12 col-md-4 col-lg-4 col-sm-4">


                            <input type="radio" id="payment" name="select" value="payment" />
                            <label htmlFor="payment" className="radio-cards">
                                <img src={creditCard} className="icons" alt="" />
                                <p>Payment</p>
                            </label>

                        </div>

                    </div>
                    <hr />
                    <div className="d-flex justify-content-center buttons">
                        <button className="back">Back</button>
                        <button className="submit" data-toggle="modal" data-target="#exampleModal4">Proceed</button>

                        <div className="modal fade" id="exampleModal4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content modal-contents">
                                    <div className="modal-header d-flex justify-content-center">
                                        <h5 className="modal-title" id="exampleModalLabel">Welcome to Digi-File</h5>

                                    </div>

                                    <div className="modal-body d-flex justify-content-center p-5">
                                        <p>To start the tax filing process, kindly create a profile first by clicking the + button</p>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <div className="col-4">
                                            <button type="submit" className="submitApplicationBtn">Proceed</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Register;