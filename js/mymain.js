//nav
let navBarName = ["Home","About","Classes","Teachers","Contact","Zip","Author"];
let navBarLinks = ["index.html","#AboutUS","#class.html","#team.html","#contact.html","#","author.html"];

let whyYouShouldPickList=["Fun activities that make learning enjoyable","Safe and caring environment for every child","Creative programs that develop skills and healthy habits"]
let optionsForKids=[
    {"type":"Play Ground","textInside":"Kids at KidKinder enjoy fun and safe playgrounds where they can climb, run, and play. Outdoor games help build strength, coordination, and teamwork, while children explore and have fun in a secure environment.", "flatIcon":"-050-fence"},
    {"type":"Music and Dance","textInside":"Children learn through music and dance, moving to rhythm, singing songs, and playing simple instruments. These activities spark creativity, improve coordination, and make learning joyful and expressive.", "flatIcon":"-022-drum"},
    {"type":"Arts & Crafts","textInside":"Arts and crafts let children explore colors, shapes, and textures. Simple projects improve motor skills, encourage imagination, and allow kids to express themselves creatively while having fun.", "flatIcon":"-030-crayons"},
    {"type":"Safe Transportation","textInside":"KidKinder provides safe and reliable transportation with trained staff and secure vehicles. Parents can feel confident as children travel to and from school in comfort and safety.", "flatIcon":"-017-toy-car"},
    {"type":"Healthy Food","textInside":"Nutritious meals at KidKinder include fresh fruits, vegetables, and balanced snacks. Children learn healthy eating habits that support growth, energy, and focus throughout the day.", "flatIcon":"-047-backpack"},
    {"type":"Educational Tour","textInside":"Educational tours let children explore museums, farms, and cultural sites. Hands-on experiences spark curiosity, enhance learning, and teach teamwork.","flatIcon":"-025-sandwich"}
];

let classes=[
{   "typeofClass":"Drawing Class",
    "introductionOfClass":"Discover the joy of art! Kids aged 3 to 6 will explore different textures and techniques in a fun, messy, and creative environment designed to spark lifelong artistic passion.","ageKid":"3-6",
    "totalSeats":"40",
    "classTime":"8:00-10:00",
    "tution":"280/Month",
    "imgOfClass":"1.jpg"
},
{ "typeofClass":"Language Learning Class",
    "introductionOfClass":"Early language acquisition is key to cognitive development. Our expert-led program for kids aged 3 to 6 uses proven methods to build confidence and fluency in English from the very first day.",
    "ageKid":"3-6",
    "totalSeats":"67",
    "classTime":"8:00-12:00",
    "tution":"210/Month",
    "imgOfClass":"2.jpg"
},
{ "typeofClass":"Basic Science Class",
    "introductionOfClass":"Why is the sky blue? How do plants grow? We answer the big questions through fun activities that build critical thinking and a love for discovery in our youngest scientists.",
    "ageKid":"4-8",
    "totalSeats":"45",
    "classTime":"8:40-10:45",
    "tution":"282/Month",
     "imgOfClass":"3.jpg"
}

]

//NAVNAV
let mojNavBar = document.querySelector(".mojNav");
let writeDownNav = "";

for(let i = 0; i < navBarName.length; i++){
   writeDownNav += `<a href="${navBarLinks[i]}" class="nav-item nav-link active">${navBarName[i]}</a>`;
}

mojNavBar.innerHTML += writeDownNav;

//JQUERY TOGGLE
function hideMyElement(btn,text){
    $(btn).click(function(event) {
    event.preventDefault();
    $(text).slideToggle(300); 
})
}

let learnMoreAboutPage = $(".learnMoreAboutPage");
let clickForMore=$(".clickForMore")
let findOutmore = $(".showMore");
let findoutMoreButton=$(".findOut")

hideMyElement(clickForMore,learnMoreAboutPage);
hideMyElement(findoutMoreButton,findOutmore);




//OFFERINGS

let myFacilities=document.querySelector(".myFacilities");

let myFacilitiesWrite="";

optionsForKids.forEach(function(options){

    myFacilitiesWrite+=`<div class="col-lg-4 col-md-6 pb-1">
            <div
              class="d-flex bg-light shadow-sm border-top rounded mb-4 p-3 py-4"
              
            >
              <i
                class="flaticon${options.flatIcon} h1 font-weight-normal text-primary mb-3"
              ></i>
              <div class="pl-4">
                <h4>${options.type}</h4>
                <p class="m-0">
        ${options.textInside}
                </p>
              </div>
            </div>
          </div>`
})
myFacilities.innerHTML+=myFacilitiesWrite;
 
// LIST OF EXAMPLES

let myWeirdList=document.getElementById("myWeirdList");
for(let weirdMember of whyYouShouldPickList ){
    let listMember=document.createElement("li");
    listMember.className="py-2 border-top border-bottom";
    let iconOfMember=document.createElement("i");
    iconOfMember.className="fa fa-check text-primary mr-3";
    let textOfIcon=document.createElement("span");
  
    textOfIcon.textContent=weirdMember;
    listMember.appendChild(iconOfMember);
    listMember.appendChild(textOfIcon);
    myWeirdList.appendChild(listMember);

}
let myDivForClass=document.querySelector(".myClasses");
let finalClass="";
for(let myClass of classes ){
   finalClass+=`<div class="col-lg-4 mb-5">
            <div class="card border-0 bg-light shadow-sm pb-2">
              <img class="card-img-top mb-2" src="img/class-${myClass.imgOfClass}" alt="class ${myClass.imgOfClass}" />
              <div class="card-body text-center">
                <h4 class="card-title">${myClass.typeofClass}</h4>
                <p class="card-text">
                    ${myClass.introductionOfClass}
                </p>
              </div>
              <div class="card-footer bg-transparent py-4 px-5">
                <div class="row border-bottom">
                  <div class="col-6 py-1 text-right border-right">
                    <strong>Age of Kids</strong>
                  </div>
                  <div class="col-6 py-1"> ${myClass.ageKid} Years</div>
                </div>
                <div class="row border-bottom">
                  <div class="col-6 py-1 text-right border-right">
                    <strong>Total Seats</strong>
                  </div>
                  <div class="col-6 py-1">${myClass.totalSeats} Seats</div>
                </div>
                <div class="row border-bottom">
                  <div class="col-6 py-1 text-right border-right">
                    <strong>Class Time</strong>
                  </div>
                  <div class="col-6 py-1">${myClass.classTime}</div>
                </div>
                <div class="row">
                  <div class="col-6 py-1 text-right border-right">
                    <strong>Tution Fee</strong>
                  </div>
                  <div class="col-6 py-1">${myClass.tution}</div>
                </div>
              </div>
              <a href="#contact.html" class="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
            </div>
          </div>`
}
myDivForClass.innerHTML+=finalClass;

//COOL TEACHERS

let teachersName=["Maria Salos","Jane Milas","Jordan Byers","Milan Wayne"]
let teachersJob=["Music Teacher","Science Teacher","English Teacher","Spanish Teacher"]
let imgTeacher=["1.jpg","2.jpg","3.jpg","4.jpg"]

let myTeachers=document.querySelector(".myTeachers");
let myTeachersDiv="";


for(let i = 0; i < imgTeacher.length; i++){
   
 myTeachersDiv+=` <div class="col-md-6 col-lg-3 text-center team mb-5">
            <div
              class="position-relative overflow-hidden mb-4"
              style="border-radius: 100%"
            >
              <img class="img-fluid w-100" src="img/team-${imgTeacher[i]}"alt="${teachersName[i]}" />
              <div
                class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
              >
                <a
                  class="btn btn-outline-light text-center mr-2 px-0"
                  style="width: 38px; height: 38px"
                  href="twitter.com"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a
                  class="btn btn-outline-light text-center mr-2 px-0"
                  style="width: 38px; height: 38px"
                  href="facebook.com"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a
                  class="btn btn-outline-light text-center px-0"
                  style="width: 38px; height: 38px"
                  href="linkedin.com"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
              </div>
            </div>
            <h4>${teachersName[i]}</h4>
            <i>${teachersJob[i]}</i>
          </div>`

}

myTeachers.innerHTML+=myTeachersDiv;

//CONTANCTS
let contacs=[
{type1:"Adress",text1:"123 Street, New York, USA",mojI:"fa-map-marker"},
{type1:"Email",text1:"albertajnstanj@yahu.com",mojI:"fa-envelope"},
{type1:"Phone",text1:"026 333 1233",mojI:"fa-phone-alt"},
{type1:"Opening hours",text1:"10am-14pm",mojI:"far fa-clock"}
    ]
let mojDiv=document.querySelector(".mojdiv");

for(contact of contacs){
  let dflex=document.createElement("div");
  dflex.className="d-flex";
  let myI=document.createElement("i");
  myI.className=`fa ${contact.mojI} d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle`;
  myI.setAttribute("style","width:45px;height:45px");
  let oneDiv=document.createElement('div');
  oneDiv.className="pl-3";
  let H5=document.createElement("h5");
  H5.textContent=contact.type1;
  let desc=document.createElement("p")
  desc.textContent=contact.text1;

    oneDiv.appendChild(H5);
    oneDiv.appendChild(desc);
    dflex.appendChild(myI);
    dflex.appendChild(oneDiv);
    mojDiv.appendChild(dflex);


}
let footerNav = document.querySelector(".myFooterNav");

    let writeDownFooterNav = "";
    for(let i = 0; i < navBarName.length; i++){
       writeDownFooterNav += `<a href="${navBarLinks[i]}" class="text-white mb-2"><i class="fa fa-angle-right mr-2"></i>${navBarName[i]}</a>`;
    }
    footerNav.innerHTML = writeDownFooterNav;


//forma

let myForm=document.getElementById("contactForm");



//regex
let regexName=/^[A-Za-z\s]{3,20}$/;
let emailRegex=/^[^\s@]+@[^\s@]+$/;

let wrongMessageName=document.querySelector(".name");
let wrongMessageEmail=document.querySelector(".email");
let wrongMessageTextArea=document.querySelector('.textArea');
let successMessage=document.querySelector(".success");

myForm.addEventListener("submit",function(e){

e.preventDefault();
let nameValue=document.getElementById("name").value;
let emailValue=document.getElementById("email").value;
let textAreaValue=document.getElementById("textArea").value;
let checkSuccess = true;

if(!regexName.test(nameValue)){
  wrongMessageName.textContent="Name needs to be between 3-30 characters!";
    
}else{
  wrongMessageName.textContent="";
 checkSuccess=false;
}
if(!emailRegex.test(emailValue)){
  wrongMessageEmail.textContent="Email needs to have an @!";
    checkSuccess=false; 
}else{
  wrongMessageEmail.textContent="";

}
if (textAreaValue === "") {
    wrongMessageTextArea.textContent="Message cannot be empty!";
    checkSuccess=false;

  
} else {
    wrongMessageTextArea.textContent = "";

}
if(checkSuccess){
   successMessage.style.display = "block";
   myForm.reset();
}else{
  successMessage.style.display = "none";
}



})


