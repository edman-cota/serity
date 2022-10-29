import React from "react"
import "./Possibility.scss"

const Possibility = (): JSX.Element => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image"></div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
          Collaborate in realtime with others <br /> anytime.anywhere
        </h1>
        <p>
          Access Cota on mobile, desktop or tablet and collaborate with others
          in realtime and keep everyone on the same page.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
