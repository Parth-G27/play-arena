"use client";
import React, { useState } from "react";
import { Pagination } from "./Pagination";
import { Table } from "./Table";
import { Button } from "@/components/ui/button";

export interface pokemonListProps {
  name: string;
  url: string;
}

export const Pokepedia = () => {
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [pokemonList, setPokemonList] = useState<pokemonListProps[] | null>(
    null,
  );
  const [nextURL, setnextURL] = useState<string>("");
  const [prevURL, setprevURL] = useState<string>("");

  async function fetchPokemonNames() {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`,
      );
      const data = await res.json();
      console.log(data);
      setTotalCount(data?.count);
      setPokemonList(data?.results);
      setnextURL(data?.next);
      setprevURL(data?.previous);
    } catch (error) {
      console.log(`ERROR1:` + error);
    }
  }

  React.useEffect(() => {
    fetchPokemonNames();
  }, []);

  const fetchByUrl = async (url_: string) => {
    if (!url_) return;
    try {
      const res = await fetch(url_);
      const data = await res.json();
      console.log(data);
      setTotalCount(data?.count);
      setPokemonList(data?.results);
      setnextURL(data?.next);
      setprevURL(data?.previous);
    } catch (error) {
      console.log(`ERROR2:` + error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
        <div className="text-center text-3xl font-bold bg-linear-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Welcome to Poképedia
        </div>
        <p className="mt-2 text-center text-sm text-slate-500">
          Total Pokémons: {totalCount ?? "-"}
        </p>

        <Table pokemonList={pokemonList}/>

        <div className="mt-6">
          <Pagination
            nextButtonOnClick={() => fetchByUrl(nextURL)}
            prevButtonOnClick={() => fetchByUrl(prevURL)}
          />
        </div>

        {/* <div className="mt-6 flex items-center justify-center gap-3 ">
          <Button
            variant="outline"
            onClick={() => fetchByUrl(prevURL)}
            disabled={!prevURL}
          >
            Prev
          </Button>
          <Button onClick={() => fetchByUrl(nextURL)} disabled={!nextURL}>
            Next
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Pokepedia;
