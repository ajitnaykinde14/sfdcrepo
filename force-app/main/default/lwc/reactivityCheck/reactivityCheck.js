import { LightningElement, track } from 'lwc';

export default class ReactivityCheck extends LightningElement {
    userAddress = '19 Yemen Road, Yemen'

    @track myPersonalDetails = [
        {
            "_id": "68b9255ef016358930417117",
            "index": 0,
            "guid": "1173e4f7-65c0-4967-b3d6-ec4156057fac",
            "isActive": false,
            "balance": "$3,552.23",
            "picture": "http://placehold.it/32x32",
            "age": 40,
            "eyeColor": "brown",
            "name": "Cora Rollins",
            "gender": "female",
            "company": "PHOLIO",
            "email": "corarollins@pholio.com",
            "phone": "+1 (934) 560-3257",
            "address": "522 Bartlett Street, Zortman, Kansas, 8427",
            "registered": "2023-09-03T12:27:29 -06:-30",
            "latitude": -3.141559,
            "longitude": -56.721213,
            "tags": [
                "veniam",
                "mollit",
                "aliqua",
                "cupidatat",
                "esse",
                "do",
                "dolor"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Allison English"
                },
                {
                    "id": 1,
                    "name": "Moore Donovan"
                },
                {
                    "id": 2,
                    "name": "Joanne Whitley"
                }
            ],
            "greeting": "Hello, Cora Rollins! You have 6 unread messages.",
            "favoriteFruit": "apple"
        }
    ]
    updateAddress() {
        this.userAddress = '9 Yemen Road, Yemen'
        this.myPersonalDetails[0].guid = "68b9255ef016358930417117"
        this.myPersonalDetails[0].friends[0].name = "Ajit Naykinde"
    }
} 