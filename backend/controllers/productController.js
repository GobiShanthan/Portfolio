import EXAH from 'express-async-handler'
import Product from "../models/ProductModel.js"



//@desc get all products info
//@route get /products
//@access Public
const getAllProducts = EXAH(async(req,res)=>{
  const allProducts = await Product.find({})
  res.json(allProducts)
})


//@desc post new sample product
//@route post /products
//@access Private / Admin only
const createProduct = EXAH(async(req,res)=>{

  const newProduct = await Product.create({
      user : req.user._id,
      name :'Sample name',
      description :'Sample Description',
      brand : 'Sample Brand',
      category:'Sample Category',
      image:'/SampleImage'
  })
  if(newProduct){
      res.json({message:'Product successfully created'})
  }else{
      throw new Error('An error has occured trying to create new product')
  }
})



const getProduct = EXAH(async(req,res)=>{
  const product = await Product.findById(req.params.id)

  if(product){
      res.json({
          _id:product._id,
          name:product.name,
          description:product.description,
          brand:product.brand,
          category:product.category,
          image:product.image,
          countInStock:product.countInStock,
          price:product.price,
          reviews:product.reviews,
          numOfReviews:product.numOfReviews,
          rating:product.rating
      })
  }else{
      throw new Error(`An error has occured trying to fetch product.`)
  }
})


const updateProduct = EXAH(async(req,res)=>{
  const {name,description,brand,category,image,countInStock,price} = req.body
  const product = await Product.findById(req.params.id)

  if(product){
      product.name = name || product.name
      product.description = description || product.description
      product.brand = brand || product.brand
      product.category = category || product.category
      product.image = image || product.image
      product.countInStock = countInStock || product.countInStock
      product.price = price || product.price

      const updatedProduct = product.save()
      if(updatedProduct){
          res.json('Product has been updated')
      }else{
          res.status(401)
          throw new Error('An error has occured trying to update product')
      }
  }else{
      res.status(401)
      throw new Error(`An error has occured locating product. Invalid product id!`)
  }
})


const removeProduct = EXAH(async(req,res)=>{
  const product = await Product.findById(req.params.id)
  if(product){
      product.remove()
      res.json('Product removed successfully')
  }else{
      throw new Error('Unable to locate product')
  }
})

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview =EXAH(async(req,res)=>{
  const {comment,rating} = req.body
  const product = await Product.findById(req.params.id)
  if(product){
      const allreadyReviewed = await product.reviews.find((r)=>r.user.toString() === req.user._id.toString())
      if(allreadyReviewed){
          res.status(400)
          throw new Error('You have allready reviewed this product')
      }
      const newReview = {
          name:req.user.firstName +' ' + req.user.lastName,
          user:req.user._id,
          rating:Number(rating),
          comment
      }
      product.reviews.push(newReview)
      product.numOfReviews = product.reviews.length
      product.rating = product.reviews.reduce((acc,item)=>item.rating + acc,0) / product.numOfReviews
      product.save()
      res.json({message:'Successfully reviewed'})
  }else{  
      res.status(401)
      throw new Error('An error has occured trying to find product')
  }
})

// @desc    Get All reviews
// @route   POST /api/products/reviews
// @access  Private
const getAllReviews = EXAH(async(req,res)=>{
  const product = await Product.findById(req.params.id)
  if(product){
      res.json(product.reviews)
  }else{
      res.status(401)
      throw new Error(`A problem fetching product`)
  }
})


// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = EXAH(async(req, res) => {
  const products = await Product.find().sort({rating:-1}).limit(3)
  res.json(products)
})



export {getAllProducts,createProduct,getProduct,updateProduct,removeProduct,createProductReview,getAllReviews,getTopProducts}