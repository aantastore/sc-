let fs = require('fs')

userbot = {
 Prem: JSON.parse(fs.readFileSync('./db/premium.json')),
 owner: [ "6281262411188", "6281262411188","6281262411188","6281262411188", "6281262411188", "6281262411188", "6281262411188" ],
  MONGO_URI: "mongodb+srv://<username>:<password>@cluster0.eyx0e.mongodb.net/<dbname>?retryWrites=true&w=majority",
   mess: {
   wait: "tunggu sedang di proses...",
   error: "errorr!!"
   },
   prefix: ["/"],
   gexp: 50,
   limit: 100,
   eror: "Sepertinya Eror",
   waits: "Sedang di proses",
   butmag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHDLrd0_DwHnJfuZ_pRMOAbLi3-ot-NxyPA&usqp=CAU', // buat Image Button
   packname: "RIXLE-BOT OFFICIAL",
   author: '© 2021 - FearTeam',
    setting: {
    admin: "only admin",
    group: "only group",
    owner: "owner only pack",
    jadibot: "jadibot only",
    botadmin: "bot harus menjadi admin",
    nsfw: "FITUR BELUM DIAKTIFKAN!"
    }
}
module.exports = userbot

