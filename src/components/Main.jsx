import React from "react";
import { Table, Form, Container, Row, Col, Pagination } from "react-bootstrap";
import messageObject from "../assets/messages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Main() {
	const messageElements = messageObject.map(function (message) {
		return (
			<tr>
				<td>{message.title}</td>
				<td>{message.msg}</td>
				<td>{message.sentBy}</td>
				<td>{message.sentThrough}</td>
				<td>{message.dateCreated}</td>
				<td>{message.startDate}</td>
				<td>{message.endDate}</td>
			</tr>
		);
	});

	return (
		<div className="div-table">
			<Table className="main-table" hover size="sm">
				<thead>
					<tr>
						<th>Title</th>
						<th>Message</th>
						<th>Sent By</th>
						<th>
							Sent Through{" "}
							<FontAwesomeIcon
								className="plus-icon info-icon"
								icon={faInfoCircle}
							/>
						</th>
						<th>Date Created</th>
						<th>Start Date</th>
						<th>End Date</th>
					</tr>
				</thead>
				<tbody>{messageElements}</tbody>
			</Table>
			<Container>
				<Row>
					<Col>
						<Form.Group className="mb-3 items">
							<Form.Label className="form-label" htmlFor="items-per-page">
								Items per page
							</Form.Label>
							<Form.Select id="items-per-page">
								<option>10</option>
							</Form.Select>
						</Form.Group>
					</Col>
					<Col>
						<Pagination className="pagination">
							<Pagination.First />
							<Pagination.Prev />
							<Pagination.Item>{1}</Pagination.Item>
							<Pagination.Item>{2}</Pagination.Item>
							<Pagination.Next />
							<Pagination.Last />
						</Pagination>
					</Col>
					<Col>
						<p className="showing">Showing 1 - 10 of 1</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Main;
