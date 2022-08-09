import { vipArr } from "./vipJson.js";
//empty array
let theRichest = [];
//prepair constuctor for craeting classes  vipArr data
class richs {
  constructor(flag=0, name, worth, birth_year, source, country, image) {
    this.flag = flag;
    this.name = name;
    this.worth = worth;
    this.birth_year = birth_year;
    this.source = source;
    this.country = country;
    this.image = image;
  }
//printing method inside the prototype class
  printData() {
    document.getElementById("screen").innerHTML += `
      <div class ="rich-div">
      <h2>name: ${this.name},</h2>
      <p>worth: ${this.worth},</p>
      <p>birth_year: ${this.birth_year},</p>
      <p>source: ${this.source},</p>
      <p>country: ${this.country},</p>
      <p><img src="${this.image}" alt="${this.name}">,</p>
      </div>
      `;
  }
}
// loop for pushing the classes inside the new array
for (let man of vipArr) {
  let rich = new richs(
    man.flag,
    man.name,
    man.worth,
    man.birth_year,
    man.source,
    man.country,
    man.image
  );
  theRichest.push(rich);
}

console.log(theRichest);
//button for present the data inside the html
let myBtn = document.getElementById("btn");
myBtn.addEventListener("click", () => {
  document.getElementById("screen").innerHTML = " ";
  theRichest.map((rich) => {
    rich.printData();
  });
  // add to each div the same className, also giving anumber (index)
  let richDivs = document.querySelectorAll(".rich-div");
  richDivs.forEach((singleDiv, index) => {
    
    //Adds to each item an option to change with each click( every div will become abutton)
    singleDiv.addEventListener("click", (evt) => {
      //every click, the class will turn his flag to = 1, instead of 0.
      theRichest[index].flag = 1;
      //with this filter all classes with flag 0 , will be drop out from the array
      let newRiches = theRichest.filter((richFlag) => richFlag.flag < 1);
      console.log(newRiches);
      // with display none, the dropped class also will disapear from the page.
      
      singleDiv.style.display = "none" 
      

      //i tried to do the same with map, but it goes bug. --> for trying disable the "singleDiv.style.display = "none" 
      // and able the code below

      // document.getElementById("screen").innerHTML = "";
      // newRiches.map((rich)=>{
      //   rich.printData()

      // })

  

    });
  });
});






// import {vipArr} from "./vipJson.js"
// let myStuds = []

//   class students {
//     constructor(name, email, pass){
//       this.name = name;
//       this.email = email;
//       this.pass = pass;
//     }

//     printData(){
//       document.getElementById('screen').innerHTML = `
//       student name is : ${this.name} <br>
//       student email is : ${this.email} <br>
//       student password is : ${this.pass} `

//     }

//   }

// let myForm = document.getElementById('my-form')

// myForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   let userName = document.getElementById('name')
//   let userEmail = document.getElementById('email')
//   let userPass = document.getElementById('pass')

//   let student = new students(userName.value,userEmail.value,userPass.value)
//   myStuds.push(student)
//   console.log(myStuds)
// })

// let myBtn = document.getElementById('my-two')
// myBtn.addEventListener('click',()=>{
// myStuds.map((stud)=>{
//   stud.printData()

// })

// })
