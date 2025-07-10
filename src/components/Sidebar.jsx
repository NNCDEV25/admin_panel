import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';
import { Nav, NavDropdown } from 'react-bootstrap';
import { BsGrid, BsPeople, BsBoxArrowRight } from 'react-icons/bs';

export default function Sidebar() {

    const [show, setShow] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault(); // prevent NavDropdown from auto-navigation
        setShow(prev => !prev);
    };
    const closeDropdown = () => {
        setShow(false);
    };
    return (
        <div className="sidebar">
            <div className="logo-wrapper">
                <img src="image.webp" alt="Logo" className="logo" />
            </div>
            <Nav defaultActiveKey="/dashboard" className="flex-column sidebar-nav">
                <Nav.Link href="/dashboard"><BsGrid className="me-2" /> Dashboard</Nav.Link>
                <NavDropdown
                    title="Enquiry"
                    id="enquiry-dropdown"
                    className="custom-nav-dropdown"
                    menuVariant="dark"
                    show={show}
                    onClick={toggleDropdown}
                    onMouseLeave={closeDropdown}
                >
                    <NavDropdown.Item as={Link} to="/dotin" className="custom-dropdown-item">
                        Mysore (DotIN)
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/dotcom" className="custom-dropdown-item">
                        Bengaluru (DotCom)
                    </NavDropdown.Item>
                     <NavDropdown.Item as={Link} to="/popup_enquiry" className="custom-dropdown-item">
                        Popup Enquiries
                    </NavDropdown.Item>
                </NavDropdown>


                <Nav.Link href="/user-details">Employee Details</Nav.Link>

                <Nav.Link href="/teams">Teams</Nav.Link>

            </Nav>
            <div className="logout-section">
                <BsBoxArrowRight className="me-2" />
                Logout
            </div>
        </div>
    );
}
