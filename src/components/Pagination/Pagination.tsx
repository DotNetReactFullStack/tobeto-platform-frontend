import React from "react";
import "./Pagination.css";

type Props = {};

const Pagination = (props: Props) => {
  return (
    <div className="container-fluid">
      <div className="pagination-element">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link " href="#">
              <i className="bi bi-chevron-left"></i>
            </a>
          </li>
          <li className="page-item ">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="bi bi-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
