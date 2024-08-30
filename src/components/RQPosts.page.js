import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import axios from "axios";
import { useGetPosts } from "../api/useGetPosts";

export const RQPostsPage = () => {

    // const {data: postsData, isLoading, isError, error} = useQuery('posts', ()=> {
    //     return axios.get('http://localhost:5000/posts')
    // })

    const {data: postsData, isLoading, isError, error, refetch} = useGetPosts();

    if(isLoading) {
        return <h3>Loading...</h3>
    }

    if(isError) {
        return <h3>{error.message}</h3>
    }

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <h1>RQ Way</h1>
          <button onClick={refetch}>Refetch data</button>
          {postsData?.data.map(item=> (
            <h2>{item.title}</h2>
          ))}
        </div>
      );
  }