console.log("working")

window.onload = ()=> {
    // alert("f Write a JavaScript program to display information box as soon as page load")
    // alert("Background color will change after 5 sec")
    // setTimeout(function(){ 
    //     document.body.style.backgroundColor = "aliceblue";
    //  }, 5000);
}

let btn = document.getElementById('submit1');

btn.addEventListener("click", (e)=> {
    e.preventDefault();
    console.log("working")
    let name = document.getElementById('name1').value;
    let age = document.getElementById('age1').value;
    let address = document.getElementById('address1').value;
    let subject = document.getElementById('fav-subject1').value;
    let singer = document.getElementById('singer1').value;
    let movie = document.getElementById('movie1').value;
    // let output = document.getElementById('output');

    if(name === "" || age === "" || address === ""  ||subject === "" ||  singer === "" || movie === "")
    {
        alert("Input fields are require")
    }else{

        console.log(name)
        document.getElementById('output').innerHTML = `
        <p>Your name is ${name}</p>
        <p> Your age is ${age}</p>
        <p>Your address is  ${address}</p>
        <p>Your fav singer${singer}</p>
        <p>Your fav movie${movie}</p>
        <p>Your fav subject${subject}</p>
        `

    }




})