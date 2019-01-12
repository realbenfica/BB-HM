let hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2,
    },
};

function rest(hero) {
    hero.health = 10;
    return hero;
};

function pickUpItem(hero, object) {
    let weapon = hero.weapon;    
    hero.inventory.push(weapon);
    return hero;
};

function equipWeapon() {

};