const initialState = {
    RoomsData:[],
    title:''
}

const RootReducers = (state = initialState, action) => {

    switch(action.type){
        case 'GET_ROOMS':
            return {
                ...state,
                RoomsData: action.payload
            }
        
        default:
            return state;
    }
}

export default RootReducers;