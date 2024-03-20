import React, { useEffect, useState } from "react";
import Data from "../data.json";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementFromCart,
  deleteFromCart,
  emptycartIteam,
  removeSingleIteams,
  removeToCart,
} from "./cartSlice";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import CardsData from "../components/Carddata";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BiX } from "react-icons/bi";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowDropup } from "react-icons/io";
import toast from "react-hot-toast";
export default function CartView() {
  const { carts } = useSelector((state) => state.allCart);
  const [cartData, setCartData] = useState(Data);
  const [totalprice, setPrice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);
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
  // -------------------------------------------

  // remove to cart
  const handleDecrement = (e) => {
    dispatch(removeToCart(e));
    toast.success("Item Remove From Your Cart");
  };

  // remove single item
  const handleSingleDecrement = (e) => {
    dispatch(removeSingleIteams(e));
  };

  // empty cart
  const emptycart = () => {
    dispatch(emptycartIteam());
    toast.success("Your Cart is Empty");
  };

  // count total price
  const total = () => {
    let totalprice = 0;
    carts.map((ele, ind) => {
      totalprice = ele.offerPrice * ele.qnty + totalprice;
    });
    setPrice(totalprice);
  };

  // count total quantity
  const countquantity = () => {
    let totalquantity = 0;
    carts.map((ele, ind) => {
      totalquantity = ele.qnty + totalquantity;
    });
    setTotalQuantity(totalquantity);
  };

  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    countquantity();
  }, [countquantity]);

  return (
    <div>
      <div className="container">
        <div className="row">
          {cartData.map((data, index) => {
            return (
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xxl-2 py-2">
                <div className="card w-100 h-100">
                  <img src={data.imageUrl} className="img-fluid cart-image" />
                  <div className="card-body">
                    <div className="card-title card-product-name">
                      {data.name}
                    </div>
                    <div className="text-center">{data.weight}</div>
                    <div className="d-flex gap-2 justify-content-center">
                      <div className="text-danger">
                        <TbCurrencyTaka /> {data.offerPrice}
                      </div>
                      <div className="text-decoration-line-through">
                        <TbCurrencyTaka style={{ marginRight: "-0.4rem" }} />{" "}
                        {data.regularPrice}
                      </div>
                    </div>
                    <div className="d-flex justify-content-center py-1">
                      <div className="d-flex justify-content-between">
                        <div>
                          <button
                            onClick={() => send(data)}
                            className="text-danger px-4 py-2 border-1 rounded"
                          >
                            <AiTwotoneThunderbolt /> Add to bag
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center py-1 d-none">
                      <div className="d-flex justify-content-between">
                        <div>
                          <button onClick={() => deleteItem(data)}>-</button>
                        </div>
                        <div>
                          <button onClick={() => send(data)}>2 in bag</button>
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
            <div className="d-flex justify-content-center py-1">
              <svg
                version="1.1"
                id="Calque_1"
                x="0px"
                y="0px"
                style={{ fill: "#FDD670", stroke: "#FDD670" }}
                width="16px"
                height="24px"
                viewBox="0 0 100 160.13"
                data-reactid=".2flbcdfaczq.3.0.3.2.0.0"
              >
                <g data-reactid=".2flbcdfaczq.3.0.3.2.0.0.0">
                  <polygon
                    points="11.052,154.666 21.987,143.115 35.409,154.666  "
                    data-reactid=".2flbcdfaczq.3.0.3.2.0.0.0.0"
                  ></polygon>
                  <path
                    d="M83.055,36.599c-0.323-7.997-1.229-15.362-2.72-19.555c-2.273-6.396-5.49-7.737-7.789-7.737   c-6.796,0-13.674,11.599-16.489,25.689l-3.371-0.2l-0.19-0.012l-5.509,1.333c-0.058-9.911-1.01-17.577-2.849-22.747   c-2.273-6.394-5.49-7.737-7.788-7.737c-8.618,0-17.367,18.625-17.788,37.361l-13.79,3.336l0.18,1.731h-0.18v106.605l17.466-17.762   l18.592,17.762V48.06H9.886l42.845-10.764l2.862,0.171c-0.47,2.892-0.74,5.865-0.822,8.843l-8.954,1.75v106.605l48.777-10.655   V38.532l0.073-1.244L83.055,36.599z M36.35,8.124c2.709,0,4.453,3.307,5.441,6.081c1.779,5.01,2.69,12.589,2.711,22.513   l-23.429,5.667C21.663,23.304,30.499,8.124,36.35,8.124z M72.546,11.798c2.709,0,4.454,3.308,5.44,6.081   c1.396,3.926,2.252,10.927,2.571,18.572l-22.035-1.308C61.289,21.508,67.87,11.798,72.546,11.798z M58.062,37.612l22.581,1.34   c0.019,0.762,0.028,1.528,0.039,2.297l-23.404,4.571C57.375,42.986,57.637,40.234,58.062,37.612z M83.165,40.766   c-0.007-0.557-0.01-1.112-0.021-1.665l6.549,0.39L83.165,40.766z"
                    data-reactid=".2flbcdfaczq.3.0.3.2.0.0.0.1"
                  ></path>
                </g>
              </svg>
            </div>
            <p className="text-center p-0 m-0 text-warning">
              {carts.length} ITEMS
            </p>
            <p className="text-center p-0 m-0 text-dark mt-1 bg-white">
              <TbCurrencyTaka /> {totalprice}
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
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "box-shadow: 0px 3px 14px 6px rgba(0, 0, 0, 0.29)",
        }}
      >
        <div className="">
          <div className="py-1" style={{ backgroundColor: "#e4e0e1" }}>
            <div className="offcanvas-header">
              <div className="d-flex gap-2">
                <div>
                  {" "}
                  <svg
                    version="1.1"
                    id="Calque_1"
                    x="0px"
                    y="0px"
                    style={{ fill: "#000", stroke: "#000" }}
                    width="16px"
                    height="24px"
                    viewBox="0 0 100 160.13"
                    data-reactid=".2flbcdfaczq.3.0.3.2.0.0"
                  >
                    <g data-reactid=".2flbcdfaczq.3.0.3.2.0.0.0">
                      <polygon
                        points="11.052,154.666 21.987,143.115 35.409,154.666  "
                        data-reactid=".2flbcdfaczq.3.0.3.2.0.0.0.0"
                      ></polygon>
                      <path
                        d="M83.055,36.599c-0.323-7.997-1.229-15.362-2.72-19.555c-2.273-6.396-5.49-7.737-7.789-7.737   c-6.796,0-13.674,11.599-16.489,25.689l-3.371-0.2l-0.19-0.012l-5.509,1.333c-0.058-9.911-1.01-17.577-2.849-22.747   c-2.273-6.394-5.49-7.737-7.788-7.737c-8.618,0-17.367,18.625-17.788,37.361l-13.79,3.336l0.18,1.731h-0.18v106.605l17.466-17.762   l18.592,17.762V48.06H9.886l42.845-10.764l2.862,0.171c-0.47,2.892-0.74,5.865-0.822,8.843l-8.954,1.75v106.605l48.777-10.655   V38.532l0.073-1.244L83.055,36.599z M36.35,8.124c2.709,0,4.453,3.307,5.441,6.081c1.779,5.01,2.69,12.589,2.711,22.513   l-23.429,5.667C21.663,23.304,30.499,8.124,36.35,8.124z M72.546,11.798c2.709,0,4.454,3.308,5.44,6.081   c1.396,3.926,2.252,10.927,2.571,18.572l-22.035-1.308C61.289,21.508,67.87,11.798,72.546,11.798z M58.062,37.612l22.581,1.34   c0.019,0.762,0.028,1.528,0.039,2.297l-23.404,4.571C57.375,42.986,57.637,40.234,58.062,37.612z M83.165,40.766   c-0.007-0.557-0.01-1.112-0.021-1.665l6.549,0.39L83.165,40.766z"
                        data-reactid=".2flbcdfaczq.3.0.3.2.0.0.0.1"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h5 id="offcanvasRightLabel"> {carts.length} ITEMS</h5>
              </div>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div
              className="d-flex justify-content-between px-3 py-2 align-items-center"
              style={{ backgroundColor: "#95cd77" }}
            >
              <div className="text-white" style={{ fontSize: "14px" }}>
                You have reduced delivery charge
              </div>
              <div className="text-white d-flex gap-1">
                <div>
                  {" "}
                  <TbCurrencyTaka style={{ marginRight: "-0.4rem" }} /> 39
                </div>
                <div>
                  <CiCircleInfo className="fs-4" />
                </div>
              </div>
            </div>
            <div className="d-flex gap-1 px-2 py-1">
              <div style={{ width: "25px" }}>
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 20 90 90"
                  data-reactid=".1ne7fqjuwzg.3.0.3.3.0.3.0.0.0"
                >
                  <path
                    class="st0"
                    d="M59.4,32.6c0.2,0.2-0.2,0.3-0.2,0.3s-1.2,0.3-1.5,0.8c-0.3,0.3-0.8,1.5-0.8,1.5c0.7-0.2,1.5-0.3,2.3-0.7 c0.2,0,0.3,0.2,0.5,0.3c0.2,0-2,0.8-2.5,1.2c-0.3,0.3-2,1.7-2.5,1.7S53,37.9,53,37.9c0.2,0.3,0.3,0.7,0.7,1.2c0,0-1.2,0.7-1.2,0.8 c-0.2,0.2-1,1.2-1,1.2s3,0.3,4-1.3c-1,1.7-3.3,3.3-8.2,3.3c-5,0-9-2-11.7-3c-2.8-1.2-6.5-2.5-9.5-2.5c-2.8,0-6.2,0.8-8.4,2.9 c-3.9-1.5-9.2-0.7-11.7,1.7c-2.3,2.3-4.7,5.2-5,7.2c-0.5,2.2-1.7,7.4-3.3,9.7c-2.3,3.8-5,4.8-5.9,6.5c-0.8,1.7-0.8,5.2-0.7,5.2 c0.3,0.2,1.5,0,2.2-0.3c1.3-0.5,5-4.3,6.4-6.2c1.3-1.8,5.9-9.9,6.5-12.7c0.7-2.8,1.3-5.7,3.3-7.2c2.2-1.5,4.8-0.8,4.8-0.7 c0,0-2.5,2-2.7,7.5c-0.2,5.5,3.2,4.9,1.5,8.4c-1.7,3-6.7,1-8.4,2.8c-1.3,1.5,0,6.9,0,7.9c0,1-0.5,5.7-0.8,6.9c-0.2,1,0,1.7-0.2,2.3 c-0.2,0.5,1,0.7,1,0.7s-1,1.3-1.5,1c-0.5-0.2-0.8-0.2-1.2,0c-0.3,0-1,0.3-1.7,0l-2.7,5.7c0.3,0.2,0.8,0.3,1.3,0.2 c0.7-0.2,4-1.7,4.4-2c0.5-0.2,3.3-1.8,3.8-2.8c0.3-1,1-4.2,1-5.2c0.2-1,0.3-4.2,0.3-5c0-0.8-0.2-2.3,0-3c0.3-0.5,0.8-1.2,1.5-1.5 c0.8-0.2,1.8-0.2,2-0.2c0.3,0,3.2,0.3,3.7,0.3c0.7,0,3.3-0.5,4-0.8c0.8-0.2,1.3,0,1.5,0.3c0.3,0.3-0.3,0.8-0.3,1 c-0.2,0.2-1.5,1.8-1.8,2.5c-0.3,0.8-1.5,2.3-1.2,3c0.3,0.7,0.3,0.8,1.3,1.3c1,0.3,4.9,2.3,7,4.3c2.3,2.2,4.5,4.8,4.9,6.2 c0.5,1.5,1.3,1.7,1.8,1.7c0.5,0.2,1.5,0.3,1.5,1c0,0.7-0.2,1.5-0.2,1.5l6.2,2.3c0,0,0-2.2-0.2-3c-0.2-1-1.2-2-2-3 c-0.8-1.2-9.5-9.7-10.4-10.4c-0.8-0.5-1.5-1.2-1.7-2.5c-0.2-1.3,1.5-2.3,2.5-3.5c0.7-0.8,2.5-4.7,2.8-5.2c0.3-0.5,1.5-1.8,2.2-1.8 c0.8,0,2.7,1.2,5,2c1,0.3,8.2,2.2,9.2,2.5c1,0.2,3.2,0,3.8,0.7c0.7,0.5,0,1.8-0.2,2.7c-0.2,1-2,4.7-2,4.7s0.3,1.3,0.3,2.4 c0,1.2-0.5,5.3-1,6.7c-0.3,1.5-2.7,5.4-3.2,6c-0.3,0.5-0.8,0.8-0.8,1.7c0,0.8,1.5,1,2,1.7c0.7,0.5,0.2,1.5,0,2.5l6.7,2.8 c0-0.5,0.3-1.3,0-1.7c-0.2-0.5-1-1.5-1.5-2.2c-0.3-0.5-1.5-2.3-1.8-2.7c-0.3-0.5-0.3-1.5,0-2.3c0.2-0.8,2.3-6.5,2.5-7.2 c0.3-0.8,3.5-7.5,3.8-8.4c0.3-1,3-5.9,3.3-6.7c0.3-1,2.5-1.8,3.2-1.8c0.8,0,5,1.5,5.7,1.8c0.5,0.2,4.4,1.8,5,2.2 c0.8,0.3,0.3,1-0.2,1.2c-0.5,0.3-6.7,4.5-7.2,4.7c-0.5,0.2-1,0.7-1.3,0.7c-0.5,0-1.2,0.5-1.2,0.7c0,0.3-0.2,1-1,1c-0.7,0-2-1-2.8-2 c-1.2,0.7-2,1.2-2.5,2.2c-0.8,0.8-1.2,1.5-1.7,2.7c0.3,0.3,1,0.5,1.5,0.5h5.4c0.5,0,1.2-0.2,1.7-0.3c0.5-0.3,13.7-9,13.7-9 s2.2-1.7,2.2-3.2c0-1.2-1-1.5-1.3-2c-0.5-0.3-3.5-2.3-4-2.7c-0.7-0.5-3-1.8-3.7-2.2c-0.5-0.3-2.4-1-2.4-1c0.5-1.5,0.8-2.7,1-3 c0.2-0.3,0.2-3.4,0.3-3.9c0-0.5,0.8-2.7,1.2-3c0.3-0.3,1.2-3,1.3-3.5c0.2-0.3,1.5-4.2,2.2-4.2c0.7-0.2,1.3,0.5,2,0.5 c0.7,0.2,3.2-0.2,4.5,0c1.2,0.2,2.7,1.7,3,1.8c0.5,0.2,1.7,0.7,2,0.7c0.2,0,1.8-1.2,1.8-1.5c0-0.3-1.2-1-1.3-1 c-0.2-0.2-1.3-0.8-1.3-0.8c0,0.2,0.5-0.3,1.3-0.3c0.7,0,1.3,0.7,1.5,0.8c0.3,0.2,1.2,0.7,1.3,0.3c0.2-0.2,0.8-1,0.8-1.5 c0-0.7-0.7-1.5-1-1.8c-0.3-0.3-4.2-4-4.5-4.2c-0.5-0.2-2.5-2-2.5-2.5c-0.2-0.3-1.2-1.2-1.3-1.3c-0.2-0.2-5.2-3.7-5.9-4.2 c-0.7-0.5-1.3-1.3-1.3-2.2c0-0.8-0.3-3-0.3-3s-1.2-0.2-1.7,0.3c-0.5,0.3-1.7,3-2.3,3c-1.8-0.3-4.2,0.2-4.2,0.5 c0.2,0.5,1.8,0.2,1.8,0.2c0,0.2-0.7,1-1.2,1c-0.3,0-1.3,0.3-1.5,0.5c-0.3,0-1,0.5-1,0.5c0.5,0,1,0,1.7,0.2c0,0-1,0.7-1.5,0.7 c-0.5,0-2.2,0.5-2.7,0.7c-0.3,0.3-1.7,1.3-1.7,1.3h-1.5l0.2,0.3h0.8L59.4,32.6L59.4,32.6z"
                    data-reactid=".1ne7fqjuwzg.3.0.3.3.0.3.0.0.0.0"
                  ></path>
                </svg>
              </div>
              <div
                className="text-secondary fw-normal py-1"
                style={{ fontSize: "14px" }}
              >
                Express Delivery
              </div>
            </div>
          </div>
          <div className="row p-2">
            {carts.map((data, index) => {
              return (
                <div className="d-flex justify-content-between align-items-center border-bottom border-1">
                  <div className="">
                    <div onClick={() => handleIncrement(data)}>
                      <IoIosArrowUp style={{ cursor: "pointer" }} />
                    </div>
                    <div>
                      {" "}
                      <input
                        type="text"
                        className="qty-input-box border-0 bg-transparent"
                        value={data.qnty}
                        disabled
                        name=""
                        id=""
                        style={{ width: "15px" }}
                      />
                    </div>
                    <div
                      onClick={
                        data.qnty <= 1
                          ? () => handleDecrement(data.id)
                          : () => handleSingleDecrement(data)
                      }
                    >
                      <IoIosArrowDown style={{ cursor: "pointer" }} />
                    </div>
                  </div>
                  <div>
                    <img
                      src={data.imageUrl}
                      className="img-fluid"
                      alt=""
                      style={{ width: "40px" }}
                    />
                  </div>
                  <div>
                    <div
                      className="card-product-name"
                      style={{ width: "180px" }}
                    >
                      {data.name}
                    </div>
                    <div className="d-flex">
                      <div>
                        <TbCurrencyTaka style={{ marginRight: "-0.4rem" }} />{" "}
                        {data.offerPrice}
                      </div>
                      <div>/</div>
                      <div>{data.weight}</div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <TbCurrencyTaka style={{ marginRight: "-0.4rem" }} />
                      {data.offerPrice * data.qnty}
                    </div>
                    <div className="text-decoration-line-through">
                      <TbCurrencyTaka style={{ marginRight: "-0.4rem" }} />
                      {data.regularPrice * data.qnty}
                    </div>
                  </div>
                  <div onClick={() => handleDecrement(data.id)}>
                    <BiX className="fs-3" style={{ cursor: "pointer" }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="position-absolute bottom-0 w-100">
            <div
              className="d-flex gap-2 justify-content-center py-1 text-dark"
              style={{ backgroundColor: "#e4e0e1" }}
            >
              <div>
                <a href="#">
                  <IoIosArrowDropup className="text-dark" />
                </a>
              </div>
              <div>Have you a special code?</div>
            </div>
            <div className="px-3 d-flex justify-content-center my-1 rounded align-items-center">
              <a href="#" className="w-75" style={{ textDecoration: "none" }}>
                <div
                  className="text-center text-white py-1 fs-5 "
                  style={{ backgroundColor: "#ff8182" }}
                >
                  Place Order
                </div>
              </a>
              <div className="w-25 bg-warning py-1 fs-5 text-center text-white">
                <TbCurrencyTaka /> {totalprice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
