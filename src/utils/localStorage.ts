// Agrega un item al localstorage, key es el nombre del item y value es lo que contiene
export function addLocalStorage(key: string, value: any): void {
    let items: any = getLocalStorage(key);
    items.push(value);
    localStorage.setItem(key, JSON.stringify(items));
}

// Obtiene los items del localstorage
export function getLocalStorage(key: string): Object {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Elimina un item del localstorage
export function deleteLocalStorage(key: string, value: any): void {
    // De tipo any porque de tipo Object no funciona :(
    let items: any = getLocalStorage(key); 
    let newItems = items.filter(
        (product: any) => product !== value);
    localStorage.setItem(key, JSON.stringify(newItems));
}
