import axios from 'axios';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


// declare global {
//     interface Window {
//         FB:any;
//     }
// }

// let FB = window.FB; // ok now