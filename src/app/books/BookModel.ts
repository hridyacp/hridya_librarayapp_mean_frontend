export class BookModel{
    constructor( 
        public title: String | null,
        public author: String | null,
        public genre: String | null,
        public synopsis: String | null,
        public image: String| null,
        public imagepath:String){}
}