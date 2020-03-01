import React, { useContext } from "react";
import { Layout, Card, Button } from "antd";

import ImageWithFallBack from "../../components/image";
import { StateContext, DispatchContext } from "../../redux/context";
import "./style.css";

export default function() {
  const { displayedCompanies } = useContext(StateContext);
  const { restFiltersAndSearch } = useContext(DispatchContext);

  return (
    <Layout.Content className="companies-container">
      {displayedCompanies.length ? (
        displayedCompanies.map(({ _id, name, specialty, logo, city }) => {
          return (
            <Card
              className="company"
              key={_id}
              hoverable
              style={{ width: 240 }}
              cover={<ImageWithFallBack alt="logo" src={logo} />}
            >
              <Card.Meta title={name} description={`${specialty} / ${city}`} />
            </Card>
          );
        })
      ) : (
        <div className="companies-no-result">
          <p>There is no companies</p>
          <Button onClick={restFiltersAndSearch}>reset Filters & search</Button>
        </div>
      )}
    </Layout.Content>
  );
}
