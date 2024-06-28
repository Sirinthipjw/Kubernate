const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function tambomsHandler(req, res) {
  const { amphures_id } = req.query;
  try {
    const tamboms = await prisma.tambom.findMany({
      where: {
        amphures_amphures_id: amphures_id,
      },
    });
    res.status(200).json(tamboms);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tamboms" });
  }
}
module.exports = tambomsHandler;
