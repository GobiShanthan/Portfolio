import asyncHandler from "express-async-handler"
import Product from "../models/ProductModel.js"


//@desc Fetch all products
//@route GET/api/products
//@access Public Fetch all products

const getProducts = asyncHandler(async(req,res)=>{
  const allProducts = await Product.find({})
  res.json(allProducts)
})

//@desc Fetch single products
//@route GET/api/products/:id
//@access Public Fetch single products

const getProductsById = asyncHandler(async (req, res) => {
const product = await Product.findById(req.params.id);

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

} else {
  res.status(404);
  throw new Error("Product not found");
}
});


//@desc Delete single products
//@route Delete/api/products/:id
//@access Private/Admin

const deleteProductById = asyncHandler(async (req, res) => {
const product = await Product.findById(req.params.id);

if (product) {
  await product.remove()
  res.json({message:"Product Removed Successfully"})
} else {
  res.status(404);
  throw new Error("Product not found");
}
});



//@desc Create a Product
//@route POST/api/products/
//@access Private/Admin

const createProduct = asyncHandler(async (req, res) => {

  const product = new Product({
    name:"Sample Name",
    price:0,
    user:req.user._id,
    image:"/images/sample.jpg",
    brand:"Sample brand",
    category:"Sample category",
    countInStock:0,
    numReviews:0,
    description:"Sample description"
  })
  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
});




//@desc Update a Product
//@route PUT /api/products/:id
//@access Private/Admin

const updateProduct = asyncHandler(async (req, res) => {
const {
  name,
  price,
  description,
  image,
  brand,
  category,
  countInStock
} = req.body

const product = await Product.findById(req.params.id)
if(product){
  product.name = name 
  product.price = price
  product.description = description
  product.image = image
  product.brand = brand
  product.category = category
  product.countInStock = countInStock


    const updatedProduct = await product.save()
  res.status(201).json(updatedProduct)

}else{
  res.status(404)
  throw new Error(" Product not found")
}
});


// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.firstName + " " +req.user.lastName,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({message:'Successfully reviewed'})
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})




// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().sort({rating:-1}).limit(3)
  res.json(products)
})


export  {
    getProducts,
    getProductsById,
    deleteProductById,
    createProduct,
    updateProduct,
    createProductReview,
    getTopProducts
  }
