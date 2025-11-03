"use client";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import BreadCrumb from "../breadcrumb/breadcrumb";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { PacmanLoader } from "react-spinners";

export default function RegisterPage() {
    const { data: session } = useSession();
    
  const router = useRouter();
  const [redirectTo, setRedirectTo] = useState("/");
  useEffect(() => {
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    setRedirectTo(params.get("redirect") || "/");
  }, []);
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
 
   async function handleSubmit(e) {
     e.preventDefault();
     setLoading(true);
     setError("");
 
     try {
       const res = await fetch("/api/user", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ name, email, phone, password }),
       });
 
       const data = await res.json();
 
       if (!res.ok) {
         throw new Error(data.error || "Registration failed");
       } else {
         setLoading(false);
         router.push("/login?redirect="+encodeURIComponent(redirectTo));
       }
     } catch (err) {
       console.error(err);
       setError(err.message);
     } finally {
       setLoading(false);
     }
   }
 
  return (
    <>
        <HeaderOne />
        <BreadCrumb title="Register" innerTitle="Register" bgImage="/img/banner/Entrance12.png"/>
        {loading && (
          <div style={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.7)',
              zIndex: 9999
          }}>
              <PacmanLoader color="#B89146" size={30} />
          </div>
        )}
        <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-5 col-lg-4">
            <div className="bg-white p-4 rounded shadow-sm border-top border-4 border-primary">
                <h2 className="text-center mb-4">Register</h2>

                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                    Name
                    </label>
                    <input
                    id="name"
                    type="text"
                    required
                    disabled={loading}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter name"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                    Email
                    </label>
                    <input
                    id="email"
                    type="text"
                    required
                    disabled={loading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Enter email"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                    Phone
                    </label>
                    <input
                    id="phone"
                    type="text"
                    required
                    disabled={loading}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    placeholder="Enter phone"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                    Password
                    </label>
                    <input
                    id="password"
                    type="password"
                    required
                    disabled={loading}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Enter password"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-100"
                >
                    {loading ? (
                    <>
                        <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                        ></span>
                        Signing up…
                    </>
                    ) : (
                    "Sign Up"
                    )}
                </button>
                </form>
                <p>Already have an account? <a href="/login" style={{color:"blue"}}>Sign in</a></p>
            </div>
            </div>
        </div>
        </div>
        <Footer />
    </>
  );
}
