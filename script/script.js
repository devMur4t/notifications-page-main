const unreadMessages = document.querySelectorAll('.unread');
let msgCounter = document.getElementById('msgCounter');
console.log(unreadMessages);
msgCounter = unreadMessages.length;

unreadMessages.forEach((msg) => {
    msg.addEventListener('click', function() {
        this.classList.remove('unread');
        setCount();
    })
})

function setCount(){
    console.log(msgCounter);
    msgCounter--;
    msgCounter.innerText = msgCounter;
}