let myStuds = []


  class students {
    constructor(name, email, pass){
      this.name = name;
      this.email = email;
      this.pass = pass; 
    }

    printData(){
      document.getElementById('screen').innerHTML = `
      student name is : ${this.name} <br>
      student email is : ${this.email} <br>
      student password is : ${this.pass} `
  
    }

    
  }


let myForm = document.getElementById('my-form')

myForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let userName = document.getElementById('name')
  let userEmail = document.getElementById('email')
  let userPass = document.getElementById('pass')
  
  let student = new students(userName.value,userEmail.value,userPass.value)
  myStuds.push(student)
  console.log(myStuds)
})


let myBtn = document.getElementById('my-two')
myBtn.addEventListener('click',()=>{
myStuds.map((stud)=>{
  stud.printData()

})
  
})



