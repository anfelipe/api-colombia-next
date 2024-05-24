import Image from "next/image";
import Link from "next/link";
import styles from "./TouristicCard.module.sass";

interface TouristicCardProps {
  attraction: Touristic
}

export const TouristicCard = ({attraction}: TouristicCardProps) => {
  return(
    <Link href={`/articulo/${attraction.name}?id=${attraction.id}`} className={styles.TouristicCard__link}>
      <article className={styles.TouristicCard}>
      <div className={styles.TouristicCard__imageContainer}>
        <Image      
          src={attraction.images?.at(0) ?? ""}
          alt={attraction.name}
          quality={80}
          height={320}
          width={320}
          loading="eager"
        />
      </div>

        <div className={styles.TouristicCard__info}>
          <h3>{attraction.name}</h3>
        </div>

        {/* <span className={styles.TouristicCard__priceTag}>{attraction.description}</span> */}
      </article>      
    </Link>
  );
}