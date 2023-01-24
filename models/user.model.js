const bcrypt = require('bcryptjs');

const db = require('../data/database');

class User {
    constructor(email, password, name, fullname, street, postal, city) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.fullname = fullname;
        this.addres = {
            street: street,
            postal: postal,
            city: city
        };
    }

    getUserWithSameEmail() {
        return db.getDb().collection('users').findOne({ email: this.email });
    };

    async signUp() {
        const hashedPassword = await bcrypt.hash(this.password, 12);

        const result = await db.getDb().collection('users').insertOne({
            email: this.email,
            password: this.password,
            name: this.name,
            address: this.addres
        });
    };

    hasMatchingPassword(hashedPassword) {
        return bcrypt.compare(this.password, hashedPassword);
    };
}

module.exports = User;