"use client";

import { fetcher } from "@/utils/database/fetcher";

export const GetPokemons = () => {
  return (
    <div className="demo">
      <h2>API Handler</h2>

      <button
        onClick={async () => {
          const response = await fetcher<{
            count: number;
            next: string;
            previous: string;
            results: {
              name: string;
              url: string;
            }[];
          }>({
            options: {
              fetchOptions: {
                baseUrl: "https://pokeapi.co/api/v2/pokemon",
                queryParams: ["limit=9", "offset=9"]
              }
            }
          });
          console.log(response);
        }}
        className="border"
      >
        Use Fetcher:Pokemon
      </button>
    </div>
  );
};
