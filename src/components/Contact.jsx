import React from "react";

const Contact = () => {
  return (
    <div
      name="contattami"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contattami
          </p>
          <p className="py-6">Compila e invia il modulo sottostante per contattarmi</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/47b049e1-2150-433d-8d3c-f501a530f829"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Inserisci il tuo nome"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Inserisci la tua email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Inserisci un messaggio"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Invia
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
