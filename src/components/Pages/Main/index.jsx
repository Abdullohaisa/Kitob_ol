import s from "./style.module.scss";
import BookWorkBtn from "@/components/UI/BookWork.btn/book.work.btn";
import FilterBook from "@/components/UI/Filter/FilterBook";
import ProductBox from "@/components/UI/Products/Product-Box";
import Banner from "@/components/UI/Banner";

const Main = () => {
  return (
    <div className={s.main}>
      <Banner />
      <div className="container">
        <BookWorkBtn />
        <FilterBook />
        {/* <ProductBox /> */}
      </div>
    </div>
  );
};

export default Main;
