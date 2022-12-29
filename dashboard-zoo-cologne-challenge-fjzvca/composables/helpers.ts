import { Animal } from "@faker-js/faker/animal"
import { type } from "os"

export const calculateAgeInYears = (birthdate: Date): Number => {
  const today = new Date()
  const differenceInMilliseconds = today.getTime() - birthdate.getTime()

  return Math.round(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365))
}



//This Methode calculates the food required for the next calendar month
export const calculateAmountOfFood = (height: number,weigt: number,age: number,favFruit: string,gender: string,species : string): number => {

  // Calculate formula
  let amountOfFood = (height+weigt)/250

  if(species==="fish"){
    return 0
  } else{
    if(age> 20){
      amountOfFood /=2 
    } else if (age < 2){
      amountOfFood *=2
    }
    if(favFruit ==="cherry"){
      amountOfFood +=28
    }
    if(gender=== "male"){
      amountOfFood += (amountOfFood*20/100)
    }
  }

  //Check if what month is next month
  const nextMonth = (new Date().getMonth()+1)%12
  
  //February
  if(nextMonth === 1){
    return Math.round(amountOfFood*28*100)/100 //rounding the number to 2 decimal places
  }
  //Month with 30 days
  else if( nextMonth === 3|| nextMonth === 5|| nextMonth === 8|| nextMonth === 10 ){
    return Math.round(amountOfFood*30*100)/100
  } 
  // Month with 31 days
  else {
    return Math.round(amountOfFood*31*100)/100
  }
} 

