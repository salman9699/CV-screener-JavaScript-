console.log("Project 5")

const data = [

    {
        name: 'Salman',
        age: 19,
        city: 'Mumbai',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'


    },
    {
        name: 'Rizwan',
        age: 22,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/19.jpg'



    },
    {
        name: 'Irfan',
        age: 27,
        city: 'Bangalore',
        language: 'Java',
        framework: 'Java',
        image: 'https://randomuser.me/api/portraits/men/53.jpg'



    },
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/56.jpg'
    },
    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    }
]

//Cv Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next : function(){
            return nextIndex<profiles.length ?
            {values: profiles[nextIndex++],done:false}:{done:true}
        }
    };
}
const candidates = cvIterator(data);

const next = document.getElementById("next");
next.addEventListener("click",nextCV);
nextCV();

function nextCV(){
    
    const currentCandidate = candidates.next().values; 
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}' style="border: 2px solid black;">`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">From ${currentCandidate.city}</li>
    <li class="list-group-item">Works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
    
  </ul>`}
  else{
      alert("End of candidates");
      window.location.reload();
  }


}

