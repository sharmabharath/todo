import React from 'react';
function List(props)
{
	const items = props.items;
	const listeditems = items.map(item =>
		{return  <div  className = " " key={item.key}>
						<p className ="tl mh4 w-70  h-10 b--green ba   br2 pa2 dib  
						  bg-blue"  >{item.text}</p>
						  <button  
						  onClick = {()=>props.deleteItem(item.key)}
						   className ="tr   w-15 h-10 b--green ba  br2 pa2 "
						   >delete
						   </button>
						
						</div> 
			})
	return(
		<div className =" ">{listeditems}</div>)


 
}


export default List;
 
 // 