import { TouristicCard } from "../TouristicCard";
import styles from "./TouristicWrapper.module.sass";

interface TouristicProps {
  attractions: Touristic[]
}

export const TouristicWrapper = ({attractions}: TouristicProps) => {
  return(
    <>
      { 
        attractions.length > 0 ? <h1>Touristic Attraction</h1> : <></>        
      }
      
      <div className={styles.TouristicWrapper}>
        {attractions.map((attraction) => (
          <TouristicCard key={attraction.id} attraction={attraction} />
        ))}
      </div>
    </>
  );
}