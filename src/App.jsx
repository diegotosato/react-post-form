import { useState } from "react"
import axios from "axios"

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


  //add variable to manage a message if the ajax call is success
  const [message, setMessage] = useState({
    status: null,
    text: ''
  })


  //function to handle the form submit
  function handleSubmit(e) {
    //reset default action on submit
    e.preventDefault()

    //reset object status with his static copy
    // setFormData(resetData)
    setFormData(resetData)

    //print in console the object to see what i am submitting
    console.log(formData);

    // //Ajax Call on submit
    axios.post(endpoint, formData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        console.log(res);

        if (res.status === 201) {
          console.log('success');
          console.log(formData);
          setMessage({ text: 'your request is accepted', status: true })
        }
      })
      .catch(err => {
        console.log(err.message);
        setMessage({ text: `${err.message}`, status: false })
      }


      )
  }

  function handleChange(e) {
    //destructure of the infos that i submit
    const { name, value, checked, type } = e.target

    setFormData({ ...formData, [name]: (type === 'checkbox' ? checked : value) })

  }

  return (
    <>
      <div className="title">
        <h1>Form multifields</h1>
      </div>


      <div className="container">

        <form onSubmit={handleSubmit}>

          {/* Author */}
          <div className="form-field">
            <label htmlFor="author">Author</label>
            <input type="text" name="author" id="author" placeholder="Author's name" value={formData.author} onChange={handleChange} required />
          </div>

          {/* Title */}
          <div className="form-field">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="Title's name" value={formData.title} onChange={handleChange} required />
          </div>

          {/* Post text */}
          <div className="form-field">
            <label htmlFor="body">Post's text</label>
            <textarea name="body" id="body" rows="4" value={formData.body} onChange={handleChange} required />
          </div>

          {/* Checkbox */}
          <div className="form-field checkbox-field">
            <input type="checkbox" name="public" id="public" checked={formData.public} onChange={handleChange} />
            <label htmlFor="public">Post must be public</label>
          </div>

          <button type="submit">Send</button>

        </form>



        {
          (message.status ? <p className={(message.status && 'green')}>{message.text}</p>
            : <p className={(!message.status && 'red')}>{message.text}</p>)
        }

      </div>
    </>
  )
}

export default App
