import React from "react";
import { FormControl, Button, Form, Nav, Navbar } from "react-bootstrap";

function NavComponent() {
	return (
		<Navbar bg="dark" variant="dark" sticky="top">
			<Navbar.Brand href="/">Google Book Search</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="/saved">Saved</Nav.Link>
			</Nav>
			<Form inline>
				<FormControl onChange={handleInputChange} type="text" placeholder="Book Title" className="mr-sm-2" />
				<Button variant="outline-info">Search</Button>
			</Form>
		</Navbar>
	)
}

export default NavComponent;