import * as assert from '../utils/assertions'

export function saveToLocalStorage(variable, STORAGE_KEY){
    assert.checkDefined(variable)
    assert.checkString(STORAGE_KEY)

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(variable)
    )
}

export function getFromLocalStorage(STORAGE_KEY){
    assert.checkString(STORAGE_KEY)
    JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    )
}