// exports.Task = function(){
//     return {
//         userFacebookId: "10215547018569143",
//         header: "Eating",
//         patron: null,
//         status: "completed",
//         body: "need to eat banana",
//         dateCreated: "20/08/18"
//     };
// }

export class Task{

    constructor(userFacebookId , header , patron , status , body , dateCreated){
        this.userFacebookId = userFacebookId;
        this.header = header;
        this.patron = patron;
        this.status = status;
        this.body = body;
        this.dateCreated = dateCreated;
    }
}

