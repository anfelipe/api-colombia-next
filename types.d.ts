
interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

interface DepartmentIdProps {
  params: {
    departmentId: number 
  }
};

interface TouristicIdProps {
  params: {
    id: number 
  }
};

type Touristic = {
  id: number,
  name: string,
  description: string,
  images: [],
  city: City
}

type Department = {
  id: number,
  name: string,
  description: string,
  image: ImageType,
  surface: number,
  population: number,
  city: City
}

type City = {
  id: number,
  name: string,
  description: string
}

type ImageType = {
  id: number,
  name: string,
  url: string,
  alt: string
}