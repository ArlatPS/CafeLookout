# Cafe Lookout
## My first project - site for searching, adding and reviewing cafes

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)


## Home Page

![Home Page](https://github.com/ArlatPS/cafeLookout/tree/master/pictures/home.png)

## Technologies

- **Node.js**
- JavaScript with **EJS**
- CSS
- **ExpressJS 4.18** for routing
- **MongoDB** with **Mongoose 6.7** - database stored in MongoDB Atlas cloud
- **Passport** for user authentication
- API

## Features
- users sign up and login - Passport
- showing (GET), adding (POST), editing (PATCH) and deleting (DELETE) cafes and reviews for logged in users
- adding photos (stored on **Cloudinary**)
- interacting with an API (cluster map from **MapBox**)
- **infinite scroll** on page with cafes list
- user input sanitization before storage in database
- **middleware** for user authentication and authorization 