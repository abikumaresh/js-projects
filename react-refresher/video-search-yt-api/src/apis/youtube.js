import axios from 'axios'

const key = 'AIzaSyAe9gKhzU2rfbCGTGK-G3eUnt_LFVzk_Eg'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 25,
        key
    }
})

