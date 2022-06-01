export default function getHealth(character) {
    
    if (character.health > 50) {
        return 'healthy';
    }

    if (character.health <= 50 && character.health >= 15) {
        return 'wonded';
    }

    if (character.health < 15) {
        return 'critical';
    }
};
