import { TouristicView } from "app/components/Touristic";
import { getById } from "app/services/apicolombia/touristic";

export default async function name({params}: TouristicIdProps) {
  const id = params.id;
  const touristic = await getById(id);

  return <TouristicView touristic={touristic} />  
}