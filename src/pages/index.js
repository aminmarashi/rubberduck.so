import { Link } from "gatsby";
import * as React from "react";
import '../styles/global.css';

const IndexPage = () => (
  <React.Fragment>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
      }}
    >
      <main>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          My first page: <Link to="/blog/my-first-post">My first post</Link>
        </div>
      </main>
    </div>
  </React.Fragment>
)

export default IndexPage
