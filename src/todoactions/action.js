import { ADD_TODO ,DELETE_TODO,COMPLETE_ITEM} from './type'
export const ADDTODO = (newtodo) => {

    return {
        type: ADD_TODO,
        payload:newtodo
    }

}

export const DELETETODO = (deletodo) => {
    return {
        type: DELETE_TODO,
        payload: deletodo
    }
}
export const COMPLETE=(id)=>{
    return {
        type:COMPLETE_ITEM,
        payload:id
    }
}