import React, { useState, useEffect } from "react";
import { Table } from "antd";

import { useNavigate } from "react-router-dom";
import Paragraph from "../../components/Paragraph";

import HeaderNav from "../../components/HeaderNav";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from "recharts";

const CreateNewRecycleOrder = () => {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: "Weight in lbs",
      dataIndex: "weight",
      key: "weight",
      align: "center",
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
      align: "right",
    },
  ];
  const data = [
    {
      key: "1",
      date: "11/12/2023",
      weight: 78,
      type: ["Intact Solid, ", "Liquid"],
    },
    {
      key: "2",
      date: "11/11/2023",
      weight: 57,
      type: ["Intact Solid"],
    },
    {
      key: "3",
      date: "11/10/2023",
      weight: 69,
      type: ["Partial Solid, ", "Liquid"],
    },
    {
      key: "4",
      date: "11/09/2023",
      weight: 55,
      type: ["Partial Solid"],
    },
    {
      key: "5",
      date: "11/08/2023",
      weight: 42,
      type: ["Intact Solid, ", "Liquid"],
    },
    {
      key: "6",
      date: "11/07/2023",
      weight: 47,
      type: ["Intact Solid, ", "Partial Solid"],
    },
    {
      key: "7",
      date: "11/06/2023",
      weight: 52,
      type: ["Liquid"],
    },
    {
      key: "8",
      date: "11/05/2023",
      weight: 62,
      type: ["Partial Solid, ", "Liquid"],
    },
    {
      key: "9",
      date: "11/04/2023",
      weight: 59,
      type: ["Partial Solid, ", "Liquid"],
    },
  ];
  const sortedData = [...data].reverse();

  const formatDate = (date) => {
    const [month, day] = date.split("/");
    return `${month}/${day}`;
  };

  const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.8);

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth * 0.8);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();

  const handleBackButtonOnClick = () => {
    navigate("/recycle");
  };

  return (
    <div>
      <HeaderNav
        header="Recycle History"
        showBackButton={true}
        showLogOutButton={true}
        backButtonOnClick={handleBackButtonOnClick}
      />
      <Paragraph className="text-center mx-2" type="success">
        Check how much food waste you have recycled so far!
      </Paragraph>

      <div className="mx-8 w-10/12">
        <LineChart width={chartWidth} height={300} data={sortedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={formatDate} />
          <YAxis />
          <Tooltip />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#12664f"
            strokeWidth={3}
          />
          <Brush
            dataKey="date"
            tickFormatter={formatDate}
            height={20}
            stroke="#12664f"
            startIndex={data.length - 5}
          />
        </LineChart>
      </div>
      <div className="mx-8 w-10/12">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          scroll={{ y: 350 }}
        />
      </div>
    </div>
  );
};
export default CreateNewRecycleOrder;
