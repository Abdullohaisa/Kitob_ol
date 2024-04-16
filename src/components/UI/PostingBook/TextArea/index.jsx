import { useState } from "react";
import s from "./style.module.scss";

const TextAreaPB = ({register, length}) => {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    const handleTextChange1 = (e) => {
        const newText = e.target.value;
        setText1(newText)
    };

    const handleTextChange2 = (e) => {
        const newText = e.target.value;
        if (newText.length <= 800) {
            setText2(newText);
            console.log(e)
        }
    };




    console.log("register", length)

    return (
        <div className={s.textAreaBox}>
            <p>Tavsif</p>
            <div>
                <textarea
                    minLength="80"
                    maxLength="9000"
                    placeholder="O’zingizni shu e’lonni ko’rayotgan odam sifatida tavsif yozing!"
                    onChange={handleTextChange1}
                    // value={text1}

                    name={"description1"}
                    {...register("description1") }
                    >
                    </textarea>
                <ul>
                    <li>Yana kamida 80 ta belgi yozing</li>
                    <li>{text1.length}/9000</li>
                </ul>
            </div>
            <div>
                <textarea
                    minLength="80"
                    maxLength="800"
                    placeholder="Boshqa foydali malumotlar"
                    onChange={e => handleTextChange2(e)}
                    // value={text2}
                    name={"description2"}
                    {...register("description2") }
                ></textarea>
                <ul>
                    <li>Yana kamida 80 ta belgi yozing</li>
                    <li>{text2.length}/800</li>
                </ul>
            </div>
        </div>
    );
};

export default TextAreaPB;
