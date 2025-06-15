import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Product.css";
import { Publish } from "@mui/icons-material";
import Chart from "../../Components/Chart/Chart";
import { productdata } from "../../Components/Datafile";
import { useSelector } from "react-redux";
export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  // find product from products array 
  const product  = useSelector((state)=>
  state.product.products.find((product)=>product._id === productId));
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTtile">Product</h1>
        <Link to="/newproduct">
          <button className="productAddBtn">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sales Performance" datakey="Sales" data={productdata} />
        </div>

        <div className="productopRight">
          <div className="productTopInfo">
            <img
              className="productimg"
              src={product.img}
              alt=""
            />
            <span className="productName">{product.title}</span>
          </div>

          <div className="productButtomInfo">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfiItem">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfiItem">{product.price}</span>
            </div>
            
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfiItem">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productButtom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />
           
            <label>Description</label>
            <input type="text" placeholder={product.desc} />
           
            <label>Price</label>
            <input type="text" placeholder={product.price} />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select> 
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                className="imageUpload"
                src={product.img}
                alt=""
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="updatebtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
