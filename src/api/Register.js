const Register = async () => {
    // sessionStorage.setItem("access_token", "Test Value")
    // const access_token = window.btoa("testuser@upgrad.com:upgrad");
    // console.log(access_token);
    // console.log(`${email}:${password}`)
    console.log("result")
    const params = {
        email_address: "123@upgrad.com",
        first_name: "123456789",
        last_name: "string",
        mobile_number: "string",
        password: "123456"
    }
    try {
        const rawResponse = await fetch('http://localhost:8085/api/v1/signup', {
            body: JSON.stringify(params),
            method: 'POST',
            headers: {
                "Accept": "application/json;charset=UTF-8"
            },

        });
        const result = await rawResponse.json();
        console.log(result)
        if (rawResponse.ok) {
            console.log("result")

            // sessionStorage.setItem("access_token", access_token)
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
export default Register;