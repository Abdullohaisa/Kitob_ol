import { useState } from 'react';
import Inputs from '../Input'
import s from './style.module.scss'
import Select1 from '../Select';
import Slider from '../Slider';

const FormFilter = () => {
  const [price, setPrice] = useState([0, 1000000]);

  return (
    <form className={s.formFilter}>
      <Inputs placeholder='Kitob nomini kiriting'/>
      <Select1 search={false} placeholder='Nashiryot tanlang'/>
      <Select1 search={false} placeholder='Til'/>
      <Select1 search={true} placeholder='Kitob muallifini kiriting'/>
      <Slider  price={price} setPrice={setPrice}/>
      <Inputs placeholder='Manzil'/>
      <Select1 search={false} placeholder='Kategorya'/>
      <div className={s.inputBox}>
      <Inputs  value={price[0]} setPrice={setPrice} style={{ textAlign: "center" }} type='number'/>
      <Inputs  value={price[1]} setPrice={setPrice} style={{ textAlign: "center" }} type='number'/>
      </div>
      <button className={s.btn}>Qidirish</button>
    </form>
  );
};

export default FormFilter;
