import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: process.env.API_KEY,
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
// {
// 	name: "Encrypt this!",
// 	date: today,
// 	keywords: "Algorithm Encription JavaScript Completed",
// 	content: [
// 		"https://i.imgur.com/5VtLhWP.png",
// 		"https://i.imgur.com/Ugnt0jr.png",
// 		"",
// 	]
// }
// ];

// codeChallenges.forEach(codeChallenge => {
//   firebaseDB.ref('codeChallenges').push(codeChallenge)
// })

// Blog post model:

// FOR WIUT BLOG POST

// let wiut = [
// 	{
// 		name: "Offering my services to an adapting business",
// 		date: today,
// 		keywords: "PHP Wordpress",
// 		content: [
// 			"https://i.imgur.com/p8NVOA6.png",
// 			"https://i.imgur.com/Y2wRglB.png",
// 			"",
// 		],
// 	},
// ];

// wiut.forEach((blogpost) => {
// 	firebaseDB.ref("wiut").push(blogpost);
// });

// let projects = [
// 	{
// 		name: "WeatherMeThis Weather App",
// 		date: today,
// 		id: 5,
// 		keywords: "React Node API SASS JavaScript",
// 		img: "https://i.imgur.com/zWmyyiL.png",
// 		gitlink: "https://github.com/JGarnerDev/weather-app",
// 		link: "https://weathermethis.netlify.app/",
// 		desc:
// 			"A React weather app with API calls and SASS, brings the forecast and flags bad weather.",
// 		review: "",
// 	},
// ];

// projects.forEach((project) => {
// 	firebaseDB.ref("projects").push(project);
// });

export {
	firebase,
	firebaseDB,
	firebaseProjects,
	firebaseCodeChallenges,
	firebaseWIUT,
};
