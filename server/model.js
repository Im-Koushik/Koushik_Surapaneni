const mongoose = require('mongoose');

const adsSchema = new mongoose.Schema({
    _id: Number,
    companyId: Number,
    primaryText: String,
    headline: String,
    description: String,
    CTA: String,
    imageUrl: String,
});

const companiesSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    url: String,
});

const ads = mongoose.model('ads', adsSchema);
const companies = mongoose.model('companies', companiesSchema);

module.exports = { ads, companies };