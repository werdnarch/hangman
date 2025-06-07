import React, {
  createContext,
  useState,
  ReactNode,
  use,
  useContext,
  useEffect,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Category =
  | "Movies"
  | "TV Shows"
  | "Countries"
  | "Capital Cities"
  | "Animals"
  | "Sports";

type GameContextType = {
  category: Category | null;

  setCategory: (
    category:
      | "Movies"
      | "TV Shows"
      | "Countries"
      | "Capital Cities"
      | "Animals"
      | "Sports"
  ) => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export default function GameContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [category, setCategoryState] = useState<Category | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("category");
    if (stored) setCategoryState(JSON.parse(stored));
    else setCategoryState("Movies"); // default
  }, []);

  const setCategory = (newCategory: Category) => {
    setCategoryState(newCategory);
    localStorage.setItem("category", JSON.stringify(newCategory));
  };

  if (category === null) return null;

  return (
    <GameContext.Provider value={{ category, setCategory }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context)
    throw new Error("useGameContext must be used within MenuProvider");

  return context;
};
