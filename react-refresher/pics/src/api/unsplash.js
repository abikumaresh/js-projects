import axios from 'axios'

export default axios.create( 
    {
        baseURL : 'https://api.unsplash.com',
        headers : {
            Authorization : 'Client-ID XTRlD0WRvRQTfZnwRnAM6WFgeRu1K78zrcawZElScRY'
        } 
    }   
)