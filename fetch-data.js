const fetchUserData = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');

    try {
       const response = await fetch(apiUrl);

       const users = await response.json()

       dataContainer.innerHTML = '';

       const userList = document.createElement('ul');

       users.forEach(user => {
         const li = document.createElement('li')
         li.textContent = user.name;
         userList.appendChild(li)
     });

     dataContainer.appendChild(userList);
    }

    catch{
        dataContainer.textContent = 'failed to load user data'
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData)