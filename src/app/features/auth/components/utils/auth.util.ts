
export const saveToken = (token: string, refreashToken: string) =>{
  try{
    localStorage.setItem('accessToken', token);
    localStorage.setItem('refreashToken', refreashToken);
    return true
  }catch (error){
    console.log(error);
    return false

  }
}
