import { getCountry } from "app/services/apicolombia/country";

export async function GET() {
  const country = await getCountry();

  return Response.json({ country });
}