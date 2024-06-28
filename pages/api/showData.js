async function ShowData(app, prisma) {
  app.post("/ShowData", async (req, res) => {
    try {
      const result = await prisma.patient.findFirst({
        where: {
          id_card: {
            not: null,
          },
        },
        orderBy: {
          created_at: "desc",
        },
        select: {
          first_name: true,
          last_name: true,
          age: true,
          id_card: true,
          gender: true,
          height: true,
          weight: true,
          disease: true,
          id_home: true,
          village_name: true,
          village_number: true,
          tel: true,
          email: true,
          tamboms: {
            select: {
              tamboms: true,
              amphure: {
                select: {
                  amphures: true,
                  province: {
                    select: {
                      provinces: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      res.send(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    }
  });
}

module.exports = ShowData;
