import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import "@mdi/font/css/materialdesignicons.css";
import NavBar from "./Components/NavBar/NavBar";
import Categories from "./Components/Categories/Categories";
import ModalFilter from "./Components/ModalFilter/ModalFilter";
import Card from "./Components/Card/Card";
import Skeleton from "./Components/Skeleton/Skeleton";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [catID, setCatID] = useState(1);
  const [allHouses, setAllHouses] = useState([]);
  const [filterHouses, setFilterHouses] = useState([]);

  // First Render
  useEffect(() => {
    fetch('https://curso.programacaoweb.com.br/api-airbnb/')
      .then((resposta) => {
        if (resposta.ok) {
          return resposta.json();
        }
        throw new Error('Something Wrong');
      }).then((respostaJSON) => {
        setAllHouses(respostaJSON);
        setIsLoading(false); // When is false, loading is done.
      }).catch((error) => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    // console.log(allHouses);
    filterByID(catID);
  }, [allHouses])

  useEffect(() => {
    // console.log(filterHouses);
  }, [filterHouses])

  useEffect(() => {
    console.log('A categoria atual é: ' + catID);
  }, [catID])

  const changeCat = (id) => {
    setCatID(id);
    filterByID(id);
  }

  //FILTER  ID BY CATEGORY
  const filterByID = (id) => {
    const newList = allHouses.filter((item) => {
      return item.categoria === id;
    })
    setFilterHouses(newList);
  }

  // FILTER BY PRICE
  const filterByPrice = (catID, min, max) => {
    const newList = allHouses.filter((item) => {
      return item.categoria === catID
        && item.preco >= min
        && item.preco <= max
    })
    setFilterHouses(newList);
  }

  const resetFilter = (id) => {
    filterByID(id);
  }

  return (
    <div>
      <NavBar />
      <Categories changeCat={changeCat} />

      {
        isLoading ?
          <div className='mt-4 container-airbnb row' style={{ paddingTop: '180px' }}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
          :
          <Card dados={filterHouses} />
      }
      <ModalFilter resetFilter={resetFilter} catID={catID} filterByPrice={filterByPrice} itens={filterHouses} />
    </div>
  )
}

export default App

