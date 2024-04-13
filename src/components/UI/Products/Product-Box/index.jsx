import Product from "../Product";
import s from "./style.module.scss";

// icon
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useEffect, useState } from "react";
import FilterService from "@/services/filterService";

const ProductBox = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await FilterService.getFilteredBooks();
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(data);

  return (
    <>
      <div className={s.productBox}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className={s.productBoxBtn}>
        <button>
          <ArrowLeftIcon className={s.icon} />
        </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <MoreHorizIcon />
        </button>
        <button>
          <ArrowRightIcon className={s.icon} />
        </button>
      </div>
    </>
  );
};

export default ProductBox;
