window.onload = function(){
const blockList = document.querySelector('.block-list')
          
              blockList.addEventListener('click', function (e) {
                e.preventDefault()
                  if (e.target.className === 'block-list__title') {
                      e.target.parentElement.classList.toggle('active')
                      const itenId = localStorage.getItem('itenId')
                      localStorage.setItem('itenId', e.target.parentElement.id)
          
                      if (itenId != e.target.parentElement.id) {
                          document.getElementById(itenId).classList.remove('active')
                          localStorage.removeItem('itenId')
                          localStorage.setItem('itenId', e.target.parentElement.id)
                      }
          
                      if (window.innerWidth <= 480 && e.target.parentElement.classList.contains('active')) {
                          //console.log(e.target.parentElement.previousElementSibling);
                          if (!e.target.parentElement.previousElementSibling) {
                              console.log('object')
                              blockList.style.transform = 'translateX(114px)'
                          } else if (!e.target.parentElement.nextElementSibling) {
                              console.log('object')
                              blockList.style.transform = 'translateX(0)'
                          } else {
                              blockList.style.transform = 'translateX(57px)'
                          }
                          e.target.nextElementSibling.style.width = `${window.innerWidth - 57}px`;
                      } else {
                          blockList.style.transform = 'translateX(0)'
                
                      }
                  }
          
              })

let teamAcco = () => {
    $(".team-accordeon__item").on("click", function(e) {
      e.preventDefault();
        $(this).toggleClass('active')
     console.log($(this))
    });
  };

  teamAcco();

  /*ymaps.ready(function() {
      var myMap = new ymaps.Map('map', {
          center: [55.751574, 37.573856],
          zoom: 11
      }),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          
      )
  })*/

const myForm = document.querySelector('#myForm');
const button = document.querySelector('#button');
const name = document.querySelector('[name="name"]');  

button.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(myForm.elements.name.value);
    console.log(myForm.elements.phone.value);
    console.log(myForm.elements.comment.value);
    
    if (myForm.elements.callback.checked == true) {
        console.log('Не перезванивать');
    }
});
button.addEventListener('click', event => {
    event.preventDefault();
    let formdata = new FormData()
    formdata.append('name', name)
    fetch('https://webdev-api.loftschool.com/sendmail', {
        method: 'POST',
        body: formdata
    }).then (data => data.json())
    .then(json => {
      div.innerHTML = json.message
    })

if (validateForm(myForm)) {
    const data = {
        name:myForm.elements.name.value,
        phone:myForm.elements.phone.value,
        comment:myForm.elements.comment.value,
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(data));
    }
});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.phone)) {
        valid = false;
    }
    if (!validateField(form.elements.comment)) {
        valid = false;
    }
    return valid;
}
function validateField(field) {
        field.nextElementSibling.textContent = field.validationMessage;
        return field.checkValidity();
    }

var slides = document.getElementsByClassName("item"),
prev = document.querySelector(".prev"),
next = document.querySelector(".next");
var slideIndex = 1; 
showElem(slideIndex);
prev.addEventListener('click', (e) => {
  e.preventDefault()
  showElem(slideIndex -=1)
})
next.addEventListener('click', (e) => {
  e.preventDefault()
  showElem(slideIndex += 1)
})

function showElem(n) {
  var i;
  if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";   
    
  }
}
            