import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';


export default function FetchedPosts(){
  const dispatch = useDispatch()
  const posts = useSelector((state)=>{
    return state.posts.fetchedPosts
  })

  if(!posts.length) {
    return <button 
    className='btn btn-primary'
    onClick={() => dispatch(fetchPosts())}
    >Загрузить</button>
  }
  return posts.map(post => <Post post={post} key={post.id}/>)

}
