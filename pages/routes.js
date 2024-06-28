const TestPage = require("./test");
const districtController = require("./api/districtData/controller");
const fillData = require("./api/fillData");
const ShowData = require("./api/showData");

async function Routes(app, prisma) {
  await TestPage(app);

  await districtController(app, prisma);

  await fillData(app, prisma);

  await ShowData(app, prisma);
}

module.exports = Routes;
