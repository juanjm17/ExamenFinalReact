const url = 'http://localhost:3000/products';

const sendData = async (id, title, price, desc,image) => {
  const updatedProduct = {
    title: title,
    price: price,
    description: desc
  };

  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    });
    
    if (!response.ok) {
      throw new Error(response.status + ' ' + response.statusText);
    }
    
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error en sendData:', error);
    throw error;
  }
};

export default sendData;
