
export function navbar(){
    const body = document.querySelector("body");
    const navBarContainer = document.createElement("nav");
    navBarContainer.classList.add("bottom-nav-bar");
    
    navBarContainer.innerHTML = `
        <button id='menu-home' class="fa-solid fa-house" style="color: #000000;"></button>
        <button class="fa-solid fa-user" style="color: #000000;"></button>
        <button class="fa-solid fa-bag-shopping" style="color: #000000;"></button>
        <button id='menu-toggle' class="fa-solid fa-bars" style="color: #000000;"></button>
    `;
    
    body.appendChild(navBarContainer);

    //Manejador de eventos para el menu hamburguesa
    document.getElementById("menu-toggle").addEventListener("click", () => {
        toggleMenu();
        
    });

    //Manejador de eventos para el elemento Home en el menu desplegable
    document.getElementById("menu-home").addEventListener("click", () => {
        //Redirige a la pag home 
        window.location.href = "Index.html";
    });

}

export const toggleMenu = () => {
    const menu = document.querySelector('.burger-menu-view');
    const isMenuVisible = menu.classList.contains("visible");

    if(isMenuVisible) {
        menu.classList.remove("visible");
    } else {
        menu.classList.add("visible");
    }
};

