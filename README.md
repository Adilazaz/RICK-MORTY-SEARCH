# 🧪 Поиск персонажей Rick & Morty

Простое React-приложение, которое позволяет пользователям искать персонажей из вселенной **Rick and Morty** с использованием [Rick and Morty API](https://rickandmortyapi.com/).

## 🧾 Описание

Этот проект был создан в рамках технического задания для демонстрации навыков работы с React, обработки API и создания чистого, функционального UI/UX. Он позволяет пользователям вводить имя персонажа, получать совпадающие результаты и отображать их в виде карточек с ключевой информацией.

## ✨ Возможности

- 🔍 Поиск персонажей по имени
- 📄 Отображение результатов в виде адаптивной сетки карточек
- 📡 Использует публичный REST API Rick & Morty
- 🧼 Чистый и минималистичный UI
- 🔁 Обновления в реальном времени при отправке поиска

## 🚀 Начало работы

### 1. Клонируйте репозиторий

git clone https://github.com/Adilazaz/RICK-MORTY-SEARCH.git
cd RICK-MORTY-SEARCH

2. Установите зависимости

npm install

3. Запустите сервер разработки

npm start



Теперь приложение будет доступно по адресу http://localhost:3000.

🛠️ Используемые технологии
⚛️ React (Функциональные компоненты + Хуки)

💅 CSS

📦 JavaScript (ES6)

🌐 Fetch API

📂 Структура проекта

src/
├── components/             UI-компоненты
│   ├── __tests__/          компонентов
│   │   ├── CharacterCard.test.tsx
│   │   ├── CharacterList.test.tsx
│   │   └── SearchBar.test.tsx
│   ├── CharacterCard.tsx
│   ├── CharacterList.tsx
│   └── SearchBar.tsx
├── pages/                 
│   ├── _app.tsx
│   └── index.tsx
├── services/               
│   ├── api.ts
│   └── character.service.ts
├── store/                
│   ├── characterSlice.ts
│   └── index.ts
├── styles/               
├── .babelrc               
├── .gitignore              
├── babel.config.js         
├── eslint.config.js       
├── jest.config.ts         
├── jest.setup.ts           
├── next-env.d.ts           
├── next.config.js         
├── package-lock.json       
├── package.json           
├── postcss.config.js      
├── README.md              
├── tailwind.config.js      
├── tsconfig.json          
└── tsconfig.ts             

🚧 Известные проблемы / улучшения
Пагинация ещё не реализована (показывается только первая страница результатов)

Отсутствуют индикаторы загрузки и обработка ошибок

Нужно улучшить мобильную адаптивность

Отсутствуют метки доступности (aria)

Тесты нужно добавить

Эти проблемы могут быть улучшены в будущих версиях.

🧑‍💻 Автор
Adil Azaz