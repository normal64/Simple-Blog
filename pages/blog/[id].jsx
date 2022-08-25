import React from 'react'
import {useRouter} from "next/router"
import axios from "axios"
import Layout from '../../components/layout'

const SinglePost = (post) => {
    const router = useRouter()
    const id = router.query.id;
    console.log(`post`, post);
    if(!post){
return "Post not found"
    }
    return (
        <Layout>
        <div className="container-single-post">
            <h1>{post.post.title}</h1>
            <p>{post.post.body}</p>
        </div>
        </Layout>
    )
}

export const getServerSideProps  = async(context) =>{
    console.log("context");
   
     const data = await axios.get(`${process.env.API_URL}/posts/${context.params.id}`)
    const post = await data.data;
    
    return{
      props:{post: post},
      
    }
  
  }

export default SinglePost
