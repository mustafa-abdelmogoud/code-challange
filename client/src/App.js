import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Layout, Modal, message } from "antd";
import SideBar from "./containers/side-bar";
import Companies from "./containers/companies";
import AddCompanyForm from "./components/add-company-form";
import Company from "./api/company";
import "./App.css";
import useConnect from "./redux/connect";
import { StateContext, DispatchContext } from "./redux/context";

function App() {
  const { state, dispatch } = useConnect();

  useEffect(() => {
    dispatch.getCompaniesLoading();
    Company.getCompanies()
      .then(companies => {
        dispatch.getCompaniesSucceed(companies);
      })
      .catch(error => {
        dispatch.getCompaniesFailed(error);
      });
  }, []);

  useEffect(() => {
    const { type, text } = state.message;
    if (text) message[type](text);
  }, [state.message]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Layout className="App">
          <SideBar />
          <Layout>
            <Companies />
            <Layout.Footer className="footer">
              Cosuno ©2020 Created by Mustafa Abdelmogoud
            </Layout.Footer>
          </Layout>
          {state.modalVisibility && (
            <div>
              <Modal
                title="Add company"
                visible
                onCancel={() => dispatch.changeModalVisibility(false)}
                footer={null}
              >
                <AddCompanyForm />
              </Modal>
            </div>
          )}
        </Layout>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
