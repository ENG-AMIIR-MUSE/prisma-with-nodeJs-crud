import {  PrismaClient } from "@prisma/client";

const prisma   = new PrismaClient()

async function seed(){
    try{
        // await prisma.rating.deleteMany()
        // await prisma.Resturant.deleteMany()
        // await prisma.owner.deleteMany()
        // await prisma.owner.create({
        //     data: {
        //       name: 'Ahmed Wali',
        //       email: 'ahmed@gmail.com',
        //       created: new Date('2022-03-30T00:00:00.000Z'),
        //       updated: new Date('2022-03-30T00:00:00.000Z'),
        //     },
        //   });
      
        //   await prisma.owner.create({
        //     data: {
        //       name: 'Abdirahman Yusuf',
        //       email: 'abdirahman@gmail.com',
        //       created: new Date('2022-03-30T00:00:00.000Z'),
        //       updated: new Date('2022-03-30T00:00:00.000Z'),
        //     },
        //   });
      
        //   await prisma.owner.create({
        //     data: {
        //       name: 'Fartun Jamac',
        //       email: 'fartun@gmail.com',
        //       created: new Date('2022-03-30T00:00:00.000Z'),
        //       updated: new Date('2022-03-30T00:00:00.000Z'),
        //     },
        //   });
      
          // Seed data for the Restaurant model
          // await prisma.Resturant.create({
          //   data:{
          //       ownerId:27,
          //       name:"salaa",
          //       location:"yaqshid",
          //       created: new Date('2022-03-30T00:00:00.000Z'),
          //       updated: new Date('2022-03-30T00:00:00.000Z'),
          //   }
          // })
          // await prisma.resturant.create({
          //   data: {
          //       ownerId: 29,
          //     name: 'Salama Restaurant',
          //     location: 'Saint Cloud, MN',
          //     created: new Date('2022-03-30T00:00:00.000Z'),
          //     updated: new Date('2022-03-30T00:00:00.000Z'),
          //   },
          // });
      
          // await prisma.resturant.create({
          //   data: {
          //       ownerId: 28,
          //     name: 'Afro Deli',
          //     location: 'Minnesota',
          //     created: new Date('2022-03-30T00:00:00.000Z'),
          //     updated: new Date('2022-03-30T00:00:00.000Z'),
          //   },
          // });
      
          // await prisma.restaurant.create({
          //   data: {
          //     name: 'Pizza Hut',
          //     location: 'Saint Paul, MN',
          //     ownerId: 1,
          //     created: new Date('2022-03-30T00:00:00.000Z'),
          //     updated: new Date('2022-03-30T00:00:00.000Z'),
          //   },
          // });
      
          // Seed data for the Rating model
          await prisma.rating.create({
            data: {
              rating: 5,
              resturantId: 3,
              created: new Date('2022-03-30T00:00:00.000Z'),
              updated: new Date('2022-03-30T00:00:00.000Z'),
              comment:"my resturant"

            },
          });
      
          await prisma.rating.create({
            data: {
              rating: 4,
              resturantId: 4,
              created: new Date('2022-03-30T00:00:00.000Z'),
              updated: new Date('2022-03-30T00:00:00.000Z'),
              comment:"my resturant"
            },
          });
      
          await prisma.rating.create({
            data: {
              rating: 3,
              resturantId: 5,
              created: new Date('2022-03-30T00:00:00.000Z'),
              updated: new Date('2022-03-30T00:00:00.000Z'),
              comment:"my resturant"

            },
          });
        console.log("seed is done ");
    }catch(error){
        console.log(error)
        process.exit(1)
    }finally{
        await prisma.$disconnect() // close the connection
    }
}
seed()