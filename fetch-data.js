const fetchUserData = async () => {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        
        // Convert response to JSON
        const users = await response.json();

        // Clear the Loading Message
        dataContainer.innerHTML = '';

        // Create User List
        const userList = document.createElement('ul');

        // Loop through users and create list items
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append userList to dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {  // ✅ Added error parameter
        // Error Handling
        dataContainer.innerHTML = '';  // Clear existing content
        dataContainer.textContent = 'Failed to load user data.';  // Added period
    }
};

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
