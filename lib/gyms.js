import sql from "better-sqlite3";

const db = sql("gyms.db");

export function getGyms() {
  const gyms = db.prepare("SELECT * FROM gyms").all();

  return gyms.map((gym) => ({
    ...gym,
    images: JSON.parse(gym.images),
  }));
}
