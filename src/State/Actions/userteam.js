
export const adduserteam = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'adduserteam',
            payload: data
        });
    }
}