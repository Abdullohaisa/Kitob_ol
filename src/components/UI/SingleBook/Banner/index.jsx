import s from "./style.module.scss";
import { useEffect, useState } from "react";
import Slider from "react-slick"; // Slider komponentini import qiling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SingleBookBanner() {

  const [data, setData] = useState(null);

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

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    customPaging: function (i) {
      return (
        <div
          className={s.slickDote}
          style={{
            width: "12px",
            borderRadius: "12px",
            background: "white",
            height: "12px",
            backgroundColor: "gray",
          }}
        ></div>
      );
    },
  };

  return (
    <div className={s.mainRoot}>
      <div className={s.root}>
        {data && Array.isArray(data) && (

          <Slider className={s.slider} {...settings}>


           {data.map((el, i) => ( 
              <div className={s.item} key={i}>
                 <p className={s.bannerTitle}>
                  It is never late to start reading!
                </p>
                <button>Ko'proq Ko'rish</button> 
                  <img className={s.img} src={el.file} alt="Banner" /> 
              </div>
            ))}

      
           </Slider>
        )}
      </div>
    </div>
  );
}

export default SingleBookBanner;
