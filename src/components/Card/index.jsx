import React from 'react'

const Cards = ({node: data}) => {
  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  ">
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">{data.frontmatter.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 ">{data.excerpt}</p>
        <span className="text-gray-400">{data.frontmatter.date}</span>
    </div>
  )
}

export default Cards