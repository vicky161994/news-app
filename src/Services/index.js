import axios from "axios";

export const searchNews = async (search, keyword) => {
  let url = `http://content.guardianapis.com/search?api-key=test&amp;show-
    fields=thumbnail,headline&amp;page=1&amp;page-size=10`;
  if (search) {
    url = `http://content.guardianapis.com/search?api-
        key=test&amp;q=${search}&amp;show-
        fields=thumbnail,headline&amp;page=1&amp;page-size=10`;
  }
  if (keyword) {
    let url = `http://content.guardianapis.com/search?api-
        key=test&amp;q=modi&amp;show- fields=thumbnail,headline&amp;show-
        tags=${keyword}&amp;page=1&amp;page-size=10`;
  }
  const data = await axios.get(url).then((data) => {
    return data.data;
  });
  return data;
};
