// tạo 1 list các object có kiểu dữ liệu là Movie 
// ==> phải import/ nhập Movie vào
// --import { Movie } from './../../models/movie';

// sau đó tạo 1 mạng
// và export/ xuất ra để các file khác có thể sử dụng được 
// bằng var = variable = can change value

import { Movie } from './../../models/movie';
export var fakeMovies: Movie[] = [
    {
        id:1,
        name:"The Ghost",
        releaseYear:1999
    },
    {
        id:2,
        name:"The Ghost",
        releaseYear:2999
    },
    {
        id:3,
        name:"The Ghost",
        releaseYear:3999
    },
    {
        id:4,
        name:"The Ghost",
        releaseYear:4999
    },
    {
        id:5,
        name:"The Ghost",
        releaseYear:5999
    }

];