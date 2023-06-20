import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";


@Injectable()
export class UserService{


    constructor(private logger :LoggerService){

    }
    users=[
        {name:'john',status:'Active'},
        {name:'mark',status:'InActive'},
        {name:'sasi',status:'Active'},

    ]
    addnewuser(name:string,status:string){
        this.users.push({name:name,status:status});
        this.logger.LogMessage(name,status);
    }
}