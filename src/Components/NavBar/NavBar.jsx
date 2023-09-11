import './NavBar.css'
import logo from '../../assets/airbnb.svg'
function NavBar() {
  return (
    <>
    <nav style={{position: 'fixed', top: 0, zIndex:999 }} className='nav-top'>
      <div className="container-nav">
        <div className="ps-sm-4 d-flex justify-content-center justify-content-sm-start align-items-center col-12 col-sm-6">
          <img className='logo' src={logo} alt="logo" />
        </div>
      <div className="d-none d-sm-flex align-itens-center justify-content-end col-sm-6">
        <a href="#" className='link-especial'>Seja um anfitrião</a>
       <a href="#" className='icon-nav mx-2'><i className='mdi mdi-web'></i></a>
       <div className="dropdown mx-3">
  <button className="button-login dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i className=' mdi mdi-menu ps-2 me-1'></i>
    <i className=' position-relative mdi mdi-account-circle'> 
    <span className='position-absolute top-0 start-10 translate-middle badge border border-light rounded-circle bg-danger p-2'><span className="visually-hidden">unread message</span></span>
    </i>
  </button>
  <ul style={{borderRadius:"15px"}} className="dropdown-menu mt-2 py-3 border-0">
    <li><a className="dropdown-item fw-bold p-2 px-3" href="#">Cadastre-se</a></li>
    <li><a className="dropdown-item p-2 px-3" href="#">Entrar</a></li>
    <li><hr className='dropdown-divider' /></li>
    <li><a className="dropdown-item p-2 px-3" href="#">Hospede em sua acomodação</a></li>
    <li><a className="dropdown-item p-2 px-3" href="#">Hospede uma experiência </a></li>
    <li><a className="dropdown-item p-2 px-3" href="#">Ajuda</a></li>
  </ul>
</div>
      </div>
      </div>
</nav>
<nav id='mobile' className='d-sm-none bg-white fixed-bottom d-flex align-items-center justify-content-between'>
  <a href="#" className='d-flex flex-column text-center nav-icon active'>
    <i className='fs-3 mdi mdi-compass'></i>
    <span>Explorar</span>
  </a>
  <a href="#" className='d-flex flex-column text-center nav-icon'>
    <i className='fs-3 mdi mdi-heart'></i>
    <span>Favoritos</span>
    </a>
    <a href="#" className='d-flex flex-column text-center nav-icon'>
    <i className='fs-3 mdi mdi-account-circle'></i>
    <span>Usuário</span>
  </a>
</nav>
    </>
  
  )
}

export default NavBar