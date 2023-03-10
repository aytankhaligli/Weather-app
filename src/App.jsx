import { useEffect, useState } from "react";
import ErrorPage from "./components/ErrorPage";
import MainPage from "./components/MainPage";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [inputData, setInputData] = useState("");
  const [city, setCity] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const today = new Date();
  const day = today.toDateString().split(" ").slice(0, -1);
  const weekDay = day[0];

  // console.log(weatherData);
  // console.log(city);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    async function getWeatherData() {
      try {
        if (!!location) {
          const res = isSearching
            ? await fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=aa7eb6f4f4284e48b3a162507231002&q=${city}&days=5`
              )
            : await fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=aa7eb6f4f4284e48b3a162507231002&q=${location.lat},${location.lng}&days=5`
              );
          const data = await res.json();
          setWeatherData(data);
          setErrMsg(data.error.message);
        }
      } catch (err) {}
    }
    getWeatherData();
  }, [location, city, isSearching]);

  // console.log(location);
  return (
    <div className="md:flex">
      {weatherData.location ? (
        <>
          {openModal ? (
            <Modal
              inputData={inputData}
              setInputData={setInputData}
              setCity={setCity}
              setIsSearching={setIsSearching}
              city={city}
              setOpenModal={setOpenModal}
            />
          ) : (
            <Sidebar
              weather={weatherData}
              day={day}
              setOpenModal={setOpenModal}
              setIsSearching={setIsSearching}
            />
          )}

          <MainPage weather={weatherData} day={weekDay} />
        </>
      ) : (
        !weatherData.error && (
          <p className="text-midnight text-2xl pt-20 pl-20">Loading...</p>
        )
      )}
      {weatherData.error && <ErrorPage errorMsg={errMsg} />}
    </div>
  );
}

export default App;
