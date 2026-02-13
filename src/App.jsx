import { useState, useEffect } from "react";
import { Product } from "./component/Product";

function App() {
  const [ProductDetails, setProductDetails] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data.products);
      });
  }, []);

  return (
    <>
      <Product product={ProductDetails} />
    </>
  );
}

export default App;
