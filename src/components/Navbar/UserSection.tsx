import "../Navbar/UserSection.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../store/auth/authSlice";
import { logout } from "../../store/account/accountSlice";
import toastr from "toastr";

type Props = {};

const handleLogout = async (navigate: any, dispatch: any) => {
  dispatch(removeToken());
  dispatch(logout());
  navigate("/login");
  toastr.success("Oturumunuz sonlandırıldı.");
}

function UserSection({ }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

  const accountData = useSelector((state: any) => state.account.currentAccount);

  const fullName = accountData.payload?.firstName.concat(" ", accountData.payload?.lastName) || "Giriş Yap";

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <div className="user-and-tobeto">
        {
          (isAuthenticated)
            ?
            <>
              <li className="nav-item dropdown d-none d-xxl-block">
                <a className="nav-link p-0" href="#" role="button">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/tobeto-icon.svg"}
                    alt="Bootstrap"
                    width="25"
                    height="25"
                  />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link navbar-user-section-border"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="rounded-circle me-2"
                    src={process.env.PUBLIC_URL + "/assets/images/default-profile-photo.png"}
                    alt="Bootstrap"
                    width="35"
                    height="35"
                  />
                  <span className="user-full-name me-2">{fullName}</span>
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/my-profile">
                      Profil Bilgileri
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link onClick={() => handleLogout(navigate, dispatch)} className="dropdown-item" to="/login">
                      Oturumu Kapat
                    </Link>
                  </li>
                </ul>
              </li>
            </>
            :
            <li className="nav-item dropdown">
              <Link className="nav-link navbar-user-section-border login-link" to="/login">
                <span className="user-full-name ms-3 me-3 fw-bold text-success">Giriş Yap</span>
              </Link>
            </li>
        }
      </div>
    </ul >
  );
}

export default UserSection;
