import React from "react";

function Modal() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary ms -auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-sign-in me-1"></span> UPDATE
      </button>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                UPDATE PRODUCT
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <div className="mb-3">
                    <input
                      type="url"
                      className="form-control"
                      id="image"
                      name="image"
                      placeholder="image"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="title"
                    />
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    name="desc"
                    placeholder="desc"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder="price"
                  />
                </div>

                <div className="mb-3">
                  <select name="category" className="form-control">
                    <option value="">Category</option>
                    <option value="jewellery">Jewellery</option>
                    <option value="cloths">Cloths</option>
                    <option value="shoes">Shoes</option>
                    <option value="books">Books</option>
                  </select>
                </div>

                {/*                 
                    <button type="submit" className="btn btn-outline-primary w-100 mt-4">Submit</button> */}
              </form>
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button> */}
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
