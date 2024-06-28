const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function provincesHandler(req, res) {
  try {
    const provinces = await prisma.province.findMany();
    return provinces;
    //res.status(200).json(provinces);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch provinces" });
  }
  // finally {
  //   await prisma.$disconnect();
  // }
}
module.exports = provincesHandler;
