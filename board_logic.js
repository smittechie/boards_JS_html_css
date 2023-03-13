

let boards = JSON.parse(localStorage.getItem("boards"))
boards.map((e)=>{
    $('#my-new-board').append(
        `
        <div class="row">
        <div class="col-lg-6 mx-auto">

            <!-- CUSTOM BLOCKQUOTE -->
            <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                <div class="blockquote-custom-icon bg-info shadow-sm">
                    <i class="fa fa-quote-left text-white"></i>
                </div>
                <p class="mb-0 mt-2 font-italic" id="title1">${e.itemJsonArray}</p>
                <footer class="blockquote-footer pt-4 mt-4 border-top" id="descriptions">${e.itemJsonArry}
                    <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>

        </div>
    </div>


      `
    )
})


function saveData(){
    let input = document.getElementById("exampleInputTitle").value;
    // localStorage.setItem("exampleInputTitle",input);
    let input2 = document.getElementById("exampleFormControlTextarea1").value;
    // localStorage.setItem("exampleFormControlTextarea1",input2);
    $('#exampleModal').modal('hide');

    let counter = 1;
    if(localStorage.getItem(counter) == null){
        itemJsonArray =[];
        itemJsonArray.push([ input, input2]);
        localStorage.setItem(counter, JSON.stringify(itemJsonArray));
        // var storedNames = JSON.parse(localStorage.getItem(counter));
        // document.getElementById('title1').innerHTML = storedNames;
        // document.getElementById('descriptions').innerHTML = storedNames;
        
        }
    else{
        itemJsonArrayStr =localStorage.getItem(counter);
        itemJsonArry = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([ input, input2]);
        localStorage.setItem(counter, JSON.stringify(itemJsonArray));
        // var storedNames = JSON.parse(localStorage.getItem(counter));
        // document.getElementById('title1').innerHTML = storedNames;
        // document.getElementById('descriptions').innerHTML = storedNames;
      }

    return true;
}   



// localStorage.setItem('links', JSON.stringify(myBlogs));
// const storedBlogs = JSON.parse(localStorage.getItem('links'));


// localStorage.setItem("names", JSON.stringify(names));
// var storedNames = JSON.parse(localStorage.getItem("names"));

// let counter = 1;
// var storedNames = JSON.parse(localStorage.getItem(counter));
// document.getElementById('title1').innerHTML = storedNames;


// let counter = 1;
// document.getElementById('title1').innerHTML = localStorage.getItem('counter');