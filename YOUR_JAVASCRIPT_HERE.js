const hero = {
    name: "Hero",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "Weapon unequiped",
        damage: 2,
    },
};

const object = hero.weapon;

function rest(hero) {
    hero.health = 10;
    return hero;
};

function pickUpItem(hero, object) {
    hero.weapon = object;
    hero.weapon.type = "dagger";
    hero.weapon.damage = 2;
    hero.inventory.push(object);
    return hero;
};

function equipWeapon(hero) {
    if (hero.inventory.length < 1) {
        return false
    } else { 
        hero.weapon = hero.inventory[0] 
        return hero; //or 'return object' or 'return true'
    };
};

// This is not a working answer,  
// but it prints the object keys/values to the console.
function displayStats() {
for (i in hero) {
//    var jones = 
                console.log(i + ": " + hero[i]);  
//    document.getElementById("stats").innerHTML = jones
};  
} 

displayStats();

// MY FIRST ATTEMPT
// function displayStats() {
//    const entries = Object.entries(hero)
//    document.getElementById("stats").innerHTML = entries
// }
// displayStats();

// MY SECOND ATTEMPT
// function displayStats() {
//     var output = document.getElementById("stats")
//     output.innerHTML = JSON.stringify(hero);
// }
// displayStats();

// MY THIRD ATTEMPT
// function displayStats() {
//     var output = document.getElementById("stats")
//     output.innerHTML = JSON.stringify(hero);
// }
// displayStats();
