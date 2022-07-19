const CEST_URL = "http://192.168.15.3:5002/"
const CFOP_URL = "http://192.168.15.3:5003/"
const CST_URL = "http://192.168.15.3:5004/"
const NCM_URL = "http://192.168.15.3:5005/"


const acessarUrl = async (url) => {
    let promise = null;

    console.log("acessando: " + url);

    try {
        resposta = await fetch(url, { method: "GET" })
        if (resposta.ok) {
            promise = Promise.resolve(resposta.json());
        } else {
            promise = Promise.reject(resposta);
        }
    } catch (erro) {
        promise = Promise.reject(erro);
    }

    return promise;
}

export const ncmIsAlive = async () => {
    return acessarUrl(NCM_URL + "isalive");
}

export const getncm = async () => {
    return acessarUrl(NCM_URL + "ncm");
}

export const cstIsAlive = async () => {
    return acessarUrl(CST_URL  + "isalive");
}

export const getcst = async () => {
    return acessarUrl(CST_URL + "cst");
}

export const cestIsAlive = async () => {
    return acessarUrl(CEST_URL  + "isalive");
}

export const getcest = async () => {
    return acessarUrl(CEST_URL + "cest");
}

export const cfopIsAlive = async () => {
    return acessarUrl(CFOP_URL  + "isalive");
}

export const getcfop = async () => {
    return acessarUrl(CFOP_URL + "cfop");
}
