import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const SetCookie = (userData) => {
    const option = {maxAge: 3600};
    for(const [key, value] of Object.entries(userData)) {
        cookies.set(key, value, option);
    };
}

export const DeleteCookie = (fields) => {
    fields.forEach((field) => {
        cookies.remove(field);
    });
}

export const hasCookie = () => {
    const fields = ['accessToken', 'email', 'givenName', 'familyName', 'imageUrl', 'name', 'googleId'];
    const obj = {
        haslogin: false
    };
    if (cookies.get('accessToken')) {
        obj.haslogin = true;
        fields.forEach((field) => {
            obj[field] = cookies.get(field) || 'lorem ipsum'
        });
    }
    return obj;
}