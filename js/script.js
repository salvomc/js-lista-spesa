
const shoppingList = [
                        'Farina',    
                        'Olio EVO', 
                        'Lievito di birra',
                        'Polpa di pomodoro', 
                        'Mozzarella', 
                        'Basilico', 
                        'Vino Bianco', 
                        'Birra',
                        'Coca-Cola',
                     ];

const list = document.getElementById('shopping_list');

let counter = 0;

while (counter < shoppingList.length) 
    {
        let item = `<li>${shoppingList[counter]}</li>`;
        list.innerHTML += item;
        counter++;
    } 