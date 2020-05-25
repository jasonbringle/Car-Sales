export const ADD_FEATURE = "ADD_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE";


export const addFeature = (feature) => {
    // console.log("From actions", feature)
    return { 
        type: ADD_FEATURE,
        payload: feature
    };
};

export const deleteFeature = (feature) => {
        console.log("From actions Delete", feature)
    return{
        type: DELETE_FEATURE,
        payload: feature
    };
};