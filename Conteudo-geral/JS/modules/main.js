import Hero, {printHeroName as heroName, printHeroPower as heroPower} from "./superHero.class.js"

const hero = new Hero("Superman", "Visão de raio-x")
console.log(hero.name)
console.log(hero.power)

heroName(hero)
heroPower(hero)