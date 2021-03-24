import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({categorie}) => {

  

    const {data:images, loading} =  useFetchGifs(categorie);

    
    return (
        <>
        <h3>{categorie}</h3>
        {loading && <p>Loading <span className="animate__animated animate__flash">...</span></p>}
        <div className="card-grid">
            {
            images.map(img => 
                (<GifGridItem 
                    key={img.id}
                    {...img} />)
                )
            
                
            }
           
        </div>
    </>

    )
}

export default GifGrid
