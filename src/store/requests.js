const cache = new Map();
const set = (key, value) => cache.set(key, { value, ttl: Date.now() + 300000 });
const find = key => cache.get(key);

const requests = () => next => action => {
  if (action.remote) {
    if (!action.method || action.method === 'GET') {
      const cacheData = find(action.remote);
      if (cacheData && cacheData.ttl > Date.now()) {
        next({
          type: `${action.type}_SUCCESS`,
          data: cacheData.value,
          cached: true,
        });
        return new Promise(resolve => resolve({ data: cacheData.value }));
      }
    }
    return fetch(`${API_URL}/${action.remote}`, {
      method: action.method || 'GET',
      body: JSON.stringify(action.body),
    })
      .then(res => res.json())
      .then(data => {
        if (!action.method || action.method === 'GET') {
          set(action.remote, data);
        }
        return data;
      })
      .then(data => next({ type: `${action.type}_SUCCESS`, data }))
      .catch(error => next({ type: `${action.type}_FAILURE`, error }));
  }
  return next(action);
};
export default requests;
