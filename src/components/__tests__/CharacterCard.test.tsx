import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CharacterCard from "../CharacterCard";

describe("CharacterCard component", () => {
  const mockCharacter = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://example.com/rick.png",
    location: {
      name: "Earth (C-137)",
    },
  };

  it("renders character details correctly", () => {
    render(<CharacterCard character={mockCharacter} />);

    // Проверка имени персонажа
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();

    // Проверка статуса
    expect(screen.getByText(/Статус:/)).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();

    // Проверка вида
    expect(screen.getByText(/Вид:/)).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();

    // Проверка локации
    expect(screen.getByText(/Локация:/)).toBeInTheDocument();
    expect(screen.getByText("Earth (C-137)")).toBeInTheDocument();

    // Проверка изображения
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "https://example.com/rick.png");
    expect(image).toHaveAttribute("alt", "Rick Sanchez");
  });
});
