const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { ads, companies } = require('./model');


const app = express();

app.use(cors());


const uri = process.env.MONGODB_URI
mongoose.connect(uri).then(() => {
    console.log("DB connnected")
})



//Search Aggregate Route

app.get('/search', async (req, res) => {
    const keyword = req.query.searchItem;
    ads.aggregate([
        {
            '$match': {
                '$or': [
                    {
                        'name': {
                            '$regex': keyword,
                            '$options': 'i'
                        }
                    }, {
                        'primary_text': {
                            '$regex': keyword,
                            '$options': 'i'
                        }
                    }, {
                        'headline': {
                            '$regex': keyword,
                            '$options': 'i'
                        }
                    }, {
                        'description': {
                            '$regex': keyword,
                            '$options': 'i'
                        }
                    }
                ]
            }
        }, {
            '$lookup': {
                'from': 'companies',
                'localField': 'companyId',
                'foreignField': '_id',
                'as': 'company'
            }
        }, {
            '$unwind': {
                'path': '$company'
            }
        }, {
            '$project': {
                '_id': 1,
                'primaryText': 1,
                'headline': 1,
                'description': 1,
                'CTA': 1,
                'imageUrl': 1,
                'companyName': '$company.name',
                'companyUrl': '$company.url'
            }
        }
    ]).then((data) => res.json(data))
})


app.get('/', (req, res) => {
    res.send("Hello test")
})

app.listen(process.env.PORT, () => {
    console.log("Server running")
})