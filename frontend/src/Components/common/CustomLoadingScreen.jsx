import logo from "src/assets/logo.svg"

const CustomLoadingScreen = () => {
  return (
    <div className='fixed inset-0 flex justify-center content-center bg-backgroundColor z-9999'>
      <img src={logo} alt="" className='w-108' />
    </div>
  )
}

export default CustomLoadingScreen
