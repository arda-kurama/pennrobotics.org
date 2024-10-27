async function fetchMessage() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/do-something');
        console.log('API Response Status:', response.status);

        const data = await response.json();
        console.log('Full API Response:', data);

        if (data && data.school_name) {
            const school_message = data.school_name;
            console.log('Type of school_message:', typeof school_message);
            console.log('Value of school_message:', school_message);
            document.querySelector('#school-message').textContent = school_message;
        } else {
            console.log('school_message not found in API response');
        }
    } catch (error) {
        console.error('Error fetching message:', error);
    }
}
fetchMessage();
