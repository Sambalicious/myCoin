import React from 'react'

const Wrapper = ({children}) => {
    return (
        <div>
            <div>Navbar</div>
            <main>{children}</main>
            <div>footer</div>
        </div>
    )
}

export default Wrapper
