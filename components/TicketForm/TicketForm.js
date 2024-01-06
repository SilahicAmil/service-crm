import { useFormik } from "formik";
import { useState } from "react";

const TicketForm = () => {
  const [formStatus, setFormStatus] = useState("");

  const formik = useFormik({
    initialValues: {
      serviceName: "",
    },
    onSubmit: (values) => submitFormData(values),
  });

  const submitFormData = async (values) => {
    setFormStatus("pending");
    try {
      console.log(values);
      setFormStatus("success");
    } catch (err) {
      setFormStatus("failed");
    }
  };

  return (
    <>
      <div>
        <form action="POST" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="serviceName"></label>
            <input
              type="text"
              name="serviceName"
              id="serviceName"
              onChange={formik.handleChange}
              value={formik.values.serviceName}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default TicketForm;
