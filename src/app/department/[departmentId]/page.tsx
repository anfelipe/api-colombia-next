import Image from "next/image";
import { redirect } from "next/navigation";

import { getById } from "app/services/apicolombia/department";

import { FaCity, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiColombia } from "react-icons/gi";

import styles from "../department.module.sass";
import COLOMBIA_BLUR from "app/images/BlurImages";
import { Counter } from "app/components/shared/Counter";
import NotFound from "app/app/not-found";

export async function generateMetadata({params}: DepartmentIdProps){
  const id = params.departmentId;
  const department = await getById(id);

  return {
    title: department.name,
    description: department.description,
    keywords: department.name,
    openGraph: {
      images: [
        department.image
      ]
    }
  }
}

export default async function DepartmentId(props: DepartmentIdProps) {

  const { departmentId } = props.params;

  if (!departmentId) {
    redirect('/department');
  }

  const department = await getById(departmentId);  
  var description = "";

  if (department) {
    //const startIndex = department.description.indexOf('.', department.description.indexOf('.') + 1);
    const startIndex = department.description.indexOf('.', 0);
    const shortDescription = department.description.slice(startIndex + 1);
    const endIndex = shortDescription.indexOf('.', shortDescription.indexOf('.') + 1);
    description = (endIndex <= 0) ? shortDescription : shortDescription.substring(0, endIndex + 1);
  }
  

  return (
    <>
      {
        (department?.id) ?
        <section className={styles.container}>        
          <div className={styles.container__info}>

            <div className={styles.container__info__img}>
              <div className={styles.container__info__img__desc}>
                <span>{department.name}</span>
              </div>

              <div className={styles.container__info__img__aditionalInfo}>
                <div title="Population">
                  <FaPeopleGroup />
                  <Counter number={department?.population.toString()} duration={"2"} ></Counter>
                </div>
                <div title="Surface">
                  <GiColombia />
                  <Counter number={department?.surface.toString()} duration={"2"} ></Counter>
                </div>
                <div title="Capital">
                  <FaCity />
                  <div className={styles.Counter}>
                    <h2>
                      <i>{department.city.name}</i>
                    </h2>
                  </div> 
                </div>
              </div>

              { (department.image?.url) ?
                <Image
                  src={department.image?.url ?? "/images/NotFoundImage.jpg"}
                  alt={department.image?.alt ?? ""}
                  fill
                  quality={100}
                  placeholder='blur'
                  loading="lazy"
                  blurDataURL={COLOMBIA_BLUR}
                  sizes="100vw"
                />              
                :               
              <></>
              }
            </div>
          </div>

          <div className={styles.container__description}>            
            <FaQuoteLeft/>
            <p>{description}</p>
            <FaQuoteRight/>            
          </div>

          <div className={styles.container__options}>
            <div>
              <span>Cities</span>
              <ul>
                <li>Cities list</li>
                <li>Info about cities</li>
              </ul>              
            </div>
            <div>
              <span>Touristic Attractions</span>
              <ul>
                <li>Landmarks</li>
                <li>Places</li>
              </ul>              
            </div>
            <div>
              <span>Others</span>
              
              <ul>
                <li>Natural areas</li>
                <li>Invasive specie</li>
              </ul>              
            </div>
          </div>          
          
        </section>
        :
        <NotFound />
      }
      
    </>
  )
};