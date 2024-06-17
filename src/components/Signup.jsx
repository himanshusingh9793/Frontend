import { useForm } from "react-hook-form";
import axios from "axios";
// import {  toast } from 'react-toast'
function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const validatePasswordMatch = (value) =>{
    value === password || "Password do not match";
  }
  // watch the password and confirm password fields
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    };
    // console.log(userInfo);
    if(confirmPassword)
      axios
        .post("http://localhost:3000/user/signup", userInfo)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  return (
    <div>
      <div className="flex h-screen justify-center items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-info shadow-2xl px-28 py-16 rounded-xl space-y-4"
        >
          <h1 className="text-4xl text-center font-semibold">
            Chat<span className="text-info font-bold">ify</span>
          </h1>
          <h2 className="text-xl text-gray-500 font-bold">Signup</h2>

          <div>
            <label className="input input-bordered input-info flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="fullname"
                {...register("fullname", { required: true })}
              />
            </label>
            {errors.fullname && (
              <span className="text-red-500 text-sm font-smbold">
                This field is required
              </span>
            )}
            <br />
            {/* email */}
            <label className="input input-bordered input-info flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && (
              <span className="text-red-500 text-sm font-smbold">
                This field is required
              </span>
            )}

            <br />
            <label className="input input-bordered input-info flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && (
              <span className="text-red-500 text-sm font-smbold">
                This field is required
              </span>
            )}
            <br />
            <label className="input input-bordered input-info flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                name="confirmPassword"
                placeholder="confirm password"
                {...register("confirmPassword", {
                  required: true,
                  validate: validatePasswordMatch,
                })}
              />
            </label>
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm font-semibold">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="flex justify-between mx-2">
            <p>
              Have an acount?{" "}
              <span className="text-info underline cursor-pointer ml-16  ">
                Login
              </span>{" "}
            </p>
          </div>
          <button className="btn btn-outline btn-info text-lg mx-16 mb-4 px-10">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
