import { apiColombiaUrls } from "./urls";

export const getCountry = async () => {
  try {

    const response = await fetch(apiColombiaUrls.country.default, {

      cache: 'force-cache',
      next: {
        tags: ['country']
      }
    });

    return await response.json();    
  } catch (error) {
    console.log(error);    
  }  
}

