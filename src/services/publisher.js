import { request } from "./axios";

const PublisherCreate = {
  postPublisherCreate: (data) => request({ method: "post", url: 'publisher' , data }),
};

export default PublisherCreate;
