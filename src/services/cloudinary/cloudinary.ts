import { env } from "app/config/env";
import { v2 as cloudinary } from "cloudinary";
import authorImages from '../../../public/images/authors.json';

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET   
});

function TransformToImageType(data:any) : ImageType {
  let name = data.folder.split('/')[2];

  return {
    id: data.asset_id,
    name: capitalizeFirstLetter(name),
    url: data.secure_url,
    alt: getImageAuthor(name)
  } as ImageType;
}

function capitalizeFirstLetter(str: string): string {
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

function shuffle<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  
  shuffledArray.sort(() => Math.random() - 0.5);
  
  return shuffledArray;
}

function getImageAuthor(name: string) : string {
  const authors = authorImages as Authors;
  console.log(name);
  
  const authorName = authors.departments.find(a => a.name === name)?.authorName;
  
  return authorName ?? "";
}

export const getDepartmentImage = async (name: string) : Promise<ImageType> => {
  try {        

    const response = await cloudinary.api.resources({
      type: 'upload',
      prefix: `colombia/departments/${name}/index/`,
      max_results: 1,
      cache: 'force-cache',
      next: {
        tags: ['department']
      }
    }, (error, result) => {
      if (error) {
        console.error(error);        
      }
    }).then(result => {
      return result.resources[0];
    });

    if (!response || response.status === 404) {
      return {} as ImageType;
    }

    return TransformToImageType(response);
    
  } catch (error) {
    console.log(error);    
    throw error;
  }
}

export const getShuffleImages = async () : Promise<ImageType[]> => {
  try {
    const response = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'colombia',
      cache: 'force-cache',
      next: {
        tags: ['department']
      }
    }, (error, result) => {
      if (error) {
        console.error(error);        
      }
    }).then(result => {
      return result.resources;
    });

    if (!response || response.status === 404) {
      return [] as ImageType[];
    }

    const imagesList = response.filter((image:any) => image.folder.split('/').length == 3) as ImageType[];

    console.log(imagesList);

    const transformedImages = imagesList.map((collection: any) => {      
      return TransformToImageType(collection);
    });

    return shuffle(transformedImages);

  } catch (error) {
    console.log("Error al obtener imágenes aleatorias");
   throw error; 
  }
}


export const getAllDepartments = async () : Promise<ImageType[]> => {
  try {
    const response = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'colombia',
      cache: 'force-cache',
      next: {
        tags: ['department']
      }
    }, (error, result) => {
      if (error) {
        console.error(error);        
      }
    }).then(result => {
      return result.resources;
    });

    if (!response || response.status === 404) {
      return [] as ImageType[];
    }

    const imagesList = response.filter((image:any) => image.folder.split('/').length == 3) as ImageType[];

    const transformedImages = imagesList.map((collection: any) => {      
      return TransformToImageType(collection);
    });

    return transformedImages;

  } catch (error) {
    console.log("Error al obtener imágenes aleatorias");
   throw error; 
  }
}