const express = require("express");
const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const Middleware = require("./Middleware/Middleware.js");
const routeController = require("./pages/routes");

Middleware(app, express);
routeController(app, prisma);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
