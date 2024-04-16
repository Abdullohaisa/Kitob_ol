import FormFilter from "../../Forms/FormFilter";
import s from "./style.module.scss";
import { useState } from "react";

const FilterBook = () => {
  const [filter, setFilter] = useState(false)

  const open = () => {
    setFilter( p => !p )
  }
  return (
    (filter ? (
      <div id="filterBook" className={s.filterBook}>
      <p onClick={open}>Filter</p>
      <FormFilter />
      </div>
    ):(
      <div className={s.filterBook}>
      <p onClick={open}>Filter</p>
      </div>
    ))
   
  );
};

export default FilterBook;
