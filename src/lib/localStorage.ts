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
<<<<<<<< HEAD:src/scripts/utils/localStorage.ts
export function deleteLocalStorage(key: string, value: string): void {
    // De tipo any porque de tipo Object no funciona
    const items: any = getLocalStorage(key); 
    const newItems = items.filter(
========
export function deleteLocalStorage(key: string, value: any): void {
    // De tipo any porque de tipo Object no funciona :(
    let items: any = getLocalStorage(key);
    let newItems = items.filter(
>>>>>>>> 74b209d4666fcb18c30dad0de7c71d184fb30d78:src/lib/localStorage.ts
        (product: any) => product !== value);
    localStorage.setItem(key, JSON.stringify(newItems));
}
