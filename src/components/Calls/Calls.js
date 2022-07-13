import React, { useState, useEffect } from "react";
import Data from "../Data/Data";
import axios from "axios";

const Calls = () => {
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    const data = axios
      .get("./transaction.json")
      .then((response) => {
        console.log(response.data);
        setTransaction(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container_card">
        {transaction.map((item, idx) => {
          return (
            <div key={idx}>
              <Data
                title={item.consegna}
                fermentation={item.fermentazione["inoculo piede"]}
                fermentation02={item.fermentazione["temperatura media"]}
                fermentation03={item.fermentazione["termine"]}
                bottling={item.imbottigliamento["data"]}
                bottling02={item.imbottigliamento["luogo"]}
                pressing={item.iniziopressatura}
                treatments={
                  item.trattamenti["prodotto a base di zolfo per trattamento"]
                }
                treatments02={
                  item.trattamenti["prodotto rameico 30% per trattamento"]
                }
                treatments03={item.trattamenti["raccolta dati"]}
                harvest={item.vendemmia["fine"]}
                harvest02={item.vendemmia["inizio"]}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Calls;
