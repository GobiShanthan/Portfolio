import EXAH from 'express-async-handler'
import Order from "../models/OrderModel.js"

// @desc    get order list
// @route   get api/orders
// @access  Private
const getOrderList =EXAH(async(req,res)=>{
  const orderList = await Order.find()
  res.json(orderList)
})


// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addCreateOrder = EXAH(async(req,res)=>{
  const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
  } = req.body

  if(orderItems && orderItems.length === 0){
      res.status(400)
      throw new Error('No order items')
  }else{
      const order = new Order({
          orderItems,
          user: req.user._id,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
      })
      const createdOrder = await order.save()
      res.status(201).json(createdOrder)
  }
})


// @desc    Get order by id
// @route   get /api/orders
// @access  Private
const getOrderByParams = EXAH(async(req,res)=>{
  const order = await Order.findById(req.params.id)
  if(order){
      res.json(order)
  }else{
      throw new Error('Unable to find order')
  }
})


// @desc    Update order to paid
// @route   put/orders/:id/pay
// @access  Private
const updateOrderToPaid =EXAH(async(req,res)=>{
  const order = await Order.findById(req.params.id)
  if(order){
      order.isPaid =true
      order.paidAt = Date.now()
      order.paymentResult={
          id:req.body.id,
          status:req.body.status,
          update_time:req.body.update_time,
          email_address:req.body.payer.email_address
      }
      const updatedOrder = await order.save()
      res.json(updatedOrder)
  }else{
      res.status(404)
      throw new Error('Order not found')
  }

})


// @desc    Update order to delivered
// @route   put get/orders/:id
// @access  Private
const updateOrderToDelivered =EXAH(async(req,res)=>{
  const order = await Order.findById(req.params.id)
  if(order){
      order.isDelivered =true
      order.deliveredAt = Date.now()
      const updatedOrder = await order.save()
      res.json(updatedOrder.isDelivered)
  }else{
      res.status(404)
      throw new Error('Order not found')
  }
})


// @desc    delete order 
// @route   delete  delete/orders/:id
// @access  Private
const deleteOrder =EXAH(async(req,res)=>{
  const order = await Order.findById(req.params.id)
  if(order){
      order.remove()
      res.status(201).json({message:'Successfully removed order'})
  }else{
      throw new Error(`An error has occured trying to delete order`)
  }
})





export {addCreateOrder,getOrderByParams,updateOrderToPaid,updateOrderToDelivered,getOrderList,deleteOrder}