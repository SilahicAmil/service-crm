import { useState } from "react";

const MainTicketPage = () => {
  // probably gonna use Formik or something
  // I hate doing 3 trillion use states
  const [formData, setFormData] = useState([]);

  // need to create options DB or json
  return (
    <div>
      <h1>Ticket Page</h1>

      <div>
        <form action="POST">
          <div>
            <label htmlFor="services">Service</label>
            <select name="services" id="services">
              <option value="">123</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainTicketPage;
