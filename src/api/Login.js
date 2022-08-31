const Login = async (email, password) => {
    // sessionStorage.setItem("access_token", "Test Value")
    const access_token = window.btoa(`${email}:${password}`);
    console.log(access_token);
    console.log(`${email}:${password}`)
    try {
        const rawResponse = await fetch('http://localhost:8085/api/v1/auth/login', {
            method: 'POST',
            headers: {
                "Accept": "application/json;charset=UTF-8",
                "authorization": "Basic c3RyaW5nOnN0cmluZw=="
            }
        });
        const result = await rawResponse.json();
        console.log(rawResponse)
        if (rawResponse.ok) {
            sessionStorage.setItem("access_token", access_token)
            window.location.href = '/'
        } else {
            const error = new Error();
            error.message = result.message || 'Invalid credentials'
            throw error;
        }
    }
    catch (e) {
        alert(e.message);
    }
}
export default Login;