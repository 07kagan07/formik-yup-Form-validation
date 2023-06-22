import * as Yup from "yup"

export const formValidation = Yup.object().shape({
    
    //step 1
    email: Yup.string().when("step",{
        is: 1,
        then: schema=>schema.email("Email is invalid").required("Email is required"),
    }),
    password: Yup.string().when("step",{
        is:1,
        then:schema=>schema.required("Password is required").min(6,"Password must be at least 6 characters").
        matches(/^(?=.*[a-z])(?=.*[A-Z])/,
            "Password must contain both uppercase and lowercase letters"
          ),
    }),
    confirmPassword: Yup.string().when("step",{
        is:1,
        then:schema=>schema.oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm Password is required")
    }),

    //step 2
    name: Yup.string().when("step",{
        is: 2,
        then: schema =>schema.required("Name is required")
    }),
    lastName:Yup.string().when("step",{
        is:2,
        then:schema=>schema.required("last Name is required")
    }),

    //step 3
    phone:Yup.string().when("step",{
        is:3,
        then:schema=>schema.matches(/^\+[1-9]\d{1,14}$/, 'Phone number is invalid.').required("Phone Number is Reqired")
    }),
    address:Yup.string().when("step",{
        is:3,
        then:schema=>schema.required("Address is required")
    }),
    
})
