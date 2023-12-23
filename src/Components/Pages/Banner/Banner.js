import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import img1 from "../../../Assets/slider-1.jpg";
import img2 from "../../../Assets/slider-2.jpg";
import img4 from "../../../Assets/slider-4.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="-mt-16 text-center">
      <Carousel autoPlay infiniteLoop >
        <div className="relative">
          <img src={img1} />
          <h1 className="absolute top-12 md:top-32 px-4 py-3 md:pl-36 banner md:font-bold font-semibold text-xl md:text-4xl text-green-800">
            Organic fresh fruits for <br /> your health <br />
            <div className="mt-20">
            <Link to="/Allproducts"  className="click lg:mt-12 mt-4 px-4 lg:px-6 py-1 lg:py-2 text-sm lg:text-xl rounded-sm">
              Shop Now 
            </Link>
            </div>
          </h1>
        </div>
        <div className="relative">
          <img src={img2} />
          <h1 className="absolute top-12 md:top-32 px-4 py-3 md:pl-36 banner md:font-bold font-semibold text-xl md:text-4xl text-green-800">
            {" "}
            Refresh Your Body, Mind,
            <br /> and Soul <br />
            <div className="mt-20">
            <Link to="/Allproducts"  className="click lg:mt-12 mt-4 px-4 lg:px-6 py-1 lg:py-2 text-sm lg:text-xl rounded-sm">
              Shop Now 
            </Link>
            </div>
          </h1>
        </div>

        <div className="relative">
          <img src={img4} />
          <h1 className="absolute top-12 md:top-32 px-4 py-3 md:pl-36 banner md:font-bold font-semibold text-xl md:text-4xl text-green-800">
            Revitalize Your Life with <br /> Organic Freshness! <br />
            <div className="mt-20">
            <Link to="/Allproducts"  className="click lg:mt-12 mt-4 px-4 lg:px-6 py-1 lg:py-2 text-sm lg:text-xl rounded-sm">
              Shop Now 
            </Link>
            </div>
          </h1>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
