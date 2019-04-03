import React from 'react'   // functional component
import propTypes from "prop-types";

 function Navbar(props) {     // propslar componentler arasında veri aktarımında kullanılır.
  return (
    <div>
            <h3>{props.title}</h3>
            
    </div>
    
        )
}
Navbar.propTypes = {

  title  : propTypes.string.isRequired   // eğer bir Navbar varsa title adında bir string belirtmek zorunda olduğumuzu söylüyoruz.
    
}
Navbar.defaultProps = {

  title : "Default App"

}
export default Navbar;
