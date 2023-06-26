// Agrega un item al localstorage, key es el nombre del item y value es lo que contiene
export function addLocalStorage(key: string, value: any): void {
    const items: any = getLocalStorage(key);
    items.push(value);
    localStorage.setItem(key, JSON.stringify(items));
}

// Obtiene los items del localstorage
export function getLocalStorage(key: string): Object {
    const items = localStorage.getItem(key);
    const parsedItems = JSON.parse(items || '[]');
    return parsedItems;
}

// Elimina un item del localstorage
export function deleteLocalStorage(key: string, value: string): void {
    // De tipo any porque de tipo Object no funciona
    const items: any = getLocalStorage(key); 
    const newItems = items.filter(
        (product: any) => product !== value);
    localStorage.setItem(key, JSON.stringify(newItems));
}
