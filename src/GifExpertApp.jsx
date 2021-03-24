import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

   
    return (
        <div>
            <h3>Gif Expert App</h3>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ol>
                {
                    categories.map((item, i) => 
                    <GifGrid 
                        key={item} 
                        categorie={item} />
                    )
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
