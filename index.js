// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MENSAGENS

const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
// ================== SIDEBAR ==================

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item =>{
    item.addEventListener('click',() =>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notifications-count').style.display = 'none';
        }
    })
})

// ================== SIDEBAR ==================

// ================== MENSAGENS ==================
//procuras dentro do chat
const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat =>{
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}
//procurar no chat
messageSearch.addEventListener('keyup', searchMessage);
//chat disponivel
messagesNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notifications-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000);
})

