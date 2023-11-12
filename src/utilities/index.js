export function debounce(func, wait) {
    let timeout
    return function (...args) {
        const later = () => {
            timeout = null
            func.apply(this, args)
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait)
    }
}

export function slugify(str) {
    return str
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\\-]+/g, '')
        .replace(/\\-\\-+/g, '-')
}