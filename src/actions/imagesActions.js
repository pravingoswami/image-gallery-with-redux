import axios from 'axios'


export const setImages = (images) => {
    return {
        type : 'SET_IMAGES',
        payload : images
    }
}

export const startSetImages = () => {
    return (dispatch) => {
        axios.get('https://picsum.photos/v2/list?page=2&limit=30')
            .then(response => {
                console.log(response.data)
                dispatch(setImages(response.data))
            })
            .catch(err => console.log(err))
    }
}

const editImage = (id, formData) => {
    return {
        type : "EDIT_IMAGE",
        payload : {id, formData}
    }
}

export const startEditImage = (id, formData, redirect) => {
    return(dispatch) => {
        dispatch(editImage(id, formData))
        redirect()
    }
}