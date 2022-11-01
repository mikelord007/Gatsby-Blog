import React from 'react'
import { graphql, Link } from 'gatsby'
import Card from '../../components/Card'
import Seo from '../../components/Seo'

const Blogs = ({ data }) => {
    
    const {nodes} = data.allMdx

  return (
    <div className="bg-gray-50">
        <div className='py-12'>
            <h1 className="text-5xl font-semibold text-indigo-600 text-center mb-12 leading-normal">Blogs</h1>
            <div className='max-w-5xl m-auto flex flex-wrap justify-between gap-y-16 xs:px-2 sm:px-4 lg:px-0'>
                {nodes.map(node => (
                    <Link to={`/blogs/${node.id}`}>
                        <Card node={node}/>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export const query =  graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          title
          date
          slug
        }
        excerpt(pruneLength: 110)
      }
    }
  }
`
export default Blogs

export const Head = () => <Seo title="Blogs" />