import React from "react";
import reactWeatherApp from "../assets/portfolio/reactWeatherApp.png";
import boolgram from "../assets/portfolio/boolgram.png";
import nextjsPhoto from "../assets/portfolio/nextjsPhoto.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactWeatherApp,
      hrefDemo: "https://react-weather-app-am.netlify.app",
      hrefCode: "https://github.com/andreamarangon/react-weather-app",
    },
    {
      id: 2,
      src: boolgram,
      hrefDemo: "https://boolgram-am.netlify.app",
      hrefCode: "https://github.com/andreamarangon/boolgram",
    },
    {
      id: 3,
      src: nextjsPhoto,
      hrefDemo: "https://nextjs-photo.netlify.app/",
      hrefCode: "https://github.com/andreamarangon/nextjs-photo",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Dai un'occhiata ad alcuni dei miei lavori qui</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

          {portfolios.map(({ id, src, hrefDemo, hrefCode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={hrefDemo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={hrefCode}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
