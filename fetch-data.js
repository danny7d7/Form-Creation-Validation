const fetchUserData = async () => {
    // Using the URL from your original working code
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Data container selection
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        
        dataContainer.innerHTML = '';
        
        const userList = document.createElement('ul');
        
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
        
        dataContainer.appendChild(userList);
        
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data';
    }
};

document.addEventListener('DOMContentLoaded', fetchUserData);
