import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import {Paper} from '@material-ui/core'
import {getProductAction,updateProductAction} from '../../action/productAction'
import { TextField,Grid,Button,FormControl } from '@material-ui/core'




const ProductEdit = ({match,history}) =>{
    const productId = match.params.id
    const dispatch = useDispatch()
    const [image,setImage] = useState('')
    const [name,setName] = useState('')
    const [brand,setBrand] = useState('')
    const [description,setDescription] = useState('')
    const [category,setCategory] = useState('')
    const [countInStock,setCountInStock] = useState('')
    const [price,setPrice] = useState('')
    const [numOfReviews,setNumOfReviews] = useState('')
    const [rating,setRating] = useState('')


    const getProductReducer = useSelector((state)=>state.getProductReducer)
    const {productInfo} = getProductReducer

    useEffect(()=>{
        if(!productInfo || productInfo._id !== productId){
          dispatch(getProductAction(productId))
        }else{
          setImage(productInfo.image)
          setName(productInfo.name)
          setBrand(productInfo.brand)
          setDescription(productInfo.description)
          setCategory(productInfo.category)
          setCountInStock(productInfo.countInStock)
          setPrice(productInfo.price)
          setNumOfReviews(productInfo.numOfReviews)
          setRating(productInfo.rating)
        }
    },[dispatch,productInfo,productId])

  //UPLOAD PICTURE FILE HANDLER

  const uploadFileHandler = async(e)=>{
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image',file)
  
    try{
      const config = {
        headers:{
          'Content-Type':'multipart-data'
        }
      }
      const {data} = await axios.post('/api/upload/',formData,config)
      setImage(data)
    }catch(error){
      console.log(error)
    }
  }

  //UPDATE PRODUCT 
  const updateProductHandler =(e)=>{
    e.preventDefault()
    dispatch(updateProductAction({_id:productId,image,name,brand,description,category,countInStock,price}))
    history.push('/')
  }

    return(
        <div className="productpage">
            <Grid container justify='center' style={{textAlign:'center',marginTop:'1%'}}>
            <Paper  elevation={20} style={{width:'400px',marginBottom:'20px'}} align='center'>
              <form className='userupdateform' onSubmit={updateProductHandler} >
                <Grid item xs={12}><img src={image} alt={name} style={{width:"80%", margin:'20px'}}/></Grid>
                <div>ID : {productId}</div>
                <div> Num of Reviews: {numOfReviews}</div>
                <div> Avg rating : {rating}</div>

              <Grid item xs ={12}>
              <TextField
              label='Brand'
              fullWidth
              value={brand}
              onChange={(e)=>setBrand(e.target.value)}
              />

              </Grid>
              <Grid item xs ={12}>
              <TextField
              label='Name'
              fullWidth
              value={name}
              onChange={(e)=>setName(e.target.value)}

              />
              </Grid>
              <Grid item xs ={12}>
              <TextField
              type='textfeild'
              label='Description'
              multiline
              fullWidth
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              />
              <Grid xs ={12} item >
              <TextField
              label='Category'
              fullWidth
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              />
              </Grid>

                <FormControl type='text' component='html' placeholder='Enter image url'
                value={image} onChange={(e)=>setImage(e.target.value)} >
                </FormControl>
                <TextField type='file' custom onChange={uploadFileHandler} label='Product Image'/>  
              </Grid>
              <Grid item xs ={12}>
              <TextField
              label='Price in ($CAD)'
              fullWidth
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              />
              </Grid>
              <Grid xs ={12} item style={{marginTop:'20px'}}>
              <TextField
              label='Count In Stock'
              fullWidth
              value={countInStock}
              onChange={(e)=>setCountInStock(e.target.value)}
              />
              </Grid>
              <Grid>     
                <Button variant="contained" color="secondary" style={{marginBottom:'10px',marginTop:'40px'}} type='submit'>Update</Button>
              </Grid>
              </form>
            </Paper>
          </Grid>
        </div>
    )
}

export default ProductEdit