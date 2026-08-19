//global variables

const welcomeMsg = document.getElementById("welcome-msg");
const userLocal = document.getElementById("user-local");
const userNickname = document.getElementById("user-nickname");
const inputNickname = document.getElementById("input-nickname");
const changeNicknameBtn = document.getElementById("change-nickname-btn");
const hobbyList = document.getElementById("hobby-list");
const hobbyInput = document.getElementById("hobby-input");
const addHobbyBtn = document.getElementById("add-hobby-btn");
const loginStatus = document.getElementById("login-status");
const toggleLogin = document.getElementById("toggle-login");
const themeType = document.getElementById("theme-type");
const truthyButton = document.getElementById("truthy-button");
const truthyInput = document.getElementById("truthy-input");
const truthyResult = document.getElementById("truthy-result");

//App data

const user = {
    name: "Aaron",
    age: 39,
    isLoggedIn: false,
    address: {
        city: "Winchester",
        state: "KY"
    },
    preferences: {
        theme: "Dark",
        nickname: "A-A-RON"
    },
    hobbies: ["Reading", "Family Time", "Movies", "Camping"]
}

//spread operator
const newUserAddress = {...user.address};
console.log(newUserAddress);

//obj destructuring
const {name, address: {city, state}} = user;

const nicknames = [null, undefined, " A-A-RON", " Scooter", " Ace", " Smiley", " Pinwheel", " Smelly"];

//array destructuring
//rest operator
const [,, defaultNickname, ...names] = nicknames;

//initial page settup
welcomeMsg.textContent = `Welcome ${name}! Glad you're here!`;
userLocal.textContent = ` ${city}, ${state}`;
themeType.textContent = " Dark Mode";


for(const hobby of user.hobbies){
    const li = document.createElement("li");
    li.textContent = `${hobby}`;
    hobbyList.appendChild(li);
}

//User nickname function

userNickname.textContent = ` ${defaultNickname}`;

function randomNickname(e) {
    e.preventDefault();
    //let newNickname = nicknames[Math.floor(Math.random() * nicknames.length)] ?? "Guest";
    let newNickname = nicknames[Math.floor(Math.random() * nicknames.length)];
    newNickname = newNickname ?? " Guest";

    userNickname.textContent = `${newNickname}`;
    user.preferences.nickname = newNickname;
}

changeNicknameBtn.addEventListener("click", randomNickname)

//Login status function

loginStatus.textContent = " Logged Out";

const isLoggedIn = (e) => {
    e.preventDefault();

    user["isLoggedIn"] === true ? (user.isLoggedIn = false, 
    loginStatus.textContent = " Logged Out") :  
    (user.isLoggedIn = true, loginStatus.textContent = " Logged In");

}

toggleLogin.addEventListener("click", isLoggedIn);

//truthy/falsy check function

function truthyCheck (e){
    e.preventDefault();

    const result = Boolean(truthyInput.value) ? "Truthy" : "Falsy";
    truthyResult.textContent = `${result}`;
}

truthyButton.addEventListener("click", truthyCheck);

//add hobby

function addHobby (e){
    e.preventDefault();

    const li = document.createElement("li");
    li.textContent = hobbyInput.value;
    hobbyList.appendChild(li);
    hobbyInput.value = "";
}

addHobbyBtn.addEventListener("click", addHobby);