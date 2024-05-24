import React from 'react';
import { CarouselImage } from 'app/components/shared/CarouselImage/CarouselImage';

import { getShuffleImages } from 'app/services/cloudinary/cloudinary';
import { getCountry } from 'app/services/apicolombia/country';

import { FaCity, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdCurrencyExchange, MdLanguage } from "react-icons/md";
import { GiSouthAmerica } from "react-icons/gi";

import styles from './Country.module.sass';
import title from "app/sass/global-title.module.sass";

interface Country {
  name: string,
  description: string,
  stateCapital: string,
  population: number,
  currency: string,
  currencyCode: string,
  currencySymbol:string,
  subRegion: string,
  region: string,
  flags: string[]
}


export const Country = async () => {  

  const country = await getCountry();
  const images = await getShuffleImages();

  const indexPeriod = country.description.indexOf('.', country.description.indexOf('.') + 1);
  const description = country.description.substring(0, indexPeriod + 1);

  const population = new Intl.NumberFormat('es-Co').format(country?.population);

  return (
    <>
      <section className={styles.Country}>
        <div>
          <h1 className={title.title}>{country.name}</h1>
        </div>

        <section className={styles.Section}>
          <CarouselImage key={country.id} images={images} />

          <div className={styles.Section__infoIcons}>
            <div title='Capital'>
              <FaCity /> 
              <span>{country.stateCapital}</span>
            </div>
            <div title='Population'>
              <FaPeopleGroup />
              <span>{population}</span>
            </div>
            <div title='Currency'>
              <MdCurrencyExchange />
              <span>{country.currencyCode}</span>
            </div>
            <div title='Region'>
              <GiSouthAmerica />
              <span>{country.subRegion}</span>
            </div>
            <div title='Languages'>
              <MdLanguage />
              {
                country.languages.map((language:string, index:number) => (
                  <span key={index}>{language}</span>  
                ))
              }              
            </div>
          </div>

          <div className={styles.Section__info}>            
            <FaQuoteLeft/>
              <p className={styles.Section__info__desc}>{description}</p>
            <FaQuoteRight/>             
          </div>
        </section>
      </section>
    </>
  )
}
