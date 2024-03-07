"use client";
import { getTrendingCoins } from "@/services/koinxServices";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Card, { CoinDetailsProp } from "./Card";

const Suggestions = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [trendingCoinsArr, setTrendingCoinsArr] = useState<
    CoinDetailsProp[] | []
  >([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === trendingCoinsArr.length - 6 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trendingCoinsArr.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleTrendigCoins = async () => {
      const res = await getTrendingCoins();
      setTrendingCoinsArr(res);
    };
    handleTrendigCoins();
  }, []);
  console.log(currentIndex)
  return (
    <div className="py-8 bg-white mt-6 rounded px-[1rem] md:px-[3.7rem]">
      <h1 className="font-bold md:text-xl mb-6">You May Also Like</h1>

      <div className="slider-container">
        <div className="slider-wrapper">
          <div
            className="slider-inner flex gap-2"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {trendingCoinsArr &&
              trendingCoinsArr.length > 0 &&
              trendingCoinsArr.map(({ item }) => (
                <div key={item.id} className="slide">
                  <Card item={item} />
                </div>
              ))}
          </div>
        </div>
        <button className="prev-button" onClick={prevSlide}>
          Previous
        </button>
        <button className="next-button" onClick={nextSlide}>
          Next
        </button>
      </div>

      <h1 className="font-bold md:text-xl mt-8 mb-6">Trending Coins</h1>
     
      <div className="slider-container">
      <Slider {...settings}>
      {trendingCoinsArr &&
              trendingCoinsArr.length > 0 &&
              trendingCoinsArr.map(({ item }) => (
                  <Card item={item} key={item.id} />
              ))}
      </Slider>
    </div>
    </div>
  );
};

export default Suggestions;
