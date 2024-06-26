import s from "./Input.module.scss";

const Input = ({
      name,
      label,
      placeholder,
      type,
      onChange,
      value,
      style,
      register,
      error,
      errorText,
      id,
}) => {
  return (
    <div className={s.div}>
      <label>{label}</label>
      <input
        id={id}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        style={style}
        {...register}
      />
       <div
        className={error ? s.block : s.none}
        >{errorText}</div>
    </div>
  );
};

export default Input;
