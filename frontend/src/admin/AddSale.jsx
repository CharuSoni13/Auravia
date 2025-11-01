import React, { useState } from 'react'
import axios from 'axios'
import { UploadCloudIcon } from 'lucide-react'

const AddSale = () => {
  const [formData, setFormData] = useState({
    saleTitle: '',
    description: '',
    percentage: '',
    duration: '',
    image: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    Object.keys(formData).forEach(key => data.append(key, formData[key]))

    try {
      await axios.post('http://localhost:4000/sale/add', data)
      alert('Sale added successfully!')
      setFormData({ saleTitle: '', description: '', percentage: '', duration: '', image: null })
    } catch (err) {
      console.error(err)
      alert('Failed to add sale.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('/sale-bg.jpg')]">
      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl w-full max-w-lg shadow-lg text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Add Sale</h2>

        <input type="text" name="saleTitle" placeholder="Sale Title" value={formData.saleTitle} onChange={handleChange} className="w-full p-2 mb-3 rounded bg-transparent border border-white/30" required />

        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 mb-3 rounded bg-transparent border border-white/30" required />

        <input type="number" name="percentage" placeholder="Discount Percentage" value={formData.percentage} onChange={handleChange} className="w-full p-2 mb-3 rounded bg-transparent border border-white/30" required />

        <input type="text" name="duration" placeholder="Duration (e.g., 5 Days)" value={formData.duration} onChange={handleChange} className="w-full p-2 mb-3 rounded bg-transparent border border-white/30" required />

        <label className="flex items-center justify-center gap-2 cursor-pointer bg-green-600/80 hover:bg-green-700 rounded p-2 mb-4">
          <UploadCloudIcon size={20} />
          <span>Upload Image</span>
          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
        </label>

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 p-2 rounded font-semibold">Add Sale</button>
      </form>
    </div>
  )
}

export default AddSale
