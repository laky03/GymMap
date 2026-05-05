import GymCard from "@/components/gym-card";
import styles from "./page.module.css";

const gyms = [
  {
    id: 1,
    name: "Aura Fitness Centar",
    location: "Bulevar Svetog cara Konstantina 4",
    area: "350m2 prostora",
    info: "Moderna teretana sa kardio sobom, parkingom i trenerima.",
    images: ["/images/aura1.jpg", "/images/aura2.jpg", "/images/aura3.jpg"],
  },
  {
    id: 2,
    name: "One Wellness & SPA",
    location: "21. maj 1",
    area: "1000m2 prostora",
    info: "Veliki fitness i wellness centar sa teretanom na vise nivoa.",
    images: ["/images/one1.jpg", "/images/one2.jpg", "/images/one3.jpg"],
  },
  {
    id: 3,
    name: "gym town 1",
    location: "Kraljevića Marka 23",
    area: "Fitness centar",
    info: "Teretana za trening snage i kondicije.",
    images: [
      "/images/gymtown11.jpg",
      "/images/gymtown12.jpg",
      "/images/gymtown13.jpg",
    ],
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Pronadji teretanu koja ti odgovara</h1>
        <p>
          Pregled teretana u Nisu sa osnovnim informacijama, lokacijom i
          detaljima koji pomazu pri izboru mesta za trening.
        </p>
      </header>

      <section className={styles.gyms}>
        {gyms.map((gym) => (
          <GymCard key={gym.id} gym={gym} />
        ))}
      </section>
    </main>
  );
}
