const md5 = require("md5");

async function fillData(app, prisma) {
  app.post("/FillinData", async (req, res) => {
    const {
      first_name,
      last_name,
      age,
      id_card,
      gender,
      height,
      weight,
      disease,
      id_home,
      village_name,
      village_number,
      tel,
      email,
      tamboms,
    } = req.body.data;
    console.log(req.body.data);

    if (
      !first_name ||
      !last_name ||
      !age ||
      !id_card ||
      !gender ||
      !height ||
      !weight ||
      !disease ||
      !id_home ||
      !village_name ||
      !village_number ||
      !tel ||
      !email
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }
    const hashId = md5(id_card);
    try {
      const created_at = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);
      const updated_at = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);
      const result = await prisma.patient.create({
        data: {
          first_name,
          last_name,
          age: parseInt(age),
          id_card: hashId,
          gender,
          height: parseFloat(height),
          weight: parseFloat(weight),
          disease,
          id_home,
          village_name,
          village_number,
          tel,
          email,
          created_at,
          updated_at,
          tamboms_tamboms_id: parseInt(tamboms),
        },
      });
      console.log("Data inserted successfully", result);
      res
        .status(200)
        .json({ success: true, message: "Data inserted successfully" });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Failed to insert data" });
      return;
    }
  });
}

module.exports = fillData;
