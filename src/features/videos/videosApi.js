import axios from "../../utils/axios";

export const getVideos = async (tags, search, pages) => {
  let queryString = "";
  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (search !== "") {
    queryString += `&q=${search}`;
  }
  if (pages > 1) {
    pages -= 1;
    pages *= 8;
  }
  if (pages === 1) pages = 0;

  const response = await axios.get(
    `/videos?${queryString}&_start=${pages}&_limit=8`
  );
  return response.data;
};
