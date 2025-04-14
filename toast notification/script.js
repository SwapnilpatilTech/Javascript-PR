
let btns = document.querySelectorAll('.btn');
let notification_container = document.querySelector('.notification-container');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let target = e.currentTarget.classList;

        if(target.contains('success')){
            success_notification();
            setTimeout(delet_eliment, 4000);
        }else if(target.contains('error')){
            error_notification();
            setTimeout(delet_eliment, 4000);
        }else{
            warning_notification();
            setTimeout(delet_eliment, 4000);
        }
    });
});

function success_notification(){
    let notification = create_eliment('div', ['notification','success-notification']);
    let icon = create_eliment('div', ['icon', 'icon-success']);
    icon.innerHTML = "<i class='ri-checkbox-circle-fill'></i>";
    let text = create_eliment('div', ['text']);
    text.innerHTML = 'Successfully submited';

    notification.appendChild(icon);
    notification.appendChild(text);

    notification_container.appendChild(notification);
}

function error_notification(){
    let notification = create_eliment('div', ['notification','error-notification']);
    let icon = create_eliment('div', ['icon', 'icon-error']);
    icon.innerHTML = "<i class='ri-close-circle-fill'></i>";
    let text = create_eliment('div', ['text']);
    text.innerHTML = 'Please fix the error';

    notification.appendChild(icon);
    notification.appendChild(text);

    notification_container.appendChild(notification);
}

function warning_notification(){
    let notification = create_eliment('div', ['notification','warning-notification']);
    let icon = create_eliment('div', ['icon', 'icon-warning']);
    icon.innerHTML = "<i class='ri-error-warning-fill'></i>";
    let text = create_eliment('div', ['text']);
    text.innerHTML = 'Invalid, check again';

    notification.appendChild(icon);
    notification.appendChild(text);

    notification_container.appendChild(notification);
}

function create_eliment(tag, class_name = [], content) {
    let eliment = document.createElement(tag);
    class_name.forEach((e) => eliment.classList.add(e));

    return eliment;
}

function delet_eliment() {
    const notification = notification_container.querySelector('.notification');
    if (notification) {
        notification_container.removeChild(notification);
    }
}
