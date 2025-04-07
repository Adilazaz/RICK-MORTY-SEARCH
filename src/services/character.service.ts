import { api } from "./api";
import { Character } from "../store/characterSlice";

/**
 * Запрос списка персонажей по имени
 * @param {string} name - Имя персонажа
 * @returns {Promise<Character[]>} - Массив персонажей
 */
export const getCharactersByName = async (name: string): Promise<Character[]> => {
  try {
    const response = await api.get(`/character/?name=${name}`);
    return response.data.results;
  } catch (error) {
    throw new Error("Персонаж не найден");
  }
};
