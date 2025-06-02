import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Galery = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => {
        if (!res.ok) throw new Error("Error en la respuesta del servidor");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, []);

  return (
    <><h2 className="text-3xl font-bold bg-[#f2b035] text-center text-gray-800">
      Elige tu Producto
    </h2>
    <div className="flex flex-wrap bg-[#f2b035] justify-center gap-6 p-6">
      {products.map(({ id, image, name }) => (
        <img
          key={id}
          src={image}
          alt={name}
          onClick={() => navigate("/register")}
          className="w-44 h-44 object-cover rounded-lg shadow-md cursor-pointer transform transition-transform duration-200 hover:scale-105"
        />
      ))}
    </div>
    </>
  );
};

export default Galery;
