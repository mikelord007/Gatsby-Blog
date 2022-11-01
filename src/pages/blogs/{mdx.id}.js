import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'

const BlogPage = ({data, children}) => {
  
  return (
    <div className='max-w-5xl m-auto my-12 px-4'>
      <h1 className='text-5xl font-semibold text-indigo-600 text-center mb-12 leading-normal mt-12'>{data.mdx.frontmatter.title}</h1>
      <span className='text-gray-500 py-12 block '>{data.mdx.frontmatter.date}</span>
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}

export default BlogPage

export const query =  graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
      excerpt
    }
  }`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />