export default function getHealth(character) {
    
    if (character.health > 50) {
        return 'healthy';
    }

    if (14 < character.health < 51) {
        return 'wonded';
    }

    if (character.health < 15) {
        return 'critical';
    }
}
