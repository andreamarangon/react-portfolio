import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={22} />
        </>
      ),
      href: "https://www.linkedin.com/in/marangon-andrea",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={22} />
        </>
      ),
      href: "https://github.com/andreamarangon",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={22} />
        </>
      ),
      href: "mailto:andreamarangon84@outlook.it",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={22} />
        </>
      ),
      href: "/cv-andrea-marangon.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div
      name="contatti"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contatti
          </p>
          <p className="py-6">Compila e invia il modulo sottostante per contattarmi</p>
        </div>

        <div className="flex justify-center items-center pb-3 lg:p-0">
          <form
            action="https://getform.io/f/47b049e1-2150-433d-8d3c-f501a530f829"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Nome"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Messaggio"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Invia
            </button>
          </form>
        </div>
        <ul className="flex lg:hidden justify-between md:justify-evenly">
          {links.map(({ id, child, href, download }) => (
            <li key={id} className="rounded-full shadow-md shadow-gray-400 p-4 hover:scale-110 ease-in duration-300">
              <a
                href={href}
                // className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
