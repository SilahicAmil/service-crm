import { useFormik } from "formik";
const TicketForm = () => {
  const formik = useFormik({
    initialValues: {
      serviceName: "",
    },
    onSubmit: (values) => console.log(values),
  });

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
