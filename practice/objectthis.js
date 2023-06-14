let firstname="bodige";
let lastname="ruchitha";

let hello ={
    firstname:"sunitha",
    lastname:"bodige",
    greet(){
        return  `say hi to ${this.firstname} and ${this.lastname}`
    }
}
console.log(hello.greet());
o/p:
say hi to sunitha and bodige (with this key word because it always check for the inside scope)
o/p :say hi to bodige and ruchitha (without this key word because it always check for the outside scope)

