async function ProvincesData(app, prisma) {
  app.get("/provinces", async (req, res) => {
    try {
      const provinces = await prisma.province.findMany();
      res.status(200).json(provinces);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch provinces" });
    }
  });
}

module.exports = ProvincesData;
