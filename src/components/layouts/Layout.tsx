import React from 'react'

const Layout = ({children}) => {
    return (
        <div>
            <div>Navbar</div>
            <main>{children} </main>
            <div>Footer</div>
        </div>
    )
}

export default Layout
