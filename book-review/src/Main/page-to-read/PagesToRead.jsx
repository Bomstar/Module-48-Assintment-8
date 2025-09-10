import { useLoaderData } from "react-router";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function PagesToRead() {
  const booksData = useLoaderData();
  const getBooksId = JSON.parse(localStorage.getItem("readBooks")) || [];

  const getBooklistRow = booksData.filter((book) =>
    getBooksId.includes(book.bookId)
  );

  // Prepare data for Bar chart
  const data = {
    labels: getBooklistRow.map((book) => book.bookName),
    datasets: [
      {
        label: "Pages to Read",
        data: getBooklistRow.map((book) => book.totalPages),
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
        borderRadius: 8,
        barPercentage: 0.5,
        categoryPercentage: 1,
        tension: 1,
        hoverBackgroundColor: "red",
        hoverBorderColor: "green",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Pages to Read by Book",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Book Name",
        },
      },
      y: {
        title: {
          display: true,
          text: "Pages",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default PagesToRead;
