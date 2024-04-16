import s from "./style.module.scss";
import Link from "next/link";
import FormPostingBook from "../Forms/FormPostingBook";
import { useForm } from "react-hook-form";

// icon
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BookImages from "./BookImages";
import TextAreaPB from "./TextArea";
import Input from "../Forms/Input";
import { useState } from "react";
import { FlashAuto } from "@mui/icons-material";

const PostingBooks = () => {
   const { register, handleSubmit,  formState : {errors}, } = useForm({

    // defaultValues: {
    //   bookName: "",
    //   category: "",
    //   author: "",
    //   bookId: "",
    //   bookLang: "",
    //   typeWriting: "",
    //   translator: "",
    //   bookPage: "",
    //   publisher: "",
    //   bookYear: "",
    //   bookPrice: "",
    //   paperFormat: "",
    //   bookCover: "",
    //   status: "",
    //   description1: "",
    //   description2: "",
    //   address:"",
    //   email: "",
    //   phoneNumber: "",

    // },
  });

  const func = (data) => {
   data.preventDefault()
   const [inp1, inp2] = data.target.querySelectorAll("#postingBookForm")
   console.log(inp1, inp2)
  };
  return (
    <div className="container">

     <form onSubmit={(e)=>func(e)}> 

    <div className={s.posting}>
        <ul>
          <li className={s.postingPage}>
            <Link href="/">
              <HomeRoundedIcon className={s.icon} />
            </Link>
            | <span> E'lon berish</span>
          </li>
          <li>
            <p>E'lon berish</p>
          </li>
        </ul>

        <div className={s.formBox}>
          <FormPostingBook errors={errors} registers={register} />
        </div>
    </div>

      {/* <div className={s.posting}>
      <div className={s.formBox}>
      <BookImages/>
      </div>
      </div> */}

      {/* <div className={s.posting}>
      <div className={s.formBox}>
       <TextAreaPB register={register}/>
      </div>
      </div> */}

      <div className={s.posting}>
        <div className={s.formBox}>
          <div className={s.publisherData}>
            <p>Manzilni kiriting*</p>
              <br />
              <Input 
                  id='postingBookForm'
                  placeholder='Shahar yoki viloyat' 
                  name='address'
                  register={{
                    ...register("address", { required: true }),
                  }}
                  error={errors.address}
                  errorText={"Majburiy"}
              />
          </div>
        </div>
      </div>

      {/* <div className={s.posting}>
        <div className={s.formBox}>
            <div className={s.publisherData}>
              <p>Aloqa uchun malumotlar</p>
              <br />
              <Input 
                  label='Murojaat qiluvchi shaxs*' 
                  placeholder='Ism'
                  name='applicant'
                  register={{
                    ...register("applicant", { required: true }),
                  }}
                  error={errors.applicant}
                  errorText={"Majburiy"}
                  /> <br />
              <Input 
                  label='Email manzil' 
                  placeholder='Email'
                  name="email"
                  register={{
                    ...register("email", { required: false }),
                  }}
                  error={errors.email}
                  errorText={"Majburiy"}
                  /><br />
                  
              <Input 
                 label='Telefon raqam' 
                 placeholder='Raqam'
                 name='phoneNumber'
                 register={{
                  ...register("phoneNumber", { required: false }),
                }}
                error={errors.phoneNumber}
                errorText={"Majburiy"}
                 /> <br />
            </div>
        </div>
      </div> */}

      <div className={s.posting}>
        <div className={s.formBox}>
          <div className={s.buttonBox}>
            <button type="button">Tekshirib Ko'rish</button>
            <button>E'lonni joylashtirish</button>
          </div>
        </div>
      </div>

     </form>

    </div>
  );
};

export default PostingBooks;
