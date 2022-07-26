export const getId=(data)=>{
    return (dispatch) => {
        dispatch({
            type: 'getId',
            payload: data
        });
    }
}

export const addTeam=(data)=>{
    return (dispatch) => {
        dispatch({
            type: 'addTeam',
            payload: data
        });
    }
}

export const getTeam=(data)=>{
    return (dispatch) => {
        dispatch({
            type: 'getTeam',
            payload: data
        });
    }
}