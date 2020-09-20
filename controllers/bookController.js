const db = require("../models");
const axios = require("axios");

module.exports = {
	findAll: (req, res) => {
		db.Book.find(req.query)
			.sort({ date: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(400).json(err));
	},
	findID: (req, res) => {
		db.Book.findById(req.params.id)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	create: (req, res) => {
		db.Book.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(400).json(err));
	},
	update: (req, res) => {
		db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(400).json(err));
	},
	remove: (req, res) => {
		db.Book.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(400).json(err));
	},
	search: (req, res) => {
		console.log(req.params);
		const query = req.params.title;

		let queryURI = {
			method: "GET",
			url: `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCAknu-YiOa6OcYDUB-Oy0AbQg1X3IIuZg`,
			headers: {}
		};

		axios(queryURI)
			.then((response) => {
				res.json(response.data);
			})
			.catch((err) => {
				res.status(400).json(err.message);
			});
	},
};
