import Image from "next/image";
import { useRouter } from "next/navigation";

import { MdLocationPin } from 'react-icons/md';
import { FaLandmark, FaCity } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

import styles from "./DepartmentCard.module.sass";
import COLOMBIA_BLUR from "app/images/BlurImages";


interface DepartmentCardProps {
  department: Department
}

export const DepartmentCard = ({department} : DepartmentCardProps) =>{

  const router = useRouter();

  const handleClickExplore = (id:number) => {
    router.push(`/department/${id}`);
  }

  return(
    <div className={styles.DepartmentCard}>
        <div className={styles.DepartmentCard__link}>
          { (department?.image) ?
            <Image
              key={department.image?.id}
              src={department.image?.url ?? ""}
              alt={department.image?.alt ?? ""}
              fill
              quality={100}
              placeholder='blur'
              loading="lazy"
              blurDataURL={COLOMBIA_BLUR}
              sizes="(max-width: 300px) 100vw, (max-width: 500px) 50vw, 33vw"
            />    
            : null
          }

          <div className={styles.DepartmentCard__title}>
            {department.name}
          </div> 

          <div className={styles.DepartmentCard__icons}>
            <MdLocationPin />
            <FaCity /> 
            <FaLandmark />
            <FaPeopleGroup />
          </div>          

          <button onClick={() => handleClickExplore(department.id)}>
            <span>Explore</span>
          </button>     
        </div> 
    </div>
  );

}