
document.addEventListener('DOMContentLoaded', () => {
       
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

// Verifica se os elementos existem antes de adicionar o event listener
    if (menuToggle && navList) {
    // Adiciona um listener de clique ao botão do menu
        menuToggle.addEventListener('click', () => {
        // Alterna a classe 'active' na lista de navegação para mostrar/esconder o menu
            navList.classList.toggle('active');
});

// Fecha o menu ao clicar em um item de navegação (útil para mobile)
navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
    // Se o menu estiver aberto, remove a classe 'active' para fechá-lo
    if (navList.classList.contains('active')) {
        navList.classList.remove('active');
                        }
                    });
                });
            }
        });