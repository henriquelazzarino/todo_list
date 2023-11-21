import { useLocalStorage } from "../hooks/useLocalStorage";
import { Task as TaskType } from "../types/Task";
import Checkbox from "./Checkbox";

const Task = (task: TaskType) => {
  console.log(task)
  return (
    <div
      className="w-[90%] bg-light-green flex justify-between items-center px-3 py-4 rounded-xl duration-200 active:bg-green-2 active:text-white cursor-pointer"
    >
      <div className="flex items-center flex-col mr-2">
        <p>
          6:30<span className="text-xs">AM</span>
        </p>
        |
        <p>
          7:00<span className="text-xs">AM</span>
        </p>
      </div>
      <div>
        <h3 className="text-lg font-bold">Morning Routine</h3>
        <span className="pl-2 block overflow-hidden whitespace-nowrap max-w-[50vw] overflow-ellipsis">
          Wake up, exercise, shower and have breakfast.
        </span>
      </div>
      <Checkbox id="morning-routine" />
    </div>
  );
};

const maxHeight = () => {
  let screenHeight = window.innerHeight;

  return screenHeight - 280;
};

const Tasks = () => {
  const [value] = useLocalStorage<TaskType[]>('tasks', [{
    name: 'Morning Routine',
    description: 'Wake up, exercise, shower and have breakfast.',
    startTime: '6:30',
    dueTime: '7:00',
  }]);
  console.log(value)
  return (
    <div>
      <h2 className="font-bold mb-4">My Tasks</h2>
      <div
        className="flex flex-col gap-3 items-center overflow-auto xs:no-scrollbar sm:no-scrollbar md:no-scrollbar lg:scrollbar xl:scrollbar 2xl:scrollbar"
        style={{ maxHeight: maxHeight() }}
      >
        {value.map((task) => (
          <Task key={task.name} {...task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
