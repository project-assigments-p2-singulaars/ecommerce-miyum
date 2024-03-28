
export function navbar(){
    const body = document.querySelector("body");
    const navBarContainer = document.createElement("div");
    navBarContainer.classList.add("bottom-nav-bar");
    
    navBarContainer.innerHTML = `
        <button class="fa-solid fa-house" style="color: #000000;"></button>
        <button class="fa-solid fa-user" style="color: #000000;"></button>
        <button class="fa-solid fa-bag-shopping" style="color: #000000;"></button>
        <button class="fa-solid fa-bars" style="color: #000000;"></button>
    `;
    
    body.appendChild(navBarContainer);
}