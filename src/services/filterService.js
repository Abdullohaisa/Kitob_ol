import { request } from "./axios";

const FilterService = {
  getFilteredBooks: () => request({ method: "get", url: `author?limit=5&offset=5&search=Muhammad` }),
};

export default FilterService;
