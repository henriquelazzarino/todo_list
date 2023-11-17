import { useEffect, useState, useRef } from "react";

type DayProps = {
  number: number;
  name: string;
  isToday?: boolean;
};

const Day = ({ number, name, isToday }: DayProps) => {
  return (
    <div
      className={`flex flex-col items-center rounded-md min-w-[12vw] gap-y-1 select-none cursor-pointer ${
        isToday ? " bg-green" : "bg-light-green"
      }`}
    >
      <div
        className={`text-xl font-bold ${
          isToday ? "text-white" : "text-slate-800"
        }`}
      >
        {number}
      </div>
      <div className={`text-sm ${isToday ? "text-white" : "text-slate-800"}`}>
        {name}
      </div>
    </div>
  );
};

const Calendar = () => {
  const [days, setDays] = useState<DayProps[]>([]);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let daysArray = [];

    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push({
        number: i,
        name: new Date(currentYear, currentMonth, i).toLocaleString("en-us", {
          weekday: "short",
        }),
        isToday: i === currentDay,
      });
    }

    setDays(daysArray);
    setSelectedDay(currentDay);
  }, []);

  useEffect(() => {
    if (containerRef.current && containerRef.current.children[selectedDay - 1]) {
      containerRef.current.children[selectedDay - 1].scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  }, [selectedDay]);

  const handleDayClick = (selectedNumber: number) => {
    setSelectedDay(selectedNumber);
  };

  return (
    <div
      ref={containerRef}
      className={`flex overflow-x-auto gap-5 mt-5 mb-3 no-scrollbar cursor-move`}
    >
      {days.map((day) => (
        <div key={day.number} onClick={() => handleDayClick(day.number)}>
          <Day number={day.number} name={day.name} isToday={day.isToday} />
        </div>
      ))}
    </div>
  );
};

export default Calendar;
