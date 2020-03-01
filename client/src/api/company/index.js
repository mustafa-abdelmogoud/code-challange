const URL = "http://localhost:4000/companies";

const Company = {
  getCompanies: async () => {
    const res = await fetch(URL);
    const companies = res.json();
    return companies;
  },
  addCompany: async values => {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });
    const company = res.json();
    return company;
  }
};

export default Company;
