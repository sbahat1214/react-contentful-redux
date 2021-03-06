const initialState = {
    RoomsData:[],
    title:'',
    gotRoomsData:false
}

const RootReducers = (state = initialState, action) => {

    switch(action.type){
        case 'GET_ROOMS':
            return {
                ...state,
                RoomsData: action.payload,
                gotRoomsData:true
            }
        
        default:
            return state;
    }
}

export default RootReducers;