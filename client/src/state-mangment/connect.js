import actions from "./actions";
import { useReducer } from "react";
import initialState from "./state";
import rootReducer from "./reducer";

export default function useConnect() {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const getCompaniesLoading = () => {
    dispatch({
      type: actions.GET_COMPANIES_LOADING
    });
  };

  const getCompaniesSucceed = companies => {
    dispatch({
      type: actions.GET_COMPANIES_SUCCEED,
      payload: {
        companies
      }
    });
  };

  const getCompaniesFailed = error => {
    dispatch({
      type: actions.GET_COMPANIES_FAILED,
      payload: {
        error
      }
    });
  };

  const addCompanySucceed = company => {
    dispatch({
      type: actions.ADD_COMPANIES_SUCCEED,
      payload: {
        company
      }
    });
  };

  const addCompanyFailed = error => {
    dispatch({
      type: actions.ADD_COMPANIES_FAILED,
      payload: {
        error
      }
    });
  };

  const addCompanyLoading = () => {
    dispatch({
      type: actions.ADD_COMPANIES_LOADING
    });
  };

  const changeModalVisibility = visible => {
    dispatch({
      type: actions.CHANGE_MODAL_VISIBILITY,
      payload: { visible }
    });
  };

  const restFiltersAndSearch = () => {
    dispatch({
      type: actions.REST_FILTERS_AND_SEARCH
    });
  };

  const searchCompaniesByName = companyName => {
    dispatch({
      type: actions.COMPANIES_SEARCH,
      payload: {
        companyName
      }
    });
  };

  const filterCompaniesBySpecialty = specialties => {
    dispatch({
      type: actions.FILTER_COMPANIES,
      payload: {
        specialties
      }
    });
  };

  return {
    state,
    dispatch: {
      getCompaniesLoading,
      getCompaniesSucceed,
      getCompaniesFailed,
      addCompanyLoading,
      addCompanySucceed,
      addCompanyFailed,
      changeModalVisibility,
      restFiltersAndSearch,
      searchCompaniesByName,
      filterCompaniesBySpecialty
    }
  };
}
