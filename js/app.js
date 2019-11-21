const signatureStylesheet = document.querySelector('style');



const insertData = () => {

    const form = {
        name: document.querySelector('.name-input').value,
        profession: document.querySelector('.profession-input').value,
        mobilePhone: document.querySelector('.mobile-input').value,
        // workPhone: document.querySelector('.workphone-input').value,
        email: document.querySelector('.email-input').value,
        isRussian: document.querySelector('.is-russian')
    }

    const insert = {
        name: document.querySelector('.name-info'),
        profession: document.querySelector('.profession-info'),
        mobilePhone: document.querySelector('.mobile-link-info'),
        mobileLink: document.querySelector('.mobile-link'),
        // workPhone: document.querySelector('.workphone-info'),
        email: document.querySelector('.email-link-info'),
        emailLink: document.querySelector('.email-link'),
        imageLink: document.querySelector('.left-img'),
        websiteLink: document.querySelector('.website-link') 
    }

    const hiddenElements = {
        signature: document.querySelector('.container-signature'),
        showCodeButton: document.querySelector('.showcode-button'),
        showCodeText: document.querySelector('.showcode-text')
    }

    insert.name.innerHTML = `<b>${form.name}</b>`;
    insert.profession.innerHTML = `${form.profession}`;
    insert.mobilePhone.innerHTML = `${form.mobilePhone}`;
    insert.mobileLink.href = `tel:${formatNumber(form.mobilePhone)}`;
    insert.email.innerHTML = `${form.email}`;
    insert.emailLink.href = `mailto:${form.email}`;

    if (form.isRussian.checked) {
        insert.imageLink.href = "https://streamlabs.ru/"
        insert.websiteLink.href = "https://streamlabs.ru/"
    }

    if (!form.isRussian.checked) {
        insert.imageLink.href = "https://stream-labs.com/"
        insert.websiteLink.href = "https://stream-labs.com/"
    }

    hiddenElements.showCodeText.innerText = "";

    hiddenElements.signature.classList.add('visible');
    hiddenElements.showCodeButton.classList.add('visible');

    hiddenElements.showCodeText.innerText += "<style>"
    hiddenElements.showCodeText.innerText += signatureStylesheet.innerHTML;
    hiddenElements.showCodeText.innerText += "</style>"
    hiddenElements.showCodeText.innerText += '<table class="container-signature" style="display: flex; flex-direction: row; font-family: Trebuchet MS, Helvetica, sans-serif;">';
    hiddenElements.showCodeText.innerText += hiddenElements.signature.innerHTML;
    hiddenElements.showCodeText.innerText += "</table>";

    return(hiddenElements.showCodeText.innerText)
}

const clearData = () => {

    const form = [
        name = document.querySelector('.name-input'),
        profession = document.querySelector('.profession-input'),
        mobilePhone = document.querySelector('.mobile-input'),
        // workPhone = document.querySelector('.workphone-input'),
        email = document.querySelector('.email-input')
    ]

    form.forEach(item => item.value = "");

}

const formatNumber = (string) => {

    string = string.replace(/\s+/g, '');
    string = string.replace(/[(,),-]/g, '');
    return string;

}

const showHTML = () => {

    const signatureHTML = document.querySelector('.showcode-text');
    const pressedButton = document.querySelector('.showcode-button');

    signatureHTML.classList.add('visible');
    signatureHTML.innerText = insertData();

    pressedButton.innerText = "Скрыть HTML"
    pressedButton.setAttribute('onclick', 'hideHTML()');
    
}

const hideHTML = () => {

    const signatureHTML = document.querySelector('.showcode-text');
    const pressedButton = document.querySelector('.showcode-button');

    signatureHTML.classList.remove('visible');

    pressedButton.innerText = "Показать HTML"
    pressedButton.setAttribute('onclick', 'showHTML()');

}