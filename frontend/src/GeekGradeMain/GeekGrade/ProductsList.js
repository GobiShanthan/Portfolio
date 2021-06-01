import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import ProductTable from '../Component/ProductsTable'
import './screens.css'
import {Button} from '@material-ui/core'
import {getAllProductsAction,createProductAction} from '../../action/productAction'
import {CREATE_PRODUCT_RESET,REMOVE_PRODUCT_RESET} from '../../constant/productConstant'



const ProductsList =() =>{
    const dispatch = useDispatch()

    //ALL PRODUCTS STATE 
        const allProductsReducer = useSelector((state)=>state.allProductsReducer)
        const {allProductsInfo} = allProductsReducer

    //REMOVE PRODUCT 
        const deleteProductReducer = useSelector((state)=>state.deleteProductReducer)
        const {deleteProductInfo} = deleteProductReducer

    //CREATE PRODUCT 
        const createProductReducer = useSelector((state)=>state.createProductReducer)
        const {createProductInfo} = createProductReducer

    useEffect(()=>{
        if(!allProductsInfo){
            dispatch(getAllProductsAction())
        }
        if(createProductInfo){
            dispatch({type:CREATE_PRODUCT_RESET})
        }
        if(deleteProductInfo){
            dispatch({type:REMOVE_PRODUCT_RESET})
        }

    },[allProductsInfo,createProductInfo,deleteProductInfo,dispatch])


        if(allProductsInfo){
            return(
                <div>
                <div className='productslist'>
                    <div className='ptable'>
                    <ProductTable productsList={allProductsInfo}/>
                    <div className='button'>
                    <Button variant='contained' color='secondary' onClick={(e)=>dispatch(createProductAction())} >Create New Product</Button>
                    </div>
                    </div>
                </div>

                </div>
            )
        }else{
            return(
                <h1>loading...</h1>
            )
        }
}

export default ProductsList