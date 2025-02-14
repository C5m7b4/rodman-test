import axios from "axios";

const endPoint = "https://www.datacashreg.com/rReportsApi/api/interview/list";

export const getActors = async () => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: endPoint,
  });
  return json;
};
