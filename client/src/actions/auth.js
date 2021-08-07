import * as api from '../api/index';



export const signIn = (formData, router) => async(dispatch) => {
    try{
        const { data } = await api.signIn(formData);
        dispatch({ type: 'AUTH', data})
        router.push('/');
    }catch(error){
        alert("Incorrect Login credentials.")
        console.log(error);
    }
}


export const signUp = (formData, router) => async(dispatch) => {
    try{
        const { data } = await api.signUp(formData);
        dispatch({ type: 'AUTH', data})
        router.push('/');
    }catch(error){
        console.log(error);
        alert("Password did not match.")
    }
}