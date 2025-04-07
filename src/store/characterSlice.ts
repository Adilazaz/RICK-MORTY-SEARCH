import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getCharactersByName } from "../services/character.service";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  location: { name: string };
  image: string;
}

interface CharacterState {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

const initialState: CharacterState = {
  characters: [],
  loading: false,
  error: null,
};

// Функция для получения данных из localStorage
const getCachedCharacters = (name: string): Character[] | null => {
  const cachedData = localStorage.getItem(`characters_${name.toLowerCase()}`);
  return cachedData ? JSON.parse(cachedData) : null;
};

// Функция для сохранения данных в localStorage
const cacheCharacters = (name: string, data: Character[]) => {
  localStorage.setItem(`characters_${name.toLowerCase()}`, JSON.stringify(data));
};

// Асинхронное действие для загрузки персонажей
export const fetchCharacters = createAsyncThunk(
  "character/fetchCharacters",
  async (name: string, { rejectWithValue }) => {
    // Проверяем кэш
    const cachedCharacters = getCachedCharacters(name);
    if (cachedCharacters) {
      return cachedCharacters;
    }

    try {
      const characters = await getCharactersByName(name);

      // Кэшируем данные перед их возвратом
      cacheCharacters(name, characters);

      return characters;
    } catch (error) {
      return rejectWithValue("Персонаж не найден");
    }
  }
);

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action: PayloadAction<Character[]>) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default characterSlice.reducer;
