export const createProject = (project) => {
    return (dispatch, getState) => {
        // 1. Pausing dispatch
        // 2. Make Async call to database - not doing this just yet!!
        // 3. then we can dispatch the action again below!!
        dispatch({type: "CREATE_PROJECT", project: project })
    }
}

