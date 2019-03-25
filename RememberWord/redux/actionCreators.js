export function toggleIsAdding() {
    return {
        type: 'CHANGE_ADDING_STATUS'
    }
}

export function addNewWord(en, vn) {
    return {
        type: 'ADD_NEW_WORD',
        en,
        vn
    }
}