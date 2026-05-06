import GymCard from "@/components/gym-card";
import styles from "./page.module.css";
import { getGyms } from "@/lib/gyms";
import Link from "next/link";

export default function Home() {
  const gyms = getGyms();
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
          <Link key={gym.id} href={`/gyms/${gym.slug}`}>
            <GymCard gym={gym} />
          </Link>
        ))}
      </section>
    </main>
  );
}
