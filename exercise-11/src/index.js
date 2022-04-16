const people = [
  { name: "adri" },
  { name: "becky" },
  { name: "chris" },
  { name: "dillon" },
  { name: "evan" },
  { name: "frank" },
  { name: "georgette" },
  { name: "hugh" },
  { name: "igor" },
  { name: "jacoby" },
  { name: "kristina" },
  { name: "lemony" },
  { name: "matilda" },
  { name: "nile" },
  { name: "ophelia" },
  { name: "patrick" },
  { name: "quincy" },
  { name: "roslyn" },
  { name: "solene" },
  { name: "timothy" },
  { name: "uff" },
  { name: "violet" },
  { name: "wyatt" },
  { name: "x" },
  { name: "yadri" },
  { name: "zack" }
];

const search = document.querySelector("input");

const container = document.querySelector(".container");
const ul = document.querySelector(".ul");

function renderNames(people){
  people.forEach((person) => {
    let li = document.createElement('li')
    li.textContent = person.name
    ul.appendChild(li)
  })
}

renderNames(people);


function searchNames(e){
  let a = e.target.value
  
  const searchedNames = people.filter( (person)=>{
    if(a){
      return person.name.includes(a)
    }
  })
  refresh(searchedNames)
}

function refresh(searchedNames){
  clearList();
  for(i=0; i <searchedNames.length; i++){
    let li = document.createElement('li')
    li.textContent = searchedNames[i].name
    ul.appendChild(li)
  }

  renderNames(searchedNames)
}

function clearList(){
  ul.innerHTML=""
}

search.addEventListener('keyup', searchNames)
