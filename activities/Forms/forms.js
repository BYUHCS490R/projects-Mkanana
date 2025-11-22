document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById("myForm");
            const messageBox = document.getElementById("message");

            form.addEventListener("submit", function (event) {
                // stop normal form submit
                event.preventDefault(); // [web:16][web:19]

                // get values
                const fname = document.getElementById("fname").value.trim();
                const email = document.getElementById("email").value.trim();
                const password = document.getElementById("pass").value;
                const ageValue = document.getElementById("age").value.trim();
                const state = document.getElementById("state").value;
                const termsChecked = document.getElementById("terms").checked;
                const comment = document.getElementById("comment").value;

                const errors = [];

                // at least 3 inputs have a value
                if (!fname) errors.push("Full name is required.");
                if (!email) errors.push("Email is required.");
                if (!password) errors.push("Password is required.");

                // age range check
                const age = Number(ageValue);
                if (!ageValue || Number.isNaN(age)) {
                    errors.push("Age must be a number.");
                } else if (age < 18 || age > 99) {
                    errors.push("Age must be between 18 and 99.");
                }

                // check state
                if (!state) {
                    errors.push("Please select a state.");
                }

                // check terms checkbox
                if (!termsChecked) {
                    errors.push("You must agree to the terms.");
                }

                // text length check (example)
                if (fname && fname.length < 3) {
                    errors.push("Full name must be at least 3 characters.");
                }

                if (errors.length > 0) {
                    alert(errors.join("\n"));
                    return;
                }

                // build object
                const formData = {
                    fname: fname,
                    email: email,
                    password: password,
                    age: age,
                    state: state,
                    terms: termsChecked,
                    comment: comment
                };

                console.log("Form data object:", formData);

                // XHR GET to submit.json (mock response)
                const xhr = new XMLHttpRequest(); // [web:6][web:14][web:17]
                xhr.open("GET", "submit.json", true);
                xhr.responseType = "json";

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            const response = xhr.response || JSON.parse(xhr.responseText || "{}");
                            // show message from JSON
                            if (response.message) {
                                messageBox.textContent = response.message;
                            } else {
                                messageBox.textContent = "Form submitted successfully!";
                            }

                            // notify user: reset and disable form
                            form.reset();
                            Array.from(form.elements).forEach(function (el) {
                                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT") {
                                    el.disabled = true;
                                }
                            });
                        } else {
                            alert("Error submitting form. Status: " + xhr.status);
                        }
                    }
                };

                xhr.onerror = function () {
                    alert("Network error while submitting the form.");
                };

                // using GET (no body) for GitHub Pages
                xhr.send();
                
            });
            
        });
        