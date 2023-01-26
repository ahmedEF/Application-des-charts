import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Récupération des données depuis l'URL '/RevenueCategorie'
    fetch('http://localhost:3000/AchatType')
    .then(res => res.json())
    .then(data => {
      // Filtrer les données pour n'afficher que les valeurs de "cogs" inférieures ou égales à 250
      const filteredData = data.filter(entry => entry.cogs <= 250);
      setData(filteredData);
    });
}, []);
//pour l'affichage des graphes 
  return (
   
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="Customer type" />
      <YAxis />
      <CartesianGrid strokeDasharray="3" />
      <Tooltip />
      <Bar dataKey="cogs" fill="#8884d8"  />
    </BarChart>
  );
}

export default MyComponent;



