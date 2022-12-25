let formLeft = document.forms["form-left"];
        //   window alert variables----------------
let alertBackground = document.querySelector(".alertBackground");
let massageCantDelete = document.querySelector(".massageCantDelete");
let massageCantEmpty = document.querySelector(".massageCantEmpty");
let closeButton1 = document.querySelector(".close-button1");
let closeButton2 = document.querySelector(".close-button2");
// --------------------------------------------------------------

formLeft.addEventListener("change", () => {
    for (let i = 0; i < formLeft.length; i++) {
        if (formLeft[i].checked && formLeft.length > 1) {
            formLeft[i].parentNode.remove();
        } else if (formLeft.length === 1) {
            formLeft[i].checked = false;
            alertBackground.style.display = "block";
            massageCantDelete.style.display = "block";
            closeButton1.addEventListener("click", () => {
                alertBackground.style.display = "none";
                massageCantDelete.style.display = "none";
            });
        }
    }
});

let formRight = document.forms["form-right"];
let button = formRight.submit;

let value;
formRight[0].addEventListener("input", () => {
    value = formRight[0].value;
    if (value.length > 19) {
            alert("maximum 20 characters");
    }
  
});


button.addEventListener("click", function () {
    if (formRight[0].value == false) {
        alertBackground.style.display = 'block';
        massageCantEmpty.style.display = "block";
        closeButton2.addEventListener("click", () => {
            alertBackground.style.display = "none";
            massageCantEmpty.style.display = "none";
        });
    } else {
        let num = formLeft.length + 1;
        formLeft.innerHTML += `
        <div class="cont">
            <input type="checkbox"
             class="checkbox" id="new${num}"/>
          <label for="new${num}">${value}</label>
        </div>`;
        formRight[0].value = "";
    }
});
