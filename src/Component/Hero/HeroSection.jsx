/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
const imgList = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_1280.jpg",
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2021/01/06/10/11/burger-5893927_1280.jpg",
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2020/09/21/14/07/meal-5590186_1280.jpg",
  },
];
const bgImage = {
  backgroundImage: `url(https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "No-Repeat",
  height: "100%",
  width: "100%",
};
const HeroSection = () => {
  const [imageId, setImageId] = React.useState(
    "https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_1280.jpg"
  );
  return (
    <>
      <div
        style={bgImage}
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className=" font-lobster text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome To <span className="text-green-600">Food Zone</span>
              </h1>
              <p className="text-sm text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                iusto iste neque aliquam quos sunt porro obcaecati ullam
                assumenda eum facere quia dignissimos tempore, mollitia
                distinctio dolore blanditiis nostrum repellat.
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full hover:scale-105 duration-300">
                  orderNow
                </button>
              </div>
            </div>
            <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
              <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                <img
                  className="w-[200px] h-[200px] sm:h-[250px] sm:w-[250px] rounded-full spin mx-auto opacity-85"
                  src={imageId}
                  alt=""
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-3 absolute bottom-[30px] lg:-right-4 bg-black/30 rounded-full">
                {/* image list section */}
                {imgList.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    className="w-[80px] h-[80px] object-contain rounded-full hover:scale-105 duration-200"
                    onClick={() => setImageId(item.img)}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
