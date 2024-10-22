import React, { useEffect, useState } from "react"
import "./category.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import axios from "axios"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import NextArrow from "../Ui/NextArrow"
import PrevArrow from "../Ui/PrevArrow"

export const Category = () => {
  const category = []
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  const [cats, setCat] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("/category" + search)
      setCat(res.data)
    }
    getCat()
  }, [search])
  return (
    <>
      <section className='category'>
        <div className='content'>
          <Slider {...settings}>
            {category.map((item) => (
              <div className='boxs' key={item.id}>
                <div className='box' key={item.id}>
                  <img src={item.cover} alt='cover' />
                  <div className='overlay'>
                    <Link to={`/?cat=${item.name}`} className='link'>
                      <h4>{item.category}</h4>
                    </Link>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}
