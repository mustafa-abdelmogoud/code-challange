import React, { useContext } from "react";
import { Layout, Input, Checkbox, Button } from "antd";

import "./style.css";
import { DispatchContext, StateContext } from "../../redux/context";

export default function SideBar() {
  const { searchText, selectedSpecialties } = useContext(StateContext);
  const {
    changeModalVisibility,
    searchCompaniesByName,
    filterCompaniesBySpecialty
  } = useContext(DispatchContext);

  const filterOptions = ["Excavation", "Plumbing", "Electrical"];

  return (
    <Layout.Sider className="side-bar">
      <Input
        placeholder="company name"
        value={searchText}
        onChange={e => searchCompaniesByName(e.target.value)}
      />
      <br />
      <br />
      <div style={{ textAlign: "left", fontSize: "16px", color: "#fff" }}>
        Filter by speciality
      </div>

      <Checkbox.Group
        options={filterOptions}
        value={selectedSpecialties}
        onChange={specialties => {
          filterCompaniesBySpecialty(specialties);
        }}
      />

      <br />

      <Button type="primary" onClick={() => changeModalVisibility(true)}>
        Add company
      </Button>
    </Layout.Sider>
  );
}
