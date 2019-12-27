import React from 'react'
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actionCreators from '../store/actions/rootActions'




const AllRooms = (props) => {
    if(props.RoomsData.length===0){
        props.getRooms()
    }
    return (
        <div className="container pt-5">
            <div className="row">
            {props.RoomsData.map(singleRoom=>(
                
                    <div className="col-md-4 col-12 pb-3" key={singleRoom.fields.title}>
                        <Link to={'/rooms/'+ singleRoom.fields.url}>
                <Card >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={singleRoom.fields.title}
                    height="140"
                    image={singleRoom.fields.image.fields.file.url}
                    title={singleRoom.fields.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {singleRoom.fields.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {singleRoom.fields.shortDescription}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions> */}
            </Card>
            </Link>
            </div>
            ))}
            </div>
        </div>
    )
}

const mapStateToProps= (state) => {
    return{
        RoomsData: state.RoomsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getRooms: () => dispatch(actionCreators.GetRooms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRooms)
