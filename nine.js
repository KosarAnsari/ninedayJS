//Event handling in JS
//Syntax:-node_name.event_name = () => {write the function here}
let body = document.querySelector("body");
let btn1 = document.getElementById("btn-1");
btn1.onclick = () => {
    console.log("button is clicked");
    console.log();
}

/*let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");

}*/

//Event object:- contains information about event occuring ,syntax:-node_name.event_name =(event/any variable or name you want to take for event)=>{}, we can handle only single event for a single node.
    let btn2 = document.getElementById("btn-2");
    btn2.onclick = (e) => {
        console.log("button2 is clicked");
        console.log(e);
        console.log(e.type);
        console.log(e.target);
        console.log(e.clientX , e.clientY);

    }

// Event Listeners:- we can handle multiple events for a single node unlike event object.
//syntax:-node.addEventListener(event_name,callback_fxn)| node.addEventListener("event_name", () = {//handle the event here.})

let div = document.querySelector("div");
div.addEventListener("click",() => {
    console.log("handler 1");
} );

div.addEventListener("click" , (evt) => {//passing the event object here.
    console.log("handler 2");
    console.log(evt.type);
    console.log(evt.detail);
})

let handler3 = () => {
    console.log("handler 3");
} ;
div.addEventListener("click" , handler3);

div.addEventListener("click",() => {
    console.log("handler 4");
} );

//node.removeEventListener(event_name,same callback function you wish to remove)

div.removeEventListener("click" , handler3);

//Practice question
let button = document.getElementById("mode");
let curr_mode = "light";
button.addEventListener("click", () => {
    
    if(curr_mode === "light"){
        curr_mode ="dark";
       body.classList.add("dark");
       body.classList.remove("light");
        //document.querySelector("body").style.backgroundColor = "black";

        }else{
            curr_mode = "light";
          body.classList.add("light");
          body.classList.remove("dark");
           //document.querySelector("body").style.backgroundColor = "white";
        }
        console.log(curr_mode);
});
