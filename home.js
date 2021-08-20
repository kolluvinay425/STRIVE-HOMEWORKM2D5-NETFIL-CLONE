//find a way to post movie data using a backend form
//write async funtion for full fill the requirement

const urlHorror = "https://striveschool-api.herokuapp.com/api/movies/horror";
const urlComedy = "https://striveschool-api.herokuapp.com/api/movies/comedy";
const urlAction = "https://striveschool-api.herokuapp.com/api/movies/action";
const comedyMovies = document.getElementById("comedyMovies");
const horrorMovies = document.getElementById("horrorMovies");
const actionMovies = document.getElementById("actionMovies");

const getMovies = async () => {
  const details = {
    method: "get",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmI3NjJkNTI2MjAwMTViNmRjYTkiLCJpYXQiOjE2MjkyODkzMzQsImV4cCI6MTYzMDQ5ODkzNH0.e22WBf1Y-4mBUdosbyiU0mR7IrzZU2sqgiCkO1qL7JA",
    },
  };
  const fetchComedy = await fetch(urlComedy, details);
  const comedyapiData = await fetchComedy.json();
  console.log("Data----->", comedyapiData);
  comedyapiData.forEach((element) => {
    let div = document.createElement("div");

    comedyMovies.innerHTML += "";
    comedyMovies.innerHTML += `<div <div class="col-md-3">
                                <div class="col-sm-6 col-md-2 col-lg-2">
                                <img
                                    id="sec3imgid"
                                    src="${element.imageUrl}"
                                    alt=""
                                />
                                <p>${element.name}</p>
                                <p>${element.description}</p>
                                <p>${element.category}</p>
                                </div>
                                <a href="detail.html?id=${element._id}"><button  class="btn btn-primary">Edit</button></a>
                                <a href="delete.html?id=${element._id}"><button class="btn btn-primary">Delete</button></a>
                                <div>`;

    //comedyMovies.appendChild(div);
  });
  const fetchHorror = await fetch(urlHorror, details);
  const horrorapiData = await fetchHorror.json();
  console.log("Data----->", horrorapiData);
  horrorapiData.forEach((element) => {
    let div = document.createElement("div");

    horrorMovies.innerHTML += "";
    horrorMovies.innerHTML += ` <div <div class="col-md-3">
                                <div class="col-sm-6 col-md-2 col-lg-2">
                                <img
                                    id="sec3imgid"
                                    src="${element.imageUrl}"
                                    alt=""
                                />
                                <p>${element.name}</p>
                                <p>${element.description}</p>
                                <p>${element.category}</p>
                                </div>
                                <a href="detail.html?id=${element._id}"><button  class="btn btn-primary">Edit</button></a>
                                <a href="delete.html?id=${element._id}"><button class="btn btn-primary">Delete</button></a>
                                </div>`;

    //horrorMovies.appendChild(div);
  });
  const fetchAction = await fetch(urlAction, details);
  const actionapiData = await fetchAction.json();
  console.log("Data----->", actionapiData);
  actionapiData.forEach((element) => {
    actionMovies.innerHTML += `<div <div class="col-md-3">
                                <div class="col-sm-6 col-md-2 col-lg-2">
                                <img
                                    id="sec3imgid"
                                    src="${element.imageUrl}"
                                    alt=""
                                />
                                <p>${element.name}</p>
                                <p>${element.description}</p>
                                <p>${element.category}</p>
                                </div>
                                <a href="detail.html?id=${element._id}"><button  class="btn btn-primary">Edit</button></a>
                                <a href="delete.html?id=${element._id}"><button class="btn btn-primary">Delete</button></a>
                                </div>`;

    //actionMovies.appendChild(div);
  });
};
getMovies();
