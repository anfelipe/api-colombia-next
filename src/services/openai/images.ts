import { createApi  } from "unsplash-js";
import { env } from "app/config/env";

export const getImage = async (word:string) => {

  try {
    word += ' landscape';    
    
    const unsplash = createApi({ accessKey: `${env.UNSPLASH_ACCESS_KEY}` });

    const response = await unsplash.search.getPhotos({
      query: word,
      page: 1,
      perPage: 5,      
      orientation: 'landscape'      
    }).then(result => {
      const urls = result.response?.results;
      const image = urls?.sort((a, b) => a.likes - b.likes)[0];      
      return image;
    });    

    return response;
    
  } catch (error) {
    console.log(error);
    
  }
}