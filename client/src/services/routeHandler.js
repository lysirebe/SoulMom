export const routeHandler = (navigateTo, jwtToken)=>{
    if(jwtToken != null && Object.keys(jwtToken).length){
        console.log(jwtToken)
        navigateTo('/dashboard')
    }
    console.log(jwtToken)
}