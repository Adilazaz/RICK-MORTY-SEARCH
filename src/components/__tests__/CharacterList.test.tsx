import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CharacterList from "../CharacterList";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../store/index";
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

const mockCharacters = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Character ${i + 1}`,
  status: "Alive",
  species: "Human",
  image: "https://example.com/image.png",
  location: { name: `Location ${i + 1}` },
}));

const renderWithStore = (storeState: Partial<RootState>) => {
  const store = mockStore(storeState);
  return render(
    <Provider store={store}>
      <CharacterList />
    </Provider>
  );
};

describe("CharacterList Component", () => {
  it("renders loading state", () => {
    renderWithStore({
      character: {
        characters: [],
        loading: true,
        error: null,
      },
    });

    expect(screen.getByText(/Загрузка/i)).toBeInTheDocument();
  });

  it("renders error state", () => {
    renderWithStore({
      character: {
        characters: [],
        loading: false,
        error: "Ошибка загрузки данных",
      },
    });

    expect(screen.getByText(/Ошибка загрузки данных/i)).toBeInTheDocument();
  });

  it("renders character cards and pagination", () => {
    renderWithStore({
      character: {
        characters: mockCharacters,
        loading: false,
        error: null,
      },
    });

    // Отображаются только первые 12 персонажей на первой странице
    expect(screen.getAllByText(/Character/i)).toHaveLength(12);

    // Есть кнопка перехода на вторую страницу
    const page2Button = screen.getByText("2");
    expect(page2Button).toBeInTheDocument();

    // Переключение на вторую страницу
    fireEvent.click(page2Button);
    expect(screen.getByText("Character 13")).toBeInTheDocument();
  });

  it("filters characters by name", () => {
    renderWithStore({
      character: {
        characters: mockCharacters,
        loading: false,
        error: null,
      },
    });

    const input = screen.getByPlaceholderText(/поиск по имени/i);
    fireEvent.change(input, { target: { value: "character 2" } });

    // Должны отобразиться только те, у кого имя содержит "character 2"
    expect(screen.getByText("Character 2")).toBeInTheDocument();
    expect(screen.queryByText("Character 1")).not.toBeInTheDocument();
  });
});
