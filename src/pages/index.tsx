import React from "react";
import SearchBar from "../components/SearchBar";
import CharacterList from "../components/CharacterList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-center text-3xl font-bold mb-5">Поиск персонажей Rick and Morty</h1>
      <SearchBar />
      <CharacterList />
    </div>
  );
}