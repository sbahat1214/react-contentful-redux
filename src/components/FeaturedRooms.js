import React from 'react'
import {Typography, Card, CardActionArea, CardMedia, CardContent} from '@material-ui/core'


const FeaturedRooms = (props) => {

    // console.log(props)
    
    return (
        <div>
            {/* <Link to={`/rooms/${props.post_id}`}> */}
            <Card >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={props.alt}
                    height="140"
                    image={props.bgImage}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.shortDescription}
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
            {/* </Link> */}
        </div>
    )
}

export default FeaturedRooms
