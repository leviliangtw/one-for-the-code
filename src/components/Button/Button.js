import * as React from "react"
import { MdArrowForward as Arrow } from "react-icons/md"
import { ButtonStyles } from "./ButtonStyles"

const Button = ({ text, to, as, arrow, onClick }) => {
  return (
    <ButtonStyles className="btn" onClick={onClick} as={as} to={to}>
      {text}
      {arrow || to ?
        <Arrow style={{ marginLeft: "10px" }} />
        : null}
    </ButtonStyles>
  )
}

export default Button
