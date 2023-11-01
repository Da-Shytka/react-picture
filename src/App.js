import Home from "./Pages/Home";

function App() {
  return (
    <>
      {/* Вынесены все компоненты в странцу "Home",
      т.к. в дальнейшем тут будет маршрутизация по страницам */}
      <Home />
    </>
  );
}

export default App;