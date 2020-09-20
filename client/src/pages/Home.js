import React from "react";
import { useState, useEffect } from "react";
import { Container, Button, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../api/API";

function Home() {
	const initial = [];
	const [books, setBooks] = useState(initial);
	const [saveBook, setSavedBook] = useState({});
	const [formObject, setFormObject] = useState({})

	useEffect(() => {
		API.searchTitle("The Martian")
			.then((res) => {
				setBooks(res.data.items);
				console.log(this.books);
			})
			.catch((err) => {
				showAlert(err, "error");
				console.log(err);
			});
	}, []);

	function saveBookItem(book) {
		let newBook = {
			title: book.title,
			author: book.authors[0],
			description: book.description,
			thumbnail: book.imageLinks.smallThumbnail,
			link: book.infoLink,
		}

			API.saveBook(newBook)
			.then((res) => {
				setSavedBook(res.data);
				showAlert(res.data, "success");
			})
			.catch((err) => {
				console.log(err);
				showAlert(err, "error");
			});
	}

	function handleInputChange(event) {
        const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value })
		console.log(name, value);
	}
	
	function handleFormSubmit(event) {
		event.preventDefault();
		if(formObject.search) {
			API.searchTitle(formObject.search).then(res => {
				setBooks(res.data.items);
			}).catch(err => {
				console.log(err);
			});
		}
	}

	function showAlert(data, type) {}

	return (
		<Container>
			<Navbar bg="dark" variant="dark" sticky="top">
				<Navbar.Brand href="/">Google Book Search</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/saved">Saved</Nav.Link>
				</Nav>
				<Form inline onSubmit={handleFormSubmit}>
					<FormControl
						onChange={handleInputChange}
						type="text"
						placeholder="Book Title"
						className="mr-sm-2"
					/>
					<Button type="submit" variant="outline-info">Search</Button>
				</Form>
			</Navbar>
			<br />
			<div className="text-center">
				<h1>Results</h1>
				{books.length ? (
					<ul>
						{books.map((item) => (
							<li key={item.id}>
								<img
									src={item.volumeInfo.imageLinks.smallThumbnail}
									alt={item.volumeInfo.title}
								/>
								<Link to={`/books/${item.id}`} />
								<h2>{item.volumeInfo.title}</h2>
								<h3>By: {item.volumeInfo.authors[0]}</h3>
								<p>{item.volumeInfo.description}</p>
								<Button onClick={() => saveBookItem(item.volumeInfo)}>Save</Button>
							</li>
						))}
					</ul>
				) : (
					<h1>No results!</h1>
				)}
			</div>
		</Container>
	);
}

export default Home;
