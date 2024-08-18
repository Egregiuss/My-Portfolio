import { useState, useEffect } from "react";
import { Home } from "./Home";
import Brand from "./images/BRAND.png";

const url = "https://google.com";
function App() {
  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState([]);

  const fetchPortfolio = async () => {
    const reponse = await fetch(url);
    const newWeb = await reponse.json();
    setPortfolio(newWeb);
    setLoading();
  };
  useEffect(() => {
    fetchPortfolio();
  }, []);
  if (loading) {
    return (
      <section className="loader">
        <div className="  pt-5 d-flex justify-content-center ">
          {" "}
          <img src={Brand} alt="loading" />
        </div>
      </section>
    );
  }

  return (
    <>
      <Home />
    </>
  );
}

export default App;
