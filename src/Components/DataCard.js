import React from "react";
import { Col } from "reactstrap";
import Icon from "@mdi/react";

const DataCard = ({ data, index }) => {
  return (
    <Col
      sm="12"
      lg="3"
      className="data-card-body rounded shadow-lg mx-0 mx-lg-4 my-4"
    >
      <div className="p-4">
        <h3
          className="mb-4 data-card-title font-weight-bold"
          style={{ letterSpacing: "-1px" }}
        >
          {data.head}
        </h3>
        <Icon
          className={`data-card-icon data-card-icon${index}`}
          path={data.icon}
          size={4}
        />
        <hr className="data-card-seperator" />
        <p className="mb-0 data-card-text">{data.text}</p>
      </div>
    </Col>
  );
};

export default DataCard;
