db.createUser(
    {
        user: "admin",
        pwd: "1234",
        roles: [
            {
                role: "userAdminAnyDatabase",
                db: "BrydeTech"
            },"readWriteAnyDatabase"
        ]
    }
);

db.createCollection("users");
db.createCollection("promotions");
db.createCollection("courses");
db.createCollection("Q&A");
db.createCollection("ads");
db.createCollection("logs");
db.createCollection("notification");


db.users.insert({
    "_id":  "604e115d91f6fa054cdc2089",
    "username": "haha",
    "password": "$2a$10$o1yloZfSNQd14sbKVifbMex/2sSmLSn3EFI7P/JhvQpKuNdX27OfG",
    "fname": "aaaa",
    "lname": "bbbb",
    "email": "suntawan2543@gmail.com",
    "ppnumber": "0000000010",
    "isTutor": "on"
})
