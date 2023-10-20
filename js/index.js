const endpoint = 'https://jsonplaceholder.typicode.com/users';
const personalInfoForm = document.getElementById('personalDataForm');

personalInfoForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log(data);

  // Armo un objeto facil de stringificar
  let dataObject = {};
  data.forEach((value, key) => (dataObject[key] = value));
  const json = JSON.stringify(dataObject);
  console.log(json);

  const response = await fetch(endpoint, {
    method: 'POST',
    body: json,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  console.log(response);
  console.log(await response.json());
});
