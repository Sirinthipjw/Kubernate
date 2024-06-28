const ProvincesData = require("./provinces");
const CitysData = require("./city");
const DistrictsData = require("./district");

async function districtController(app, prisma) {
  await ProvincesData(app, prisma);
  await CitysData(app, prisma);
  await DistrictsData(app, prisma);
}

module.exports = districtController;
