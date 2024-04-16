import s from "./style.module.scss";
import Link from "next/link";
//icon
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SingleBookBanner from "./Banner";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const SingleBook = () => {
  return (
    <div className="container">
      <div className={s.posting}>
        <ul>
          <li className={s.postingPage}>
            <Link href="/">
              <HomeRoundedIcon className={s.icon} />
            </Link>
            | <span>Book name</span>
          </li>
          <li>
            <p>Book name</p>
          </li>
        </ul>
      </div>

      <SingleBookBanner />

      <div className={s.aboutBook}>
            <div className={s.right}>
              <ul>
                <li>Kitob haqida</li>
                <li>Ko’rilgan: 777</li>
              </ul>
              <ol className={s.bookData}>
                  <li>
                    <li>Narx</li>
                    <li>40 000 uzs</li>
                  </li>
                  <li>
                    <li>Muallif</li>
                    <li>Nasibjon Ikromov</li>
                  </li>
                  <li>
                    <li>Tarjimon</li>
                    <li>Alisher Haydarov</li>
                  </li>
                  <li>
                    <li>Tili</li>
                    <li>Ingliz tili</li>
                  </li>
                  <li>
                    <li>Kategoriya</li>
                    <li>Darslik</li>
                  </li>
                  <li>
                    <li>ISBN(ID)</li>
                    <li>6156151321</li>
                  </li>
                  <li>
                    <li>Nashriyot</li>
                    <li>Hilol Nashr</li>
                  </li>
                  <li>
                    <li>Muqova</li>
                    <li>Qattiq</li>
                  </li>
                  <li>
                    <li>Safiha</li>
                    <li>366</li>
                  </li>
                  <li>
                    <li>Yozuvi</li>
                    <li>Lotin</li>
                  </li>
                  <li>
                    <li>Holati</li>
                    <li>Foydalanilgan</li>
                  </li>
                  <li>
                    <li>Qog’oz formati</li>
                    <li>A4</li>
                  </li>
                  <li>
                    <li>Yili</li>
                    <li>2021</li>
                  </li>
              </ol>
            </div>
            <div className={s.left}>
                <p>Kitob haqida</p>
              <div>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nam laboriosam? Ratione exercitationem accusantium doloribus et totam pariatur possimus quas repellendus enim, soluta adipisci? Eveniet assumenda eum illo veritatis facilis!</li>
                    <li>Qo’shimcha tavsif</li>
                    <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta repellat odio molestiae ratione. Totam eius quos perferendis facilis? Corrupti at adipisci consequatur voluptate veritatis incidunt enim aperiam obcaecati assumenda.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sequi aliquam, sunt dignissimos aliquid quam mollitia facere earum culpa nisi aut, minima dolor velit error! Dolorem ea atque nostrum odit.</li>
                  </ul>
              </div>
            </div>
      </div>

      <div className={s.contactBox}>
         <p>Murojaat qilish</p>
         <div>
           <div>
             <div><PersonOutlineOutlinedIcon className={s.PersonOutlineOutlinedIcon}/></div>
              <ul>
                <li>Nasibjon Ikromov</li>
                <li>Kosonsoy, Namangan</li>
                <li>+998 88 155 55 50</li>
              </ul>
           </div>
           <ol>
            <button>Telefon qilish</button>
            <button>Izoh yozish</button>
           </ol>
         </div>
      </div>

    </div>
  );
};

export default SingleBook;
