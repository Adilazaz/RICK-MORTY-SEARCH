import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const { characters, loading, error } = useSelector((state: RootState) => state.character);
  
  // Локальное состояние для пагинации и поиска
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(12); // Количество персонажей на странице
  const [searchTerm, setSearchTerm] = useState("");

  // Обработчик для поиска персонажей по имени
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1); 
  };

  // Фильтрация персонажей по имени
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm)
  );

  // Логика пагинации
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  // Пагинация
  const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) return <p className="text-center text-blue-500">Загрузка...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      {/* Поисковик */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Поиск по имени"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded text-black"
        />
      </div>

      {/* Список персонажей */}
      <div className="flex flex-wrap justify-around gap-4 px-5">
        {currentCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {/* Пагинайия */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 border ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
