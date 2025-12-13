function Button({ onClick, children, disabled }) {
  return (
    <button
      type="submit"
      className={`mt-2 w-full cursor-pointer rounded-md bg-white p-3 text-[15px] text-black ${disabled ? 'cursor-no-drop bg-gray-400' : 'cursor-pointer'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
