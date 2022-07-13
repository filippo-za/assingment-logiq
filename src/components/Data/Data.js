import React from "react";
import Cards from "../Cards/Cards";
import Assets from "../../contents/Assets";

function Data({
  title,
  fermentation,
  fermentation02,
  fermentation03,
  bottling,
  bottling02,
  pressing,
  treatments,
  treatments02,
  treatments03,
  harvest,
  harvest02,
}) {
  const Data = [
    {
      id: 1,
      img: Assets.img01,
      title: "Consegna",
      delivery: `Effettuata: ${title}`,
    },
    {
      id: 2,
      img: Assets.img02,
      title: "Fermentazione",
      fermentation: `Inoculo Piede: ${fermentation}`,
      fermentation02: `Temperatura Media: ${fermentation02}`,
      fermentation03: `Termine: ${fermentation03}`,
    },
    {
      id: 3,
      img: Assets.img03,
      title: "Imbottigliamento",
      bottling: `Data: ${bottling}`,
      bottling02: `Luogo: ${bottling02}`,
    },
    {
      id: 4,
      img: Assets.img04,
      title: "Inizio Pressatura",
      pressing: `Inizio pressatura: ${pressing}`,
    },
    {
      id: 5,
      img: Assets.img05,
      title: "Trattamenti",
      treatments: `Prodotto a base di zolfo per trattamento: ${treatments}`,
      treatments02: `Prodotto rameico 30% per trattamento: ${treatments02}`,
      treatments03: `Raccolta dati: ${treatments03}`,
    },
    {
      id: 6,
      img: Assets.img06,
      title: "Vendemmia",
      harvest: `Fine: ${harvest}`,
      harvest02: `Inizio: ${harvest02}`,
    },
  ];
  return (
    <div className="container_cards">
      {Data.map((data, idx) => {
        return (
          <div className="cards" key={idx}>
            <Cards data={data} />
          </div>
        );
      })}
    </div>
  );
}

export default Data;
