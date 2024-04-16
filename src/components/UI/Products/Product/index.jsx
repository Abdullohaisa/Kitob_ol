import { useRouter } from 'next/router'; // useRouter funksiyasini import qilamiz
import s from './style.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardSlider from './ImgSilder';

const Product = () => {
  const router = useRouter(); 

  const singlePage = (e) => {
    e.stopPropagation(); 

    alert("awd"); 
  };

  const handleProductClick = () => {
    // router.push('/single-book'); 
  };

  return (
   <div onClick={handleProductClick} className={s.product}>

      <CardSlider/>

      <div className={s.textBox}>
          <ul>
            <li>Milk and honey</li>
            <li>Namangan shahar</li>
            <li>24.000 so'm</li>
          </ul>
          <button onClick={singlePage}><FavoriteBorderIcon/></button>
      </div>
   </div>
  )
}

export default Product
