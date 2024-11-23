import { faker } from "@faker-js/faker";

function createRandomCarList () {
    return {
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image: 'https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-maybach-s680-102-66181cf7a54a6.jpg?crop=0.837xw:0.707xh;0.0862xw,0.185xh&resize=1200:*',
        miles:1500,
        gearType:'Automatic',
        price:faker.finance.amount({min:2500000, max:8500000})
    };
}

const carList = faker.helpers.multiple(createRandomCarList,{
    count:7
})

export default {
    carList
}