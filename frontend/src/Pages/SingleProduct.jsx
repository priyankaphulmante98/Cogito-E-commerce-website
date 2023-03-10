import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  } from "mdb-react-ui-kit";
  import React, { useEffect, useState } from "react";
  import axios from "axios";

  export default function Single() {
    const [carts, setCarts] = useState([]);
    const [total, setTotal] = useState(0);

    function getrCarts() {
      axios.get(`https://fundlo.onrender.com/cart`).then((res) => {
        setCarts(res.data);
        console.log(res.data);
        let tot = res.data?.reduce(
          (acc, e) => acc + Number(e?.productId?.price) * Number(e?.quantity),
          0
        );
        setTotal(tot);
      });
    }

    function changeQuanity(id, value) {
      axios
        .patch(`https://fundlo.onrender.com/cart/${id}`, { quantity: value })
        .then((res) => {
          console.log("jhal");
          getrCarts();
        });
    }

    function removefromcart(id) {
      axios.delete(`https://fundlo.onrender.com/cart/${id}`).then((res) => {
        alert("deleeted");
        getrCarts();
      });
    }

    useEffect(() => {
      getrCarts();
    }, []);

    return (
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow
            style={{ boxShadow: " rgba(164, 8, 91, 0.2) 0px 8px 24px" }}
            className="justify-content-center align-items-center h-100"
          >
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="p-4">
                  <MDBRow>
                    <MDBCol lg="7">
                      <MDBTypography tag="h5">
                        <a
                          href="/"
                          style={{ textDecoration: "none", color: "teal" }}
                          className="text-body"
                        >
                          <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                          Continue shopping
                        </a>
                      </MDBTypography>

                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">
                            You have {carts.length} items in your cart
                          </p>
                          <h3>Total Amount : {total}</h3>
                        </div>
                      </div>

                      {carts?.map((e) => (
                        <MDBCard key={e._id} className="mb-3">
                          <MDBCardBody>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <MDBCardImage
                                    src={e.productId?.image}
                                    fluid
                                    className="rounded-3"
                                    style={{ width: "65px" }}
                                    alt="Shopping item"
                                  />
                                </div>
                                <div className="ms-3">
                                  <MDBTypography tag="h5">
                                    {e.productId?.title}
                                  </MDBTypography>
                                  <p className="small mb-0">
                                    {e.productId?.category}
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: "100px" }}>
                                  <MDBTypography
                                    tag="h5"
                                    className="fw-normal mb-0"
                                  >
                                    <button
                                      onClick={() =>
                                        changeQuanity(e?._id, e?.quantity + 1)
                                      }
                                    >
                                      +
                                    </button>
                                    <span>{e?.quantity}</span>
                                    <button
                                      disabled={e?.quantity <= 1}
                                      onClick={() =>
                                        changeQuanity(e?._id, e?.quantity - 1)
                                      }
                                    >
                                      -
                                    </button>
                                  </MDBTypography>
                                </div>
                                <div style={{ width: "80px" }}>
                                  <MDBTypography tag="h5" className="mb-0">
                                    ${e.productId?.price}
                                  </MDBTypography>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}>
                                  <MDBIcon
                                    fas
                                    icon="trash-alt"
                                    onClick={() => removefromcart(e._id)}
                                  />
                                </a>
                              </div>
                              {/* <div style={{ border: "2px solid black" }}>
                                <p>Total Amount : {total}</p>
                              </div> */}
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      ))}
                    </MDBCol>

                    <MDBCol lg="5">
                      <MDBCard
                        style={{ color: "info" }}
                        className="bg-info text-white rounded-3"
                      >
                        <MDBCardBody>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h5" className="mb-0">
                              Card details
                            </MDBTypography>
                            <MDBCardImage
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              fluid
                              className="rounded-3"
                              style={{ width: "45px" }}
                              alt="Avatar"
                            />
                          </div>

                          <p className="small">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-visa fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-amex fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                          </a>

                          <form className="mt-4" style={{ width: "400px" }}>
                            <MDBInput
                              className="mb-4"
                              label="Cardholder's Name"
                              type="text"
                              size="lg"
                              placeholder="Cardholder's Name"
                              contrast
                            />

                            <MDBInput
                              className="mb-4"
                              label="Card Number"
                              type="text"
                              size="lg"
                              color="dark"
                              minLength="19"
                              maxLength="19"
                              placeholder="1234 5678 9012 3457"
                              contrast
                            />

                            <MDBRow className="mb-4">
                              <MDBCol md="6">
                                <MDBInput
                                  className="mb-4"
                                  label="Expiration"
                                  type="text"
                                  size="lg"
                                  color="dark"
                                  minLength="7"
                                  maxLength="7"
                                  placeholder="MM/YYYY"
                                  contrast
                                />
                              </MDBCol>
                              <MDBCol md="6">
                                <MDBInput
                                  className="mb-4"
                                  label="Cvv"
                                  type="text"
                                  size="lg"
                                  minLength="3"
                                  color="dark"
                                  maxLength="3"
                                  placeholder="&#9679;&#9679;&#9679;"
                                  contrast
                                />
                              </MDBCol>
                            </MDBRow>
                          </form>

                          <hr />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Total Amount :</p>
                            <p className="mb-2">{total}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">$4818.00</p>
                          </div>

                          <MDBBtn color="dark" block size="sm">
                            <div
                              className="d-flex justify-content-between"
                              style={{ marginTop: "10px" }}
                            >
                              <h5>
                                {" "}
                                <a
                                  href="/"
                                  style={{
                                    color: "white",
                                    textDecoration: "none",
                                  }}
                                >
                                  Checkout
                                </a>
                              </h5>
                            </div>
                          </MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
