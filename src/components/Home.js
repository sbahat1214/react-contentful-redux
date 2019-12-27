import React from 'react'
import Banner from './Banner'
import Title from './Title'
import FeaturedRooms from './FeaturedRooms'
import bgImage from '../assets/images/bgImage.jpg'
import {NavLink, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/rootActions'

import {Helmet} from 'react-helmet'



const Home = (props) => {

    if(props.RoomsData.length===0){
        props.getRooms();
    }

    // useEffect(()=>{
    //     Client.getEntries().then(res=> console.log('response',res))
    // })
    // console.log(props)
    // JJ
    return (
        <div>
            <Helmet>
            <title>React +  Redux + Contentful as a DataStore + Material UI</title>
            <meta name="description" 
            content="React +  Redux + Contentful as a DataStore + Material UI + React Helmet for SEO.
             Use this App to explore the power of react" />
            </Helmet>
            <Banner title="React + Contentful"
            subTitle="React +  Redux + Contentful as a DataStore + Material UI"
            smallTitle="Use this App to explore the power of react"
            bgImage={bgImage}>
                <NavLink to="/rooms">
                <button className="btn btn-primary">
                    Explore Rooms
            </button> 
                </NavLink>
            </Banner>
            <Title title="Featured Rooms"></Title>
            <div className="container">
                <div className="row pt-5">
                    
                
            {props.RoomsData.map(
                // eslint-disable-next-line
                room=>{
                if(room.fields.featuredRoom){
                    return (<div className="col-md-4 col-12 mb-4" key={room.sys.id}>
                        <Link to={'/rooms/' + room.fields.url}>
                        <FeaturedRooms
                         title={room.fields.title}
                         bgImage={room.fields.image.fields.file.url} 
                         RoomTitle="Room Name Here"
                         alt={room.fields.image.fields.file.url}
                         shortDescription={room.fields.shortDescription} ></FeaturedRooms>
                         </Link>

                        </div>
                    )
                }
            })}
                    

                </div>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        RoomsData: state.RoomsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRooms: () => dispatch(actionCreators.GetRooms()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
