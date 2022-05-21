
import TeamMember from './TeamMember'
import OmerPic from '../components/assets/omerW.jpg'


const DATA = [
  {
    name: "Omer W",
    jobTitle: "CEO",
    image: "https://media-exp1.licdn.com/dms/image/C4E03AQEGsCGcN7okOw/profile-displayphoto-shrink_200_200/0/1635285240846?e=1653523200&v=beta&t=1NII5ugkcVoRukgj72lwF-DV4SZ5ytn74GcI_9pVt-0",
    altTag: 'CEO',
    
  },
  {
    name: "Ariel M",
    jobTitle: "CTO",
    image: "https://img.currency.com/imgs/articles/834xx/Bored-Ape-Maui-Prime.png",
    altTag: 'CTO',
    
  },
  {
    name: "Or S",
    jobTitle: "CMO",
    image: "https://media-exp1.licdn.com/dms/image/C4D03AQFTqjMWgWUmWg/profile-displayphoto-shrink_800_800/0/1599580122045?e=1658361600&v=beta&t=NXyzcUQ9Nfgjwu6L-PmOuBCwFfwGoqz-pF3FZZEHoWM",
    altTag: 'CMO',
    
  }
]

function Team() {
  return (
    <div className="bg-gray-800 pt-12 pb-6 sm:pt-16 sm:pb-12 ">
      <div className="w-full px-2 max-w-6xl mx-auto">
        <h1 className="text-center text-[#f1f1f1] font-primary font-bold text-3xl sm:text-4xl w-full px-2">Meet Our Team </h1> 
        <div className="flex flex-col items-center sm:flex-row sm:justify-around space-y-6 sm:space-y-0 pt-12 mb-4">
          {
            DATA.map(item => (
              <TeamMember
                key={item.name}
                name={item.name}
                jobTitle={item.jobTitle}
                image={item.image}
                altTag={item.altTag}
                
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Team