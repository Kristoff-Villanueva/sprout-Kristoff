import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, NavDropdown } from "react-bootstrap";
import { faMagnifyingGlass, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import navigationLinks from "../assets/navLinks";

// Nav Links

const navDropDownElements = navigationLinks.map(function (navEl) {
	return (
		<NavDropdown title={navEl.main} className="basic-nav-dropdown">
			<NavDropdown.Item href="#">{navEl.sub}</NavDropdown.Item>
		</NavDropdown>
	);
});

function NavigationBar() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<div className="brand-div">
						<img
							alt=""
							src="src\assets\sprout-logo.png"
							height="30"
							className="brand-image"
						/>{" "}
					</div>
					<h1 className="main-heading">HR</h1>

					<Nav className="m-auto nav-links">{navDropDownElements}</Nav>

					<input
						className="search-bar"
						type="search"
						placeholder="employee search"
					/>
					<FontAwesomeIcon className="nav-icon" icon={faMagnifyingGlass} />
					<FontAwesomeIcon className="nav-icon" icon={faBell} />
					<FontAwesomeIcon className="nav-icon profile" icon={faCircle} />
					<NavDropdown
						title="Admin"
						className="basic-nav-dropdown admin"
					></NavDropdown>
				</Container>
			</Navbar>
		</>
	);
}

export default NavigationBar;
