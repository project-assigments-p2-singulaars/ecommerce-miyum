
export function navbar() {

    const body = document.querySelector("body");
    const navBarContainer = document.createElement("nav");
    navBarContainer.classList.add("bottom-nav-bar");

    //html
    navBarContainer.innerHTML = `  
        <button id='menu-home' class="fa-solid fa-house" style="color: #000000;"></button>
        <button id='menu-user' class="fa-solid fa-user" style="color: #000000;"></button>
        <button id='menu-shopping' class="fa-solid fa-bag-shopping" style="color: #000000;"></button>
        <button id='menu-toggle' class="fa-solid fa-bars" style="color: #000000;"></button>
    `;

    body.appendChild(navBarContainer);

    //Manejador de eventos para el menu hamburguesa
    document.getElementById("menu-toggle").addEventListener("click", () => {
        toggleMenu();
    });

    const iconHome = document.getElementById("menu-home")
    const iconUser = document.getElementById("menu-user")
    const iconShopping = document.getElementById("menu-shopping")

    openPages(iconHome, "/src");
    openPages(iconUser, "/src/pages/dashboard-view.html");
    openPages(iconShopping, "/src");
}

export function openPages(icon, route) {
    icon.addEventListener("click", () => {
        window.location.href = route
    });

}

export const toggleMenu = () => {
    const menu = document.querySelector('.burger-menu-view');
    const isMenuVisible = menu.classList.contains("visible");

    if (isMenuVisible) {
        menu.classList.remove("visible");
    } else {
        menu.classList.add("visible");
    }
};







