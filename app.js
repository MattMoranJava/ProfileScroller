const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingFor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingFor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/34.jpg"
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "male",
    lookingFor: "female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/43.jpg"
  }
];

const profiles = profileIterator(data);

//Next Event
document.getElementById("next").addEventListener("click", nextProfile);

//Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Preference: ${currentProfile.lookingFor}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>`;
  document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
}


//Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      if (nextIndex === profiles.length) { nextIndex = 0 }; // My idea - instead of reloading the page at the end of each iteration, just go back to the start
      return nextIndex < profiles.length                    // Granted, this makes the done flag redundant but I'm leaving this in so you can see what Brad's 
        ? { value: profiles[nextIndex++], done: false }     // Iterator looks like - just take out line 54.
        : { done: true };
    }
  };
}
