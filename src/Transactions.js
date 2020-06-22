import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Transactions = () => {
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
            <div>
                <div className="row mt-2">
                    <div className="col-md-3 offset-1">
                        <form encType="multipart/form-data" className="d-flex">
                            <button type="submit" className="search-button"> <i class="fas fa-search ml-1"></i></button>
                            <input type="text" name="search" className="form-control" onChange={onChangeHandler} />
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <div className=" card-transaction  p-2">
                        <div className="d-flex justify-content-around mt-3">
                            <h5 className="font-weight-bold transaction-h5">Quarterly Income Tax</h5>
                            <div className="container-transaction-status">
                                <h6 className="mt-1">On-going</h6>
                            </div>
                        </div>

                        <p className="ml-2">Jan-Mar</p>
                        <p className="ml-2">Due on May 12, 2020</p>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p className="ml-2">Tax Amount Due </p>
                            <button type="" className="btn btn-primary mr-2">View</button>
                        </div>
                        <h6 className="font-weight-bolder ml-2">20,000.00</h6>
                        <div>

                        </div>

                    </div>
                    <div className=" card-transaction p-2">
                        <div className="d-flex justify-content-around mt-3">
                            <h5 className="font-weight-bold transaction-h5">Quarterly Income Tax</h5>
                            <div className="container-transaction-status">
                                <h6 className="mt-1">On-going</h6>
                            </div>
                        </div>

                        <p className="ml-2">Jan-Mar</p>
                        <p className="ml-2">Due on May 12, 2020</p>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p className="ml-2">Tax Amount Due </p>
                            <button type="" className="btn btn-primary mr-2">View</button>
                        </div>
                        <h6 className="font-weight-bolder ml-2">20,000.00</h6>
                        <div>

                        </div>
                    </div>
                    <div className=" card-transaction">

                        <div className="container-circle d-flex justify-content-center mt-5" >
                            <div>
                                <button type="submit" className="circle-plus"><i class="fas fa-plus fa-3x"></i></button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>





        </div>
    )
}

export default Transactions;