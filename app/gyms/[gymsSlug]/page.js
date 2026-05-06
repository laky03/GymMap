import ImageSlideshow from "@/components/image-slideshow";
import { getGyms } from "@/lib/gyms";
import classes from "./page.module.css";

export default async function gymsDetailPage({ params }) {
  const { gymsSlug } = await params;
  const gyms = getGyms();
  const gym = gyms.find((gym) => gym.slug === gymsSlug);

  if (!gym) {
    return <p>Teretana nije pronadjena.</p>;
  }

  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow
            images={gym.images}
            alt={gym.name}
            isActive={true}
            interval={3000}
          />
        </div>

        <div className={classes.summary}>
          <h2>{gym.name}</h2>
          <p className={classes.location}>{gym.location}</p>
          <p className={classes.info}>{gym.info}</p>
        </div>
      </header>
      <main className={classes.main}>
        <div className={classes.prices}>
          <div className={classes.priceCard}>
            <span>Zene</span>
            <strong>{gym.cenaZene} RSD</strong>
          </div>
          <div className={classes.priceCard}>
            <span>Muskarci</span>
            <strong>{gym.cenaMuskarci} RSD</strong>
          </div>
          <div className={classes.priceCard}>
            <span>Dnevna karta</span>
            <strong>{gym.DnevnaKarta} RSD</strong>
          </div>
        </div>
      </main>
    </div>
  );
}
