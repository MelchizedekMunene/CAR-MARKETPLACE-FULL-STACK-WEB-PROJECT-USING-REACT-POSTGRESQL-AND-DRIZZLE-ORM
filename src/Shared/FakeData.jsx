import { faker } from "@faker-js/faker";

function createRandomCarList () {
    return {
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1_4kOr6jUqCCKxc98bT9ONqL_1G2sFGYVg&s',
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