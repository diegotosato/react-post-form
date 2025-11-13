import { useState } from "react"

function App() {
  const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: true
  })

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <h1>Form multifields</h1>

      <br />
      <br />
      <br />
      <br />

      <form onSubmit={handleSubmit}>

        {/* Author */}
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" name="author" placeholder="Author's name" />
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="Title's name" />
        </div>

        {/* Post text */}
        <div>
          <label htmlFor="body">Post's text</label>
          <textarea name="body" rows="4" />
        </div>

        {/* Checkbox */}
        <div>
          <input type="checkbox" name="public" />
          <label htmlFor="public">Post must be public</label>
        </div>

        <button type="submit">Send</button>

      </form>
    </>
  )
}

export default App
