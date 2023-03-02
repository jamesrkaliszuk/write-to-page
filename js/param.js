
const alertParam = (title, message) => {

// ALL VARIABLES GRABBED FROM HTML
    const messageName = document.getElementById("title").value;
    const textInput = document.getElementById("text").value;
    const blogBg = document.getElementById("message");
    const blogTitle = document.getElementById("blogTitle");
    const blogPost = document.getElementById("blogPost");
    const resetBtn = document.getElementById("reset");

// STORING VARIABLES IN PARAMETERS
    title = messageName;
    message = textInput;

    // VARIABLE FOR 3 SECONDS OF TIME DELAY
    const timeDelay = 3000;

    // RESET THE FORM
    resetBtn.addEventListener("click", (e)=>{
        e.target.value = "";
        
        blogBg.className = "message hidden";
    });
    
    // IF STATEMENT REGARDING WHAT WILL HAPPEN IF THERE IS NO TEXT IN THE INPUT AND TEXTAREA
    if(title == "" || message == ""){
        blogPost.innerText = "Please make sure both fields have text in them.";
        blogTitle.innerText = "";
        blogBg.className = "message show";

        setTimeout(function(){
            blogBg.className = "message hidden";
        }, timeDelay)
        return
    }

    // WHAT WILL HAPPEN WHEN YOU HIT THE SUBMIT BUTTON
    blogBg.className = "message show";
    blogTitle.innerText = title;
    blogPost.innerText = message;
};


// FUNCTION FOR THE DATE IN THE FOOTER
const upToDate = () => {
    const myDate = document.getElementById("date");
    const newDate = new Date();
    const thisYear = newDate.getFullYear();

    myDate.innerText = thisYear;
}
upToDate();