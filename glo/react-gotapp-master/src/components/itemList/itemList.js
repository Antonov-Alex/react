import React, { useState, useEffect }  from 'react';

//import './itemList.css';

import Spiner from '../spiner';



// const AppList = styled.ul`
//      cursor: pointer;

//      li{
//         cursor: pointer;
//         font-size: 16px;
//         color: red;
//         font-weight: bold;
//      }
// `;;
 




 function ItemList ({ getData, onItemSelected, renderItem }) {

    
    const [itemList, updateList] = useState([]);
    

   
    useEffect(() => {
        getData()
        .then( (data) => {
            updateList(data)
         })
        
    }, [])
    

         function renderItems(arr){

        //const id = Math.floor(Math.random()*140 + 41);

        return arr.map((item) => {
            const {id} = item;
            const lable = renderItem(item);

           return (
               
            <li 
               key={id}
               className="list-group-item"
               onClick={ () => onItemSelected(id)}
               >
             
               {lable}
               
           </li>
           )
        })
    }

  

    

    if(!itemList) {
           return <Spiner/>
    }

    const items = renderItems(itemList);

    return (
        <ul>
            {items}
        </ul>
    );
}

export default ItemList;

