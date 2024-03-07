"use client";
import { getTrendingCoins } from "@/services/koinxServices";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Card, { CoinDetailsProp } from "./Card";

interface SampleArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SampleArrow: React.FC<SampleArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#9f9f9f",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
};

const Suggestions = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [trendingCoinsArr, setTrendingCoinsArr] = useState<
    CoinDetailsProp[] | []
  >([]);

  useEffect(() => {
    const handleTrendigCoins = async () => {
      const res = await getTrendingCoins();
      setTrendingCoinsArr(res);
    };
    handleTrendigCoins();
  }, []);
  return (
    <div className="py-8 bg-white mt-6 rounded px-[1rem] md:px-[3.7rem]">
      <h1 className="font-bold md:text-xl mb-6">You May Also Like</h1>

      <div className="slider-container">
        <Slider {...settings}>
          {trendingCoinsArr &&
            trendingCoinsArr.length > 0 &&
            trendingCoinsArr.map(({ item }) => (
              <Card item={item} key={item.id} />
            ))}
        </Slider>
      </div>

      <h1 className="font-bold md:text-xl mt-8 mb-6">Trending Coins</h1>

      <div className="slider-container">
        <Slider {...settings}>
          {trendingCoinsArr &&
            trendingCoinsArr.length > 0 &&
            trendingCoinsArr.reverse().map(({ item }) => (
              <Card item={item} key={item.id} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Suggestions;
