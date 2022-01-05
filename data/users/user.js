let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const scopes = require('./scopes');

let RoleSchema = new Schema({
    nameRole: { type: String },
    scopes: [{
        type: String, enum:
            [
                scopes["read-own-reserves"], scopes["update-own-reserve"], scopes["read-users"],
                scopes["update-reserve"], scopes["read-reserves"], scopes["delete-reserve"],
                scopes["create-room"], scopes["update-room"], scopes["read-reserve-client"],
                scopes["delete-room"], scopes["create-reserve"], scopes["detail-reserve"], scopes["verify-logged-in"]
            ],
    }]
});

//create a schema
let UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: RoleSchema }
});


let User = mongoose.model('User', UserSchema);
module.exports = User;