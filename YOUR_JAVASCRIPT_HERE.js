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
    hero.weapon = object
    
  

    hero.inventory.push(object);    
    return hero;    
    hero.weapon.type = "dagger"
    hero.weapon.damage = 2
    return hero.weapon
};

function equipWeapon(hero, object) {
    hero.weapon.assign();
    hero.inventory.unshift(object);
};
