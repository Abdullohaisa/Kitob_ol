import s from "./style.module.scss"
import { useState } from "react";

// icon
import BookIcon from '@mui/icons-material/Book';
import WorkIcon from '@mui/icons-material/Work';

const BookWorkBtn = () => {

  const [book, setBook] = useState(true)
  const [work, setWork] = useState(false)

  const handleChangeWork = (e) => {
    e.preventDefault()
    setWork(false)
    setBook(true)
  }

  const handleChangeBook = (e) => {
    e.preventDefault()
    setWork(true) 
    setBook(false)
  }

  return (
    <div className={s.bookWorkBtn}>
      <button onClick={(e) => handleChangeWork(e)} className={book ? s.change : ""}>
         <BookIcon className={s.book}/> 
         <span>Kitoblar</span>
      </button>
      <button onClick={(e) => handleChangeBook(e)}  className={work ? s.change : ""}>
         <WorkIcon className={s.book}/>
         <span>Ish</span>
      </button>
    </div>
  )
}

export default BookWorkBtn
