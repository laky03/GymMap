const sql = require("better-sqlite3");

const db = sql("gyms.db");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS gyms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      location TEXT NOT NULL,
      area TEXT NOT NULL,
      info TEXT NOT NULL,
      infohome TEXT NOT NULL,
      cenaZene TEXT NOT NULL,
        cenaMuskarci TEXT NOT NULL,
        DnevnaKarta TEXT NOT NULL,
      images TEXT NOT NULL
    )
  `,
).run();

const gyms = [
  {
    name: "Aura Fitness Centar",
    slug: "aura-fitness-centar",
    location: "Bulevar Svetog cara Konstantina 4",
    area: "350m2 prostora",
    info: "Aura Fitness Centar je moderna teretana u Nišu sa 350 m² prostora. Nudi kardio zonu, prostor za slobodne tegove, svlačionice i personalne treninge sa stručnim trenerima. Teretana je FitPass partner.",
    infohome:
      "Aura Fitness Centar je moderna teretana u Nišu sa kardio zonom, tegovima, svlačionicama i personalnim treninzima. FitPass je partner.",
    cenaZene: 2500,
    cenaMuskarci: 3000,
    DnevnaKarta: 600,
    images: JSON.stringify([
      "/images/aura1.jpg",
      "/images/aura2.jpg",
      "/images/aura3.jpg",
    ]),
  },
  {
    name: "One Wellness & SPA",
    slug: "one-wellness-spa",
    location: "21. maj 1",
    area: "1000m2 prostora",
    info: "ONE Wellness je najveća i najbolje opremljena teretana u Nišu i široj regiji, sa površinom od 1000 m². Centar nudi vrhunsku TechnoGym opremu, bazen sa slanom vodom, saunu, slanu sobu, parno kupatilo i spa centar sa masažama. Raspolaže sa 30 parking mesta i kafićem. Idealno mesto za sve koji traže kompletan wellness doživljaj uz kvalitetan trening.",
    infohome:
      "ONE Wellness je velika teretana u Nišu sa vrhunskom opremom i wellness sadržajima.",
    cenaZene: 3700,
    cenaMuskarci: 4800,
    DnevnaKarta: 1500,
    images: JSON.stringify([
      "/images/one1.jpg",
      "/images/one2.jpg",
      "/images/one3.jpg",
    ]),
  },
  {
    name: "Gym Town 1",
    slug: "gym-town-1",
    location: "Kraljevica Marka 23",
    area: "Fitness centar",
    info: "Gym Town je jedan od najpoznatijih lanaca teretana u Nišu sa tri lokacije i preko 2000 m² vrhunski opremljenog prostora. Lokacija 1 se nalazi u ulici Kraljevića Marka 23. Opremljen Life Fitness i Technogym spravama. Jedna članarina važi za sve tri lokacije.",
    infohome:
      "Gym Town je poznat lanac teretana u Nišu sa tri lokacije, velikim prostorom i vrhunskom opremom. Jedna članarina važi za sve objekte.",
    cenaZene: 2800,
    cenaMuskarci: 3300,
    DnevnaKarta: 500,
    images: JSON.stringify([
      "/images/gymtown11.jpg",
      "/images/gymtown12.jpg",
      "/images/gymtown13.jpg",
    ]),
  },
];

const insertGym = db.prepare(`
    INSERT OR IGNORE INTO gyms
      (name, slug, location, area, info, infohome, cenaZene, cenaMuskarci, DnevnaKarta, images)
    VALUES
      (@name, @slug, @location, @area, @info, @infohome, @cenaZene, @cenaMuskarci, @DnevnaKarta, @images)
  `);
for (const gym of gyms) {
  insertGym.run(gym);
}

console.log("Gyms database created.");
