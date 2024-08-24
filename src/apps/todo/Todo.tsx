import classNames from "classnames";
import { useState } from "react";
import {
  BiCheck,
  BiEraser,
  BiListCheck,
  BiPencil,
  BiPlus,
  BiTrash,
} from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

interface ITodo {
  title: string;
  isDone: boolean;
  id: string;
}

const Todo = () => {
  const [onEditState, setOnEditState] = useState<ITodo | null>(null);
  const [inputText, setInputText] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  // Handlers

  const handleAddTodo = (todoText: string) => {
    if (todoText) {
      const todoCopy = [...todoList];
      todoCopy.push({
        title: todoText,
        id: crypto.randomUUID(),
        isDone: false,
      });
      setTodoList(todoCopy);
      setInputText("");
    }
  };

  const handleDeleteTodo = (id: string) => {
    if (id) {
      if (onEditState && onEditState.id === id) {
        setOnEditState(null);
        setInputText("");
      }
      const todoCopy = [...todoList];
      setTodoList(todoCopy.filter((todo) => todo.id !== id));
    }
  };

  const handleDoneToggle = (id: string) => {
    if (id) {
      const todoCopy = [...todoList];
      const findIndex = todoList.findIndex((todo) => todo.id === id);
      todoCopy[findIndex].isDone = !todoCopy[findIndex].isDone;
      setTodoList(todoCopy);
    }
  };

  const handleOnEditState = (id: string) => {
    if (id) {
      const todoCopy = [...todoList];
      const todo = todoCopy.find((todo) => todo.id === id);
      if (todo) {
        setOnEditState(todo);
        setInputText(todo.title);
      }
    }
  };
  const handleSaveEdit = () => {
    if (onEditState && inputText) {
      const updatedTodos = todoList.map((todo) =>
        todo.id === onEditState.id ? { ...todo, title: inputText } : todo
      );
      setTodoList(updatedTodos);
      setOnEditState(null);
      setInputText("");
    }
  };
  const handleReset = () => {
    setOnEditState(null);
    setInputText("");
    setTodoList([]);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        !onEditState ? handleAddTodo(inputText) : handleSaveEdit();
      }}
      className="max-w-2xl relative min-h-[525px] mx-auto p-6 mb-2 text-text rounded-lg bg-gradient-to-br from-primary-600 to-blue-500 hover:from-primary-600 hover:to-blue-500 hover:text-white"
    >
      {/* INPUT FORM */}
      <div className="relative">
        <input
          value={inputText}
          onChange={({ target }) => setInputText(target.value)}
          type="text"
          className="py-3 pe-12 px-4 block w-full border-text/40 rounded-lg text-sm focus:border-blue-500  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600"
          placeholder="What you wanna do?"
        />
        {!onEditState ? (
          <button
            type="submit"
            disabled={inputText.length === 0}
            className="text-white bg-gradient-to-br disabled:opacity-40 from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none  focus:ring-green-800 font-medium rounded-lg text-sm p-1 text-center absolute top-1/2 right-3 -translate-y-1/2"
          >
            <BiPlus size="20px" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              handleSaveEdit();
            }}
            disabled={inputText.length === 0}
            className="text-white bg-gradient-to-br disabled:opacity-40 from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none  focus:ring-green-800 font-medium rounded-lg text-sm p-1 text-center absolute top-1/2 right-3 -translate-y-1/2"
          >
            <BiCheck size="20px" />
          </button>
        )}
      </div>
      {/* TODO LIST */}
      <div className="flex max-h-96 overflow-auto scrollbar-thin flex-col gap-3 mt-8 mb-4">
        {todoList.map(({ title, id, isDone }) => (
          <div
            className={classNames(
              "relative py-3 px-4 block w-full border-2 rounded-lg text-sm bg-neutral-900 text-neutral-400",
              { "border-green-500": isDone, "border-neutral-700": !isDone }
            )}
            key={id}
          >
            <button
              type="button"
              onClick={() => handleDoneToggle(id)}
              className="text-white disabled:opacity-40 bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none  focus:ring-purple-800 font-medium rounded-lg text-sm p-0.5 text-center absolute top-1/2 left-3 -translate-y-1/2"
            >
              {isDone ? (
                <BiCheck className="bg-neutral-900 rounded-md" size="20px" />
              ) : (
                <IoMdClose
                  className="bg-neutral-900 text-neutral-900  rounded-md"
                  size="20px"
                />
              )}
            </button>
            <div
              className={classNames("w-full ps-8 pe-16", {
                "line-through": isDone,
              })}
            >
              {title}
            </div>
            {onEditState?.id !== id ? (
              <button
                type="button"
                onClick={() => {
                  handleOnEditState(id);
                }}
                className="text-white bg-gradient-to-br from-yellow-500 to-orange-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none  focus:ring-yellow-800 font-medium rounded-lg text-sm p-1 text-center absolute top-1/2 right-12 -translate-y-1/2"
              >
                <BiPencil size="20px" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  handleSaveEdit();
                }}
                disabled={inputText.length === 0}
                className="text-white disabled:opacity-40 bg-gradient-to-br from-yellow-500 to-orange-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none  focus:ring-yellow-800 font-medium rounded-lg text-sm p-1 text-center absolute top-1/2 right-12 -translate-y-1/2"
              >
                <BiCheck size="20px" />
              </button>
            )}
            <button
              type="button"
              onClick={() => handleDeleteTodo(id)}
              className="text-white bg-gradient-to-br from-red-800 to-pink-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none  focus:ring-red-800 font-medium rounded-lg text-sm p-1 text-center absolute top-1/2 right-3 -translate-y-1/2"
            >
              <BiTrash size="20px" />
            </button>
          </div>
        ))}
      </div>
      {/* STATISTICS PART */}
      <div className="absolute text-base uppercase flex items-center gap-0 bottom-1.5 left-1.5">
        <span className="flex min-w-14 gap-1 items-center justify-around font-medium px-1.5 py-0.5 rounded-s-md bg-violet-900 text-violet-300">
          <BiListCheck size="20px" />
          {[...todoList].length}
        </span>

        <span className="flex min-w-14 items-center justify-around gap-1 font-medium px-1.5 py-0.5 bg-green-900 text-green-300">
          <BiCheck size="20px" />
          {[...todoList.filter((todo) => todo.isDone)].length}
        </span>

        <span className="flex min-w-14 items-center justify-around gap-1 font-medium px-1.5 py-0.5 rounded-e-md bg-red-900 text-red-300">
          <IoMdClose size="20px" />
          {[...todoList.filter((todo) => !todo.isDone)].length}
        </span>
        <button
          type="button"
          onClick={() => handleReset()}
          className="flex items-center uppercase mx-1 justify-around gap-1 font-medium px-1.5 py-0.5 rounded-md bg-slate-900 text-slate-300 focus:ring-2 focus:outline-none focus:ring-slate-600"
        >
          <BiEraser size="20px" />
          clear
        </button>
      </div>
    </form>
  );
};

export default Todo;
