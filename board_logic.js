
const localStorageKey = "boards";
let boards = JSON.parse(localStorage.getItem(localStorageKey))

function appendCard2(cardDetail) {
    $('#my-new-board').append(
        `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">>${cardDetail[0]}</h5>
          <p class="card-text">>${cardDetail[1]}.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
        `
    )
}

function appendCard(cardDetail, i) {
    $('#my-new-board').append(
        `
        <div class="col mb-6">

            <!-- CUSTOM BLOCKQUOTE -->
            <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                <div class="blockquote-custom-icon bg-info shadow-sm">
                    <i class="fa fa-quote-left text-white"></i>
                </div>
                <p class="mb-0 mt-2 font-italic" id="title1">${cardDetail[0]}</p>
                <footer class="blockquote-footer pt-4 mt-4 border-top" id="descriptions">${cardDetail[1]}
                <button id="edit-button-${i}">Edit</button>
                </footer>
                
            </blockquote>
        

        </div>


      `
    )
}

function renderCards() {
    $('#my-new-board').empty()
    boards = JSON.parse(localStorage.getItem(localStorageKey))
    boards.map((e, i)=>{
        appendCard(e, i)
        $(`#edit-button-${i}`).click(function() {
            handleEditClick(i)
        })
    })
}

function handleEditClick(index) {
    document.getElementById("exampleInputTitle").value = boards[index][0]
    document.getElementById("exampleFormControlTextarea1").value = boards[index][1]
    document.getElementById("index-indicator").value = index + 1;
    $('#exampleModal').modal('show');
}


function saveData(){
    let errMsg = ""
    let input = document.getElementById("exampleInputTitle").value;
    // localStorage.setItem("exampleInputTitle",input);
    let input2 = document.getElementById("exampleFormControlTextarea1").value;
    // localStorage.setItem("exampleFormControlTextarea1",input2);
    if(input.length === 0) {
        errMsg = "Title can't be empty"
    } else if (input2.length === 0) {
        errMsg = "Description can't be empty"
    }
    if(errMsg) {
        alert(errMsg)
        return;
    }
    document.getElementById("exampleInputTitle").value = ""
    document.getElementById("exampleFormControlTextarea1").value = ""

    $('#exampleModal').modal('hide');

    let counter = 1;
    let itemJsonArray = []
    let indexIndicator = Number(document.getElementById("index-indicator").value)

    if(localStorage.getItem(localStorageKey) == null){
        itemJsonArray.push([ input, input2]);
        localStorage.setItem(localStorageKey, JSON.stringify(itemJsonArray));
        // var storedNames = JSON.parse(localStorage.getItem(counter));
        // document.getElementById('title1').innerHTML = storedNames;
        // document.getElementById('descriptions').innerHTML = storedNames;
        
    } else if(indexIndicator) {
        let itemJsonArrayStr = localStorage.getItem(localStorageKey);
        itemJsonArray = JSON.parse(String(itemJsonArrayStr));
        itemJsonArray[indexIndicator - 1] = [ input, input2]
        localStorage.setItem(localStorageKey, JSON.stringify(itemJsonArray));
        document.getElementById("index-indicator").value = 0
    }
    else{
        let itemJsonArrayStr = localStorage.getItem(localStorageKey);
        itemJsonArray = JSON.parse(String(itemJsonArrayStr));
        itemJsonArray.push([ input, input2]);

        localStorage.setItem(localStorageKey, JSON.stringify(itemJsonArray));
        // var storedNames = JSON.parse(localStorage.getItem(counter));
        // document.getElementById('title1').innerHTML = storedNames;
        // document.getElementById('descriptions').innerHTML = storedNames;
      }
    //   appendCard(itemJsonArray[itemJsonArray.length - 1])
    renderCards()
    return true;
}   

renderCards()

// localStorage.setItem('links', JSON.stringify(myBlogs));
// const storedBlogs = JSON.parse(localStorage.getItem('links'));


// localStorage.setItem("names", JSON.stringify(names));
// var storedNames = JSON.parse(localStorage.getItem("names"));

// let counter = 1;
// var storedNames = JSON.parse(localStorage.getItem(counter));
// document.getElementById('title1').innerHTML = storedNames;


// let counter = 1;
// document.getElementById('title1').innerHTML = localStorage.getItem('counter');