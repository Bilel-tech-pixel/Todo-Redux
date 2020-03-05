import { ADD_TODO, DELETE_TODO,COMPLETE_ITEM } from '../todoactions/type';
const initialstate = [

    {
        todo: "todo1wfzefefzfezef",
        id: 1,
        complete: false
    },
    {
        todo: "todzgegzegzegzeo2",
        id: 2,
        complete: false
    }


]
const todoReducer = (state = initialstate, action) => {

    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload)
        case DELETE_TODO:
            return state.filter(el => el.id !== action.payload)
        case COMPLETE_ITEM:
            return state.map(el => el.id===action.payload ?{...el,complete:!el.complete}:el )



        default: return state

    }


}
export default todoReducer