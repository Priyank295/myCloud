import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        {/* Navbar start */}
        <div className="container">
          <div className="nav">
            <div className="container" style={{ width: "100px" }}>
              <button
                onclick="backwardByBackButton()"
                style={{
                  border: "none",
                  background: "transparent",
                  height: "20px",
                  width: "20px",
                }}
              >
                <img
                  style={{ marginRight: "3px" }}
                  src="./assets/icons/Back.png"
                  width={16}
                  height={16}
                  altstyle="color:#BCBCBC;"
                  alt=""
                />
              </button>
              <a className="navbar-brand" href="#">
                <img
                  src="./assets/images/logo.png"
                  alt=""
                  width={36}
                  height={36}
                />
              </a>
            </div>
            {/* Breadcrumb start*/}
            {/* <nav style={{-bsBreadcrumbDivider: 'url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="9" height="9"%3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill=""/%3E%3C/svg%3E")', marginTop: '5px'}} aria-label="breadcrumb">
              <ol className="breadcrumb" id="myBreadcrumb">
                <li style={{color: '#686868'}} className="breadcrumb-item">My documents</li>
                <li className="breadcrumb-item" aria-current="page"><button style={{border: 'none', background: 'transparent'}}>Training</button></li>
                {/* <li class="breadcrumb-item active" aria-current="page">New hire onboarding</li> */}
            {/* </ol>
            </nav> */}
            {/* Breadcrumb end */}
          </div>
          {/* Navbar end */}
          {/* New hire onboarding */}
          <div
            className="container"
            style={{ padding: "100px", backgroundColor: "#F9F9FB" }}
          >
            <nav className="navbar navbar-light">
              <h3 className="inner_header">
                New hire onboarding
                <br />
                <p
                  style={{
                    fontSize: "16px",
                    color: "#717171",
                    marginTop: "10px",
                    fontFamily: "myFirstFont1",
                  }}
                  className="folder_file_counter"
                >
                  <span id="folder_counter">3</span> folders,{" "}
                  <span id="file_counter"> 4</span> files
                </p>
              </h3>
              <div className="btn_grp">
                <button
                  type="button"
                  className="butn btn_folder"
                  data-bs-toggle="modal"
                  data-bs-target="#folderModal"
                >
                  New folder
                </button>
                <input type="file" />
                <button
                  type="button"
                  className="butn btn_file"
                  data-bs-toggle="modal"
                  data-bs-target="#fileModal"
                  onClick={() => {}}
                >
                  Upload file
                </button>
              </div>
            </nav>
            <div className="inner-addon left-addon">
              <i className="glyphicon glyphicon-user" />
              <input
                oninput="search()"
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search for a folder or file"
              />
            </div>
            {/* Folder Structure start */}
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 700,
                fontFamily: "myFirstFont2",
                marginTop: "40px",
              }}
              className="folder_file_counter"
            >
              <span id="folder_counter2">3</span> Folders
            </h4>
            <div className="folder-container" id="folders">
              {/* <div class="common_card folder_card">
                <div class="card_img">
                    <img src="./assets/icons/Folder.svg" alt="">
                </div>
                <div class="card_text row">
                    <div class="col-md-10">
                        <p style="width:150px;overflow:hidden;text-overflow: ellipsis;">Day1</p>
                    </div>
                    <div class="col-md-2">
                        <button style="border:none;background:transparent;border-radius:50%;"><img src="./assets/icons/DotsVerticalO.svg" alt=""></button>
                    </div>
                </div>
            </div> */}
            </div>
            {/* Folder Structure End*/}
            {/* Files Structure Start */}
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 700,
                fontFamily: "myFirstFont2",
                marginTop: "40px",
              }}
              className="folder_file_counter"
            >
              <span id="file_counter2">4</span> Files
            </h4>
            <div className="folder-container" id="files">
              {/* <div class="common_card file_card">
                <div class="file_card_img">
                    <img src="./assets/icons/File-pdf.svg" alt="">
                </div>
                <div class="card_text row">
                    <div class="col-md-10">
                        <h3 style="color:#717171;font-size:14px;">PDF</h3>
                        <p style="width:150px;overflow:hidden;text-overflow: ellipsis;">Day1</p>
                    </div>
                    <div class="col-md-2">
                        <button style="border:none;background:transparent;border-radius:50%;"><img src="./assets/icons/DotsVerticalO.svg" alt=""></button>
                    </div>
                </div>
            </div> */}
            </div>
            {/* Files Structure End */}
          </div>
          {/* Create Modal start */}
          <div id="modals">
            <div
              className="modal fade align-items-center justify-content-center"
              id="folderModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div
                  className="modal-content"
                  style={{ padding: "28px", borderRadius: "12px" }}
                >
                  <div className="modal-header" style={{ border: "none" }}>
                    <h5
                      className="modal-title"
                      id="exampleModalLabel"
                      style={{ fontFamily: "myFirstFont2" }}
                    >
                      Create a new folder
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div
                    className="modal-body"
                    style={{ border: "none", marginTop: "10px" }}
                  >
                    <form>
                      <div className="mb-3">
                        <label htmlFor="folder-name" className="col-form-label">
                          Name of the folder
                        </label>
                        <input
                          oninput="createFolderBtnStyler()"
                          type="text"
                          className="form-control"
                          id="folder-name"
                          placeholder="Enter folder name"
                        />
                      </div>
                    </form>
                  </div>
                  <div
                    className="modal-footer"
                    style={{ border: "none", padding: 0 }}
                  >
                    <button className="butn btn_cancel" data-bs-dismiss="modal">
                      Cancel
                    </button>
                    <button
                      className="butn btn_add btn_add_disabled"
                      id="btn_add"
                    >
                      Create folder
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade align-items-center justify-content-center"
              id="fileModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div
                  className="modal-content"
                  style={{ padding: "28px", borderRadius: "12px" }}
                >
                  <div className="modal-header" style={{ border: "none" }}>
                    <h5
                      className="modal-title"
                      id="exampleModalLabel"
                      style={{ fontFamily: "myFirstFont2" }}
                    >
                      Create a new File
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div
                    className="modal-body"
                    style={{ border: "none", marginTop: "10px" }}
                  >
                    <form>
                      <div className="mb-3">
                        <label htmlFor="file-name" className="col-form-label">
                          Name of the file
                        </label>
                        <input
                          oninput="createFileBtnStyler()"
                          type="text"
                          className="form-control"
                          id="file-name"
                          placeholder="Enter file name"
                          required
                        />
                      </div>
                    </form>
                  </div>
                  <div
                    className="modal-footer"
                    style={{ border: "none", padding: 0 }}
                  >
                    <button className="butn btn_cancel" data-bs-dismiss="modal">
                      Cancel
                    </button>
                    <button
                      className="butn btn_add btn_add_disabled"
                      id="btn_file"
                    >
                      Create file
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade align-items-center justify-content-center"
              id="deleteFolderModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div
                  className="modal-content"
                  style={{ padding: "28px", borderRadius: "12px" }}
                >
                  <div className="modal-header" style={{ border: "none" }}>
                    <h5
                      className="modal-title"
                      id="exampleModalLabel1"
                      style={{ fontFamily: "myFirstFont2" }}
                    >
                      Delete a folder
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div
                    className="modal-body"
                    style={{ border: "none", marginTop: "10px" }}
                  >
                    <form>
                      <div className="mb-3">
                        <label htmlFor="file-name" className="col-form-label">
                          Are you sure you want to delete this folder? This is a
                          permanent action and can’t be undone.
                        </label>
                      </div>
                    </form>
                  </div>
                  <div
                    className="modal-footer"
                    style={{ border: "none", padding: 0 }}
                  >
                    <button
                      className="butn btn_add"
                      id="btn_delete_folder"
                      data-bs-dismiss="modal"
                      style={{ backgroundColor: "#D33852" }}
                    >
                      Delete folder
                    </button>
                    <button className="butn btn_cancel" data-bs-dismiss="modal">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade align-items-center justify-content-center"
              id="deleteFileModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel2"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div
                  className="modal-content"
                  style={{ padding: "28px", borderRadius: "12px" }}
                >
                  <div className="modal-header" style={{ border: "none" }}>
                    <h5
                      className="modal-title"
                      id="exampleModalLabel2"
                      style={{ fontFamily: "myFirstFont2" }}
                    >
                      Delete a file
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div
                    className="modal-body"
                    style={{ border: "none", marginTop: "10px" }}
                  >
                    <form>
                      <div className="mb-3">
                        <label htmlFor="file-name" className="col-form-label">
                          Are you sure you want to delete this file? This is a
                          permanent action and can’t be undone.
                        </label>
                      </div>
                    </form>
                  </div>
                  <div
                    className="modal-footer"
                    style={{ border: "none", padding: 0 }}
                  >
                    <button
                      className="butn btn_add"
                      id="btn_delete_file"
                      data-bs-dismiss="modal"
                      style={{ backgroundColor: "#D33852" }}
                    >
                      Delete file
                    </button>
                    <button className="butn btn_cancel" data-bs-dismiss="modal">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade align-items-center justify-content-center"
              id="renameFolderModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel3"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div
                  className="modal-content"
                  style={{ padding: "28px", borderRadius: "12px" }}
                >
                  <div className="modal-header" style={{ border: "none" }}>
                    <h5
                      className="modal-title"
                      id="exampleModalLabel3"
                      style={{ fontFamily: "myFirstFont2" }}
                    >
                      Rename folder
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div
                    className="modal-body"
                    style={{ border: "none", marginTop: "10px" }}
                  >
                    <form>
                      <div className="mb-3">
                        <label htmlFor="file-name" className="col-form-label">
                          Name of the folder
                        </label>
                        <input
                          id="rename_folder_input"
                          type="text"
                          className="form-control"
                          placeholder="Enter folder name"
                        />
                      </div>
                    </form>
                  </div>
                  <div
                    className="modal-footer"
                    style={{ border: "none", padding: 0 }}
                  >
                    <button
                      className="butn btn_add"
                      id="btn_rename_folder"
                      data-bs-dismiss="modal"
                    >
                      Rename folder
                    </button>
                    <button className="butn btn_cancel" data-bs-dismiss="modal">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade align-items-center justify-content-center"
              id="renameFileModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel4"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div
                  className="modal-content"
                  style={{ padding: "28px", borderRadius: "12px" }}
                >
                  <div className="modal-header" style={{ border: "none" }}>
                    <h5
                      className="modal-title"
                      id="exampleModalLabel4"
                      style={{ fontFamily: "myFirstFont2" }}
                    >
                      Rename file
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div
                    className="modal-body"
                    style={{ border: "none", marginTop: "10px" }}
                  >
                    <form>
                      <div className="mb-3">
                        <label htmlFor="file-name" className="col-form-label">
                          Name of the file
                        </label>
                        <input
                          id="rename_file_input"
                          type="text"
                          className="form-control"
                          placeholder="Enter file name"
                        />
                      </div>
                    </form>
                  </div>
                  <div
                    className="modal-footer"
                    style={{ border: "none", padding: 0 }}
                  >
                    <button
                      className="butn btn_add"
                      id="btn_rename_file"
                      data-bs-dismiss="modal"
                    >
                      Rename file
                    </button>
                    <button className="butn btn_cancel" data-bs-dismiss="modal">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
