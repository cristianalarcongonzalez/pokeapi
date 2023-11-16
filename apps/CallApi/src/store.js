import { create } from "zustand";

const useStore = create((set) => ({
  data: [],
  fetchData: async (pokemonId) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));

export default useStore;
