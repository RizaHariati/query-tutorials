import axios from "axios";
import { request } from "./axios-utils";

export async function getTodos() {
  // const fetchingData = await fetch("http://localhost:4000/superheroes");
  // const dataFetched = await fetchingData.json();
  // console.log(await request({ url: "/superheroes" }).data);
  // return dataFetched;
  const dataFetched = await request({ url: "/todos" });
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

export async function getDatabyEmail(email) {
  const fetchingData = await fetch(`http://localhost:4000/users/${email}`);
  const dataFetched = await fetchingData.json();
  return dataFetched;
}

export async function getDatabyChannel(id) {
  const fetchingData = await fetch(`http://localhost:4000/channels/${id}`);
  const dataFetched = await fetchingData.json();
  return dataFetched;
}

export async function getColors(pageNumber) {
  const fetchingData = await fetch(
    `http://localhost:4000/colors?_limit=2&_page=${pageNumber}`
  );
  const dataFetched = await fetchingData.json();
  return dataFetched;
}

export async function addSuperHero(hero) {
  // return axios.post("http://localhost:4000/superheroes", hero);
  const postingData = await request({
    url: "/superheroes",
    method: "post",
    data: hero,
  });

  return postingData;
}
