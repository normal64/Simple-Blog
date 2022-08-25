import Head from 'next/head'
import Image from 'next/image'
import BlogItem from '../components/BlogItem'
import Layout from "../components/Layout"
import axios from 'axios'


export default function Home(props) {
  console.log(`props`, props);
  console.log("test",`${process.env.API_URL}/posts`);
  return (
    <Layout>
  <h1>Some next Blog</h1>
  
    {props.posts.map( post =>{
       
       return <BlogItem props={post} 
       key={post.id}
       title={post.title}
       id={post.id}
       />
    })}
   </Layout>
  )
}

export const getServerSideProps  = async() =>{
  
  const data = await axios.get(`${process.env.API_URL}/posts`)
  const posts = await data.data;
  
  return{
    props:{posts: posts},
    
  }

}