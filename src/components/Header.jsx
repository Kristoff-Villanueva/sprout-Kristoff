import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<Container>
			<Row className="top-row">
				<Col className="ms-auto">
					<h2 className="mt-5">Announcements</h2>
					<p>
						View, create, or edit announcements for all employees of your
						company.
					</p>
				</Col>
				<Col className="col-top-right">
					<Button className="announcement-btn" variant="success">
						<FontAwesomeIcon className="plus-icon" icon={faPlus} />
						Post an Announcement
					</Button>
				</Col>
			</Row>
			<Row className="row-middle">
				<Col className="col-middle">
					<div className="all-div">
						<p className="count-num">10</p>
						<p className="count-text">All</p>
					</div>
					<div className="draft-div">
						<p className="draft-num">10</p>
						<p className="draft-text">Drafts</p>
					</div>
				</Col>
				<Col></Col>
				<Col>
					<Form.Group className="mb-3">
						<Form.Select id="disabledSelect">
							<option>Filter by</option>
						</Form.Select>
					</Form.Group>
				</Col>
				<Col>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search... "
							className="me-2"
							aria-label="Search"
						/>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Header;
