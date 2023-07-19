

export const apiFetch= async(param,data)=>{
    // FORMATO DATA REQUERIDO 
      
    // JSON.stringify({
    //      id:"12312312jhbdf198273sdsd",
    //      favs:["HOLA","CHUA"],
    //      cart:["prod1","prod2"],
    //      username:"SAHDAS",
    //      mail:"nisa@gmad.com"
    //      password:"iashdipoasdsa"
    // })

    try {
        const response = await fetch(`https://backend-mercadona-vercel.vercel.app/api/${param}`, {
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json"
          }
        });
    
        const res = await response.json();
        return res;
      } catch (error) {
        return error;
    }
}