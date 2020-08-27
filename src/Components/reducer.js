const Reducer = (state=0,action) => {
    if(action.type==="INC"){
        return state+1
    }else if(action.type==="DEC"){
        if(state>0){return state-1}
        else {return state}
    }else {
        return state
    }
}
 
export default Reducer;