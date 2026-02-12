//Call
let person={
    firstname:'Christopher',
    lastname:'Arulraj T'
}

function Persondetails(data){
    console.log(`${this.firstname}, ${this.lastname}`)
}

Persondetails.call(person);

//Apply

function great(greeting,punctuation){
    console.log(`${greeting}, ${punctuation}`)
}

great.apply(person,['Hi','!'])

//Bind



