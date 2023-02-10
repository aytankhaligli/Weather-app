import React from "react";

export default function WeatherCard({
  icon,
  tempMax,
  tempMin,
  tempMaxF,
  tempMinF,
  date,
  id,
  day,
  celcius,
}) {
  const weatherDate = date.toString().split("-").slice(1);
  let monthNumber = weatherDate[0];
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = monthNames[monthNumber - 1].slice(0, 3);

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weekDayNumber = weekdays.findIndex((curr) => curr === day);

  let weekDay;
  if (weekDayNumber < 6 && id < 2) weekDay = weekdays[weekDayNumber + id + 1];
  if (weekDayNumber < 6 && id > 0)
    weekDay = weekdays[weekDayNumber + id - 7 + 1];
  if (weekDayNumber === 6) weekDay = weekdays[id];

  return (
    <div className="flex flex-col items-center bg-midnight py-5 px-6 ">
      <p className="font-medium mb-3 text-gray-200">
        {id === 0 ? "Tomorrow" : `${weekDay},${weatherDate[1]} ${monthName}`}
      </p>
      <img src={icon} alt="" className="h-[62px] mb-8" />
      <div className="flex gap-4 font-medium">
        <p className="text-gray-200">
          {celcius ? tempMax + "°C" : tempMaxF + "℉"}
        </p>
        <p className="text-gray-500">
          {celcius ? tempMin + "°C" : tempMinF + "℉"}
        </p>
      </div>
    </div>
  );
}
