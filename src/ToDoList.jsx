import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState();
  const [list, setList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();

  function handleTodolist() {
    setList([...list, task]);
    setTask("");
  }
  function handleDelete(index) {
    setList(list.filter((item, i) => i !== index));
  }
  function handleEdit(index) {
    setTask(list[index]);
    setSelectedIndex(index);
  }
  const handleUpdatelist = () => {
    // const a = [1, 23, 4, 5].map((item, i) => {
    //   if (i === 1) {
    //     return item + 1;
    //   }

    //   return item;
    // });
    const updatedArray = list.map((item, index) => {
      if (selectedIndex === index) {
        return task;
      }
      return item;
    });
    setList(updatedArray);
  };
  return (
    <>
      <h1>To do List </h1>
      <p> Enter your tasks</p>
      <input
        value={task}
        type="text"
        placeholder="To Do Tasks"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleTodolist}> Add Tasks</button>
      <button onClick={handleUpdatelist}> Update Tasks</button>

      {list.map((lists, index) => {
        return (
          <div key={index}>
            <li>
              {lists}
              <button onClick={() => handleDelete(index)}> Delete </button>
              <button onClick={() => handleEdit(index)}> Edit </button>
            </li>
          </div>
        );
      })}
    </>
  );
}
