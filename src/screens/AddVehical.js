import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, VEHICALS_URL } from "../constants";

const AddVehical = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [isSold, setIsSold] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BASE_URL + VEHICALS_URL, formData).then((response) => {
        console.log("Vehical data Added:", response.data);
      });
      toast.success("Vehical added successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || err.error);
    }
  };

  let formData = {
    make,
    model,
    year,
    price,
    isSold,
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Add Vehicle</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="make">
            <Form.Label>Make</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="my-2" controlId="year">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="number"
              min="1900"
              max={new Date().getFullYear() + 1}
              placeholder="Enter Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="my-2" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              min="500"
              max="999999"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="isSold">
            <Form.Check
              type="checkbox"
              label="Mark as Sold"
              checked={isSold}
              onChange={(e) => setIsSold(e.target.checked)}
            ></Form.Check>
          </Form.Group>

          <Button type="submit" variant="primary">
            Add
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default AddVehical;
