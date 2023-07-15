import axios from "axios";

export async function getPost() {
  return axios.get("http://localhost:4000/posts").then((res) => res.data);
}

export async function getPost2(id) {
  return axios.get(`http://localhost:4000/posts/${id}`).then((res) => res.data);
}

export async function getUser(userID) {
  if (!userID) return;
  return axios
    .get(`http://localhost:4000/users/${userID}`)
    .then((res) => res.data);
}

export async function createPost({ title, body }) {
  if (!title || !body) return;
  return axios
    .post(
      `http://localhost:4000/posts`,
      {
        title,
        body,
        userId: 1,
      },
      {
        "Content-type": "application/json; charset=UTF-8",
      }
    )
    .then((response) => response.data)

    .catch((err) => console.log(err));
}

export async function getPostPaginated(page) {
  const returningData = { previous: false, data: {}, next: true };
  const getPrevious = await fetch(`http://localhost:4000/posts/${page - 1}`);
  if (!getPrevious.ok) {
    returningData.previous = 0;
  } else {
    returningData.previous = page - 1;
  }

  const getData = await fetch(`http://localhost:4000/posts/${page}`);
  const data = await getData.json();
  if (data.id) {
    returningData.data = data;
  }

  const getNext = await fetch(`http://localhost:4000/posts/${page + 1}`);
  if (!getNext.ok) {
    returningData.next = 0;
  } else {
    returningData.next = page + 1;
  }
  return returningData;
}
