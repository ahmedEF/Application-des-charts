import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Récupération des données depuis l'URL '/RatingparSexe'
    fetch('http://localhost:3000/RatingparSexe')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="Gender" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="Rating" fill="#8884d8" />
    </BarChart>
  );
}

export default MyComponent;