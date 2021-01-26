export default function validateInfo(values) {
    let errors = {}
    var pattern = new RegExp(/^[0-9\b]+$/);
    

    //First name
    if (!values.firstName.trim()) {
        errors.firstName = "First name required"
    }

    //Last name
    if (!values.lastName.trim()) {
        errors.lastName = "Last name required"
    }

    //username
    if (!values.username.trim()) {
        errors.username = "username required"
    }

    //email
    if (!values.email) {
        errors.email = "Email required"
    } else if (!/^[A-Za-z]+/.test(values.name)) {
        errors.email = "Email Address is invalide"
    }

    //phone number
    if (!values.phoneNumber) {

        errors.phoneNumber = "Please enter only a number"
    } else if (values.phoneNumber.length !== 11) {

        errors.phoneNumber = "Please enter valid phone number"
    }

    //Paaword
    if (!values.password) {
        errors.password = "Paaword is required"
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 character or more"
    }


    //Confirm password
    if (!values.password) {
        errors.password2 = "Confirm password is required"
    } else if (values.password2 !== values.password){
        errors.password2 = 'passwords do not match'
    }

    return errors;

}