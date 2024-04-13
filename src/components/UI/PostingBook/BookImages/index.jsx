import s from "./style.module.scss";

// icon 
import ClearIcon from '@mui/icons-material/Clear';

const BookImages = () => {
  return (
    <div className={s.bookImage}>
      <p>Rasmlar</p>
      <h3>
        Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar tartibini
        ularning ustiga bosib va olib o’tish bilan o’zgartirishingiz mumkin.
      </h3>

      <div className={s.imageBox}>
          <input type="file"  />
          <div>
            <img src="/images/book.svg" alt="" />
            <button>✕</button>
          </div>
          <div>
            <img src="/images/book.svg" alt="" />
            <button>✕</button>
          </div>
          <div>
            <img src="/images/book.svg" alt="" />
            <button>✕</button>
          </div>
          <div>
            <img src="/images/book.svg" alt="" />
            <button>✕</button>
          </div>
          <div>
            <img src="/images/book.svg" alt="" />
            <button>✕</button>
          </div>
      </div>

    </div>
  );
};

export default BookImages;
