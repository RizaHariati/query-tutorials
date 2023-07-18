export async function getData() {
  const fetchingData = await fetch("http://localhost:4000/superheroes");
  const dataFetched = await fetchingData.json();
  return dataFetched;
}

export async function getData2(id) {
  const fetchingData = await fetch(`http://localhost:4000/superheroes/${id}`);
  const dataFetched = await fetchingData.json();
  return dataFetched;
}

export async function getFriends(id) {
  const fetchingData = await fetch(`http://localhost:4000/friends`);
  const dataFetched = await fetchingData.json();
  return dataFetched;
}
