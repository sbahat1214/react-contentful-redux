import Client from '../../api/contentful'

const url = Client.getEntries()


export const GetRooms = () => {
    return dis=>{
        url.then(res=>{
            dis({type:'GET_ROOMS', payload:res.items})
        })
    }
}

