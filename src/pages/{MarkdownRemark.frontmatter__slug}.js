import React from "react"
import { graphql } from "gatsby"
import '../styles/global.css'

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div
            style={{
                margin: `0 auto`,
                maxWidth: `var(--size-content)`,
                padding: `var(--size-gutter)`,
            }}
        >
            <main>
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="blog-post-container">
                        <div className="blog-post">
                            <h1>
                                <span className="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    {frontmatter.title}
                                </span>
                            </h1>
                            <p className="text-sm text-gray-500">
                                <time dateTime={frontmatter.date}>{frontmatter.date}</time>
                            </p>
                            <div
                                className="blog-post-content"
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`