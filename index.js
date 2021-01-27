//I choose to use a switch case method over a matrix method so that
//this would be easyer to read and edit although, if this was made 
//for all 18 typings I would most likely use an object matirx.

// Switch Case Method
function calculateDamage(yourType, opponentType, attack, defense){
      let damage;
      console.log(yourType+opponentType)
    switch(yourType+' vs '+opponentType) {
        
      case 'fire vs grass':
      case 'water vs fire':
      case 'grass vs water':
      case 'electric vs water':
        console.log('very effective')
        damage = (50 * (attack / defense) * 2)
        break;
        
      case 'water vs grass':
      case 'fire vs fire':
      case 'fire vs water':
      case 'water vs water':
      case 'grass vs fire':
      case 'grass vs grass':
      case 'electric vs electric':
      case 'water vs electric': 
        console.log('not very effective')
        damage = (50 * (attack / defense) * .5)
        break;
        
        default:
        console.log('equal')
        damage = (50 * (attack / defense) * 1)
        break;
    }  
      return damage
    }