import JS from "../javascript";
import * as channels from "../channels";
import "../stylesheets/index.css";
import jsonFile from "../assets/x.json"
import logo from "../assets/logo.svg"

document.addEventListener("DOMContentLoaded", () => {
  const img = document.createElement("img")
  img.src = logo
  img.alt = "logo"
  img.className = "logo"
  img.height = 200
  img.width = 200

  const div = document.createElement("div");
  div.innerText = jsonFile.y;

  const body = document.querySelector("body")
  body.appendChild(div);
  body.appendChild(img)

  JS.append(body);
  channels.consumer.append(body);

  const appleImg = document.createElement("img")
  appleImg.alt = "apple image"
  appleImg.className = "apple-image"
  appleImg.height = 200
  appleImg.width = 200
  body.appendChild(appleImg)
});
