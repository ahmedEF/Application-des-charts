import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function MyComponent() {
const [data, setData] = useState([]);

useEffect(() => {
fetch('http://localhost:3000/RevenueCategorie')
.then(res => res.json())
.then(data => {
const groupedData = data.reduce((acc, current) => {
const key = current['Product line'];
if (!acc[key]) {
acc[key] = { Product_line: key, gross_income: 0 };
}
acc[key].gross_income += current['gross income'];
return acc;
}, {});

    const chartData = Object.values(groupedData);
    setData(chartData);
  });

}, []);

return (
<BarChart width={600} height={300} data={data}>
<XAxis  />
<YAxis  dataKey="gross_income" />
<CartesianGrid strokeDasharray="3 3" />
<Tooltip />
<Bar dataKey="Product_line" fill="#8884d8" />
</BarChart>
);
}

export default MyComponent;