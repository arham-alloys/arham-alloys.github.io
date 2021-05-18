import React from "react";
import { Col } from "reactstrap";
import Icon from "@mdi/react";
import { useHistory } from "react-router-dom";

const DataCard = ({ data, index }) => {
  const history = useHistory();

  const changeLink = () => {
    if (data.href) {
      history.push(data.href);
    }
  };

  return (
    <Col
      sm="12"
      lg="3"
      className={`data-card-body rounded  mx-0 p-0 mx-lg-4 my-4 ${
        data.href ? " pointer" : ""
      }`}
      onClick={changeLink}
    >
      <div className="py-4 px-5 data-card-front">
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
      <div className="data-card-back1">&nbsp;</div>
      <div className="data-card-back2">&nbsp;</div>
    </Col>
  );
};

export default DataCard;
