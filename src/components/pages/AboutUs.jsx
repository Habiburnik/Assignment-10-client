const AboutUs = () => {
  return (
    <section className="max-w-4xl pt-25 mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Hi, I’m Md. Habibur Rahaman, a passionate web developer focused on building modern, user-friendly applications.
          I specialize in React, JavaScript, and front-end technologies.
        </p>

        <p>Apart from this language learning app, I’ve worked on several projects including:</p>
        <ul className="list-disc list-inside mb-6">
          <li>A task management app to boost productivity</li>
          <li>An e-commerce platform with real-time inventory updates</li>
          <li>A blogging platform supporting markdown and comments</li>
        </ul>

        <p>My skills include:</p>
        <ul className="list-disc list-inside mb-6">
          <li>React, Redux, and React Router</li>
          <li>Node.js, Express, and RESTful APIs</li>
          <li>HTML5, CSS3, Tailwind CSS, and responsive design</li>
          <li>Database management with MongoDB and Firebase</li>
        </ul>

        <p>
          I’m always eager to learn new technologies and improve my craft. Feel free to connect with me to collaborate or discuss exciting projects!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
