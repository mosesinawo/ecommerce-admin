
import { loginFailure, loginStart, loginSucess } from "./userSlice"
import { publicRequest, userRequest } from "../requestMethod";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart,
     deleteProductSuccess, getProductFailure, 
     getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productSlice";



export const login = async (dispatch, user) =>{

    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSucess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}
export const getProducts = async (dispatch) =>{

    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
}
//DELETE
export const deleteProduct = async (id, dispatch) =>{

    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        console.log(error)
        dispatch(deleteProductFailure())
    }
}

//update product
export const updateProduct = async (id, product, dispatch) =>{

    dispatch(updateProductStart());
    try {
       // const res = await userRequest.update(`/products/${id}`)
        dispatch(updateProductSuccess({id, product}))
    } catch (error) {
        console.log(error)
        dispatch(updateProductFailure())
    }
}

//add product
export const addProduct = async (product, dispatch) =>{

    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/products`,product)
        dispatch(addProductSuccess(res.data))
    } catch (error) {
        console.log(error)
        dispatch(addProductFailure())
    }
}