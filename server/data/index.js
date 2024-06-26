import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Arthur",
    lastName: "Gab",
    email: "fortests@gmail.com",
    password: "1222",
    picturePath: "1Arthur.png",
    friends: [],
    location: "Rio de Janeiro, RJ",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Fábio",
    lastName: "Akita",
    email: "akitaonrails@gmail.com",
    password: "$12345678",
    picturePath: "1Akita.jpg",
    friends: [],
    location: "São Paulo, SP",
    occupation: "Entrepreneur and speaker",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "James",
    lastName: "Gosling",
    email: "James@gmail.com",
    password: "12345678",
    picturePath: "1James.jpg",
    friends: [],
    location: "Calgary, CA",
    occupation: "Back End Developer",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Edgar",
    lastName: "Frank Codd",
    email: "edgar@gmail.com",
    password: "12345678",
    picturePath: "1Edgar.jpg",
    friends: [],
    location: " Fortuneswell",
    occupation: "Journalist",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Sergio",
    lastName: "Sacani",
    email: "sergio@gmail.com",
    password: "12345678",
    picturePath: "1Sergio.jpg",
    friends: [],
    location: "São Paulo, SP",
    occupation: "Geoscientist",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Gustavo",
    lastName: "Guanabara",
    email: "gustavoguanabara@gmail.com",
    password: "$12345678",
    picturePath: "1Gustavo.jpg",
    friends: [],
    location: "Rio de Janeiro, RJ",
    occupation: "Educator",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Alan",
    lastName: "Turing",
    email: "alan@gmail.com",
    password: "12345678",
    picturePath: "1Alan.jpg",
    friends: [],
    location: "Richmond, VA",
    occupation: "Computer Scientist",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Some",
    lastName: "Girl",
    email: "somegirl@gmail.com",
    password: "12345678",
    picturePath: "pGirl.jpeg",
    friends: [],
    location: "Canada, CA",
    occupation: "Data Scientist",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
];


// POSTS
export const posts = [

  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Fábio",
    lastName: "Akita",
    location: "São Paulo, SP",
    description: 
      "Some really long random description",
    picturePath: "PostAkita.jpg",
    userPicturePath: "1Akita.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "one more random comment",
      "I lied, one more random comment",
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "James",
    lastName: "Gosling",
    location: "Calgary, CA",
    description:
      "Another really long random description. This one is longer than the previous one.",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "PostJames.jpg",
    userPicturePath: "1James.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "I lied again, one more random comment",
      "Why am I doing this?",
      "Man I'm bored",
      "What should I do?",
      "I'm going to play video games",
    ],
  },
 
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Edgar",
    lastName: "Frank Codd",
    location: " Fortuneswell",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "PostEdgar.jpg",
    userPicturePath: "1Edgar.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
      "I'm still bored",
      "All I want to do is play video games",
      "I'm going to play video games",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Sergio",
    lastName: "Sacani",
    location: "São Paulo, SP",
    description:
      "Just a short description. I'm tired of typing. I'm going to play video games now.",
    picturePath: "PostSergio.jpg",
    userPicturePath: "1Sergio.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "I lied again, one more random comment",
      "Why am I doing this?",
      "Man I'm bored",
      "What should I do?",
      "I'm going to play video games",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Gustavo",
    lastName: "Guanabara",
    location: "Rio de Janeiro, RJ",
    description:
      "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    picturePath: "PostGustavo.jpg",
    userPicturePath: "1Gustavo.jpg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "one more random comment",
      "and another random comment",
      "no more random comments",
      "I lied, one more random comment",
    ],
  },  
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Alan",
    lastName: "Turing",
    location: "Richmond, VA",
    description:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    picturePath: "PostAlan.jpg",
    userPicturePath: "1Alan.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
];
