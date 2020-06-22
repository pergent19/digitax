import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [formData, setFormData] = useState({});
    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="transactions-section">
            <nav id="navbar">
                <div className="logo">
                    <h2>Stark Industries LTD</h2>
                </div>

                <ul className="nav-menu">
                    <li><a href="#home" className="active scroll">Analytics</a></li>
                    <Link to={`/filing-period`}><li><a href="#about" className="scroll">New Transaction</a></li></Link>
                    <Link to={`/transaction`}><li><a href="#service" className="scroll">Transactions</a></li></Link>
                    <Link to={`/dashboard`}><li><a href="#menu" className="scroll">Dashboard</a></li></Link>
                </ul>
            </nav>


            <div className="header-1">
                <div className="row">
                    <div className="col-md-5 p-3 offset-1" id="application-left-col">
                        <div className="d-flex justify-content-around details">
                            <h5>Tax Payer's Information</h5>
                            <a href="">Update info</a>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" className="form-control" id="fullName" value="Juan Dela Cruz" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="tinNum">TIN</label>
                                <input type="text" className="form-control" id="tinNum" name="tinNum" value="1234-45677" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="taxPayerType">Tax Payer Type</label>
                                <input type="text" className="form-control" id="taxPayerType" value="Individual" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="incomeSource">Income Source</label>
                                <input type="text" className="form-control" id="incomeSource" name="incomeSource" value="Self Practicing Professional" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;