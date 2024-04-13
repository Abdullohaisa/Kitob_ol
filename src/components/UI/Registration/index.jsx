import s from "./style.module.scss";
import Link from "next/link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Input from "../Forms/Input";
import { useForm } from "react-hook-form";
import PublisherCreate from "@/services/publisher";


const PublisherRegister = () => {
 
  const { register,
          handleSubmit,
          formState : {errors},
           } = useForm({
    defaultValues: {
      // name: "",
      // email: "",
      // phoneNumber: "",
      // additionalPhoneNumber: "",
      // address: "",
      // additionalAddress: "",
      // login: "",
      // password: "",
      // confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("data =>>",data)
    // try {
    //     await PublisherCreate.postPublisherCreate(data);
    // } catch (error) {
    //     console.error("Error submitting form data:", error);
    // }
};


  return (
    <div className="container">
      <div className={s.register}>
        <ul>
          <li className={s.registerPage}>
            <Link href="/">
              <HomeRoundedIcon className={s.icon} />
            </Link>
            | <span> E'lon berish</span>
          </li>
          <li>
            <p>Ro'yxatdan o'tish</p>
          </li>
        </ul>

        <form className={s.formBox} onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Brend nomini kiriting"
            label="Brend"
            name="name"
            register={{
              ...register("name", { required: true }),
            }}
            error={errors.name}
            errorText={"Majburiy"}
          />
          {/* <Input
            type="email"
            placeholder="Email manzilingizni kiriting"
            label="Email"
            name="email"
            register={{...register("email" , { required: true })}}
            error={errors.email}
            errorText={"Majburiy"}
          />
          <Input
            type="number"
            placeholder="Telefon raqam*"
            label="Telefon raqam*"
            name="phoneNumber"
            register={{...register("phoneNumber" , { required: true })}}
            error={errors.phoneNumber}
            errorText={"Majburiy"}
          />
          <Input
            type="number"
            placeholder="Qo’shimcha telefon kiriting"
            label="Qo’shimcha telefon"
            name="additionalPhoneNumber"
            register={{...register("additionalPhoneNumber" , { required: true })}}
            error={errors.additionalPhoneNumber}
            errorText={"Majburiy"}
          />
          <Input
            type="text"
            placeholder="Manzilni tanlang"
            label="Manzil"
            name="address"
            register={{...register("address" , { required: true })}}
            error={errors.address}
            errorText={"Majburiy"}
          />
          <Input
            type="text"
            placeholder="Qo’shimcha manzilni kiriting"
            label="Qo’shimcha manzil"
            name="additionalAddress"
            register={{...register("additionalAddress" , { required: true })}}
            error={errors.additionalAddress}
            errorText={"Majburiy"}
          />
          <Input
            type="text"
            placeholder="Log in"
            label="Log in"
            name="login"
            register={{...register("login" , { required: true })}}
            error={errors.login}
            errorText={"Majburiy"}
          />
          <Input
            type="password"
            placeholder="Parol"
            label="Parol"
            name="password"
            register={{...register("password" , { required: true })}}
            error={errors.password}
            errorText={"Majburiy"}
          />
          <Input
            type="password"
            placeholder="Parolni tasdiqlash"
            label="Parolni tasdiqlash"
            name="confirmPassword"
            register={{...register("confirmPassword" , { required: true })}}
            error={errors.confirmPassword}
            errorText={"Majburiy"}
          /> */}
          <div className={s.btnBox}> 
            <Link 
             href={'/posting/books'}                                                                                                                                                
            >
              <button  type="submit">Ro’yxatdan o’tish</button>
            </Link>
          </div>

          <div className={s.userProfile}>
            <PersonOutlineOutlinedIcon className={s.userIcon} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublisherRegister;
