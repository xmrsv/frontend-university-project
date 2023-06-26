/**
 * Añade un item al localstorage
 * @param key Nombre del item
 * @param value Valor del item
 */
export function addLocalStorage(key: string, value: any): void {
    const items: any = getLocalStorage(key);
    items.push(value);
    localStorage.setItem(key, JSON.stringify(items));
}

/**
 * Obtiene un item del localstorage
 * @param key Nombre del item
 * @returns Un array de items del localstorage
 */
export function getLocalStorage(key: string): Object {
    const items = localStorage.getItem(key);
    const parsedItems = JSON.parse(items || '[]');
    return parsedItems;
}

/**
 * Elimina un item del localstorage
 * @param key Nombre del item 
 * @param value valor del item
 */
export function deleteLocalStorage(key: string, value: string): void {
    // De tipo any porque de tipo Object no funciona
    const items: any = getLocalStorage(key); 
    const newItems = items.filter((product: any) => product !== value);
    localStorage.setItem(key, JSON.stringify(newItems));
}
