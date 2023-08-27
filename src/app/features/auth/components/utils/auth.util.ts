
export const saveToken = (token: string) =>{
  try{
    localStorage.setItem('accessToken', token);
    return true
  }catch (error){
    console.log(error);
    return false

  }
}
