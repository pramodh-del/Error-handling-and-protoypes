function convertToNumber(string) {
    try {
        return Number(string);
    } catch (error) {
        return "Invalid number";
    }
}
