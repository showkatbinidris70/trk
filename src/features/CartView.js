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
      totalprice = ele.price * ele.qnty + totalprice;
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
              <TbCurrencyTaka /> 00
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
          <div className="row justify-content-center m-0">
            <div className="card bg-transparent border-0">
              <div className="card-header bg-dark p-3">
                <div className="card-header-flex">
                  <h5 className="text-white m-0">
                    Cart Calculation
                    {carts.length > 0 ? `(${carts.length})` : ""}
                  </h5>
                  {carts.length > 0 ? (
                    <button
                      className="btn btn-danger mt-0 btn-sm"
                      onClick={emptycart}
                    >
                      <i className="fa fa-trash-alt mr-2"></i>
                      <span>EmptyCart</span>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="card-body p-0">
                {carts.length === 0 ? (
                  <table className="table cart-table mb-0">
                    <tbody>
                      <tr>
                        <td colSpan={6}>
                          <div className="cart-empty">
                            <i className="fa fa-shopping-cart"></i>
                            <p>Your Cart Is Empty</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <table className="table cart-table mb-0 table-responsive-sm">
                    <thead>
                      <tr>
                        <th>Price</th>
                        <th>Qty</th>
                        <th className="text-right">
                          {" "}
                          <span id="amount" className="amount">
                            Total Amount
                          </span>
                        </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts.map((data, index) => {
                        return (
                          <>
                            <tr>
                              <td>{data.price}</td>
                              <td>
                                <div className="prdct-qty-container">
                                  <button
                                    className="prdct-qty-btn"
                                    type="button"
                                    onClick={
                                      data.qnty <= 1
                                        ? () => handleDecrement(data.id)
                                        : () => handleSingleDecrement(data)
                                    }
                                  >
                                    <IoIosArrowUp />
                                  </button>
                                  <input
                                    type="text"
                                    className="qty-input-box"
                                    value={data.qnty}
                                    disabled
                                    name=""
                                    id=""
                                  />
                                  <button
                                    className="prdct-qty-btn"
                                    type="button"
                                    onClick={() => handleIncrement(data)}
                                  >
                                    <IoIosArrowDown />
                                  </button>
                                </div>
                              </td>
                              <td className="text-right">
                                {data.qnty * data.price}
                              </td>
                              <td>
                                <button
                                  className="prdct-delete"
                                  onClick={() => handleDecrement(data.id)}
                                >
                                  <MdDelete />
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>&nbsp;</th>
                        <th colSpan={3}>&nbsp;</th>
                        <th>
                          Items In Cart <span className="ml-2 mr-2">:</span>
                          <span className="text-danger">{totalquantity}</span>
                        </th>
                        <th className="text-right">
                          Total Price<span className="ml-2 mr-2">:</span>
                          <span className="text-danger">₹ {totalprice}</span>
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
