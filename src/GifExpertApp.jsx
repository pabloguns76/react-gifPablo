import {useState} from 'react';
import { AddCategory,GifGrid } from './components';
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

const [categories, setCategories] = useState([ 'One Punch']);


const  onAddcategory =(newCategory) =>{
   if(categories.includes(newCategory)) return;

    setCategories([newCategory,...categories]); // operador spread

}


  return (
    <>
       
    <h1>GifExpertApp</h1>

      
        <AddCategory 
        //setCategories={ setCategories } 
        onNewCategory={onAddcategory}
        />

       
        
        
         {
           categories.map((category) =>(
            <GifGrid 
            key={category}
            category={category}/>
            ))

           }

           
        
          
    </>
  )
}
