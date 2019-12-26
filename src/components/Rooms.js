import React from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom'
import bgImage from '../assets/images/bgImage.jpg'
import Title from './Title'
import AllRooms from './AllRooms';

const Rooms = () => {
    return (
        <div>
            <Banner title="ALL Rooms"
            subTitle="Find Your Desired Room"
            bgImage={bgImage}
            >
                    <Link to="/">
                        <button className="btn btn-primary">
                            Go Home
                        </button>
                    </Link> 
            </Banner>
            <Title title="Select Room"></Title>
            <AllRooms></AllRooms>
        </div>
    )
}

export default Rooms
