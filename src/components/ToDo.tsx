import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface TodoItemProps {
  id: string;
  message: string;
  done: boolean;
}

const ToDo = () => {
  const [items, setItems] = useState<TodoItemProps[]>([
    { id: uuidv4(), message: "Things that I have to do...", done: true },
  ]);
  const [todoItem, setTodoItem] = useState("");

  const addItem = () => {
    if (todoItem) {
      setItems([
        ...items,
        {
          id: uuidv4(),
          message: todoItem,
          done: false,
        },
      ]);

      setTodoItem("");
    }
  };

  // const removeItem = () => {
  //   setItems([...items, todoItem]);
  //   setTodoItem("");
  // };

  const handleToogle = (id: string) => {
    console.log(id, "itd");
    const _items = items.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });

    setItems(_items);
  };

  return (
    <div className="bg-orange-200 flex justify-center items-center h-screen flex-col">
      <div className="container w-full max-w-2xl">
        <div className="text-3xl text-center font-bold ">
          <h2 className="text-3xl text-center font-bold mb-3 uppercase">
            ToDo List
          </h2>
        </div>
        <div className="flex justify-center">
          <input
            className="text-xl text-orange-800 placeholder-orange-400 py-2 px-5 bg-orange-100 rounded-l-full outline-orange-300"
            type="text"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
          <button
            onClick={addItem}
            className="text-xl text-orange-100 placeholder-orange-400 py-2 pr-5 pl-4 bg-orange-500 rounded-r-full"
          >
            Add
          </button>
        </div>

        <div className="bg-gray-100 mt-5 p-5 rounded-xl shadow-lg text-gray-700">
          <h2 className="font-bold text-xl italic block mb-3 leading-none">
            Todo App
          </h2>

          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-center px-1 py-2 bg-orange-500 text-orange-100 rounded-tl-xl">
                  #
                </th>
                <th className="text-left px-1 py-2 bg-orange-500 text-orange-100">
                  Description
                </th>
                <th className="px-1 py-2 bg-orange-500 text-orange-100 rounded-tr-xl">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {items
                .filter(({ done }) => !done)
                .map(({ id, message, done }, i) => (
                  <tr className="odd:bg-orange-100 even:bg-orange-50 transition duration-300">
                    {/* <li
                  className={done ? "line-through" : ""}
                  key={id}
                  onClick={() => handleToogle(id)}
                >
                  {message} - {id}
                </li> */}

                    <td className="text-center px-1 py-2 text-orange-800">
                      {i + 1}
                    </td>
                    <td className="px-1 py-2 text-orange-800">{message}</td>
                    <td>{done}</td>
                  </tr>
                ))}

              {items
                .filter(({ done }) => done)
                .map(({ id, message, done }, i) => (
                  <tr className="odd:bg-orange-100 even:bg-orange-50 transition duration-300">
                    {/* <li
                className={done ? "line-through" : ""}
                key={id}
                onClick={() => handleToogle(id)}
              >
                {message} - {id}
              </li> */}

                    <td className="text-center px-1 py-2 text-orange-800">
                      {i + 1}
                    </td>
                    <td className="px-1 py-2 text-orange-800">{message}</td>
                    <td>{done}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
