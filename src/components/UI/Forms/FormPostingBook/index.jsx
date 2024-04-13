import s from "./style.module.scss";


import Selects from "../Select";
import Input from "../Input";

const FormPostingBook = ({registers}) => {
 

  return (
    <form id={s.salom}>
      <Input
        type="text"
        placeholder="Kitob nomi"
        label="Kitob nomini kiriting*"
        name="bookName"
        register={{...registers("bookName")} }
      />

      <Selects 
        search={false} 
        placeholder="Kategoriya" 
        label="Kategoriya" 
        name="category"
        register={{ ...registers("category") }}
        />
        
      <Input
        type="text"
        placeholder="Muallif"
        label="Kitob muallifini kiriting*"
        name="author"
        register={{ ...registers("author") }}
      />

      <Input 
        type="text" 
        placeholder="ID" 
        label="Kitob IDsini kiriting*"
        name="bookId"
        register={{ ...registers("bookId") }}
      />
        
      <Selects 
        search={false} 
        placeholder="Til" 
        label="Kitob tili*"
        name="bookLang"
        register={{ ...registers("bookLang") }}
      />

      <Selects 
        search={false} 
        placeholder="Yozuv" 
        label="Yozuv turi*" 
        name="typeWriting"
        register={{ ...registers("typeWriting") }}
      />

      <Input
        type="text"
        placeholder="Tarjimon"
        label="Kitob Tarjimonini kiriting*"
        name="translator"
        register={{ ...registers("translator") }}
      />

      <Input
        type="text"
        placeholder="e.g 345"
        label="Kitob sahifasini kiriting*"
        name="bookPage"
        register={{ ...registers("bookPage") }}
      />

      <Selects
        search={false}
        placeholder="Nashriyot"
        label="Nashriyotni kiriting*"
        name="publisher"
        register={{ ...registers("publisher") }}
      />

      <Input
        type="date"
        placeholder="kk.oo.yyyy"
        label="Kitob yili*"
        name="bookYear"
        register={{ ...registers("bookYear") }}
      />

      <Input
        type="text"
        placeholder="Narx"
        label="Kitob narxi*"
        name="bookPrice"
        register={{ ...registers("bookPrice") }}
      />

      <Selects
        search={false}
        placeholder="Qog’oz formati"
        label="Qog’oz formatini kiriting*"
        name="paperFormat"
        register={{ ...registers("paperFormat") }}
      />

      <Selects
        search={false}
        placeholder="Muqova"
        label="Kitob muqovasini tanlang*"
        name="bookCover"
        register={{ ...registers("bookCover") }}
      />

      <Selects 
        search={false} 
        placeholder="Holati " 
        label="Holati " 
        name="status"
        register={{ ...registers("status") }}
        /> 

    </form>
  );
};

export default FormPostingBook;
