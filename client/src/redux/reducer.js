import actions from "./actions";

const searchAndFilterCompanies = (companies, search = "", filters = []) => {
  let tempCompanies = [...companies];

  if (search !== "") {
    tempCompanies = companies.filter(
      company => company.name.indexOf(search) > -1
    );
  }

  if (filters.length > 0) {
    tempCompanies = tempCompanies.filter(
      company => filters.indexOf(company.specialty) > -1
    );
  }

  return tempCompanies;
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case actions.GET_COMPANIES_LOADING:
      return { ...state, loading: true };
    case actions.GET_COMPANIES_SUCCEED:
      return {
        ...state,
        cashedCompanies: action.payload.companies,
        displayedCompanies: action.payload.companies,
        loading: false
      };
    case actions.GET_COMPANIES_FAILED:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        message: {
          type: "error",
          text: "failed to load companies"
        }
      };
    case actions.ADD_COMPANIES_LOADING:
      return { ...state, confirmModalLoading: true };
    case actions.ADD_COMPANIES_SUCCEED:
      return {
        ...state,
        cashedCompanies: [...state.cashedCompanies, action.payload.company],
        displayedCompanies: [
          ...state.displayedCompanies,
          action.payload.company
        ],
        confirmModalLoading: false,
        modalVisibility: false,
        message: { type: "success", text: "add company succeed" }
      };
    case actions.ADD_COMPANIES_FAILED:
      return {
        ...state,
        error: action.payload.error,
        confirmModalLoading: false,
        message: {
          type: "error",
          text: "failed to add new company, please try again later"
        }
      };
    case actions.CHANGE_MODAL_VISIBILITY:
      return { ...state, modalVisibility: action.payload.visible };
    case actions.COMPANIES_SEARCH: {
      const displayedCompanies = searchAndFilterCompanies(
        state.cashedCompanies,
        action.payload.companyName.trim(),
        state.selectedSpecialties
      );

      return {
        ...state,
        displayedCompanies,
        searchText: action.payload.companyName
      };
    }
    case actions.FILTER_COMPANIES: {
      const { specialties } = action.payload;

      const displayedCompanies = searchAndFilterCompanies(
        state.cashedCompanies,
        state.searchText.trim(),
        specialties
      );

      return {
        ...state,
        displayedCompanies,
        selectedSpecialties: specialties
      };
    }
    case actions.REST_FILTERS_AND_SEARCH:
      return {
        ...state,
        displayedCompanies: state.cashedCompanies,
        searchText: "",
        selectedSpecialties: []
      };
    default:
      throw new Error("Please use correct action type");
  }
};

export default rootReducer;
