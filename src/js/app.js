export default function getHealth(character) {
  let result;

  if (character.health > 50) {
    result = 'healthy';
  } else if (character.health <= 50 && character.health >= 15) {
    result = 'wonded';
  } else if (character.health < 15) {
    result = 'critical';
  }

  return result;
}
