function getPerson(person) {
    try {
        if (!person || typeof person !== "object") {
            throw new Error("Invalid parameter type");
        }
        const {name} = person;
        const age = person.age;
        return `Name: ${name}, Age: ${age}`;
    } catch (error) {
        return error.message;
    }
}
