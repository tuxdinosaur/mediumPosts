//controles carrussel
/*
$( document ).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    })
  });
*/

  // Crear post en firebase
 
  const postEntrie = (userData) => {

    $.ajax({

        url: "https://jquerycrud-ed8dc.firebaseio.com/users/.json",

        method: "POST",

        data: JSON.stringify(userData),

        success: (response) => {
            console.log(response);
        }

    });

}

//obtener los datos del formulario 

const getPostData = () => {

    let postTitle = $("#user-title").val()

    let postAuthor = $("#user-name").val()

    let postDate = $("#user-date").val()

    /*let postImg = $("input:file").val()*/
    let postImg = $("#user-img").val()
    
    let postText= $("#user-text").val()

   let userObject = {postTitle, postAuthor, postDate, postImg, postText}

   console.log("userObject",userObject)

    postEntrie(userObject);
    //uploadFile()
}

// Boton save 
$(document).on("click",".save",getPostData)

// Funcion GET

const printPosts = () => {
let usersCollection = {};
$.ajax({
      url:"https://jquerycrud-ed8dc.firebaseio.com/users/.json",
      method:"GET",
      success:(response) => {
          usersCollection = response;
          console.log("este es el response ",response)

          $.each(usersCollection, (key, value) => {

              $(".post-container").append(`
                      <div class="media mb-3">
                        <div class="media-body">
                          <a class="text-secondary" href="#">POPULAR ON MEDIUM</a>
                          <h4 class="mt-0 mb-1">${value.postTitle}</h4>
                          <p class="text-secondary">${value.postText}</p>
                          <div class="d-flex justify-content-between">
                            <a class="author text-dark" href="#">${value.postAuthor}</a> in <a class="blog text-dark" clas href="#">Tenderly</a>
                              <div class="text-secondary">
                                <span>${value.postDate}<img src="assets/images/star.png" alt=""> </span>
                              </div>
                            <div class="align-self-center">
                              <img src="assets/images/bookmark.png" alt="">
                              <img src="assets/images/ellipsis.png" alt="">
                            </div>
                          </div>
                      </div>
                      <img class="ml-3" src="${value.postImg}" alt="">
                    </div>
              `)
          })

      }

  })

}

printPosts()
