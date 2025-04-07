import { Character } from "../store/characterSlice";
import React from "react";

const CharacterCard = ({ character }: { character: Character }) => {
  // Компонент для отображения карточки персонажа
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-full sm:w-[260px] md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px]">
      <img src={character.image} alt={character.name} className="w-full h-100 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{character.name}</h2>
      <p>
        <strong>Статус:</strong> {character.status}
      </p>
      <p>
        <strong>Вид:</strong> {character.species}
      </p>
      <p>
        <strong>Локация:</strong> {character.location.name}
      </p>
    </div>
  );
};

export default CharacterCard;