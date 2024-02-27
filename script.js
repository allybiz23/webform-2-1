function validateInputForm(form) {
    // Regular expressions for validation
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    const empIdRegex = /^[A-Z]\d{5}$/;
    const nameRegex = /^[A-Z][a-zA-Z]*$/;

    // Validate ReqDate (request date)
    if (!dateRegex.test(form.ReqDate.value)) {
        alert("Invalid request date. Please use mm/dd/yyyy format.");
        form.ReqDate.focus();
        return false;
    }

    // Validate EmpID (employee ID)
    if (!empIdRegex.test(form.EmpID.value)) {
        alert("Invalid employee ID. Must be 6 alphanumeric characters, starting with a capital letter, followed by 5 numbers.");
        form.EmpID.focus();
        return false;
    }

    // Validate FName (user first name)
    if (!nameRegex.test(form.FName.value)) {
        alert("Invalid first name. Must start with a capital letter.");
        form.FName.focus();
        return false;
    }

    // Validate LName (user last name)
    if (!nameRegex.test(form.LName.value)) {
        alert("Invalid last name. Must start with a capital letter.");
        form.LName.focus();
        return false;
    }

    // Validate ProbDesc (problem description)
    if (form.ProbDesc.value.trim() === "") {
        alert("Problem description is required.");
        form.ProbDesc.focus();
        return false;
    }

    // If all validations pass, return true
    return true;
}
