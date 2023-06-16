const url = 'http://localhost:3000/products';

const deleteProduct = async (id) => {
 

  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    });
    console.log(response)
    if (!response.ok) {
      throw new Error(response.status + ' ' + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error en deleteProducts:', error);
    throw error;
  }
};

export default deleteProduct;
