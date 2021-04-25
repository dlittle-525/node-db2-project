// STRETCH
exports.seed = async function(knex) {
    await knex('cars').truncate()

    await knex('cars').insert([
        { vin: "dsa9312RF44F2", make: "Kia", model: "Sorento", mileage: 106000, title: "Clean", transmission: "Automatic" },
        { vin: "JKM384UT7THYG8", make: "Kia", model: "Forte", mileage: 52000, title: "", transmission: "Automatic" },
        { vin: "3M97TH6785H4RH", make: "Chevy", model: "Aveo", mileage: 160000, title: "Salvage", transmission: "" }
    ])
};