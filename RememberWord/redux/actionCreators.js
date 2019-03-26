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

export function changeMemorizedStatus(id) {
    return {
        type: 'CHANGE_MEMORIZED_STATUS',
        id
    }
}

export function changeDisplayStatus(id) {
    return {
        type: 'CHANGE_DISPLAY_STATUS',
        id
    }
}

export function showAll(){
    return {
        type: 'FILTER_SHOW_ALL'
    }
}

export function showMemorized(){
    return {
        type: 'FILTER_MEMORIZED'
    }
}

export function showNeedPractice(){
    return {
        type: 'FILTER_NEED_PRACTICE'
    }
}