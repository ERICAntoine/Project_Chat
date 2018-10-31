const user = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
/*const userValue = user.value;
const emailValue = email.value;
const passwordValue = password.value;*/
const submit = document.getElementById("submit");
let allInfo = {};
const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect("mongodb://localhost:27017/chatDatabase", function(err, db)
    {
        if(!err)
        {
            console.log("We are connected");
        }
    })


class User
{
    constructor(name, email, password)
    {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getName()
    {
        if(typeof this.name === "string" && this.name.length < 15)
        {
            return this.name;
        }
        else if(this.name.length > 15)
        {
            return "Le pseudo est trop long !";
        }
        else
        {
            return "Tu dois rentré au moins un caractère !";
        }
    }

    getEmail()
    {
        return this.email;
    }

    getPass()
    {
        return this.password;
    }
}

submit.onclick = (e) =>
{
    e.preventDefault();

    const Person = new User(user.value, email.value, password.value);
    const personName = Person.getName();
    const personEmail = Person.getEmail();
    const personPassword = Person.getPass();

    allInfo = {
        name: personName,
        email: personEmail,
        password: personPassword
    }
}
