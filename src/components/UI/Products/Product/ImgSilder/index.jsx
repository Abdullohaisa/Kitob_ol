import s from "./style.module.scss";
import { useEffect, useState } from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardSlider() {

  const [currentSlide, setCurrentSlide] = useState(0);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);


  // const fetchData = async () => {
  //   try {
  //     const response = await bannerService.getBanner("work");
  //     setData(response.data.images);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // console.log(data)

  const data = [
    {
      img: '/images/book.svg'
    },
    {
      img: '/images/book.svg'
    },
    {
      img: '/images/book.svg'
    }
  ]


  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    afterChange: (index) => setCurrentSlide(index),
    customPaging: function (i) {
      return (
        <div
        className={`${s.slickDote} ${i === currentSlide ? s.activeDot : ''}`}
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "white",
            backgroundColor: "white",
            transform: i === currentSlide ? "scale(2)" : "",
            backgroundColor: i === currentSlide ? "white" : "silver", 
            transition:".3s",
          }}
        ></div>
      );
    },
    appendDots: (dots) => (
      <ul  className={s.customDots}>
        {dots.map((dot, index) => (
          <li>
            {dot}
          </li>
        ))}
      </ul>
    ),
  };

  return (
    <div className={s.mainRoot}>
      <div className={s.root}>
        {data && Array.isArray(data) && (

            <Slider className={s.slider} {...settings}>

              {data.map((el, i) => ( 
                  <div className={s.item} key={i}>
                      <img className={s.img} src={`${el.img}`} alt="Book" />
                  </div>
                ))}
        
            </Slider>
        )}
      </div>
    </div>
  );
}

export default CardSlider;
