const db = require('./models'); // grab the database, add all models
// create a user inside our user table
// db.user.create({
//   firstName: 'Cassie',
//   lastName: 'McManus',
//   age: 30,
//   email: 'catherinemcmanus'
// }).then(createdUser => {
//   console.log(createdUser);
// })
// if you're adding to a database DON'T use nodemon! It'll push to the database every time you hit save

// read from a table in the database "users"
// db.user.findOne({ // only returns ONE result
//   where: { firstName: 'Andrew' }
// }).then(foundUser => {
//   console.log(foundUser.get())
// })
// // find ALL users
// db.user.findAll().then(allUsers => {
//   console.log(allUsers[0].get());
// });
// update a user:
// db.user.update({
//   email: 'andrew.e.mcmanus'
// }, {
//   where: { firstName: 'Andrew'}
// }).then(numRowsChanged => {
//   console.log(numRowsChanged);
// })
// DELETE a user
// db.user.destroy({
//   where: { age: 35 }
// }).then(numRowsDeleted => {
//   console.log(numRowsDeleted)
// });

// race condition illustration: when two database requests are simultaneously "racing" to the finish line (the database)
// db.user.create({
//   firstName: 'Jim',
//   lastName: 'Jones',
//   age: 45
// })
// only run a create command once!

// db.user.findOne().then((foundUser) => {
//   // console.log(foundUser);
//   foundUser.createPet({
//     name: 'Keeper1',
//     speciies: 'Golden Retriever'
//   })
// })

// db.pet.findOne({
//   where: {
//     name: 'Violet'
//   }
// }).then((violet) => {
//   violet.getUser().then((foundUser) => {
//     console.log(foundUser);
//   })
// })

// db.pet.create({
//   name: 'Hercules',
//   species: 'Min pin'
// }).then((herc) => {
//   console.log(herc);
// })

// db.pet.findOne({
//   where: {
//     name: 'Hercules'
//   }
// }).then((herc) => {
//   db.user.findOne().then((foundUser) => {
//     herc.setUser(foundUser)
//   })
// })
// because of hasMany and belongsTo, this knows what userId to assign the pet to

// Many to Many requires the equivalent of a JOIN table
// db.toy.create({
//   type: 'squeaky',
//   color: 'red'
// })
// db.pet.findOne({
//   where: {
//     name: 'Moose'
//   }
// }).then((moose) => {
//   db.toy.findOne({
//     where: {
//       type: 'squeaky',
//       color: 'red'
//     }
//   }).then((foundToy) => {
//     moose.addToy(foundToy)
//   })
// })

// db.pet.findOne({
//   where: {
//     name: 'Keeper'
//   }
// }).then((moose) => {
//   db.toy.findOne({
//     where: {
//       type: 'squeaky',
//       color: 'red'
//     }
//   }).then((foundToy) => {
//     //let dog = 'Keeper1'
//     keeper.addToy(foundToy)
//   })
// })
// FIND ALL PETS THAT SHARE ONE TOY:
db.toy.findOne({
  where: {
    type: 'squeaky',
    color: 'red'
  }
}).then((pets) => {
  console.log(pets);
})
