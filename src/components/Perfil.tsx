import './Perfil.css'
function Perfil() {
  const name: string = 'Bouchra'
  const age: number = 28
  const jobs: string[] = ['developer', 'designer', 'manager']
  const completedModules: number = 5
  const isActive: boolean = true
  
  return (
    <div className='card-profile'>
      <div className='name'>I'm {name}</div>
      <div className='jobs'>I'm {age} years old, jobs: {jobs.join(', ')}</div>
      <p>modules restantes: {10 - completedModules}</p>
      {isActive ? <span className='tag-state'>Active</span> : <span className='tag-state'>Inactive</span>}
    </div>
  )
}

export default Perfil