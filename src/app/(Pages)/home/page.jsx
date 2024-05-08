import React, { useState } from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"

export const Page = () => {
  const [posts, setPosts] = useState([])


  return (
    <>
      <Category />
      <Card posts={posts} />
    </>
  )
}
