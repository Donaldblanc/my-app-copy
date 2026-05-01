const UserLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <h1 style={{color: "red"}}>
        This will appear on each user Page only
      </h1>
      {children}
    </div>
  )
}

export default UserLayout
