import axios from 'axios';
import Axios from 'axios'

const KEY = 'AIzaSyCIoXeDMya4pNn8LtmhMqsCSE3zv9i5rsI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
