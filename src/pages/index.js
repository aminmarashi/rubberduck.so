import { Link } from "gatsby";
import * as React from "react";
import Amin from '../images/amin.jpeg';
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
          <div className="text-center grid grid-cols-1 gap-4 justify-items-center">
            <img className="rounded-full" alt="Amin's profile" src={Amin}/>
            <h3 className="mt-1 font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Amin Codes
            </h3>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              A software developer, enjoying stroopwafels in Amsterdam and writing code.
            </p>
            <p>
              Write to <Link to="mailto:me@amin.codes">me@amin.codes</Link> or follow me on <Link to="https://github.com/aminmarashi">GitHub</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  </React.Fragment>
)

export default IndexPage
