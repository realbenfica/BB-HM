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
    } 
    else { 
        hero.weapon = hero.inventory[0]
        return object;
        
    };
    return hero;
};
