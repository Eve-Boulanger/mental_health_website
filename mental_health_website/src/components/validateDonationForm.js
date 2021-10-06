// file not in use

export default function validateDonationForm(values) {
    let errors = {}

    if(!values.firstName.trim()){
        errors.firstName = "First Name Required";
    }

    if(!values.email) {
        errors.email = "Email Required";
    }

    // See validation code section
    // https://www.youtube.com/watch?v=KGFG-yQD7Dw&ab_channel=BrianDesign
    // use 'required' attribute
    return errors;
}