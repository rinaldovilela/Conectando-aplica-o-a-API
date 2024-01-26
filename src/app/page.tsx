"use client";

import axios from "axios";
import { useState, useEffect } from "react";

interface Props {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  episode: string;
  url: string;
  created: string;
}

export default function Home() {
  const [characters, setCharacters] = useState([] as Props[]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      const respApi = response.data.results;
      setCharacters(respApi);
    });
  }, []);

  return (
    <>
      <h1 className="flex items-center justify-center text-5xl font-extrabold">
        AV 02 - REACT
      </h1>
      <main className="grid grid-cols-4 min-h-screen  items-center justify-between p-24 gap-10">
        {characters.map((charac) => (
          <ul>
            <li>
              <div
                key={charac.id}
                className="border border-solid rounded-lg max-h-80 flex flex-col text-start justify-center items-start border-green-900 p-10 rounded shadow bg-green-300"
              >
                <img
                  src={charac.image}
                  alt="img-charac"
                  className="shadow mb-4"
                />
                <h2 className="text-lg font-semibold">{charac.name}</h2>
              </div>
            </li>
          </ul>
        ))}
      </main>
    </>
  );
}
