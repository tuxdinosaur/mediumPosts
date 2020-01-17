//controles carrussel
/*
$( document ).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    })
  });
*/

// Crear post en firebase

const postEntrie = userData => {
  $.ajax({
    // url: "https://jquerycrud-ed8dc.firebaseio.com/users/.json",
    url: "https://blog-6g.firebaseio.com/team2/.json",
    method: "POST",
    data: JSON.stringify(userData),
    success: response => {
      console.log(response);
    }
  });
};

//obtener los datos del formulario

const getPostData = () => {
  let postTitle = $("#user-title").val();
  let postAuthor = $("#user-name").val();
  let postCategoryNew = $("select").val();
  // let postCategory = $("#user-category").val();
  let postDate = $("#user-date").val();
  /*let postImg = $("input:file").val()*/
  let postImg = $("#user-img").val();
  let postText = $("#user-text").val();
  let userObject = {
    postTitle,
    postAuthor,
    postCategoryNew,
    postDate,
    postImg,
    postText
  };

  console.log("userObject", userObject);

  postEntrie(userObject);
  //uploadFile()
};

// Boton save
$(document).on("click", ".save", getPostData);

// Funcion GET

const printPosts = () => {
  let usersCollection = {};
  $.ajax({
    // url: "https://jquerycrud-ed8dc.firebaseio.com/users/.json",
    url: "https://blog-6g.firebaseio.com/team2/.json",
    method: "GET",
    success: response => {
      usersCollection = response;
      console.log("este es el response ", response);

      $.each(usersCollection, (key, value) => {
        $(".post-container").append(`
          <div class="media mb-3">
            <div class="media-body">
              <a class="text-secondary" href="#">${value.postCategoryNew}</a>
              <h4 class="mt-0 mb-1">${value.postTitle}</h4>
              <p class="text-secondary">${value.postText}</p>
              <div class="justify-content-start">
                <a class="author text-dark" href="#">${
                  value.postAuthor
                }</a><br/>
                  <div class="d-flex text-secondary align-items-center">
                    <span>${getDate()}</span>
                    <img class="ml-3" src="assets/images/star.png" alt="">
                  </div>
                <div class="d-flex align-self-center justify-content-end">
                  <img src="assets/images/bookmark.png" alt="">
                  <img class="ml-3" src="assets/images/ellipsis.png" alt="">
                </div>
              </div>
          </div>
          <div class="objetfit">
            <img class="ml-3" src="${value.postImg}" alt="" style="width: 150px;
            height: 150px;
            object-fit: none;
            background-color: black;">
          </div>
        </div>
              `);
      });
    }
  });
};

printPosts();

$(document).on("click", ".btn-publish", () => {
  let textAreaPrev = $("textarea").val();
  console.log(textAreaPrev);
});

function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = dd + "-" + mm + "-" + yyyy;
  return today;
}

// SLICK uwu

$(".variable-width").slick({
  arrows: true,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
