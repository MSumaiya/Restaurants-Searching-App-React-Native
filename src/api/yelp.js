// import axios from 'axios';

// export default axios.create({
//     baseURL:'https://api.yelp.com/v3/businesses',
//     header:{
//         Authorization:'Bearer cg0eEyO5Kp9zu0Y_-s-y5smujxPA8SkjZzLYoC-Lgool425xFSBIBfAZCxTgIpABoUSjIa-C04RkUkWg6tDbUAsuuwQ4tmZ0UlT5vyFRcY8XjZJsQgzSLmqEUSO9XnYx'
//     }
// });

import axios from 'axios';
export default axios.create({
baseURL: 'https://api.yelp.com/v3/businesses',
headers: {
    Authorization:
    'Bearer cg0eEyO5Kp9zu0Y_-s-y5smujxPA8SkjZzLYoC-Lgool425xFSBIBfAZCxTgIpABoUSjIa-C04RkUkWg6tDbUAsuuwQ4tmZ0UlT5vyFRcY8XjZJsQgzSLmqEUSO9XnYx'
}
});