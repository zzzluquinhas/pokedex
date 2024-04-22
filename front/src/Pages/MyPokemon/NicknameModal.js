import "./NicknameModal.css"
export function NicknameModal({ isOpen, setNickname }) { // Corrected function name
    if (isOpen) {
      return (
        <div className="sign-up-modal">
          <form className="modal-content">
            <div className="container">
              <div className="top-bar">
                <h1>Nickname</h1>
                <button className="close-btn" onClick={() => setNickname(false)}></button> {/* Corrected function name */}
              </div>
              <input type="text" placeholder="Enter Nickname" name="nickname" required />
              <button type="submit" className="signup-btn">Save</button>
            </div>
          </form>
        </div>
      );
    }
    return null;
  }