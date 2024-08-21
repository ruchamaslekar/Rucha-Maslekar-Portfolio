// Defining and exporting Mongoose schemas and models for different data types in the application

const mongoose = require('mongoose');

// Defining Education Schema
const homeSchema = new mongoose.Schema({
    about: String,
    work: [String]
});

// Defining Education Schema
const educationSchema = new mongoose.Schema({
    institution: String,
    location: String,
    degree: String,
    fieldOfStudy: String,
    startYear: Date,
    endYear: Date
});

// Defining Experience Schema
const experienceSchema = new mongoose.Schema({
    jobTitle: String,
    company: String,
    startDate: Date,
    endDate: Date,
    responsibilities: [String]
});

// Defining Project Schema
const projectSchema = new mongoose.Schema({
    title: String,
    description: [String],
    technologies: [String],
    link: String
});

// Defining Contact Schema
const contactSchema = new mongoose.Schema({
    address: String,
    email: [String],
    contact: String,
    github: String,
    linkedin: String
});

// Creating Models
const Home = mongoose.model('Home',homeSchema);
const Education = mongoose.model('Education', educationSchema);
const Experience = mongoose.model('Experience', experienceSchema);
const Project = mongoose.model('Project', projectSchema);
const Contact = mongoose.model('Contact', contactSchema);

// Exporting Models
module.exports = {
    Home,
    Education,
    Experience,
    Project,
    Contact
};