import React from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'

const ImageList = (props) => {
    console.log(props.images.length)
    const images = props.images.map ( (image) => {        
        return <ImageCard key={image.id} image={image} />
    })
    console.log(images)

    return (<div className="image-list">
        {images}
    </div>)
}

export default ImageList

