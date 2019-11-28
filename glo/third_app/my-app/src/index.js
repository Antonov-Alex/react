
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
   switch (action.type) {
       case 'INC' :
           return state + 1;
       case 'DEC':
            return state - 1;
       case 'RST' :
          return state = 0;
        default: 
           return state;
   }
   
}

const inc = () => ({type: "INC"});
const dec = () => ({type: "DEC"});
const rst = () => ({type: "RST"});

const store = createStore(reducer);

document.querySelector('#inc').addEventListener('click', () => {
   store.dispatch(inc());
});

document.querySelector('#dec').addEventListener('click', () => {
   store.dispatch(dec());
});

document.querySelector('#rst').addEventListener('click', () => {
   
   store.dispatch(rst());
});

const update = () => {
   document.getElementById('counter').textContent = store.getState();

}
store.subscribe(update)

// store.subscribe(() => {
//    console.log(store.getState());
// })



// store.dispatch({type: 'INC'});

// store.dispatch({type: 'INC'});

// store.dispatch({type: 'INC'});


