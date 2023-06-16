



const url = "http://localhost:3000/users";


const getUsers = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(response.status + " " + response.statusText);
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default getUsers;
  
// const sendUser = (data) => {
   

// url = "http://localhost:3000/users"


// response = requests.post(url, data=data)

// print(response.status_code)
// print(response.json())

// }

// export default sendUser;