import React, {Component} from 'react';


export default class PostListItem extends Component{
  

   render(){
    const { lable, onDelete, onToggleImportant, onToggleLiked, onToggleMethod,important, like  } = this.props;
    
    let classNames = "app-list-item d-flex justify-content-between";

       if(important){
          classNames += ' important';
       };

       if(like){
        classNames += ' like';
       };

     return(
      <div className={classNames}>
          
         <span className="app-list-item-label"
                onClick={onToggleLiked} > 
           {lable} 
         </span>

            
         <div className="d-flex justify-content-center align-items-center">
             <button className="btn-edit btn-m"
                     type="button"
                     
             > edit</button>
             
             <button
                     className="btn-star btn-sm"
                     type="button"
                     onClick={onToggleImportant}
             
             >
                <i className="fa fa-star"></i>
             </button>

             <button className="btn-trash btn-sm"
                     type="button"
                     onClick={onDelete}
             >
                <i className="fa fa-trash-o"></i>
             </button>

             <i className="fa fa-heart"></i>
             <span className="app-list-item-label-date">06/11</span>
         </div>

         
     </div>
     )
   }
}


