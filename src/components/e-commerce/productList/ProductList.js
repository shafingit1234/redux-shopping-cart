import React, { useEffect } from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, loadProducts } from "../../../redux/slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const ProductList = () => {
  // bring fetched products at the time of loading or mounting phase, which means we need to use useEffect Hook with an empty dependency array as it's parameter.
  /*  async function fetchData() {
    const respone = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await respone.json();
    //   as soon as you get the data send it in your store.
    dispatch(loadProducts(data));
  }
*/
  const dispatch = useDispatch();
  useEffect(() => {
    // fetchData(); --> done in view section.
    //   it sends three states, 1. thunkname.pending 2. thunkname.fulfilled 3.thunkname.rejected.
    //   we need to handle all these states.
    dispatch(fetchData()); //done by using async thunk
  }, []);

  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector((state) => state.productReducer.status);
  // useSelectore will help in accessing store items.
  //   console.log(status);
  if (status === "loading") {
    //write loading logic, such as a preloader.
    //   install ant design to show a spinning effect.
    // return <AiOutlineLoading3Quarters />;
    const antIcon = (
      <LoadingOutlined
        style={{ fontSize: 24, position: "absolute", top: "40%", left: "50%" }}
        spin
      />
    );
    return <Spin indicator={antIcon} />;
    // return <h2>Loading.....</h2>;
  }
  return (
    <div className="productList">
      {/* {products.map((item) => (
        <h1>{item.title}</h1>
      ))} */}
      {products.map((item) => (
        <SingleProduct key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;

// const App: React.FC = () => <Spin indicator={antIcon} />;
