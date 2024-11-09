import { createContext, useContext, useState } from "react";

// Create context using createContext, not useContext
export const ToDoListContext = createContext();

export const useToDoContext = () => {
  return useContext(ToDoListContext);
};

export const ToDoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <ToDoListContext.Provider
      value={{
        todos,

        setTodos,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};
