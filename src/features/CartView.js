import React, { useState } from "react";
import Data from "../data.json";
import ShoppingCartImg from "../assets/images/shopping_cart.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementFromCart, deleteFromCart } from "./cartSlice";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import CardsData from "../components/Carddata";
export default function CartView() {
  const { carts } = useSelector((state) => state.allCart);
  const [cartData, setCartData] = useState(Data);
  const dispatch = useDispatch();

  // add to cart
  const send = (e) => {
    dispatch(addToCart(e));
  };

  const deleteItem = (e) => {
    dispatch(decrementFromCart(e));
  };
  // add to cart
  const handleIncrement = (e) => {
    dispatch(addToCart(e));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {cartData.map((data, index) => {
            return (
              <div className="col-sm-6 col-md-4 col-xl-3 py-2">
                <div className="card w-100 h-100">
                  <img src={data.imageUrl} className="img-fluid" />
                  <div className="card-body">
                    <div className="card-title">{data.price}</div>
                    <div className="card-footer">
                      <div className="d-flex justify-content-between">
                        <div>
                          <button onClick={() => deleteItem(data)}>-</button> 
                        </div>
                        <div>
                          <button onClick={() => send(data)}>Add to bag</button>
                        </div>
                        <div>
                          <button onClick={() => send(data)}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <div className="show-items">
          <div>
            <div className=" d-flex justify-content-center">
              <img src={ShoppingCartImg} className="img-fluid" />
            </div>
            <p className="text-center p-0 m-0 text-white">
              {carts.length} item
            </p>
            <p className="text-center p-0 m-0 text-warning bg-secondary mt-1">
              $500
            </p>
          </div>
        </div>
      </div>
      {/* right off canvas */}
      <div
        className="offcanvas offcanvas-end position-fixed"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ backgroundColor: "#dddddd" }}
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">item</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="border-bottom border-secondary p-2">
            <div className="d-flex gap-2 justify-content-between align-items-center">
              <div style={{ height: "70px" }}>
                <div
                // onClick={() => {
                //   dispatch(increment());
                // }}
                >
                  <IoIosArrowUp />
                </div>
                <div>count</div>
                <div
                // onClick={() => {
                //   dispatch(decrement());
                // }}
                >
                  <IoIosArrowDown />
                </div>
              </div>

              <div>
                <img
                  src={ShoppingCartImg}
                  className="img-fluid"
                  style={{ height: "40px", width: "25px" }}
                />
              </div>
              <div>
                <div style={{ fontSize: "12px" }}>Red Tomato</div>
                <div style={{ fontSize: "10px" }}>:500gm</div>
              </div>
              <div>
                <p className="p0 m-0" style={{ fontSize: "12px" }}>
                  $12
                </p>
                <p
                  className="p0 m-0 text-decoration-line-through"
                  style={{ fontSize: "12px" }}
                >
                  $15
                </p>
              </div>
              <div>{/*  */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
