function TeamMember({ name, jobTitle, image}) {

    return (
      <div className="w-72 bg-[#313338] shadow-lg border-1 border-indigo-500/50 border border-palette-lighter p-6 rounded-lg transform transition ease-in hover:bg-slate-600 hover:scale-110 duration-200">
        <div className="flex flex-col justify-center items-center">
          <img
            height="80" 
            width="80"
            src={image}
            alt="avatar-1"
            className="flex-shrink-0 h-20 w-20 rounded-full my-6 object-cover"
          />
          <div className="flex font-primary flex flex-col space-y-2">
            <h2 className="text leading-6 font-bold text-white">{name}</h2>
            <div className="flex flex-col space-x-2 justify-center items-center">
                <p className="flex flex-col justify-center items-center text-sm text-indigo-400">{jobTitle}</p>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
  
  export default TeamMember