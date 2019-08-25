import React from "react"
import { useScrollYPosition } from "react-use-scroll-position"
import FitText from "@kennethormandy/react-fittext"

function HomeBanner() {
  const scrollY = useScrollYPosition()
  return (
    <div
      id="homeBanner"
      style={{
        backgroundPosition: `center ${-scrollY / 8}px`,
      }}
    >
      <div
        id="bannerText"
        style={{
          marginTop: `-${scrollY / 3}px`,
          opacity: 1 - scrollY / 300,
        }}
      >
        <FitText
          defaultFontSize={64}
          compressor={1.7}
          minFontSize={24}
          maxFontSize={64}
        >
          <h2>Systems Development Group</h2>
        </FitText>
        <p>Guiding Better Governance Through Technology </p>
      </div>
    </div>
  )
}

export default HomeBanner
