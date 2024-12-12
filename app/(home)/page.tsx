const url = "https://billions-api.nomadcoders.workers.dev/";

async function getBillionaries() {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const billion = await getBillionaries();
  return <div>{JSON.stringify(billion)}</div>;
}
