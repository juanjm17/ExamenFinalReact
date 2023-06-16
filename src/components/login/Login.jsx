import { React, useState, useRef, useEffect } from "react";
import getUsers from "../../helpers/getUsers";

const Login = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
    // localStorage.setItem(users.map(user=>user.name.firstname+user.name.lastname),users.map(user=>{"username":user.username}))
  }, []);

  const getData = () => {
    getUsers()
      .then((users) => {
        setUsers(users);
      })
      
      .catch((error) => console.error(error));
  };

//   const getUserToLocalStorage = () => {
//   const valueOfKey =  users.forEach(user=>localStorage.setItem(user.name.firstname+user.name.lastname,user.username));
//   return valueOfKey
//   }
//  getUserToLocalStorage()

  

  let usernameRef = useRef(null);
  let passwordRef = useRef(null);

  console.log(usernameRef)
  const login = (e) => {
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
        console.log(username)
    e.preventDefault();
    if (username == "" && password == "") {
      console.log(
        "debes rellenar los formularios o la contraseña no reune los requisitos adecuados"
      );
      //   usernameRef  = ""
      //   passwordRef = ""
    } else {
      let findUser = users.find(
        (user) => user.username == username && user.password == password);
      let analysis = findUser != null ? true : false;

      console.log(analysis);
      if (analysis == true) {
        window.location.href = "http://localhost:5173/";
        
      } else {
        console.log("Usuario no encontrado");
        usernameRef.current.value  = ""
        passwordRef.current.value = ""
      }
    }
  };

  console.log(users)

  return (
    <div>
      <h1>EXAMEN RECUPERACION DWEC</h1>
      <p>Aquí vamos a inicirar sesión para acceder a la web</p>
      <label htmlFor="">Nomber</label>
      <form action="">
        <input type="text" placeholder="Escribe tu nombre" ref={usernameRef} />
        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          placeholder="Escribe tu password"
          ref={passwordRef}
        />
        <button onClick={(e) => login(e)}>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
