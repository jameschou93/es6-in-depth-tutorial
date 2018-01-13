const league = ['Clark', 'Diana', 'Bruce']
const persona = ['Red Sun', 'Amazon', 'Detective']

class Superhero {
  constructor (hero, alias) {
    this.hero = hero
    this.alias = alias
  }

  hello() {
    console.log(`${this.alias} is actually ${this.hero}`)
  }
}

class Marvel extends Superhero{
  constructor (hero, alias, align){
    super(hero, alias)
    this.align = align
  }
}
export {league, persona, Superhero, Marvel}
