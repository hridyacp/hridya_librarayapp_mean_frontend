export class SignupModel{
    constructor( 
        public fname: String | null,
        public lname: String | null,
        public mobnumber: String | null,
        public email: String | null,
        public password: String | null,
        public confirmpwd: String | null,
        public role:String | null){}
}