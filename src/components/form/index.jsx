import { Formik } from "formik";
import { FormContainer,StyledForm,StyledField, ButtonWrap,Button,FieldWrap,Error,StepWrap, Header, Step } from "./styled";
import { formValidation } from "./form-validation";

const FormikForm = () => {
  return (
    <FormContainer>
      <Formik
        validationSchema={formValidation}
        initialValues={{
          step: 1,
          lastStep: 3,

          email: "",
          password: "",
          confirmPassword:"",

          name: "",
          lastName: "",

          phone: "",
          address: "",
        }}
        onSubmit={(values) => {console.log(values);
        alert("Kaydınız başarıyla gerçekleşti")}}
      >
        {({ values,setFieldValue,isValid,dirty }) => {


    const handleNext = () => {
        setFieldValue("step", values.step + 1);
    };
    const handlePrev = () => {
        setFieldValue("step", values.step - 1);
    };
    const handleStep = (step) => {
        setFieldValue("step", step);
    };

            return(
                <StyledForm>
                  <Header>
                      {new Array(values.lastStep).fill("").map((_, index) => 
                      <Step success={(values.step>=index+1).toString()} disabled={values.step<index+1} onClick={()=>handleStep(index+1)} type="button" key={index}>
                       <h3 style={{margin:0}}>{index+1} </h3></Step>
                      )}
                  </Header>
                  {values.step === 1 && (
                    <StepWrap>
                     <FieldWrap>
                          <StyledField name="email"  placeholder="Email" />
                          <Error name="email" component="small" />
                     </FieldWrap>
                      <FieldWrap>
                          <StyledField name="password" type="password"  placeholder="Password" />
                          <Error name="password" component="small" />
                      </FieldWrap>
                      <FieldWrap>
                          <StyledField name="confirmPassword" type="password"  placeholder="Password" />
                          <Error name="confirmPassword" component="small" />
                      </FieldWrap>
                    </StepWrap>
                  )}
                  {values.step === 2 && (
                    <StepWrap>
                      <FieldWrap>
                          <StyledField name="name"  placeholder="Name" />
                          <Error name="name" component="small" />
                      </FieldWrap>
                      <FieldWrap>
                          <StyledField name="lastName"  placeholder="Last Name" />
                          <Error name="lastName" component="small" />
                      </FieldWrap>
                    </StepWrap>
                  )}
                  {values.step === 3 && (
                    <StepWrap>
                      <FieldWrap>
                          <StyledField name="phone"  placeholder="Phone with country code exp:+90545xxxxxxx" />
                          <Error name="phone" component="small" />
                      </FieldWrap>
                      <FieldWrap>
                          <StyledField name="address"  placeholder="Address" />
                          <Error name="address" component="small" />
                      </FieldWrap>
                    </StepWrap>
                  )}
                  <ButtonWrap>
                      <Button disabled={values.step===1} type="button" onClick={handlePrev}>Geri</Button>
                      {values.step !== values.lastStep&&<Button disabled={!isValid || !dirty} type="button"  onClick={handleNext}>İleri</Button>}
                      {values.step === values.lastStep&&<Button disabled={!isValid || !dirty} type="submit">Kaydet</Button>}
                  </ButtonWrap>
                </StyledForm>
              )
        }}
      </Formik>
    </FormContainer>
  );
};

export default FormikForm;
