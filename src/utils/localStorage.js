// Agrega un item al localstorage, key es el nombre del item y value es lo que contiene
export function addLocalStorage(key, value) {
    let items = getLocalStorage(key);
    items.push(value);
    localStorage.setItem(key, JSON.stringify(items));
}

// Obtiene los items del localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Elimina un item del localstorage
export function deleteLocalStorage(key, value) {
    let items = getLocalStorage(key);
    let newItems = items.filter((i) => i !== value);
    localStorage.setItem(key, JSON.stringify(newItems));
}
