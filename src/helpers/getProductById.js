


const getProductById = async (id) => {
    const url = "http://localhost:3000/products/"+id;
    
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(response.status + " " + response.statusText);

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getProductById;
