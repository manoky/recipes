const requests = () => next => action => {
  if (action.remote) {
    return fetch(`${API_URL}/${action.remote}`, {
      method: action.method || 'GET',
      body: JSON.stringify(action.body),
    })
      .then(res => res.json())
      .then(data => next({ type: `${action.type}_SUCCESS`, data }))
      .catch(error => next({ type: `${action.type}_FAILURE`, error }));
  }
  return next(action);
};
export default requests;
