import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const AddressContactInfo = () => {
    const [formData, setFormData] = useState({});
    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div id="header">

            <div className="row">
                <div className="col-md-4 text-white" id="left-col">
                    <div className="p-4">
                        <h5 className="pb-4">Please Provide Required Details</h5>
                        <div className="pb-1">
                            <input type="checkbox" id="transaction-type" name="transaction-type" onChange={onChangeHandler} value="" defaultChecked />
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
                    <h3 className="font-weight-bolder">Tax Payer's Registered Address and Contact Information</h3>
                    <hr />
                    <div id="address-bottom-col">
                        <form>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="houseNo">Tax Payer's Residence House No.</label>
                                    <input type="text" className="form-control" id="houseNo" onChange={onChangeHandler} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="suffix">Street</label>
                                    <input type="text" className="form-control" id="suffix" onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="barangay">Barangay</label>
                                    <input type="email" className="form-control" id="barangay" onChange={onChangeHandler} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="municipality">City/Municipality</label>
                                    <div className="input-group mb-3">
                                        <select className="custom-select" id="municipality" onChange={onChangeHandler}>
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
                        </form>

                    </div>

                    <hr />
                    <div className="d-flex justify-content-center buttons">
                        <Link to={`/background-info`}><button className="back">Back</button></Link>
                        <Link to={`/tax-registration`}><button className="submit">Proceed</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddressContactInfo;