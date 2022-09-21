// let element = document.createElement("div");

// document.body.append(element);

// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
//     li.textContent = "Hi there!";
//     console.log(li.textContent);
//   }

//   element.append(ul);

const mainSelector = document.getElementById("main");
mainSelector.remove();

const newHeader = document.createElement("h1");
//body.append(newHeader);
newHeader.id = "victory";
newHeader.textContent = "Harrison is the champion";