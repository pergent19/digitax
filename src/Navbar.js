import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <SideNav
            className="navbar-component"
            onSelect={(selected) => {
                const to = '/';
            }}

        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="account-details" >
                <NavItem eventKey="account-details" >
                    <NavIcon>


                    </NavIcon>
                    <NavText>
                        <Link to={`/dashboard`}>   <i className="fas fa-user-circle mr-2" style={{ fontSize: '1.75em' }} /><a className="nav-buttons mr-5">Account Details</a></Link>
                    </NavText>
                </NavItem>
                <NavItem eventKey="transactions">
                    <NavIcon>

                    </NavIcon>
                    <NavText>
                        <Link to={`/transaction`}>   <i className="fas fa-user-circle mr-2" style={{ fontSize: '1.75em' }} /><a className="nav-buttons mr-5">Transactions</a></Link>
                    </NavText>
                </NavItem>


                <NavItem eventKey="taxfiling">
                    <NavIcon>

                    </NavIcon>
                    <NavText>
                        <Link to={`/filing-period`}>   <i className="fas fa-user-circle mr-2" style={{ fontSize: '1.75em' }} /><a className="nav-buttons mr-5">Tax Filing</a></Link>
                    </NavText>

                </NavItem>


                <NavItem eventKey="paymentInstructions">
                    <NavIcon>

                    </NavIcon>
                    <NavText>
                        <Link to={`/`}>   <i className="fas fa-user-circle mr-2" style={{ fontSize: '1.75em' }} /><a className="nav-buttons mr-5">Payment Instructions</a></Link>
                    </NavText>

                </NavItem>
            </SideNav.Nav>
        </SideNav >

    )
}

export default Navbar;