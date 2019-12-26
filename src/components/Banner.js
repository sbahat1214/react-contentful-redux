import React from 'react'

const Banner = (props) => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid img-fluid" style={{backgroundImage:`url(${props.bgImage})`
    // margin: '-54px 20px 12px',
    }}>
                <div style={{display:'inline-block',backgroundColor: 'rgba(255, 255, 255, 0.79)',margin:'40px', padding:'30px'}}>
                    <div className="container">
                        <div className="mb-3">
                            <h1 className="display-4 btBorder">{props.title}</h1>
                        </div>
                    <p className="lead">{props.subTitle}</p>
                    <small>{props.smallTitle} </small>
                    </div>
                
                <div className="container mt-4">
                    {props.children}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
