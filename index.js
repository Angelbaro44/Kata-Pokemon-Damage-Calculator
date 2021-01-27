//I choose to use a switch case method over a matrix method so that
//this would be easyer to read and edit although, if this was made 
//for all 18 typings I would most likely use an object matirx.

// Switch Case Method
function calculateDamage(yourType, opponentType, attack, defense){
      let damage;
      console.log('{'+yourType+' vs '+opponentType)
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
     console.log(damage+'}');
      return damage
    }


    //Test Cases
    calculateDamage("fire", "water", 100, 100)//Expected Result 25
    calculateDamage("grass", "water", 100, 100)//Expected Result 100
    calculateDamage("electric", "fire", 100, 100)//Expected Result 50
    calculateDamage("grass", "electric", 57, 19)//Expected Result 150
    calculateDamage("grass", "water", 40, 40)//Expected Result 100
    calculateDamage("grass", "fire", 35, 5)//Expected Result 175
    calculateDamage("fire", "electric", 10, 2)//Expected Result 250





