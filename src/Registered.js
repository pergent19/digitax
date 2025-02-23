import React, { Component } from 'react';
import { Link } from 'react-router-dom'


const Registered = () => {
    return (
        <div id="registered-section">
            <h4 className="registered-h1">Registered Business Accounts for Tax Filing</h4>
            <div className=" registered-bottom">
                <div className="d-flex flex-wrap">
                    <div className=" mt-5">
                        <div className="card">
                            <img id="registered-photo" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-text text-white"> Stark Industrial Ltd</h5>
                                <p className="card-text text-white">Tony Stark</p>
                                <p className="card-text text-white">Sole Proprietor</p>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-5">


                        <div className="card">
                            <img id="registered-photo" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-text text-white"> Stark Industrial Ltd</h5>
                                <p className="card-text text-white">Tony Stark</p>
                                <p className="card-text text-white">Sole Proprietor</p>
                            </div>
                        </div>

                    </div>
                    <div className=" mt-5">

                        <div className="card">
                            <img id="registered-photo" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-text text-white"> Stark Industrial Ltd</h5>
                                <p className="card-text text-white">Tony Stark</p>
                                <p className="card-text text-white">Sole Proprietor</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">

                        <div class="card d-flex justify-content-center align-items-center">
                            <div className="container-circle" >
                                <Link to={`/tax-payer`}><button type="submit" className="circle-plus"><i class="fas fa-plus fa-3x"></i></button></Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Registered;