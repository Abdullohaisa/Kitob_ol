import Select from "react-select";
import s from "./style.module.scss";

export default function Selects({
  placeholder,
  onChange,
  name,
  value,
  label,
  search,
  register,
  id,
}) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "transparent",
      boxShadow: "none",
      border: "none",
      width: "100%",
      height: "100%",
      padding: "0px 0px 0px 10px ",
    }),
    option: (provided, state) => ({
      ...provided,
      border: "none",
      background: state.isSelected ? "#f4f4f4" : "transparent", // Tanlangan optionni rangini o'zgartiramiz
      boxShadow: "none",
      borderBottom: "1px solid #e5e5e5",
      padding: "0px 10px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      color: state.isSelected ? "#000000" : "",
      transition: ".3s",
      ":hover": {
        backgroundColor: "#e0e0e0",
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "black",
      fontWeight: "400",
    }),
  };


const option = [
        { value: "iymon", label: "Baxtiyor Oila" },
        { value: "hadis va hayot", label: "Hadis va Hayot" },
        { value: "Ochiq xat", label: "Ochiq xat" },
];


  return (
    <div className={s.div}>
      <label>{label}</label>
      <Select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        // id={s.select}
        styles={customStyles}
        options={option}
        placeholder={placeholder}
        isLoading={false}
        isClearable={true}
        isSearchable={search}
        // {...register}
     
      />
    </div>
  );
}

