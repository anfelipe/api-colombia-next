import {env} from 'app/config/env';

export const apiColombiaUrls = {
  country: {
    'default': `${env.API_COLOMBIA_HOST}/api/v1/Country/Colombia`
  },
  department: {
    'getAll': `${env.API_COLOMBIA_HOST}/api/v1/Department`,
    'getById': (id:number) => `${env.API_COLOMBIA_HOST}/api/v1/Department/${id}`,
    'touristicAttractions': (id: string) => `${env.API_COLOMBIA_HOST}/api/v1/Department/${id}/touristicattractions`
  },
  touristic: {
    'getById': (id:number) => `${env.API_COLOMBIA_HOST}/api/v1/TouristicAttraction/${id}`,
  }
}