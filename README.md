﻿# Koushik_Surapaneni




# Search Application

A Full Stack Search Application which returns the ads and the company names based upon the searchItem.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the server folder

`MONGODB_URI`

`PORT`


## Approach

### Backend

Started off with building the Backend using MongoDB, Node and Express. 

Installed required packages like express, nodemon, cors, dotenv and mongoose.

Created two collections in the MongoDB test_db named 'ads' and 'companies' using Schemas and Models.

Inserted the data according to the given sheet.

Inorder to get the ad imageUrl and companyName we need to use the Aggregate pipeline with {$match , $lookup, $unwind, $project}

The imageUrls are taken directly from the internet since the gdrive's links are not supporting the CORS policies.


### Frontend

React Project is created using vite@latest (React and Javascript)

Frontend is done completely using React using JSX and CSS for styling.

Installed a package named axios for Fetching Data.

useState hook is used for the state variables and changing the states.

handleSearch() determines the axios 'GET' method and returns the required searchItems.

map() is used to display the results in a CSS grid fashion.




## How to Run

### Server Folder

- cd server
- npm start

### Client Folder

- cd client
- npm run dev
