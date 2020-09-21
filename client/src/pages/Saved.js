import React from "react";
import { useState, useEffect } from "react";
import API from "../api/API";
import { Container, Button, Nav, Navbar, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Saved() {
	const [saved, setSaved] = useState([]);

	useEffect(() => {
		API.loadSaved()
			.then((res) => {
				setSaved(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [saved]);

	function deleteItem(id) {
		console.log(id);
		API.deleteSaved(id)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div>
			<Navbar bg="dark" variant="dark" sticky="top">
				<Navbar.Brand href="/">Google Book Search</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
				</Nav>
			</Navbar>
			<Container>
				<br />
				<div className="text-center">
					{saved.length ? (
						<CardGroup>
							{saved.map((item) => (
									<Card style={{ width: '10%' }} key={item._id}>
										<Card.Img src={item.image} alt={item.title} style={{ height: '18rem' }}/>
										<Button onClick={() => deleteItem(item._id)}>Remove</Button>
										<Card.Title>{item.title}</Card.Title>
										<Card.Subtitle>{item.author}</Card.Subtitle>
										<Card.Text>{item.description}</Card.Text>
										<Link to={`/books/${item.id}`} />
										
									</Card>
							))}
						</CardGroup>
					) : (
						<div>
							<h1>No Saved Books!</h1>
							<h3>Head back to the homepage to search for some</h3>
						</div>
					)}
				</div>
			</Container>
		</div>
	);
}

export default Saved;
