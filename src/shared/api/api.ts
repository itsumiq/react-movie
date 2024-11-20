export const api = async <U>(path: string) => {
  const url = `http://localhost:3001/${path}`;
  const response = await fetch(url);
  const data: U = await response.json();

  return data;
};
