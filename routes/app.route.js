const controller = require("../controllers/app.controller");
const routes = require("express").Router();


routes.get("/portfolio", controller.portfolioAppRoute);
routes.get("/testimonial", controller.testimonialAppRoute);

module.exports = routes