
export function navbar() {
  const body = document.querySelector("body");
  const navBarContainer = document.createElement("div");
  navBarContainer.classList.add("bottom-nav-bar");

  navBarContainer.innerHTML = /* html */`
    <button class="fa-solid fa-house""></button>
    <button class="fa-solid fa-user""></button>
    <button class="fa-solid fa-bag-shopping""></button>
    <button class="fa-solid fa-bars""></button>
  `;

  body.appendChild(navBarContainer);
}
