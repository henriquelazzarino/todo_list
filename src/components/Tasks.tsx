const Task = () => {
  return (
    <div className="max-w-[99%] bg-light-green flex justify-between items-center px-3 py-4 rounded-xl">
      <div className="flex items-center">
      <div className="transform -rotate-90 flex">
        <p className="mr-2">6:30</p>
        <p>AM</p>
      </div>
      <div className="transform -rotate-90 flex">
        <p className="mr-2">7:00</p>
        <p>AM</p>
      </div>
    </div><div>
        <h3>Morning Routine</h3>
        <span>Wake up, exercise, shower and have breakfast.</span>
      </div><input type="checkbox" name="" id="" />
    </div>
  );
};

const maxHeight = () => {
  let screenHeight = window.innerHeight;

  return screenHeight - 280;
};

const Tasks = () => {
  return (
    <div>
      <h2 className="font-bold mb-4">My Tasks</h2>
      <div
        className="flex flex-col gap-3 overflow-auto xs:no-scrollbar sm:no-scrollbar md:no-scrollbar lg:scrollbar xl:scrollbar 2xl:scrollbar"
        style={{ maxHeight: maxHeight() }}
      >
        <Task />
      </div>
    </div>
  );
};

export default Tasks;
