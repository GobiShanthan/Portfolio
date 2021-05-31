import User from '../model/userSchema.js'
import generateToken from '../utils/generateToken.js'
import EXAH from 'express-async-handler'


//@desc Authenticate user and get token
//@route POST /api/users/login
//@access Public 

const authUser = EXAH(async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})

    if(user && await user.matchPassword(password)){
        res.json({
            _id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }else{
        throw new Error(`Invalid email or username`)
    }
})


//@desc Register User
//@route POST /api/users/
//@access Public 

const registerUser = EXAH(async(req,res)=>{
    const {firstName,lastName,email,password} = req.body
    const emailExist = await User.findOne({email})
    if(emailExist){
        res.status(400)
        throw new Error(`Email address is already registered`)
    }
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        password
    })
    if(newUser){
        res.json({
            _id:newUser._id,
            firstName:newUser.firstName,
            lastName:newUser.lastName,
            email:newUser.email,
            isAdmin:newUser.isAdmin,
            token:generateToken(newUser._id),
        })
    }else{
        throw new Error(`An error has occured trying to register user`)
    }
})


//@desc Get all users
//@route get /api/users/
//@access Private/admin

const getAllUsers = EXAH(async(req,res)=>{
    const allUsers = await User.find()
    res.json(allUsers)
})


//@desc Get user by Id
//@route get /api/users/:id
//@access Private/admin

const getUserByParamsId = EXAH(async(req,res)=>{
    const user = await User.findById(req.params.id)
    if(user){
        res.json({
            _id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }else{
        throw new Error(`Invalid user id`)
    }
})


//@desc Update user by Id
//@route put /api/users/:id
//@access Private/admin

const updateUserByParamsId = EXAH(async(req,res)=>{
    const {firstName,lastName,email,password,isAdmin} = req.body
    const user = await User.findById(req.params.id)
    if(firstName){
        user.firstName  = firstName || user.firstName
    }
    if(lastName){
        user.lastName  = lastName || user.lastName
    }
    if(email){
        user.email  = email || user.email
    }
    if(password){
        user.password  = password || user.password
    }
    if(isAdmin){
        user.isAdmin = isAdmin
    }
    const updatedUser = await user.save()
    if(updatedUser){
        res.json('Updated User Successfully')
    }else{
        throw new Error('An error has occured trying to update user')
    }
})


//@desc get logged in user info
//@route get /api/users/loggeduser
//@access Private/

const getUserProfile = EXAH(async(req,res)=>{
    const user = await User.findById(req.user.id)
    if(user){
        res.json({
            _id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            isAdmin:user.isAdmin,
        })
    }else{
        throw new Error(`An error has occured trying to fetch user id, try again later`)
    }
})


//@desc update logged in user info
//@route put /api/users/loggeduser
//@access Private/

const updateUserProfile = EXAH(async(req,res)=>{
    const {firstName,lastName,email,password,image} = req.body
    const user = await User.findById(req.user.id)
    if(user){
        user.firstName = firstName || user.firstName
        user.lastName = lastName || user.lastName
        user.email = email || user.email
        if(password){
            user.password = password
        }
        const updatedUser = await user.save()
        res.json('Updated User successfully')
    }else{
        res.status(401)
        throw new Error(`An error has occured trying to update user`)
    }
})

//@desc delete user 
//@route delete /api/users/
//@access Private/

const deleteUserById = EXAH(async(req,res)=>{
    const user = await User.findById(req.params.id)
    if(user){
        user.remove()
        res.json({'message':"successfully deleted user"})
    }else{
        res.status(401)
        throw new Error('Error has occured trying to delete user')
    }
})


export {authUser,registerUser,getAllUsers,getUserProfile,updateUserProfile,getUserByParamsId,updateUserByParamsId,deleteUserById}