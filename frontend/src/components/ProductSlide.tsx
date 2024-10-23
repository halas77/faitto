import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pharmacyProducts } from "../utils/constants";
import ProductCard from "./ProductCard";

const ProductSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-full mx-auto">
      <Slider {...settings}>
        {pharmacyProducts.map((i) => (
          <ProductCard
            features={i.feature}
            name={i.name}
            id={i.id}
            price={i.price}
            key={i.id}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlide;
