import { request } from "./axios";

const BannerService = {
  getBanner: (type) =>
    request({ method: "get", url: `download/banner?image_type=${type}` }),
};

export default BannerService;
