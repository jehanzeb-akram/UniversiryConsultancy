import React, { useState } from 'react';
import canada from '../../assets/VisaForStudy/canada.png';
import './country.css';
import Article from '../../components/Article/Article';
import aritcleImg from '../../assets/VisaForStudy/usaArticle.jpg';
import canadaVisaImg from '../../assets/VisaForStudy/usaVisa.jpg';
import Visa from '../../components/Visa/Visa';
import University from '../../components/University/University';
import commentImg from '../../assets/VisaForStudy/comment.png';
import Comment from '../../components/Comment/Comment';
import { Link } from 'react-router-dom';
import usa from '../../assets/VisaForStudy/usa.png';
import germany from '../../assets/VisaForStudy/germany.png';
import england from '../../assets/VisaForStudy/england.png';
import japan from '../../assets/VisaForStudy/japan.png';
import germanyarticle from '../../assets/VisaForStudy/germanyarticle.png';
import germanyvisa from '../../assets/VisaForStudy/germanyvisa.png';
const articleData = {
  about:
    'Germany is a popular destination for international students seeking a quality education. With over 400 universities and colleges to choose from, Germany offers a wide variety of academic programs and disciplines to suit every interest and career goal. Many of these institutions are renowned for their excellence in research and innovation, and graduates from German universities are highly sought after by employers worldwide. Studying in Germany also offers opportunities for cultural immersion and personal growth, as students can experience the rich diversity of German society and explore its many historical and cultural attractions. Overall, studying in Germany can be a transformative experience that provides both academic and personal benefits.',
  academicExcellence:
    'Academic excellence is a fundamental characteristic of higher education in Germany. Renowned for its rich intellectual heritage and commitment to innovation, German universities and colleges are at the forefront of research, exploration, and advancement in various domains, ranging from science and technology to the arts and humanities. German higher education institutions boast exceptional faculties, state-of-the-art facilities, and cutting-edge research centers, offering students unparalleled opportunities to explore their academic passions and pursue knowledge. The German higher education system emphasizes rigorous academic standards and cultivates critical thinking skills, encouraging students to engage with intricate concepts and develop their analytical and problem-solving abilities. This approach equips students with the necessary tools to succeed in a rapidly evolving global economy, where adaptability, creativity, and innovation are crucial. Many German universities and colleges foster a culture of interdisciplinary collaboration, facilitating the convergence of scholars from diverse disciplines to address complex societal challenges and generate novel insights. Additionally, the German higher education system is characterized by its unwavering dedication to diversity and inclusivity, creating an environment that is welcoming and supportive to students from all backgrounds. German institutions recognize the value of a diverse student body and actively promote diversity, equity, and inclusion across all aspects of campus life. By engaging with a wide range of perspectives and experiences, students in Germany gain a profound understanding of the world and develop the skills and knowledge necessary to become effective global citizens. Overall, pursuing education in Germany offers students unparalleled prospects for achieving academic excellence and realizing their aspirations. With access to exceptional resources, esteemed faculty, and a vibrant academic community, students in Germany are well-equipped to make meaningful contributions to society and attain success in their chosen fields',
  multiCulturalEnvironment:
    ' Germany is renowned for its rich cultural heritage and welcoming environment, making it an ideal destination for international students seeking a diverse and inclusive academic experience. German universities and colleges attract a vibrant and dynamic community of scholars and students from around the globe, fostering a tapestry of cultures, languages, and perspectives. Studying in Germanys multicultural environment offers numerous benefits, including the opportunity to engage with diverse viewpoints, develop intercultural communication skills, and gain a deeper understanding of the world. German institutions of higher education are committed to promoting diversity and inclusion, providing a supportive and inclusive atmosphere for students from all backgrounds. Apart from the cultural diversity found on campus, Germany offers a plethora of cultural attractions and natural wonders for students to explore. From world-class museums and theaters to breathtaking landscapes and historical landmarks, Germany provides ample opportunities for students to immerse themselves in its rich history and heritage. Overall, studying in Germany offers students a unique opportunity to engage with a diverse and inclusive community of scholars and students, expanding their horizons and preparing them for success in an interconnected world.',
  affordableEducation:
    'Affordability is a major concern for many students considering studying in Germany, but there are many options available to make higher education more accessible and affordable. While tuition costs can vary widely depending on the institution and program of study, German universities and colleges offer a range of financial aid programs, scholarships, and grants to help students offset the cost of tuition and living expenses. One of the most common forms of financial aid in Germany is the Bundesausbildungsförderungsgesetz (BAföG), which provides need-based aid to eligible undergraduate and graduate students. In addition, many institutions offer merit-based scholarships and grants to outstanding students based on academic achievement, leadership skills, or other criteria. Furthermore, Germany has a strong tradition of apprenticeship programs, allowing students to combine practical training with academic studies and earn income through their work. This can help offset the cost of education and provide students with valuable skills and professional experience. Overall, while the cost of higher education in Germany can still be a significant investment, there are many resources and opportunities available to help make it more affordable. By taking advantage of financial aid programs, scholarships, and apprenticeship opportunities, students can achieve their academic goals and pursue their career aspirations without facing excessive financial burden.',
  employment:
    'Employment opportunities are a crucial factor for many students considering studying in Germany. Germany boasts a thriving job market that offers a diverse array of career prospects across various sectors. German universities and colleges prioritize equipping students with the necessary tools to secure employment after graduation, often providing access to career services, internships, and networking events. Many educational institutions in Germany also maintain partnerships with local businesses and organizations, facilitating valuable connections and work experience opportunities for students International students in Germany can benefit from numerous work opportunities during their studies. These include on-campus employment and internships tailored to their program of study. Additionally, depending on their specific field, students may be eligible for post-graduation work permits, such as the Jobseeker Visa, which allows them to stay in Germany for up to six months to search for employment. This presents an excellent opportunity for students to gain practical work experience and establish professional networks in their desired industry.',
  qualityOfLife:
    'Germany offers an exceptional quality of life for students studying in the country. From top-notch healthcare to a high standard of living, Germany provides students with access to a wide range of resources and services that contribute to a comfortable and fulfilling experience. German cities boast a rich cultural scene, offering various entertainment options such as museums, theaters, music venues, and sports stadiums. Moreover, the country is renowned for its diverse natural beauty, including national parks, beaches, mountains, and lakes, providing countless opportunities for exploration and adventure. German universities and colleges also prioritize student organizations and clubs, fostering a strong sense of community and social support. This is particularly beneficial for international students who may be adapting to a new culture and environment. Additionally, Germany is recognized for its excellent healthcare system, ensuring that students have access to high-quality medical care in the event of illness or injury. German cities are known for their safety and security, with low crime rates and a strong commitment to public safety. Overall, studying in Germany offers students a high quality of life, granting access to a range of resources and services that contribute to a comfortable, secure, and enriching experience. With its vibrant cultural scene, breathtaking natural landscapes, and strong community spirit, Germany is an ideal destination for students seeking an exceptional academic and personal journey',
  conclusion:
    "Germany is renowned for its rich cultural heritage and welcoming environment, making it an ideal destination for international students seeking a diverse and inclusive academic experience. German universities and colleges attract a vibrant and dynamic community of scholars and students from around the globe, fostering a tapestry of cultures, languages, and perspectives. Studying in Germany's multicultural environment offers numerous benefits, including the opportunity to engage with diverse viewpoints, develop intercultural communication skills, and gain a deeper understanding of the world. German institutions of higher education are committed to promoting diversity and inclusion, providing a supportive and inclusive atmosphere for students from all backgrounds. Apart from the cultural diversity found on campus, Germany offers a plethora of cultural attractions and natural wonders for students to explore. From world-class museums and theaters to breathtaking landscapes and historical landmarks, Germany provides ample opportunities for students to immerse themselves in its rich history and heritage. Overall, studying in Germany offers students a unique opportunity to engage with a diverse and inclusive community of scholars and students, expanding their horizons and preparing them for success in an interconnected world.",
};

const visaData = {
  about: {
    content:
      'Germany is a popular destination for international students seeking a quality education. With over 400 universities and colleges to choose from, Germany offers a wide variety of academic programs and disciplines to suit every interest and career goal. Many of these institutions are renowned for their excellence in research and innovation, and graduates from German universities are highly sought after by employers worldwide. Studying in Germany also offers opportunities for cultural immersion and personal growth, as students can experience the rich diversity of German society and explore its many historical and cultural attractions. Overall, studying in Germany can be a transformative experience that provides both academic and personal benefits.',
  },
  firstHeading: {
    heading: 'Germany Visa',
    content:
      "Studying in Germany is a dream come true for many international students, and obtaining a student visa is an essential part of making that dream a reality. The process of applying for a German study visa can be complex and time-consuming, requiring careful preparation and attention to detail. To obtain a study visa, students must first apply to a German institution and receive an acceptance letter, after which they can begin the visa application process. The application process for a German study visa can be a daunting prospect for many international students, particularly those who are unfamiliar with the German immigration system. However, with the right preparation and guidance, it can be navigated successfully. Students must demonstrate that they have sufficient financial resources to support themselves during their studies and provide academic transcripts to show that they meet the institution's admission requirements. They must also attend an interview at a German embassy or consulate, during which they will be asked about their plans for studying in Germany and their ties to their home country. Despite the challenges of the visa application process, the benefits of studying in Germany are many. Germany is home to some of the world's most renowned universities and offers a diverse range of academic programs across a wide range of disciplines. Studying in Germany provides students with access to world-class facilities and resources, as well as opportunities for research and professional development. Additionally, the multicultural environment of German universities offers international students the chance to broaden their horizons and build cross-cultural skills that will serve them well in their personal and professional lives. Moreover, the process of obtaining a German study visa can be a valuable learning experience in itself, helping students develop important skills such as time management, organization, and communication. Many German institutions offer resources and support services to help international students navigate the visa application process, including workshops, online resources, and dedicated staff who can answer questions and provide guidance. With the right support and preparation, the process of obtaining a German study visa can be a positive and rewarding experience for international students seeking to further their education and career prospects in Germany.",
  },
  secondHeading: {
    heading: 'Types of Germany Visa',
    content:
      "Germany offers a diverse range of visa categories, each with its own specific requirements and eligibility criteria. Similar to the United States, there are various visa options available for individuals planning to travel to Germany. Tourist visas, known as Schengen visas, are intended for individuals visiting Germany for leisure or medical purposes. Business visas, or business Schengen visas, are designed for individuals traveling to Germany for business-related activities such as attending conferences, meetings, or conducting research.For those seeking employment in Germany, there are several visa categories to consider. The EU Blue Card is available for highly skilled professionals and grants them the right to live and work in Germany. The Job Seeker Visa allows individuals to reside in Germany while actively searching for employment opportunities. Additionally, there are specific visas for self-employed individuals, freelancers, and entrepreneurs who wish to establish businesses in Germany.Germany also offers various visa options for individuals looking to immigrate permanently. Family reunification visas are available for individuals who have family members residing in Germany. There are also employment-based visas for skilled workers in high-demand occupations. The German government has established specific criteria and processes for each of these visa categories.Navigating the complex landscape of German visas can be challenging, but with the appropriate guidance and support, it is possible to find the visa that best matches your needs and eligibility. It is crucial to thoroughly assess your goals and intentions for traveling to Germany and to seek advice from immigration professionals or experienced travelers who can provide valuable insight and assistance throughout the visa application process.",
  },
  thirdHeading: {
    heading: 'Germany Study Visa Documents',
    content:
      "Applying for a study visa in Germany requires a variety of documents to demonstrate the student's eligibility and qualifications. The specific required documents may vary depending on the individual's situation and the institution they intend to study at, but generally include academic transcripts, standardized test scores, financial statements, and a valid passport. Academic transcripts play a crucial role in the application process, providing evidence of the student's educational background and their ability to thrive in a German academic program. Standardized test scores, such as the TestDaF or DSH, are often necessary to demonstrate the student's proficiency in the German language. Financial documents, such as bank statements or sponsorship letters, are essential to prove that the student has sufficient funds to cover their living expenses and tuition fees in Germany. Additionally, students may need to provide documentation showcasing their ties to their home country, such as family relationships, property ownership, or employment prospects. Alongside the required documents, students may also be asked to submit supplementary materials like a personal statement, letters of recommendation, or a curriculum vitae. It is crucial to carefully review the specific requirements of the institution and visa category being applied for, ensuring that all documents are accurate, up-to-date, and properly formatted. Although the documentation requirements for a study visa in Germany can feel overwhelming, with thorough planning and attention to detail, it is possible to compile a strong application. Many German institutions offer resources and support services to assist international students throughout the visa application process, including guidance on required documents and tips for preparing a successful application. By closely collaborating with these resources and seeking the guidance of experienced immigration professionals, students can increase their chances of obtaining a study visa in Germany.",
  },
  fourthHeading: {
    heading: 'Germany Visa Fee',
    content:
      "The cost of a German study visa varies depending on the type of visa being applied for and the country of origin of the applicant. Along with the visa application fee, there might be additional charges for services such as biometric data collection, visa processing, or expedited services. As of 2023, the fee for a nonimmigrant student visa (F-1 visa) is €75, with additional fees specific to Germany. These fees are used to support the visa application process and administrative services. It's important to note that the visa application fee is generally non-refundable, even if the visa is ultimately denied. Additionally, some countries may require additional fees or taxes on top of the standard visa fees, so it's crucial to carefully review the requirements for the specific country of origin. While the cost of a German study visa can be significant, it's essential to consider it as an investment in one's education and future career opportunities. There may be scholarship or funding opportunities available to help offset the costs of studying in Germany, and many institutions offer resources and support to help international students navigate the financial aspects of studying abroad. By carefully planning and budgeting for the cost of a German study visa, students can ensure that they are able to make the most of their academic opportunities in Germany.",
  },
};

const uniData = [
    'Technical University of Munich',
    'Ludwig Maximilian University of Munich',
    'Heidelberg University',
    'Humboldt University of Berlin',
    'Free University of Berlin',
    'University of Freiburg',
    'University of Tübingen',
    'University of Göttingen',
    'Karlsruhe Institute of Technology',
    'University of Bonn',
    'RWTH Aachen University',
    'University of Hamburg',
    'University of Erlangen-Nuremberg',
    'University of Cologne',
    'University of Münster',
    'University of Stuttgart',
    'University of Frankfurt',
    'University of Marburg',
    'University of Konstanz',
    'University of Würzburg',
];

const comments = [
  {
    commentedBy: 'Guzman Anthony',
    date: '12 July, 2021',
    comment:
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script",
  },
  {
    commentedBy: 'Guzman Anthony',
    date: '12 July, 2021',
    comment:
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script",
  },
  {
    commentedBy: 'Guzman Anthony',
    date: '12 July, 2021',
    comment:
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script",
  },
  {
    commentedBy: 'Guzman Anthony',
    date: '12 July, 2021',
    comment:
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script",
  },
  {
    commentedBy: 'Guzman Anthony',
    date: '12 July, 2021',
    comment:
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script",
  },
];

export default function Canada() {
  const [activeButton, setActiveButton] = useState('article');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const [showForm, setShowForm] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      commentedBy: name,
      date: date,
      comment: commentText,
    };
    comments.unshift(comment);
    setCommentText('');
    setName('');
    setDate('');
    setShowForm(false);
  };
  return (
    <div className="country-page">
      <div className="country-page-mainHeading-section">
        <img
          src={germany}
          className="country-page-mainHeading-section-img"
          alt="flag"
        ></img>
        <h1>Germany</h1>
        <p>
          Home {'>'} Visa For Study {'>'} Germany
        </p>
      </div>

      <div className="country-page-buttons">
        <div className="country-page-buttons-flex">
          <button
            className={
              activeButton === 'article'
                ? 'country-page-button-active'
                : 'country-page-button'
            }
            onClick={() => handleButtonClick('article')}
          >
            Article
          </button>
          <button
            className={
              activeButton === 'visa'
                ? 'country-page-button-active'
                : 'country-page-button'
            }
            onClick={() => handleButtonClick('visa')}
          >
            Visa
          </button>
          <button
            className={
              activeButton === 'university'
                ? 'country-page-button-active'
                : 'country-page-button'
            }
            onClick={() => handleButtonClick('university')}
          >
            University
          </button>
        </div>
      </div>

      <div className="country-page-mainContent">
        {activeButton === 'article' && (
          <Article articleData={articleData} imageSource={germanyarticle}></Article>
        )}

        {activeButton === 'visa' && (
          <Visa visaData={visaData} imageSource={germanyvisa}></Visa>
        )}

        {activeButton === 'university' && (
          <University university={uniData}></University>
        )}
      </div>

      <div className="comments">
        <h1 className="comments-heading">
          Comments <span>{`(${comments.length})`}</span>{' '}
        </h1>
        {comments.slice(0, showMore ? comments.length : 3).map((comment) => (
          <Comment comment={comment} imageSource={commentImg}></Comment>
        ))}
        <div>
          <button className="showMoreBtn" onClick={handleShowMore}>
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </div>

        {showForm ? (
          <form className="commentForm" onSubmit={handleSubmit}>
            <h3>Add Your Comments</h3>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Date:
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Comment:
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
              </label>
            </div>
            <div className="commentFormBtnDiv">
              <button type="submit">Submit</button>
            </div>
          </form>
        ) : (
          <div className="createCommentBtn-div">
            <button
              onClick={() => setShowForm(true)}
              className="createCommentBtn"
            >
              Create Comment {'  '} <i class="bx bxs-comment-dots"></i>
            </button>
          </div>
        )}
      </div>
      <div className="country-last-section">
        <h1>Read Another Country</h1>
        <div className="studyVisaSection-btnContainer">
          <Link className="link" to="/canada">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={canada} alt="flag"></img>
              <span>Canada Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/england">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={england} alt="flag"></img>
              <span>England Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/japan">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={japan} alt="flag"></img>
              <span>Japan Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/usa">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={usa} alt="flag"></img>
              <span>USA Study Visa</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
