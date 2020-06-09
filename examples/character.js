module.exports = function (health, mana) {
  this.health = health;
  this.initialHealth = health
  this.mana = mana;
  this.initialMana = mana;
  this.status = 'alive';

  this.castSpell = function(spellCost) {    
    if (this.mana >= spellCost) {
      this.mana = this.mana - spellCost;
      return true;
    }

    return false;
  }

  this.castFrostBolt = function() {
    const frostBoltManaCost = 10;
    this.castSpell(frostBoltManaCost);
  }

  this.castFireBall = function() {
    const fireBallManaCost = 15;
    this.castSpell(fireBallManaCost);
  }

  this.castFrostNova = function(time) {
    const frostNovaManaCost = time * 10;
    this.castSpell(frostNovaManaCost);
  }

  this.getHarassed = function(hitStrength) {
    this.health = this.health - hitStrength;
    this.status = this.health <= 0 ? 'dead' : 'alive';

    return this.status;
  }

  this.reset = function() {
    this.health = this.initialHealth;
    this.mana = this.initialMana;
  }
}
