import React from "react";

export default function Product(props) {
  // function incrementQuantity(index) {}
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.Name}
          <span className="badge bg-secondary">₹{props.product.Price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="grop"
          aria-label="Basic mixed styles example"
        >
          <button
            types="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementquantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementquantity(props.index);
            }}
          >
            +
          </button>
        </div>
        <div className="col-2">
          {props.product.quantity * props.product.Price}
        </div>
      </div>
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.Removeitem(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}
