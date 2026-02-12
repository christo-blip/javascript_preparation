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

