(function() {
    const form = document.querySelector('#message-form');

    form.addEventListener('submit',(e) => {
        e.preventDefault();
        const message = document.querySelector('#message');
        const messagecontent = document.querySelector('#message-content');

        if(message.value === '') {
            message.style.border='1px solid red';
            message.value = 'Please Enter Something';
            setTimeout(() => {
                message.style.border = '1px solid #cac9c9';
                message.value = '';
            },4000)
        }
        else{
            messagecontent.textContent = message.value;
            message.value = '';
        }
    });
})();