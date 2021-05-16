import "../App.css"

export function GetURL(url : string) {
    return (url.charAt(url.length - 1) === "/") ? url.slice(0, -1) : url;
}