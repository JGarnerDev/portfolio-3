import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBnLXmn_GcXuqvwKyQnQR1a1M2KtYMcf2c",
	authDomain: "portfolio-9ae18.firebaseapp.com",
	databaseURL: "https://portfolio-9ae18.firebaseio.com",
	projectId: "portfolio-9ae18",
	storageBucket: "portfolio-9ae18.appspot.com",
	messagingSenderId: "642554632450",
	appId: "1:642554632450:web:2517be55a9327d15aaca1b",
	measurementId: "G-SQ2VMMWYBM",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseProjects = firebaseDB.ref("projects");
const firebaseCodeChallenges = firebaseDB.ref("codeChallenges");
const firebaseWIUT = firebaseDB.ref("wiut");

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

// FOR CODE CHALLENGE BLOG POST

// let codeChallenges = [

// ];

// codeChallenges.forEach((codeChallenge) => {
// 	firebaseDB.ref("codeChallenges").push(codeChallenge);
// });

// Blog post model:

// {
// 	name: "Encrypt this!",
// 	date: today,
// 	keywords: "Algorithm Encription JavaScript Completed",
// 	content: [
// 		"https://i.imgur.com/5VtLhWP.png",
// 		"https://i.imgur.com/Ugnt0jr.png",
// 		"<p>Not too much to talk about here - the function takes the text argument (a string of a number of words), splits the string into an array of word strings, splits the word strings into an array of characters, switches the first and last character (if the specified conditions are met) of each word array and then converts the first character to ASCII code, joins the word array into a string,  assigns it to it's corresponding index in the new text array (made by the map method), then the function returns the new joined text array.</p>",
// 	],
// }

// FOR WIUT BLOG POST

export {
	firebase,
	firebaseDB,
	firebaseProjects,
	firebaseCodeChallenges,
	firebaseWIUT,
};
