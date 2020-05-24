export const ADD_FEATURE = "ADD_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE";



export const addFeature = (item) => {
    // console.log("From actions", addFeature.type)
    return { 
        type:ADD_FEATURE,
        payload: item
    };
};

export const deleteFeature = (item) => {
    return {
        type: DELETE_FEATURE,
        payload: item
    }
}