import React, { useEffect, useState } from "react";

import { getPersonIds, getPerson } from "./api";

import "./styles.css";

function App() {
  const [person, setPerson] = useState();
  useEffect(() => {
    getPersonIds().then(async (response) => {
      const ids = await response.json();
      console.log(ids);
      const p = await (await getPerson(ids[3])).json();
      console.log(p);
      setPerson(p);
      // setPerson(ids) ; To retrieve all the ids. u must change to Object.values in api.js
    });
  }, []);

  if (!person) return <>Loading...</>;
  return <>{JSON.stringify(person)}</>;
}

export default App;
