// Async Action
export const updateValue = async (dispatch) => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  try {
    const response = await fetch(url);
    dispatch({ type: 'global/update', payload: await response.json()  });
    
  } catch (error) {
    console.log('error: ', error)
  }
};

// Sync Action
// export const updateValue = (dispatch) => {
//   dispatch({ type: 'global/update', payload: [{title: 'test'}]  });
// };
