import { useState } from "react";

const TasksList = () => {
    const [tasks, setTasks] = useState([
        "Купить хлеб",
        "Стать фронтенд разработчиком",
        "Выучить Typescript"
    ]);
    const [newTask, setNewTask] = useState("");

    const onChangeInput = (e) => {
        setNewTask(e.target.value);
    };

    const onAddTask = () => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setNewTask("");
    };

    const onDeleteLastTask = () => {
        //setTasks((prevTasks) => prevTasks.filter((task, i, arr) => i !== arr.length - 1));
        setTasks((prevTasks) => prevTasks.slice(0, -1));
    };

    return (
        <div className="component">
            <h3>Список задач</h3>
            <ul className="tasksList">
                {tasks.map((task) => (
                    <li key={crypto.randomUUID()}>{task}</li>
                ))}
            </ul>

            <input value={newTask} onChange={(e) => onChangeInput(e)}></input>
            <button disabled={!newTask} onClick={onAddTask}>
                Добавить задачу
            </button>
            <button disabled={!tasks.length} onClick={onDeleteLastTask}>
                Удалить последнюю задачу
            </button>
        </div>
    );
};

export default TasksList;
