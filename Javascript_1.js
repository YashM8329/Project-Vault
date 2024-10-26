// let input = document.createElement("input");
// input.type = "text";
// input.setAttribute("placeholder", "username");
// input.setAttribute("id", "username");
// document.querySelector("body").append(input);

// let btn = document.createElement("button");
// btn.classList.add("button1");
// btn.innerText = "Click me";
// document.querySelector("body").append(btn);

// let heading = document.createElement("h1");
// heading.innerText = "DOM Practice";
// heading.classList.add("heading1");
// document.querySelector("body").append(heading);

// let ap = document.createElement("p");
// ap.innerHTML = "Anna college <b> Delta <b> Batch";
// document.querySelector("body").append(ap);

// let btn = document.querySelector("button");

// btn.addEventListener("mouseout" , function(){
//     btn.style.backgroundColor = "blue";
//     btn.innerHTML = "<b> SUBMIT <b/>";
// });

// let input = document.querySelector("input");

// input.addEventListener("keypress" , function(){
//     input.style.backgroundColor = "blue";
//     input.innerHTML = `<b> ${p} <b/>`;
// });

// input.addEventListener("scroll" , function(){
//     input.style.backgroundColor = "blue";
//     input.innerHTML = `<b> ${p} <b/>`;
// });

// window.addEventListener("load" , (event) => {
//     console.log("Page successfully loaded");
// });

// let btn = document.createElement("button");

// btn.innerText = "Submit";
// document.querySelector("body").append(btn);
// btn.addEventListener("click", (event) => {
//     btn.style.backgroundColor = "green";
// })

// let input = document.createElement("input");
// input.type = "text";
// input.placeholder = "Enter your name";

// let h2 = document.createElement("h2");
// input.addEventListener("input", (event) => {
//     h2.innerText = input.value;
//     input.value = input.value.replace(/[^a-zA-Z\s]/g, "")
// })

// document.querySelector("body").append(input);
// document.querySelector("body").append(h2);

// let h2 = document.createElement("h2");
// h2.innerText = "Todo List";
// document.querySelector("body").append(h2);

// let input = document.createElement("input");
// input.placeholder = "Enter your task here";
// document.querySelector("body").append(input);

// let ul = document.createElement("ul");
// const task = ["Eat", "Sleep"];
// task.forEach(function(task)
// {
//     let li = document.createElement("li");
//     li.innerText = task;
//     ul.appendChild(li);
// })
// document.querySelector("body").append(ul);

// let btn = document.createElement("button");
// btn.innerText = "Add task";
// btn.addEventListener("click", (event) => {
//     let li = document.createElement("li");
//     li.value = input.value;
//     ul.appendChild(li);
//     input.value = "";
// })
// document.querySelector("body").append(btn);

// let h2 = document.createElement("h2");
// h2.innerText = "Todo List";
// document.querySelector("body").append(h2);

// let input = document.createElement("input");
// input.placeholder = "Enter your task here";
// document.querySelector("body").append(input);

// let ul = document.createElement("ul");
// const task = ["Eat", "Sleep"];
// task.forEach(function (task) {
//   let li = document.createElement("li");
//   li.innerText = task;
//   ul.appendChild(li);
// });
// document.querySelector("body").append(ul);

// let btn = document.createElement("button");
// btn.innerText = "Add task";

// btn.addEventListener("click", (event) => {
//   if (input.value.trim() !== "") {
//     let li = document.createElement("li");
//     li.innerText = input.value;
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

// document.querySelector("body").append(btn);

// let h2 = document.createElement("h2");
// h2.innerText = "Hello World";
// document.querySelector("body").append(h2);

// function changes(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 5) + 1;
//       if (num > 3) {
//         reject("Promise rejected");
//       }

//       h2.style.color = color;
//       console.log(`color changed to ${color}!`);
//       resolve("Color changed");
//     }, delay);
//   });
// }

// async function demo() {
//   try {
//     await changes("red", 1000);
//     await changes("blue", 1000);
//     await changes("green", 1000);
//     await changes("red", 1000);
//     await changes("orange", 1000);
//   } catch (err) {
//     console.log("Error caught");
//     console.log(err);
//   }
// }

// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log("Error - ", err);
//   });

// let url = "https://catfact.ninja/fact";

// async function calling() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//   } catch (err) {
//     console.log("Error");
//   }
//   console.log("Bye");
// }

// let url = "https://catfact.ninja/fact";

// async function calling() {
//   try {
//     let res = await axios.get(url);
//     console.log(res.data.fact);
//   } catch (err) {
//     console.log("Error - ", err);
//   }
// }

// let btn = document.createElement("button");
// btn.innerText = "Click to get cat facts";

// btn.addEventListener("click", async () => {
//   let fact = await calling();
//   console.log(fact);
// });
// document.querySelector("body").append(btn);

// async function calling() {
//   try {
//     let res = await axios.get(url);
//     return res.data.message;
//   } catch (err) {
//     console.log("Error", err);
//   }
// }

// let url = "https://dog.ceo/api/breeds/image/random";
// let btn = document.createElement("button");
// btn.innerText = "Click to get dog image";

// btn.addEventListener("click", async () => {
//   let img = await calling();
//   if (img) {
//     let final = document.querySelector("#final_image");
//     final.setAttribute("src", img);
//   }
// });

// document.querySelector("body").append(btn);
