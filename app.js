    const user = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    /*const userValue = user.value;
    const emailValue = email.value;
    const passwordValue = password.value;*/
    const submit = document.getElementById("submit");
    const allUser = {};
    let counter;




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

    function countMyself() {
        // Check to see if the counter has been initialized
        if ( typeof countMyself.counter == 'undefined' ) {
            // It has not... perform the initialization
            countMyself.counter = 0;
        }

        // Do something stupid to indicate the value
        console.log(++countMyself.counter);
    }

    countMyself();
    countMyself();
    countMyself();



    console.log(++counter);
    const Person1 = new User(user.value, email.value, password.value);
    console.log(Person1.name);
    console.log(Person1.email);
    console.log(Person1.password);
}
