const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "task"

mongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        return console.log('error has occured')
    }

    console.log('All Perf')


    const db = res1.db(dbname)
        // insertone 2 document 
    db.collection('users').insertOne({
        name: 'mohamed',
        age: 24
    }, (error, data) => {
        if (error) {
            console.log('Unable to insert Data')
        }
        console.log(data.insertedId)
    })
    db.collection('users').insertOne({
            name: 'ali',
            age: 22
        }, (error, data) => {
            if (error) {
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
        })
        //inertmany 10 document
    db.collection('users').insertMany(
            [{
                    name: 'hoda',
                    age: 21
                },
                {
                    name: 'nada',
                    age: 25
                },
                {
                    name: 'ahmed',
                    age: 19
                },
                {
                    name: 'nerman',
                    age: 25
                },
                {
                    name: 'mostafa',
                    age: 24
                },
                {
                    name: 'esraa',
                    age: 25
                },
                {
                    name: 'noha',
                    age: 20
                },
                {
                    name: 'mahmoud',
                    age: 25
                },
                {
                    name: 'aya',
                    age: 28
                }, {
                    name: 'hana',
                    age: 25
                }
            ], (error, data) => {
                if (error) {
                    console.log('Unable to insert data')
                }
                console.log(data.insertedCount)
            }
        )
        // find match 25
    db.collection('users').find({ age: 25 }).toArray((error, users) => {
            if (error) {
                return console.log('error has occured')
            }
            console.log(users)
        })
        // fint limit 3
    db.collection('users').find({ age: 25 }).limit(3).toArray((error, users) => {
            if (error) {
                return console.log('error has occured')
            }
            console.log(users)
        })
        // set name 4
    db.collection("users").updateOne({ _id: mongodb.ObjectId("64d787edff2e94371b6a47f5") }, {
        $set: { name: "omer" },

    }).
    then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })
    db.collection("users").updateOne({ _id: mongodb.ObjectId("64d787edff2e94371b6a47f6") }, {
        $set: { name: "osman" },

    }).
    then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })
    db.collection("users").updateOne({ _id: mongodb.ObjectId("64d787edff2e94371b6a47f7") }, {
        $set: { name: "Osama" },

    }).
    then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })
    db.collection("users").updateOne({ _id: mongodb.ObjectId("64d787edff2e94371b6a47f8") }, {
        $set: { name: "metwally" },

    }).
    then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })
        // update for 1 inc
    db.collection("users").updateOne({ _id: mongodb.ObjectId("64d787edff2e94371b6a47f5") }, {
        $inc: { age: 20 }
    }).
    then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })
        // updatemany inc age 10
    db.collection("users").updateMany({}, {
            $inc: { age: 10 }
        })
        .then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => console.log(error))
        // deleteone for id=1
    db.collection("users").deleteOne({ _id: mongodb.ObjectId("64d787edff2e94371b6a47f5") })
        .then((data1) => { console.log(data1.deletedCount) })
        .catch((error) => console.log(error))
        // deletemany age 35
    db.collection("users").deleteMany({ age: 35 })
        .then((data1) => { console.log(data1.deletedCount) })
        .catch((error) => console.log(error))
})