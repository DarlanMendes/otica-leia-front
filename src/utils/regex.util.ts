export function isValidPassword(valueField: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    const isValid = regex.test(valueField); 
    return isValid;
}
