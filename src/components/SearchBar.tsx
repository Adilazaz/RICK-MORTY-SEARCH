import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { fetchCharacters } from "../store/characterSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  // Функция для обработки поиска
  const handleSearch = () => {
    dispatch(fetchCharacters(search));
  };

  return (
    <div className="flex justify-center my-5">
      <input
        type="text"
        className="border p-2 rounded-l-lg text-black outline-none w-80"
        placeholder="Введите имя персонажа"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
        onClick={handleSearch}
      >
        Поиск
      </button>
    </div>
  );
};

export default SearchBar;
