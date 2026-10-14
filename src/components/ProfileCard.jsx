import { useState } from "react";
function ProfileCard(){
  const [ showContact, setShowContact ] = useState(false);
  const profile = {
    name: "JOHN",
    profession: "WEB DEVELOPER",
    email: "john111.com",
  };
  const details = [
    "Passionate about clean code and creative solutions.",
    "Turning ideas into reality through code.",
    "Creating responsive designs for a connected world.",
    "available globally",];
return(
  <div className="min-h-screen bg-mist-700 px-4 py-10 flex items-center justify-center">
    <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-gray-400 shadow-xl">
      <div className="h-56 sm:h-72">
        <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="photography cover" className="h-full w-full object-cover "/>
      </div>
      
      <div className="relative z-10 -mt-16 px-5 pb-8 sm:-mt-20 sm:px-8">
        <div className="rounded-2xl bg-gray-300 p-5 shadow-lg sm:p-8">
          <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"
              alt="Profile"
              className="h-24 w-24 rounded-2xl border-4 border-white object-cover shadow-md"
            />
            </div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h1 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-base text-slate-500 sm:text-lg">
                { profile.profession }
              </p>
            </div>
            <div className="shrink-0 rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-500">
              ๋࣭ ⭑✮💻₊ ⊹
            </div>
          </div>
          <div className="my-8 space-y-4">
            {details.map((item,index) => (
              <p key={index} className="text-sm text-slate-700 sm:text-base">
                {item}
              </p>
            ))}
          </div>
          <div className="mt-4 "> 
            
            <img src="https://www.shutterstock.com/image-vector/sample-vector-qr-code-smartphone-260nw-2183207809.jpg" alt="portfolio QR code" className="h-36 w-36 rounded-lg border border-gray-200 p-5 "/>
            <p className="px-5 p-5">Scan this QR for further details</p>
            
          </div>
          <button onClick={() => setShowContact(!showContact)}
            className="w-full rounded-xl bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800">
              {showContact ? "hide contact"  : "contact me"}
            </button>
            {showContact && (
              <div className="mt-4 wrap-break-word rounded-xl bg-indigo-50 p-4">
                <p className="text-sm text-slate-700">
                  E-mail: { profile.email }
                </p>
                <a href={ `mailto:${profile.email}`} className="mt-3 inline-block font-medium text-indigo-700 underline">
                  send mail
                </a>
              </div>
            )}
            
        </div>
      </div>
      <div className="h-6"></div>
    </div>

  </div>
)  
}
export default ProfileCard;