import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {makeStyles} from '@material-ui/core'
import HalfRating from '../Component/Rating'
import { Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import {writeReviewAction} from '../../action/productAction'


const useStyles = makeStyles({
    root:{
        marginBottom:'40px'
    }

})


const Reviews = ({product}) =>{
    const [comment,setComment] = useState('')
    const [rating,setRating]= useState(0)
    const dispatch = useDispatch()
    const classes = useStyles()
    const productId = product._id


const reviewSubmit=(e)=>{
    e.preventDefault()
    dispatch(writeReviewAction({_id:productId,rating,comment}))
}

    
if(product){

    return(
        <div >
            <h2 className={classes.root}>Reviews</h2>

            {product.reviews.map((review)=>(
                <div key={review._id}>
                <div >
                    {review.name}
                </div>
                <div>
                    <HalfRating rating={review.rating}/>
                    {review.createdAt.slice(0,10)}
                </div>
                <div>
                    {review.comment}
                </div>
                <br/>
                <hr style={{width:'50%'}}/>
                <br/>
                </div>
            ))}
            <form style={{marginBottom:'40px'}} onSubmit={reviewSubmit}>
                <h2>Write a custom review</h2>
                <div>rate product</div>
                <div>
                <Rating name="half-rating-read" precision={0.5} onChange={(e)=>setRating(e.target.value)} required />
                </div>
                <div>
                <textarea id="w3review" name="w3review" rows="4"style={{width:'90%',minWidth:'150px'}} value={comment} onChange={(e)=>setComment(e.target.value)}placeholder="write comment here" required >
                </textarea>
                </div>
                <div>
                    <Button variant='contained' color='secondary' type='submit'>Submit</Button>
                </div>

            </form>
</div>
    )
}else{
    return(
        <h1>loading.....</h1>
    )
}

}

export default Reviews