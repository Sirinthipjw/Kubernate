async function CitysData(app, prisma) {
  app.get("/amphures", async (req, res) => {
    const { provinces_id } = req.query;
    try {
      const amphures = await prisma.amphure.findMany({
        where: {
          provinces_provinces_id: Number(provinces_id),
        },
      });
      res.status(200).json(amphures);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch amphures" });
    }
  });
}

module.exports = CitysData;
