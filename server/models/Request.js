const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const requestSchema = new Schema({
	requestText: {
		type: String,
		required: "You need to explain your request",
		minlength: 1,
		maxlenght: 280,
		trim: true,
	},
	requestSender: {
		type: String,
		required: true,
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: (timestamp) => dateFormat(timestamp),
	},
	Comments: [
		{
			CommentText: {
				type: String,
				required: true,
				minlength: 1,
				maxlength: 280,
			},
			CommentSender: {
				type: String,
				required: true,
			},
			createdAt: {
				type: Date,
				default: Date.now,
				get: (timestamp) => dateFormat(timestamp),
			},
		},
	],
});

const Requests = model("Request", requestSchema);

module.exports = Requests;
