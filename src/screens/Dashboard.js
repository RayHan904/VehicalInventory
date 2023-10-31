import Button from "react-bootstrap/Button";
import VehicalTable from "../components/VehicalTable";
import Barchart from "../components/Barchart";
import { Link } from "react-router-dom";
import { BASE_URL, VEHICALS_URL } from "../constants";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { async } from "q";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(BASE_URL + VEHICALS_URL)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(BASE_URL + VEHICALS_URL + "/" + id)
      .then((response) => {
        toast.success("Vehical removed successfully");
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
        toast.error(error?.response?.data?.message || error);
      });
  };

  let isSoldData = data.map((data) => (data.isSold ? "Sold" : "Live"));
  let soldCount = isSoldData.filter((value) => value === "Sold").length;
  let liveCount = isSoldData.length - soldCount;

  let graphData = [
    { name: "Sold", count: soldCount },
    { name: "Live", count: liveCount },
  ];

  return (
    <>
      <h1>Inventory Dashboard</h1>
      <Link to="/add">
        <Button variant="primary">Add a Vehical</Button>
      </Link>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Barchart data={graphData} />
          <VehicalTable tableData={data} handleDelete={handleDelete} />
        </>
      )}
    </>
  );
};

export default Dashboard;
