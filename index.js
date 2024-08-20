let submitData = (name, email) => {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      document.body.innerHTML += `<div>${data.name} ${data.email} ${data.id}</div>`;
    })
    .catch((error) => {
      document.body.innerHTML += `<div>${error.message}</div>`;
      console.error(error);
    });
};
