import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar";
import * as characterSlice from "../../store/characterSlice";

// Мокаем useDispatch
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("SearchBar component", () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    // Привязываем мок useDispatch к мок-функции
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock);
    dispatchMock.mockClear();
  });

  it("dispatches fetchCharacters with correct search term", async () => {
    const searchTerm = "Morty";

    // Мокаем fetchCharacters с приведением типа
    const fetchCharactersMock = jest
      .spyOn(characterSlice, "fetchCharacters")
      .mockReturnValue({ type: "FETCH_CHARACTERS", payload: searchTerm } as any); // <--- здесь "as any"

    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Введите имя персонажа");
    const button = screen.getByRole("button", { name: /поиск/i });

    await userEvent.type(input, searchTerm);
    await userEvent.click(button);

    expect(fetchCharactersMock).toHaveBeenCalledWith(searchTerm);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: "FETCH_CHARACTERS",
      payload: searchTerm,
    });
  });
});
