const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Unlock the secrets of rapid learning with our Quick Learning Mastery course. In this dynamic program, discover proven strategies and techniques to accelerate your learning curve.",
    icon: "https://clipart-library.com/images/kiKB8n94T.png",
  },

  {
    title: "All Time Support",
    desc: "Embark on a transformative journey with our All Time Support course, designed to equip individuals with the essential skills and knowledge needed to provide effective.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/67/Google_Messages_icon_%282022%29.svg",
  },

  {
    title: "Certification",
    desc: "Elevate your expertise and advance your career with our Certification Name program. Designed for professionals seeking to stand out in their field, this certification offers.",
    icon: "https://media.licdn.com/dms/image/D5612AQETmjRenmhZ8w/article-cover_image-shrink_720_1280/0/1667807392051?e=1709769600&v=beta&t=y_32YibH9baB6dc6JcejNVK0Qg-kkhYly8ZuneR3pCY",
  },
];

const ChooseUs = () => {
  return (
    <div className="max-w-7xl px-5 mx-auto my-20">
      <div className="grid md:grid-cols-3 gap-7 text-center">
        {FeatureData.map((item, index) => (
          <div className="" key={index}>
            <img className="h-20 w-20 m-auto" src={item.icon} alt="" draggable='false'/>
            <h6 className="text-lg font-bold mt-2 mb-2">{item.title}</h6>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
