const url = "https://striveschool-api.herokuapp.com/api/movies/";
const postMovies = async (formData) => {
  let jsonData = JSON.stringify(formData);
  console.log("data", jsonData);
  try {
    const fetching = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmI3NjJkNTI2MjAwMTViNmRjYTkiLCJpYXQiOjE2MjkyODkzMzQsImV4cCI6MTYzMDQ5ODkzNH0.e22WBf1Y-4mBUdosbyiU0mR7IrzZU2sqgiCkO1qL7JA",
      },
      body: jsonData,
    });
    if (fetching.ok) {
      const apiData = await fetching.json();
      console.log("Data----->", apiData);
    }
  } catch (err) {
    console.log(err);
  }
};

const loadFormData = async (event) => {
  event.preventDefault();
  let formData = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    category: document.getElementById("category").value,
    imageUrl: document.getElementById("imageUrl").value,
  };

  console.log("data", formData);
  await postMovies(formData);
};
//postMovies();
const submitButton = document.getElementById("loadJson");
submitButton.addEventListener("click", loadFormData);
console.log("hello");
