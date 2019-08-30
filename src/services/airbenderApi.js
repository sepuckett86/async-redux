export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => {
      if(!res.ok) {
        return 'Error!';
      }
      return res.json();
    });
};
