
const { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCES } = require('../constants/productConstants') ;

export const productListReducer = (state = {products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCES:
      return {loading: false, products: action.payload}
    case PRODUCT_LIST_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
};