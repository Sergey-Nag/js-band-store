import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartIcon from '../../img/shopping-cart.svg';
import { signout } from '../../store/actions/userActions';
import Wrapp from '../Wrapp';

export default function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(signout());
  };

  return (
    <header className="mb-5">
      <div className="bg-dark text-light">
        <Wrapp className="py-2 justify-content-end">
          <div className="col-xs-8 col=md-2 text-right">
            <span className="d-inline-block" style={{ paddingTop: '.2rem' }}>
              {user.username}
              <img src={user.avatar} style={{ width: 20, marginLeft: 7 }} alt="avatar" />
            </span>
          </div>
          <div className="col-xs-4 col-md-2">
            <button className="bttn secondary solid btn-sm" type="button" onClick={signOut}>
              Sign Out
            </button>
          </div>
        </Wrapp>
      </div>
      <div className="border-bottom bg-light">
        <Wrapp className="py-5">
          <div className="col-xs-8 col-md-10">
            <h2><Link to="/catalog">JS Band Store</Link></h2>
          </div>
          <div className="col-xs-4 col-md-2">
            <div className="d-flex flex-column justify-content-center h-100">
              <Link to="/cart" className="bttn light">
                <img className="bttn-img" src={cartIcon} alt="cart" />
                Cart
                {' '}
                <b>(0)</b>
              </Link>
            </div>
          </div>
        </Wrapp>
      </div>
    </header>
  );
}
