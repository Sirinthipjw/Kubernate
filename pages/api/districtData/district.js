async function DistrictsData(app, prisma) {
  app.get("/tamboms", async (req, res) => {
    const { amphures_id } = req.query;
    try {
      const tamboms = await prisma.tambom.findMany({
        where: {
          amphures_amphures_id: Number(amphures_id),
        },
      });
      res.status(200).json(tamboms);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch tamboms" });
    }
  });
}

module.exports = DistrictsData;
