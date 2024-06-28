const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient
const md5 = require("md5");

async function TestPage(app, prisma) {
  app.get("/", (req, res) => {
    console.log("hey");
    res.send("hi");
  });
}

module.exports = TestPage;
