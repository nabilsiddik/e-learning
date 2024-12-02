import React, { useContext, useState } from 'react'
import ProfileSidebar from '../../Layouts/ProfileSidebar/ProfileSidebar'
import { authContext } from '../../Contexts/AuthContex/AuthContext'
import Swal from 'sweetalert2'

const ProfilePage = () => {
    
  const [name, setName] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const {profileUpdate} = useContext(authContext)

  const handleUserUpdate = (e) => {
    e.preventDefault()
    
    if(name === '' || photoUrl === ''){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill out the required fields"
        })
    }else{
      const updateInfo = { displayName: name, photoURL: photoUrl }
      profileUpdate(updateInfo)
      .then(()=>{
        Swal.fire({
            position: "center center",
            icon: "success",
            title: "Profile Updated Successfully!",
            showConfirmButton: false,
            timer: 1500
        })
      })
      .catch(error => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error while updating Profile",
            footer: `${error.code}. ${error.message}`
        })
      })
    }
  }


  return (
    <div id='profile_page'>
      <div className="container py-10">
        <div className='md:flex gap-10'>
          <div className='md:w-4/12 mb-10'>
            <ProfileSidebar />
          </div>
          <div className="md:w-8/12">
            <div className="update_profile_info">
              <h2 className='mb-5 text-center'>Update Profile</h2>
              <form onSubmit={handleUserUpdate}>
                <div className="form_contianer flex flex-col gap-3 w-10/12 mx-auto">
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="input input-bordered w-full" />

                  <input value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} type="text" placeholder="Photo URL" className="input input-bordered w-full" />
                  <input className='btn bg-primary text-white font-bold' type="submit" value={'Update Profile'} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
