function Warrior() {
  this.myLevel = 1;
  this.myExperience = 100;
  this.ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
  this.myRank = 0;
  this.level = level;
  this.experience = experience;
  this.rank = rank;
  this.battle = battle;
  this.updateStats = updateStats;
  this.training = training;
  this.achievementsList = [];
  this.achievements = achievements;

  function level() {
    return this.myLevel;
  }

  function experience() {
    return this.myExperience;
  }

  function rank() {
    return this.ranks[this.myRank];
  }

  function updateStats() {
    if (this.myExperience > 10000) {
      this.myExperience = 10000;
    }
    this.myLevel = Math.floor(this.myExperience/100);
    this.myRank = Math.floor(this.myLevel/10);
  }

  function battle(enemyLvl) {
    let result = '';
    if (enemyLvl < 1 || enemyLvl > 100) {
      result = 'Invalid level';
    }
    else if (enemyLvl === this.level()) {
      if (this.level() < 100) this.myExperience += 10;
      result = "A good fight";
    }
    else if (enemyLvl === this.level() - 1) {
      if (this.level() < 100) this.myExperience += 5;
      result = "A good fight";
    }
    else if (enemyLvl < this.level() - 1) {
      // do nothing, since in this case myExperience doesn't change
      result = "Easy fight";
    }
    else if (enemyLvl > this.level()) {
      const enemyRank = Math.floor(enemyLvl/10);
      if (enemyRank > this.myRank && this.level() <= enemyLvl - 5) {
        result = "You've been defeated";
      }
      else {
        const diff = enemyLvl - this.level();
        this.myExperience += 20 * diff * diff;
        result = "An intense fight";
      }
    }
    this.updateStats();
    return result;
  }

  function training(training) {
    const [description, experience, levelLimit] = training;
    if (this.level() < levelLimit) {
      return "Not strong enough";
    }
    this.myExperience += experience;
    this.updateStats();
    this.achievementsList.push(description);
    return description;
  }

  function achievements() {
    return this.achievementsList;
  }

}

module.exports = Warrior;