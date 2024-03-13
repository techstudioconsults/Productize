export function checkUserProfileValidity(obj: { [key: string]: any }): boolean {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (key !== 'logo' && obj[key] === null) {
                return false;
            }
        }
    }
    return true;
}
