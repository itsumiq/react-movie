export const mediaApi = async <U>(path: string) => {
  const url = `https://api.kinopoisk.dev/v1.4/${path}`;
  const options = {
    method: "GET",
    headers: { accept: "application/json", "X-API-KEY": "F0R8KVV-5YXMSXD-QGTFA5H-CB2ER5E" },
  };

  const response = await fetch(url, options);
  const data: U = await response.json();

  return data;
};
