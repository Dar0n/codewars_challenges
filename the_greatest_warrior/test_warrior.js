const Warrior = require('./warrior');
const test = require('tape');

test("Let's try our warrior, shall we?", function(t){
  const Goku = new Warrior();
t.equal(Goku.level(), 1, "All warriors must start as LV 1")
t.equal(Goku.rank(), "Pushover", "All warriors must start as a Pushover")
t.equal(Goku.training(["Do ten push-ups", 95, 1]), "Do ten push-ups", "After obtaining a mastery, the achievement must be listed and returned")
t.equal(Goku.level(), 1, "After your warriors's first training, he/she must still be LV 1")
t.equal(Goku.battle(0), "Invalid level", "LV 0 enemies do not exist. This must be a mistake!")
t.equal(Goku.battle(1), "A good fight", "After fighting against a warrior of equal level, your warrior should provide the appropiate response")
t.equal(Goku.level(), 2, "With that fight under your belt, your warrior should now be ascended to LV 2")
t.equal(Goku.rank(), "Pushover", "A pushover, however, your warrior should remain")
t.equal(Goku.battle(3), "An intense fight", "Another battle, this time with a slightly more skilled enemy, should have your warrior provide an appropiate response")
t.equal(Goku.experience(), 225, "Your warrior's experience should be relative to his level")
t.equal(Goku.level(), 2, "Your should still remain LV 2")
t.equal(Goku.training(["Survive one night at the Forest of Death", 170, 2]), "Survive one night at the Forest of Death", "After obatining a mastery, your achievement must be listed and returned")
t.equal(Goku.training(["Mastered the Spirit Bomb", 1580, 10]), "Not strong enough", "Your warrior isn't skilled enough to do everything just yet")
t.equal(Goku.experience(), 395, "Your warrior's experience should be relative to his level")
t.equal(Goku.level(), 3, "Your warrior's experience should be relative to his level")
t.equal(Goku.battle(2), "A good fight", "Your enemy isn't exactly your level. Provide the appropriate response")
t.equal(Goku.level(), 4, "Your warrior should now be LV 3")
t.equal(Goku.experience(), 400, "Your warrior's experience should be relative to his level")
  
  t.end();
});