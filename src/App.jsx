import { useState } from "react"

function App() {
  //API endpoint
  const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })

  //add variable to reset the status of the object when submit the form
  const [resetData, setResetData] = useState(formData)


  //function to handle the form submit
  function handleSubmit(e) {
    //reset default action on submit
    e.preventDefault()

    //print in console the object to see what i am submitting
    console.log(formData);

    //reset object status with his static copy
    setFormData(resetData)
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
          <input type="text" name="author" placeholder="Author's name" value={formData.author} onChange={e => setFormData({ ...formData, author: e.target.value })} />
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="Title's name" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
        </div>

        {/* Post text */}
        <div>
          <label htmlFor="body">Post's text</label>
          <textarea name="body" rows="4" value={formData.body} onChange={e => setFormData({ ...formData, body: e.target.value })} />
        </div>

        {/* Checkbox */}
        <div>
          <input type="checkbox" name="public" id="public" checked={formData.public} onChange={e => setFormData({ ...formData, public: e.target.checked })} />
          <label htmlFor="public">Post must be public</label>
        </div>

        <button type="submit">Send</button>

      </form>
    </>
  )
}

export default App
