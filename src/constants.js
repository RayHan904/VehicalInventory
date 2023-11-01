export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5001"
    : "https://vehicleinventorybackend.onrender.com";
export const VEHICALS_URL = "/api/vehical";
