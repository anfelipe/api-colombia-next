import { apiColombiaUrls } from "./urls";

export const getByDepartmentId = async (props: DepartmentIdProps) => {
 
  try {
    const departmentId = props.params.departmentId.toString();
    const url = apiColombiaUrls.department.touristicAttractions(departmentId);
    const response = await fetch(url);

    if (!response.ok) throw new Error("Error al obtener la información de los atractivos turísticos");

    const data = await response.json();
    return data;  

  } catch (error) {
    console.log(error);    
  }  
}

export const getById = async (id: number) : Promise<Touristic> => {
  try {
    const url = apiColombiaUrls.touristic.getById(id);

    const response = await fetch(url);

    if (!response.ok) throw new Error("Error al obtener la información del atractivo turístico");

    const data : Touristic = await response.json();
    return data;
    
  } catch (error) {
    console.log(error);
    throw error;
  }
}