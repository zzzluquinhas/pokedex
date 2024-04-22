import "./NicknameModal.css"
export function NicknameModal({ isOpen, setNickname, user, pokemonId, updateNickname }) { // Corrected function name
  const handleNickname = (event) => {
    event.preventDefault(); // Prevent form submission
    const nickname = event.target.nickname.value;
    fetch(`http://localhost:5000/renamePokemon?user=${user}&pokemonID=${pokemonId}&nickname=${nickname}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json(); // Parse response JSON
      } else {
        throw new Error('Invalid credentials'); // Throw error for non-OK responses
      }
    })
    .then(data => {
      console.log(data); // Handle successful response data
      updateNickname(nickname); // Update the nickname in PokemonIcon component
    })
    .catch(error => {
      console.error('Error logging in:', error.message); // Handle errors
    });
  };
  

    if (isOpen) {
      return (
        <div className="sign-up-modal">
          <form className="modal-content" onSubmit={handleNickname}>
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