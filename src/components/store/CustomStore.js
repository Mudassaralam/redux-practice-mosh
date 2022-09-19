import reducer from './reducer'

function creatStore(reducer){
    let state;
    let listers = [];
    function subscribe(lister){
        listers.push(lister);
    }

    function dispatch(action){
       state = reducer(state,action);

       for(let i = 0; i < listers.length; i++){
           listers[i]()
        }
    }
    function getState(){
        return state;
    }

    return{
        subscribe,
        dispatch,
        getState
    }
}
export default creatStore(reducer)