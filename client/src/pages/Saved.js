import React from "react";
import { useState, useEffect } from "react";
import API from "../api/API";
import { Container, Button } from "react-bootstrap";
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
		API.deleteSaved(id).then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		});
	}

	return (
		<Container>
			<br />
			<div className="text-center">
				{saved.length ? (
					<ul>
						{saved.map((item) => (
							<li key={item.id}>
								<img
									src={item.volumeInfo.imageLinks.smallThumbnail}
									alt={item.volumeInfo.title}
								/>
								<Link to={`/books/${item.id}`} />
								<h2>{item.volumeInfo.title}</h2>
								<h3>By: {item.volumeInfo.authors[0]}</h3>
								<p>{item.volumeInfo.description}</p>
								<Button onClick={() => deleteItem(item.id)}>Remove</Button>
							</li>
						))}
					</ul>
				) : (
					<div>
						<h1>No Saved Books!</h1>
						<h3>Use the search bar above to save some!</h3>
					</div>
				)}
			</div>
		</Container>
	);
}

export default Saved;
