import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import BLAZE from "vanta/dist/vanta.clouds.min"
import * as THREE from "three"

const Blazing = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BLAZE({
          el: myRef.current,
          mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  skyColor: 0x2396c3,
  cloudColor: 0xd47a2,
  cloudShadowColor: 0x640638,
  sunColor: 0xf0b063,
  sunGlareColor: 0xaa5336,
          THREE: THREE,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>{children}</div>
}

Blazing.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Blazing
