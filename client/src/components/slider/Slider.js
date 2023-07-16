import { useState } from "react";
import {EastOutlined, WestOutlined, } from "@mui/icons-material";
import "./slider.css";

export const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]


    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }
    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 2 ? 0 : (next) => next + 1);
    }

  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="s-icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlined/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlined/>
            </div>
        </div>
    </div>
  )
}
