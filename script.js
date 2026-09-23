const peopleList = document.getElementById("people-list");

fetch("https://randomuser.me/api/?results=10")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Reques