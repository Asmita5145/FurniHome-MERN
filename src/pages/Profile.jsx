import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";
import toast from "react-hot-toast";
import "../css/Profile.css";

function Profile() {

  const { user, updateUserProfile } =
    useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {

    if (user) {

      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      });

    }

  }, [user]);

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    const response = await updateUserProfile(
      formData
    );

    if (response.success) {

      toast.success(response.message);

    } else {

      toast.error(response.message);

    }

  }

  return (
    <>
      <PageTitle title="My Profile" />

      <Breadcrumb current="My Profile" />

      <section className="profile-page">

        <div className="profile-card">

          <h1>My Profile</h1>

          <form onSubmit={handleSubmit}>

            <div className="profile-input">

              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            <div className="profile-input">

              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="profile-input">

              <label>Phone</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />

            </div>

            <button
              className="update-profile-btn"
              type="submit"
            >
              Update Profile
            </button>

          </form>

        </div>

      </section>
    </>
  );
}

export default Profile;