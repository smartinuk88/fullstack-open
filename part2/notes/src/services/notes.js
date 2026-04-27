import axios from "axios";

const baseURL = "http://localhost:3001/notes";

const getAll = () => {
  const req = axios.get(baseURL);
  return req.then((res) => res.data);
};

const add = (newNote) => {
  const req = axios.post(baseURL, newNote);
  return req.then((res) => res.data);
};

const update = (id, newNote) => {
  const req = axios.put(`${baseURL}/${id}`, newNote);
  return req.then((res) => res.data);
};

export default { getAll, add, update };
