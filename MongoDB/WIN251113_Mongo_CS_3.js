/**
 * MongoDB Case Study 3: Transactions
 * NPTEL Vinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 *
 * IMPORTANT:
 * Steps to Run:
 * Terminal 1 (Leave this running):
 *      "<PATH to MONGOD>/mongod.exe" --replSet rs0 --dbpath "<PATH to DATABASE>/db" --port 27018
 * Terminal 2:
 *      mongosh --port 27018
 *      rs.initiate()
 *      load("WIN251113_Mongo_CS_3.js")
 */

use("test");

// Clean collections
db.users.deleteMany({});
db.transactions.deleteMany({});

// Insert initial users
const alice_id = db.users.insertOne({
    name: "Alice",
    balance: 500.0,
}).insertedId;

const bob_id = db.users.insertOne({
    name: "Bob",
    balance: 1000.0,
}).insertedId;

// ---------------- TRANSFER FUNCTION ----------------

function transferPayment(sender_id, recipient_id, amount) {
    const session = db.getMongo().startSession();

    try {
        session.startTransaction({
            readConcern: { level: "local" },
            writeConcern: { w: "majority" },
        });

        const usersCollection = session.getDatabase("test").users;
        const transactionsCollection = session.getDatabase("test").transactions;

        usersCollection.updateOne({ _id: sender_id }, { $inc: { balance: -amount } });

        usersCollection.updateOne({ _id: recipient_id }, { $inc: { balance: amount } });

        transactionsCollection.insertOne({
            from: sender_id,
            to: recipient_id,
            amount: amount,
            date: new Date(),
            status: "completed",
        });

        session.commitTransaction();
        print("Transfer committed successfully (ACID)");
    } catch (e) {
        session.abortTransaction();
        print("Transfer failed. Transaction aborted.");
        print(e);
    } finally {
        session.endSession();
    }
}

// ---------------- DISPUTE FUNCTION ----------------

function disputePayment(sender_id, recipient_id, amount) {
    const session = db.getMongo().startSession();

    try {
        session.startTransaction({
            readConcern: { level: "local" },
            writeConcern: { w: "majority" },
        });

        const usersCollection = session.getDatabase("test").users;
        const transactionsCollection = session.getDatabase("test").transactions;

        usersCollection.updateOne({ _id: sender_id }, { $inc: { balance: amount } });

        usersCollection.updateOne({ _id: recipient_id }, { $inc: { balance: -amount } });

        transactionsCollection.updateOne(
            { from: sender_id, to: recipient_id, status: "completed" },
            { $set: { status: "refunded" } }
        );

        transactionsCollection.insertOne({
            from: recipient_id,
            to: sender_id,
            amount: amount,
            date: new Date(),
            status: "refund",
        });

        session.commitTransaction();
        print("Refund committed successfully (ACID)");
    } catch (e) {
        session.abortTransaction();
        print("Refund failed. Transaction aborted.");
        print(e);
    } finally {
        session.endSession();
    }
}

// ---------------- EXECUTION ----------------

print("\nInitial Users:");
printjson(db.users.find().toArray());

print("\nTransferring $100 from Alice to Bob...");
transferPayment(alice_id, bob_id, 100.0);

print("\nAfter Transfer:");
printjson(db.users.find().toArray());
printjson(db.transactions.find().toArray());

print("\nDisputing the payment...");
disputePayment(alice_id, bob_id, 100.0);

print("\nAfter Refund:");
print("Users:");
printjson(db.users.find().toArray());

print("Transactions:");
printjson(db.transactions.find().toArray());

// OUTPUT:

/*
Initial Users:
[
  {
    _id: ObjectId('69917ae4a0e95425197c2907'),
    name: 'Alice',
    balance: 500
  },
  {
    _id: ObjectId('69917ae4a0e95425197c2908'),
    name: 'Bob',
    balance: 1000
  }
]

Transferring $100 from Alice to Bob...
Transfer committed successfully (ACID)

After Transfer:
[
  {
    _id: ObjectId('69917ae4a0e95425197c2907'),
    name: 'Alice',
    balance: 400
  },
  {
    _id: ObjectId('69917ae4a0e95425197c2908'),
    name: 'Bob',
    balance: 1100
  }
]
[
  {
    _id: ObjectId('69917ae4a0e95425197c2909'),
    from: ObjectId('69917ae4a0e95425197c2907'),
    to: ObjectId('69917ae4a0e95425197c2908'),
    amount: 100,
    date: ISODate('2026-02-15T07:51:00.641Z'),
    status: 'completed'
  }
]

Disputing the payment...
Refund committed successfully (ACID)

After Refund:
Users:
[
  {
    _id: ObjectId('69917ae4a0e95425197c2907'),
    name: 'Alice',
    balance: 500
  },
  {
    _id: ObjectId('69917ae4a0e95425197c2908'),
    name: 'Bob',
    balance: 1000
  }
]
Transactions:
[
    balance: 1000
  }
]
Transactions:
[
]
Transactions:
[
  {
    _id: ObjectId('69917ae4a0e95425197c2909'),
    from: ObjectId('69917ae4a0e95425197c2907'),
    to: ObjectId('69917ae4a0e95425197c2908'),
    amount: 100,
    date: ISODate('2026-02-15T07:51:00.641Z'),
    status: 'refunded'
  },
  {
    _id: ObjectId('69917ae4a0e95425197c290a'),
    from: ObjectId('69917ae4a0e95425197c2908'),
  {
    _id: ObjectId('69917ae4a0e95425197c290a'),
    from: ObjectId('69917ae4a0e95425197c2908'),
    to: ObjectId('69917ae4a0e95425197c2907'),
    to: ObjectId('69917ae4a0e95425197c2907'),
    amount: 100,
    amount: 100,
    date: ISODate('2026-02-15T07:51:00.854Z'),
    status: 'refund'
  }
]
true
*/
