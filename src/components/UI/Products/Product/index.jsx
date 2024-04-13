import s from './style.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = () => {
  return (
    <div className={s.product}>
       <img src='/images/book.svg' alt="Kitob" />
       <div>
          <ul>
            <li>Milk and honey</li>
            <li>Namangan shahar</li>
            <li>24.000 so'm</li>
          </ul>
          <button><FavoriteBorderIcon/></button>
       </div>
    </div>
  )
}

export default Product
