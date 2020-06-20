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
//   {
//     name: 'Finished! - Making a WordPress Theme and Site for a Friend',
//     date: today,
//     keywords: 'WordPress PHP SASS Lavarel-Mix',
//     content: [
//       'https://i.imgur.com/JfSd8gc.png',
//       'https://i.imgur.com/Y6d4RGw.png',
//       "<p>The major work is finished! </p><p>After a few trials and tribulations with how WordPress’s backend handles and prioritizes scripts, getting cozy with PHP, and integrating SASS, the major development involved in making my friend’s tutoring website is done! </p><p>It was fairly challenging, but well worth the reading of documentation and sorting out the good tutorials from the bad. I’m pretty jazzed that I’ve encountered enough odd bugs to have a pretty good understanding of how things work. Furthermore, it’s a great feeling to help out for a good cause. </p><p>Feel free to <a href='http://theconfidentlearner.com'>check it out!</a></p>"
//     ]
//   }
// ]

// wiut.forEach(blogpost => {
//   firebaseDB.ref('wiut').push(blogpost)
// })

// let projects = [
//   {
//     name: 'The Condident Learner',
//     date: today,
//     id: 6,
//     keywords: 'React Node API SASS JavaScript',
//     img: 'https://i.imgur.com/JfSd8gc.png',
//     gitlink: 'https://github.com/JGarnerDev/TheConfidentLearner',
//     link: 'https://theconfidentlearner.com/',
//     desc:
//       'A volunteer WordPress theme and website for a early-education tutor.',
//     review: ''
//   }
// ]

// projects.forEach(project => {
//   firebaseDB.ref('projects').push(project)
// })

export {
	firebase,
	firebaseDB,
	firebaseProjects,
	firebaseCodeChallenges,
	firebaseWIUT,
};
