import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function Contact() {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const serviceID = "service_empxgwh";
  const templateID = "template_p5ekyrs";
  const userID = "r_RiIwtDiTIr1C7fQ";
  const [templateParams, setTempleteParams] = useState({
    name: "",
    email: "",
    addr: "",
    message: "",
    number: "",
    possession: "",
    property: "",
    type: "",
    budget: "",
  });

  function handleSubmit(e) {
    console.log("clicked");
    const templateParamsDemo = {
      from_name: templateParams.name,
      budget: templateParams.budget,
      from_address: templateParams.addr,
      message: templateParams.message,
      number: templateParams.number,
      possession: templateParams.possession,
      property: templateParams.property,
      type: templateParams.type,
    };
    e.preventDefault();
    console.log(templateParamsDemo);
    setLoading(true);
    emailjs
      .send(serviceID, templateID, templateParamsDemo, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        if (response.status == 200) {
          Navigate("/sucess-response", { state: { message: response.status } });
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <section className="ContactPage">
      <div className="FormWrapper">
        <div className="First-Div">
          <h3 className="Text">Interior Consultation</h3>
          <form className="Form" onSubmit={handleSubmit}>
            <div className="FieldWrapper">
              <input
                type="text"
                name="name"
                value={templateParams.name}
                onChange={(e) =>
                  setTempleteParams({ ...templateParams, name: e.target.value })
                }
                required
                placeholder="Your Name"
              />
              <input
                type="text"
                name="possession"
                value={templateParams.possession}
                onChange={(e) =>
                  setTempleteParams({
                    ...templateParams,
                    possession: e.target.value,
                  })
                }
                possession
                required
                placeholder="Possession Status"
              />
              <input
                type="text"
                name="email"
                value={templateParams.email}
                onChange={(e) =>
                  setTempleteParams({
                    ...templateParams,
                    email: e.target.value,
                  })
                }
                required
                placeholder="Your Email"
              />
              <select
                className="CustomSelect"
                name="budget"
                value={templateParams.budget}
                onChange={(e) =>
                  setTempleteParams({
                    ...templateParams,
                    budget: e.target.value,
                  })
                }
                required
              >
                <option selected hidden>
                  Select Your Budget
                </option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
              </select>
              <input
                type="text"
                name="number"
                value={templateParams.number}
                onChange={(e) =>
                  setTempleteParams({
                    ...templateParams,
                    number: e.target.value,
                  })
                }
                required
                placeholder="Your Phone Number"
              />
              <select
                className="CustomSelect"
                name="type"
                value={templateParams.type}
                onChange={(e) =>
                  setTempleteParams({ ...templateParams, type: e.target.value })
                }
                required
              >
                <option selected hidden>
                  Select Your Type
                </option>
                <option value="tA">Type A</option>
                <option value="tB">Type B</option>
              </select>
              <select
                className="CustomSelect"
                name="property"
                value={templateParams.property}
                onChange={(e) =>
                  setTempleteParams({
                    ...templateParams,
                    property: e.target.value,
                  })
                }
                required
              >
                <option selected hidden>
                  Select Your Property Type
                </option>
                <option value="Ap">Property A</option>
                <option value="Bp">Property B</option>
              </select>
              <input
                name="message"
                value={templateParams.message}
                onChange={(e) =>
                  setTempleteParams({
                    ...templateParams,
                    message: e.target.value,
                  })
                }
                placeholder="Leave us a message"
              />
            </div>
            <button type="submit" disabled={loading} className="Btn">
              {loading ? <ClipLoader color="#fff" size={25} /> : "Get Set Vibe"}
            </button>
          </form>
        </div>
      </div>
    </section>
    //section ended
  );
}
