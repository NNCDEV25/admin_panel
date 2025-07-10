import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function MonthlyEnquiryChart2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/enquiriesCom/monthly-count")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error("Failed to fetch enquiry stats", err));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Dot Com Monthly Enquiries</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#1d2b53"             // Blue color
            barSize={300}              // Thinner bars
            radius={[6, 6, 0, 0]}     // Rounded top corners
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
