import React, { useContext } from "react";
import { Form, Input, Button } from "antd";

import Company from "../../api/company";
import { DispatchContext, StateContext } from "../../redux/context";

/**
 *
 * TODO: add more validation for form fields
 */

function AddCompanyForm({ form }) {
  const { confirmModalLoading } = useContext(StateContext);
  const {
    addCompanySucceed,
    addCompanyFailed,
    addCompanyLoading,
    changeModalVisibility
  } = useContext(DispatchContext);

  const handleOk = e => {
    e.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        addCompanyLoading();
        Company.addCompany(values)
          .then(company => addCompanySucceed(company))
          .catch(error => addCompanyFailed(error));
      }
    });
  };

  return (
    <Form onSubmit={handleOk}>
      <Form.Item label="Company name">
        {form.getFieldDecorator("name", {
          rules: [{ required: true, message: "please input your company name" }]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Specialty">
        {form.getFieldDecorator("specialty", {
          rules: [
            { required: true, message: "please input your company specialty" }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Logo URL">
        {form.getFieldDecorator("logo", {
          rules: [
            { required: true, message: "please input your company logo URL" }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="City">
        {form.getFieldDecorator("city", {
          rules: [{ required: true, message: "please input your company city" }]
        })(<Input />)}
      </Form.Item>
      <Form.Item>
        <Button
          style={{ marginRight: "10px" }}
          type="primary"
          onClick={() => changeModalVisibility(false)}
        >
          cancel
        </Button>
        <Button type="primary" htmlType="submit" loading={confirmModalLoading}>
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Form.create({ name: "addCompany" })(AddCompanyForm);
