import StyledModal from "../core-ui/Modal.style"

const Modal = () => {
  return (
    <StyledModal>
        <b>Delete Data</b>
        <p>Are you sure you want to delete this data?</p>
        <div className="btn-group">
              <button>Yes</button>
              <button>No</button>
        </div>
    </StyledModal>
  )
}

export default Modal