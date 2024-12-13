import { API_URL } from "../../../(home)/page";

async function getBillionare(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
}

export default async function PersonDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await the params promise here
  const billionaire = await getBillionare(id);
  return <h1>{billionaire.name}</h1>;
}
