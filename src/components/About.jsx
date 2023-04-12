import React from "react";

const About = () => {
  return (
    <div
      name="informazioni"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Informazioni
          </p>
        </div>

        <p className="text-xl mt-20">
          La mia passione per la tecnologia, unita alla voglia di rimettermi in gioco,
          mi hanno spinto ad approcciare il mondo della programmazione web,
          che in breve tempo è diventata la mia passione.
          Trovo entusiasmante poter dar vita a nuovi progetti, mettendo in pratica le mie competenze
          e acquisendone di nuove. Mi ritengo una persona meticolosa, attenta al dettaglio e in grado
          di focalizzarsi efficacemente sugli obiettivi da raggiungere, inoltre la mia esperienza nel mondo
          del commercio mi ha formato dal punto di vista dell'attenzione al cliente e alle sue esigenze.
        </p>

        <br />

        <p className="text-xl">
        </p>
      </div>
    </div>
  );
};

export default About;
