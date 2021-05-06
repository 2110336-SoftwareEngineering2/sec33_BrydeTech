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
    "isTutor": "on",
})
db.ads.insert({
    "_id": "606455864ba996619c112d9b",
    "name": "defalut",
    "photo_buffer": ""
})
db.courses.insert(
    {
        "_id": "60924197224d01525cfd0439",
        "name": "9999999",
        "tutor": "hash",
        "price": 9999,
        "subject": "Mathematics",
        "description": "999999",
        "link": "www.df.com",
        "photo_buffer": {
            "$binary": "iVBORw0KGgoAAAANSUhEUgAAAEkAAAA9CAAAAADEqxvXAAAACXBIWXMAAA7zAAAO8wEcU5k6AAAAEXRFWHRUaXRsZQBQREYgQ3JlYXRvckFevCgAAAATdEVYdEF1dGhvcgBQREYgVG9vbHMgQUcbz3cwAAAALXpUWHREZXNjcmlwdGlvbgAACJnLKCkpsNLXLy8v1ytISdMtyc/PKdZLzs8FAG6fCPGXryy4AAACS0lEQVRYw+2WP2hTURTGv6Y2FhNsQymIjVCIg3VQAkIQJwsqVJ2KVWyRINXBCiIBQc3QtDgIVkuWgg5KOlhE6uKfQRFFKFiwCtWCEURiddChhtYkL3n3fg5p0rfk30kEhdzhPc578OOcw/ede8CCR7Oig0I/TLJGJP7DJFVu08rIKW3UIqcvj3ybm7f0jLytlvRxAHagCfBekZNSTHDRh/bg9Mz0eTfswxlmyLQkJ5PxQex9qUgyegYdEXF1K7yHtgerwYde7JkTkjR5EDfySoi5ECLTzEg6/t7m+slkLgrCGy9qoSKkKfRYonnglVQF4YYhaqZy1e7EGPNRZaRxDFrswj6cWipWXuGO64foturrmnOrrDrFb+2NbyxJjK5rE6vgLI79WPvgx8a0rOMGP+3CUE4/xu1OuMiE0MH3HTi6kCLJd+EWwEnGRSRN3u1C5/FwZCLgBbatbxb3SZOP+wB7ywYAl0KtraTILQa5TPJFYIfb0z3+lc+a3IxLSHrtnVXCME4oUXVGbgooklqT/bggnr46/1QkuxCpzX33Hc55KUmt5A2syEn4ElLSxQOzVFmMSR5GQDrH9SGMrXbdJKMO11PxfRdC7y+ammSGv6/Dt0Shgzlra3idu/tibtxS4pySfhxZzMpgeQSeBevCUaEKZjYhmCQz5FQHJkiToulLUt+0205/Jo3n27FflUiphDKv2uHxjw44sC9W5a6iJncDQGP/XJVbj0FG75w7eflJ0bJKk8zsQFBlGvO/3H3rpDqpTqqT6qS/QPoD6qOlgIoDGLwAAAAASUVORK5CYII=",
            "$type": "0"
        },
        "video_name": [],
        "video_buffer": [],
        "video_size": [],
        "video_type": [],
        "rating": "-",
        "enrolled_date": "-",
        "student": ["tawan"],
        "score": [-1],
        "review": [""]
    }
)

db.logs.insert({
    "_id":  "606ac7e7a604b036086c2813",
    "username": "hash",
    "datatime": "2021-4-1 15:18:47"
})
db.notifications.insert({
    "_id": "6072e6df123f0c56acb79e6c",
    "username": "aa",
    "topic_id": {
        "$oid": "606d93e82c94eb0dbc6d8210"
    },
    "topic": "อยากถามเลขงับช่วยหน่อย",
    "comment": "test noti",
    "writer": "writer",
    "status": "read"
})
db.promotions.insert({
    "_id":  "6064576e6eafb93de4c63db4",
    "name": "songkran",
    "photo_buffer": {
        "$binary": "data:image/png;base64,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",
        "$type": "0"
    }
})