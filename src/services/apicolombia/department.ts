import { getAllDepartments, getDepartmentImage } from "../cloudinary/cloudinary";
import { getImage } from "../openai/images";
import { apiColombiaUrls } from "./urls";

function replaceAccents(str: string) : string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036F]/g, "");
}

export const getAll = async () => {
  const response = await fetch(apiColombiaUrls.department.getAll, {

    cache: 'force-cache',
    next: {
      tags: ['departments']
    }
  });

  const data = await response.json();
  return data;
}

export const getAllWithImages = async () : Promise<Department[]> => {
  try {
    const response = await fetch(apiColombiaUrls.department.getAll, {
      cache: 'force-cache',
      next: {
        tags: ['departments']
      }
    });
        
    const data = await response.json();
    const images = await getAllDepartments();

    const departments = data.map((collection: any) => {
      let image = images.find(imageItem => replaceAccents(collection.name.toLowerCase()) === imageItem.name.toLowerCase());

      return {
        id: collection.id,
        name: collection.name,
        description: collection.description,
        image: image
      } as Department;
    });

    return departments;

  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getById = async (id:number) : Promise<Department> => {
  try {
    let department = {} as Department;

    const response = await fetch(apiColombiaUrls.department.getById(id),{
      cache: 'force-cache',
      next: {
        tags: ['department']
      }
    });

    if (response.status === 404) {
      return department;
    }

    const data = await response.json();

    department = {
      id: data.id,
      name: data.name,
      description: data.description,
      population: data.population,
      surface: data.surface,
      city:  {
        id: data.cityCapital.id,
        name: data.cityCapital.name
      }
    } as Department;

    if(department?.id){
      
      const image = await getDepartmentImage(department.name);
  
      if (image) {
        department.image = image;
      }else{
        const img = await getImage(department.name);
    
        department.image = {
          url: img?.urls.full ?? "",
          alt: img?.alt_description
        } as ImageType;
      }
    }

    return department;  

  } catch (error) {
    console.log(error);    
    throw error;
  }
}