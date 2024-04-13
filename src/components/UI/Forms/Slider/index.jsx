import s from './style.module.scss'
import { Slider as MuiSlider } from '@mui/material'; // Slider nomli komponentni Slider sifatida import qilamiz

const Slider = ({ setPrice, price }) => {
    const handleChange = (event, newPrice) => {
      setPrice(newPrice);
    //   console.log(event)
    };
  
    return (
      <div className={s.slider}>
        <label>Narx</label>
        <MuiSlider
          min={0}
          max={1000000}
          step={10000}
          value={price}
          onChange={handleChange}
          valueLabelDisplay="auto"
          marks={[]}
          sx={{
            outlineColor: "black",
            borderRadius: "4px",
            "& .MuiSlider-thumb": {
              color: "white",
              border: "4px solid #1C2D3F", // Thumb rangi
            },
            "& .MuiSlider-rail": {
              backgroundColor: "silver", // Yorlig'i rangi
            },
            "& .MuiSlider-track": {
              backgroundColor: "#1C2D3F",
              height: "5px", // Orqa tomoni rangi
            },
            "& .MuiSlider-valueLabel": {
              color: "white", // Qiymat belgisi rangi
            },
          }}
        />
      </div>
    );
  };

export default Slider;
