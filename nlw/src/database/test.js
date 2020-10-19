const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // Insert data in the table
/*    await saveOrphanage(db, {
        lat: "-12.1491189",
        lng: "-38.1341289", 
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "88888888888",
        images: [
            "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1595299462600-f1f42d4fae6f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"

    })
*/
    // Consulting data in the table
    const selectDataOrpanages = await db.all("SELECT * FROM orphanages");
    console.log(selectDataOrpanages);

    // Consulting tabel only for ID
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"');
    // console.log(orphanage);

    // Delete data in the table
    // console.log(await db.run("DELETE FROM orphanages WHERE id= '3'"));

    // console.log(await db.run("DELETE FROM orphanages"));

})
