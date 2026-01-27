import { useState } from "react";
import axios from "axios";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email");
      return;
    }

    try {
      setStatus("sending");
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/newsletter`,
        { email },
      );

      setStatus("success");
      setMessage(res.data.message);
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Subscription failed");
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter <br /> Never miss updates
            </h3>

            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>

          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
