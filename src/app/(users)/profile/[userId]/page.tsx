
import UpdateProfileForm from '@/components/UpdateProfile/client/UpdateProfileForm'
import dynamic from 'next/dynamic'
import React from 'react'
// const UpdateProfileForm = dynamic(() => import('@/components/UpdateProfile/client/UpdateProfileForm'), {
//   // loading: () => <p>Loading...</p>,
//   ssr: false
// })
const EditProfilePage = () => {
  return (
    <div>
      <UpdateProfileForm />
    </div>
  )
}

export default EditProfilePage
