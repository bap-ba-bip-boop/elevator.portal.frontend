import { getQuery, postQuery} from "./query.js";


export const postErrorReport = async(id) => {
    return await postQuery(`errorReport/${id}`);
}


export const postComment = async() => {
    return await postQuery(`comment/${id}`);
}





