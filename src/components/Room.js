import React, {useState, useEffect} from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import logo from '../assets/images/bgImage.jpg'
import {Paper} from '@material-ui/core'
import Title from './Title'
import * as actionCreators from '../store/actions/rootActions'

const Room = (props) => {
    const [url] = useState(props.match.params.post_id)

    useEffect(()=>{
        if(props.gotRoomsData.length===0){
            // props.getRooms();
            console.log("zero")
        }
    })
    // console.log(props.RoomsData, url)
    let RoomsDataFromHome;
    if(props.RoomsData.length===0){
        // console.log("zero here")
        props.getRooms();
        // RoomsDataFromHome=(
        //    <div>
        //         <Banner title="Sorry"
        //         subTitle="Go Home and Select Any Room"
        //         bgImage={logo}>
        //             <Link to="/">
        //             <button className="btn btn-primary ">
        //                Go Home 
        //             </button>
        //             </Link>
        //             <Link to="/rooms">
        //             <button className="btn btn-primary ml-1">
        //                Rooms
        //             </button>
        //             </Link>
        //         </Banner>
        //    </div>
        // )
    }
    return (
        <div>
            
            
            {props.RoomsData.map(
                // eslint-disable-next-line
                singleRoom=>{
                if(singleRoom.fields.url===url){
                    return(
                        <div key={singleRoom.fields.title}>
                            <Banner title={singleRoom.fields.title}
                            bgImage={singleRoom.fields.image.fields.file.url}>
                                <button className="btn btn-primary"><Link to="/rooms">Find Other Room</Link> </button>
                            </Banner>
                            <Title title="Room Details" ></Title>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        {singleRoom.fields.multipleImages.map(image=>(
                                            <div key={image.fields.title}>
                                                <Paper elevation={3} className="m-3">
                                                    <img className="img-fluid " src={image.fields.file.url} alt={image.fields.title} />
                                                </Paper>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col4">
                                            
                                            <Paper elevation={3} className="m-3">
                                                <p><span className="font-weight-bold">Package Name=</span> {singleRoom.fields.title} </p>
                                            </Paper>
                                            <Paper elevation={3} className="m-3">
                                                <p><span className="font-weight-bold">Description=</span> {singleRoom.fields.shortDescription} </p>
                                            </Paper>
                                            <Paper elevation={3} className="m-3">
                                                <p><span className="font-weight-bold">Number of Beds=</span> {singleRoom.fields.beds} </p>
                                            </Paper>
                                            <Paper elevation={3} className="m-3">
                                                <p><span className="font-weight-bold">Package Name=</span> {singleRoom.fields.title} </p>
                                            </Paper>
                                            <div className="">

                                            <Paper elevation={3} className="m-3 p-1">
                                                <p><span className="font-weight-bold">More Details=</span> {singleRoom.fields.contentBody} </p>
                                            </Paper>
                                            </div>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
            {RoomsDataFromHome}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        RoomsData: state.RoomsData, 
        gotRoomsData: state.gotRoomsData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRooms: () => dispatch(actionCreators.GetRooms())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Room)
