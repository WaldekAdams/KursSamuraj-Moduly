import dog from './items.js'
export const showItem = (item, tag = 'div') => {
    console.log(item);
    const div = document.createElement(tag);
    div.textContent = `Imie psa: ${dog.name}, jego wiek: ${dog.age}`;
    document.body.appendChild(div);
    console.log(typeof (div))




}