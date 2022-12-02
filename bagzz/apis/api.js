export const request = async (path, options, stats) => {
  const response = await fetch(path, options);

  if (response.status >= 500) {
    console.error(response);
    throw new Error('Network error. Please try again');
  }

  if (response.status === 404) {
    console.error(response);
    throw new Error('Not found');
  }

  if (response.status >= 400) {
    const responseParsed = await response.json();
    throw new Error(responseParsed.message);
  }

  try {
    return await response.json();
  } catch (e) {
    return {ok: response.ok};
  }
};

export const listProducts = async () =>
  request('https://virtserver.swaggerhub.com/I425/ReactJS/1.0.0/items', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const getProduct = async productId =>
  request(
    `https://virtserver.swaggerhub.com/I425/ReactJS/1.0.0/items/${productId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );