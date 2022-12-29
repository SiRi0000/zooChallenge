import { describe, expect, test } from 'vitest'

import { faker } from '@faker-js/faker'
import { calculateAgeInYears } from './helpers'
import{calculateAmountOfFood} from './helpers'

describe('The calculateAgeInYears helper', () => {
  test('handles over 100 years correctly', () => {
    const date = faker.date.between('1800-01-01T00:00:00.000Z', '1900-01-01T00:00:00.000Z')
    expect(calculateAgeInYears(date)).toBeGreaterThanOrEqual(100)
  })

  // For the zookeepers its easier to conservatively assume that an animal is older rather than younger
  test('always rounds up', () => {
    const today = new Date()
  
    expect(calculateAgeInYears(today)).toBe(0)
  })



})
/*
describe("The calculateAmountOfFood helper", ()=>{

test("animal is a fish", ()=> {
  expect(calculateAmountOfFood(0.5,0.5,2,"cherry","male","fish")).toBe(0)
})

test("animal is 21, fav fruit is cherry and gender is male", ()=> {
  expect(calculateAmountOfFood(1,0.5,21,"cherry","male","cat")).toBe(1041.71)
})

test("animal is 1, fav fruit is cherry an gender is male",()=> {
  expect(calculateAmountOfFood(1,0.5,1,"cherry","male","cat")).toBe(1042.05)
})

test("normal animal",()=>{
  expect(calculateAmountOfFood(1,0.5,5,"banana","female","cat")).toBe(0.19)
})

})*/