
import './signin.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function Sign() {
  return (
   <>
   <div className='div'>
    <div className='position-relative divkatta'>
        <div className="position-absolute divkichik1"></div>
        <div className="position-absolute divkichik2">   <form>
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="button" class="btn btn-primary btn-block mb-4" style={{width:'50%',marginLeft:'25%'}}>Sign in</button>

  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
  </div>
</form><a href="app" class="btn btn-primary btn-block mb-4" role="button" style={{width:'50%',marginLeft:'25%'}} aria-pressed="true">Home</a></div>
    </div>
   </div>

   </>
  );
}
export default Sign;
