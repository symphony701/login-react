export default class http{
  ruta = 'localhost:3001';
  async login(value){
    const response = await fetch(`http://${this.ruta}/users?user=${value.user}&password=${value.password}`);
    const res = await response.json();
    if(res.length>0){
      return true;
    }
    return false;
  }
}

