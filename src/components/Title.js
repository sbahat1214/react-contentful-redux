import React from 'react'

const Title = (props) => {
    return (
        <div className="container">
            <div className="display-4 font-weight-bold btBorder">
                {props.title}
                {props.children}
                <div className=""></div>
            </div>
        </div>
    )
}

export default Title
