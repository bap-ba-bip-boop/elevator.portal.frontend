import { getQuery, postQuery} from "./query.js";


const postErrorReport = async(id) => {
    return await postQuery(`errorReport/${id}`);
}

const getTechnicians = async() => {
    return await getQuery("employee/service");
}
 

const postComment = async() => {
    return await postQuery(`comment/${id}`);
}





