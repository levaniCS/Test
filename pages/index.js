import React from 'react'



export default function Home({posts}) {

  console.log(posts)
  return (
    <div>
      {posts && posts.length > 0 && (
        posts.map(post => <div key={post.id}>{post.Title}</div>)
      )}
    </div>
  )
}

export async function getStaticProps() {
  // get posts from out api
  const res = await fetch('http://localhost:1337/posts')
  const posts = await res.json()


  return {
    props: { posts }
  }
}