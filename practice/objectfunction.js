function language(firstname,lastname)
{
    this.firstname="ruchitha",
    this.lastname="bodige",
    this.greet =() =>{
        return `good job ${this.firstname} ${this.lastname}`
    }
}
let name =new language("bodige","sunitha")



o/p
function language(firstname,lastname)
{
    this.firstname="ruchitha",
    this.lastname="bodige",
    this.greet =() =>{
        return `good job ${this.firstname} ${this.lastname}`
    }
}
undefined
let name=new language("a","b")
undefined
name.greet()
'good job ruchitha bodige'
let hi=new language("michual","peter")
undefined
name.greet()
'good job ruchitha bodige'


doubt 
let a=new language("a")
undefined
a.greet()
'good job ruchitha bodige'
let b=new language("","" )
b.greet()
'good job ruchitha bodige'
let b=new hi("h","h")
VM1612:1 Uncaught TypeError: hi is not a constructor
    at <anonymous>:1:7
(anonymous) @ VM1612:1   


function language(firstname,lastname)
{
    this.firstname="ruchitha",
    this.lastname="bodige",
    this.greet =() =>{
        return `good job ${this.firstname} ${this.lastname}`
    }
}
let a=new language("a")
undefined
a.greet()


doubt : akasah in objectfuntion it is calling the greet() function irresective of the amy arguments passed y is that 


////gpt 
function language(firstname,lastname)
{
    this.firstname = firstname;
    this.lastname = lastname;
    this.greet = () => {
        return `good job ${this.firstname} ${this.lastname}`
    }
}

let a=new language("ruchitha","bodige")

a.greet()
'good job ruchitha bodige'
let a=new language("ruchitha")
a.greet()
'good job ruchitha bodige'
