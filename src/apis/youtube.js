import axios from 'axios';

const KEY = 'AIzaSyBLf8Wk7k1QWZ69Gdd7Jg1tTQ_4607KfII';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
