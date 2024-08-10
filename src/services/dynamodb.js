import axios from "axios";
import conf from "../conf/conf.js";


const baseURL = conf.apiEndpoint;

class DynamoDB {
    constructor() {
        this.baseURL = baseURL;
    }

    async checkUsername(username) {
        try {
            const response = await axios.get(
                `${baseURL}users/username/${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return response.data;
        } catch (error) {
            return error.code;
        }
    }    

    async createUser(data, isAvailable){
        if(isAvailable){
            try{
                const response = await axios.post(
                    `${baseURL}/users/createuser`,
                    data, //no curly brasis because data is already an object
                    {
                        headers: {
                            "Content-Type": "application/json", 
                        },
                    }
                );
                return response.data;
            }catch(error){
                return error.code;
            }
        }else{
            return "Username must be unique!"
        }
    }

    async getUserInfo(uid){
        try{
            const  response = await axios.get(
                `${baseURL}users/uid/${uid}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return response.data;
        }catch(error){
            return error.code;
        }
    }

    async getUserData(username){
        try{
            const response = await axios.get(
                `${baseURL}users/getdata/${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return response.data; //returned value is an array with user details at index 0 and post details at index 1 and so one
        }catch(error){
            return error.code;
        }
    }
}

const dbService = new DynamoDB();

export default dbService;

// const response = await dbService.checkUsername("sohail")
// console.log(response.data);

// const response = await dbService.getUserInfo("0VPjVzkkjoQ8mDmtMq8Ef5dK5az2")
// const data = {
//     "username": "ansari",
//     "SK": "PROFILE",
//     "uid": "ksdjfklasjdfklsjflksad",
//     "name": "Ansari",
// }

// const response = await dbService.createUser(data, true)