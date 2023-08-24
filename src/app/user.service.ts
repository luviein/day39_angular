import { ulid } from 'ulid';
import { Injectable } from "@angular/core";
import Dexie from "dexie";
import { User } from "./model";

@Injectable()
export class userService extends Dexie{

  userCollection: Dexie.Table<User, string>
  constructor() {
    // name of database
    super("userdb")

    // construct the collection (state that this is the first version of the collection)
    this.version(1).stores({

      // ++ means auto increment, attribute must be a number not string
      user: "userId"
    })

    // creating table
    this.userCollection = this.table("user")
  }

  save(data: User) {
    data.userId = ulid()
    return this.userCollection.add(data)
  }

}
