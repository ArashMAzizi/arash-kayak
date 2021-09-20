import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import Header from "./Header.js";
import Title from "./Title.js";
import Filter from "./Filter.js";
import Grid from "@material-ui/core/Grid";
import FlightCard from './FlightCards';
import axios from 'axios';

function App() {
  //const greeting = 'Hello World';
  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(false);
  //const [error, setError] = useState(null);
  
  useEffect(() => {
    const axiosData = async () => {
      const response = await axios("https://www.kayak.com/h/mobileapis/directory/airlines  ", { 'Access-Control-Allow-Credentials':true });
      setData(response.data);
    };
    axiosData();
    }, []);

  const useaxiosData = data.map((item) => {
    return <div>
              <h3>{item.code}</h3>
              <h4>{item.alliance}</h4>
              <p>{item.name}</p>
            </div> 
  })

  if (loading) {
    return <p>Data is loading...</p>;
  }
  
  //if (loading) return "Loading...";
  //if (error) return "Error!";
  console.log(data)
  return (
    <div>
      <Header></Header>
      <Title></Title>
      <Filter></Filter>
      <Grid container spacing={4} style={{
              padding: 94
                  }}>
      </Grid>
      <div>
        {data && useaxiosData}
      </div>
    </div>
  );
}

export default App;

/*
useEffect(() => {
    setLoading(true);
    fetch("https://www.kayak.com/h/mobileapis/directory/airlines/homework")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    getFetch();
  }, []);

  const getFetch = async () => {
    const response = await fetch("https://www.kayak.com/h/mobileapis/directory/airlines/homework");
    const jsonData = await response.json();
    setUserData(jsonData);
  };
  console.log(userData)

  
  const fetchData = () => {
    return fetch("https://www.kayak.com/h/mobileapis/directory/airlines/homework")
          .then((response) => response.json())
          .then((data) => console.log(data));}

  useEffect(() => {
    setLoading(true);
    fetch("https://www.kayak.com/h/mobileapis/directory/airlines/homework")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
 
  useEffect(() => {
    fetch("https://www.kayak.com/h/mobileapis/directory/airlines/homework")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  */