import { Injectable } from "@angular/core";
import { User } from "./model";
import { ulid } from "ulid";

@Injectable()
export class StorageService {

  lastKey = ""
  save(user: User) {
    const id = ulid()

    // convert data to string
    localStorage.setItem(id, JSON.stringify(user))
    this.lastKey = id
    return id
  }

  load(id: string) : User | null {
    const data = localStorage.getItem(id)
    if(!data) {
      return null
    }
    return JSON.parse(data) as User
  }

  remove(id: string) {
    localStorage.removeItem(id)
  }
}
