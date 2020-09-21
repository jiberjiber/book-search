import React from "react";
import { useState, useEffect } from "react";
import {
	Container,
	Button,
	Nav,
	Navbar,
	Form,
	FormControl,
	Card,
	CardColumns,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../api/API";

function Home() {
	const [books, setBooks] = useState([]);
	// eslint-disable-next-line
	const [saveBook, setSavedBook] = useState({});
	const [formObject, setFormObject] = useState({});

	// useEffect(() => {
	// 	API.searchTitle("The Martian")
	// 		.then((res) => {
	// 			setBooks(res.data.items);
	// 		})
	// 		.catch((err) => {
	// 			showAlert(err, "error");
	// 			console.log(err);
	// 		});
	// }, []);

	function saveBookItem(book) {
		let newBook = {
			title: book.title,
			author: book.authors[0],
			description: book.description,
			image: book.imageLinks.smallThumbnail,
			link: book.infoLink,
		};

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
		setFormObject({ ...formObject, [name]: value });
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		API.searchTitle(formObject.search)
			.then((res) => {
				setBooks(res.data.items);
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(books);
	}

	function showAlert(data, type) {}

	console.log(books);

	return (
		<div>
			<Navbar bg="dark" variant="dark" sticky="top">
				<Navbar.Brand href="/">Google Book Search</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/saved">Saved</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl
						onChange={handleInputChange}
						type="text"
						placeholder="Book Title"
						name="search"
						className="mr-sm-2"
					/>
					<Button onClick={handleFormSubmit} variant="outline-info">
						Search
					</Button>
				</Form>
			</Navbar>
			<Container>
				<br />
				<div className="text-center">
					{books.length ? (
						<div>
							<h1>Results</h1>
							<CardColumns>
								{books.map((item) => (
									<Card key={item.id}>
										<Card.Title>{item.volumeInfo.title}</Card.Title>
										<Card.Subtitle>
											By: {item.volumeInfo.authors[0]}
										</Card.Subtitle>

										{item.volumeInfo.imageLinks ? (
											<Card.Img
												src={item.volumeInfo.imageLinks.thumbnail}
												alt={item.volumeInfo.title}
											/>
										) : (
											<Card.Img
												src=''
												alt={item.volumeInfo.title}
											/>
										)}
										
										<Button onClick={() => saveBookItem(item.volumeInfo)}>
											Save
										</Button>
										<Card.Text>{item.volumeInfo.description}</Card.Text>
										<Link to={`/books/${item.id}`} />
									</Card>
								))}
							</CardColumns>
						</div>
					) : (
						<Container>
							<h1>Welcome to Google Book Search</h1>
							<h3>Use the bar in the top right to find some books!</h3>
						</Container>
					)}
				</div>
			</Container>
		</div>
	);
}

export default Home;
