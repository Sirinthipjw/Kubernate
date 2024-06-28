const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function amphuresHandler(req, res) {
  const { provinces_id } = req.query;
  try {
    const amphures = await prisma.amphure.findMany({
      where: {
        provinces_provinces_id: provinces_id,
      },
    });
    res.status(200).json(amphures);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch amphures" });
  }
}
console.log(amphuresHandler);
module.exports = amphuresHandler;
