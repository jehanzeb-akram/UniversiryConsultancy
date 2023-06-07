import React, { useState } from 'react';
import annualDromitory from '../../assets/University/annualDormitary.png';
import ranking from '../../assets/University/ranking.png';
import establishedYear from '../../assets/University/establishedYear.png';
import institution from '../../assets/University/institution.png';
import './university.css';
import facultyImg from '../../assets/University/faculty.png';
import img1 from '../../assets/University/img1.png';
import img2 from '../../assets/University/img2.png';
import img3 from '../../assets/University/img3.png';
import img4 from '../../assets/University/img4.png';
import img5 from '../../assets/University/img5.png';
import img6 from '../../assets/University/img6.png';
import al1 from '../../assets/University/al1.png';
import al2 from '../../assets/University/al2.png';
import al3 from '../../assets/University/al3.png';
import al4 from '../../assets/University/al4.png';
import al5 from '../../assets/University/al5.png';
import location from '../../assets/University/location.png';
import Comment from '../../components/Comment/Comment';
import commentImg from '../../assets/VisaForStudy/comment.png';
import otherUni from '../../assets/University/otherUni.png';
import MediaQuery from 'react-responsive';

export default function University({
  university,
  uniHeaderImage,
  uniLogo,
  uniHeaderMobileImg,
}) {
  const [activeBtn, setActiveBtn] = useState('article');

  const handleActiveBtn = (button) => {
    setActiveBtn(button);
  };

  const [showAbout, setShowAbout] = useState(true);
  const [showPara2, setShowPara2] = useState(false);
  const [showPara3, setShowPara3] = useState(false);
  const [showPara4, setShowPara4] = useState(false);
  const [showPara5, setShowPara5] = useState(false);
  const [showPara6, setShowPara6] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleShowAbout = () => {
    setShowAbout(!showAbout);
  };

  const handleShowPara2 = () => {
    setShowPara2(!showPara2);
  };

  const handleShowPara3 = () => {
    setShowPara3(!showPara3);
  };

  const handleShowPara4 = () => {
    setShowPara4(!showPara4);
  };

  const handleShowPara5 = () => {
    setShowPara5(!showPara5);
  };

  const handleShowPara6 = () => {
    setShowPara6(!showPara6);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

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
    <div className="university-page">
      <p className="university-page-p">
        Home {'>'} Visa For Study {'>'} Canada {'>'}{' '}
        <span className="blue-color">{university.name}</span>
      </p>

      <section className="university-page-header">
        <div className="university-page-header-imageContainer">
          <MediaQuery minWidth={376}>
            {(matches) =>
              matches ? (
                <img
                  className="university-page-header-image"
                  src={uniHeaderImage}
                  alt="university"
                />
              ) : (
                <img src={uniHeaderMobileImg} alt="uni"></img>
              )
            }
          </MediaQuery>
        </div>

        <div className="uni-logo">
          <img src={uniLogo} alt="uniLogo" />
        </div>
        <div className="uni-info">
          <div className="uni-info-content">
            <h2>{university.name}</h2>
            <div className="uni-info-content-information">
              <div className="uni-info-content-information-component">
                <img src={annualDromitory} alt="icon" />
                <div className="uni-info-content-information-component-text">
                  <p className="upper">Annual Dormitory</p>
                  <p className="lower">{university.annualDromitory}</p>
                </div>
              </div>
              <div className="uni-info-content-information-component">
                <img src={ranking} alt="icon" />
                <div className="uni-info-content-information-component-text">
                  <p className="upper">Global Ranking</p>
                  <p className="lower">{university.globalRanking}</p>
                </div>
              </div>
              <div className="uni-info-content-information-component">
                <img src={establishedYear} alt="icon" />
                <div className="uni-info-content-information-component-text">
                  <p className="upper">Established Year</p>
                  <p className="lower">{university.establishedYear}</p>
                </div>
              </div>
              <div className="uni-info-content-information-component">
                <img src={institution} alt="icon" />
                <div className="uni-info-content-information-component-text">
                  <p className="upper">Type of Institution</p>
                  <p className="lower">{university.institution}</p>
                </div>
              </div>
            </div>
            <p className="uni-address">
              <i class="bx bx-current-location"></i> {university.address}
            </p>
          </div>
          <div className="uni-info-buttons">
            <button className="uni-info-buttons-btn website">
              <span>Website</span>
              <span>
                <i class="bx bx-globe"></i>
              </span>
            </button>
            <button className="uni-info-buttons-btn apply">
              <span>Apply Online</span>
              <span>
                <i class="bx bx-right-arrow-circle"></i>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="university-content">
        <div className="uni-content-buttons">
          <div className="uni-content-buttons-flex">
            <button
              className={
                activeBtn === 'article'
                  ? 'uni-content-button-active'
                  : 'uni-content-button'
              }
              onClick={() => handleActiveBtn('article')}
            >
              Article
            </button>
            <button
              className={
                activeBtn === 'facility'
                  ? 'uni-content-button-active'
                  : 'uni-content-button'
              }
              onClick={() => handleActiveBtn('facility')}
            >
              University Faculties
            </button>
            <button
              className={
                activeBtn === 'docs'
                  ? 'uni-content-button-active'
                  : 'uni-content-button'
              }
              onClick={() => handleActiveBtn('docs')}
            >
              Documentation
            </button>
          </div>
        </div>

        {activeBtn === 'article' && (
          <div className="university-content-article">
            <div className="university-content-article-pargraph">
              <div className="university-content-article-paragraph-heading">
                <h2>About</h2>
                {showAbout ? (
                  <h2 onClick={handleShowAbout}>
                    <i class="bx bx-chevron-down"></i>
                  </h2>
                ) : (
                  <h2 onClick={handleShowAbout}>
                    <i class="bx bx-chevron-up"></i>
                  </h2>
                )}
              </div>
              {showAbout ? (
                <div className="university-content-article-paragraph-content">
                  <p>{university.about}</p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="university-content-article-pargraph">
              <div className="university-content-article-paragraph-heading">
                <h2>{university.paragraph2.heading}</h2>
                {showPara2 ? (
                  <h2 onClick={handleShowPara2}>
                    <i class="bx bx-chevron-down"></i>
                  </h2>
                ) : (
                  <h2 onClick={handleShowPara2}>
                    <i class="bx bx-chevron-up"></i>
                  </h2>
                )}
              </div>
              {showPara2 ? (
                <div className="university-content-article-paragraph-content">
                  <p>{university.paragraph2.content}</p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="university-content-article-pargraph">
              <div className="university-content-article-paragraph-heading">
                <h2>{university.paragraph3.heading}</h2>
                {showPara3 ? (
                  <h2 onClick={handleShowPara3}>
                    <i class="bx bx-chevron-down"></i>
                  </h2>
                ) : (
                  <h2 onClick={handleShowPara3}>
                    <i class="bx bx-chevron-up"></i>
                  </h2>
                )}
              </div>
              {showPara3 ? (
                <div className="university-content-article-paragraph-content">
                  <p>{university.paragraph3.content}</p>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div className="university-content-article-pargraph">
              <div className="university-content-article-paragraph-heading">
                <h2>{university.paragraph4.heading}</h2>
                {showPara4 ? (
                  <h2 onClick={handleShowPara4}>
                    <i class="bx bx-chevron-down"></i>
                  </h2>
                ) : (
                  <h2 onClick={handleShowPara4}>
                    <i class="bx bx-chevron-up"></i>
                  </h2>
                )}
              </div>
              {showPara4 ? (
                <div className="university-content-article-paragraph-content">
                  <p>{university.paragraph4.content}</p>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div className="university-content-article-pargraph">
              <div className="university-content-article-paragraph-heading">
                <h2>{university.paragraph5.heading}</h2>
                {showPara5 ? (
                  <h2 onClick={handleShowPara5}>
                    <i class="bx bx-chevron-down"></i>
                  </h2>
                ) : (
                  <h2 onClick={handleShowPara5}>
                    <i class="bx bx-chevron-up"></i>
                  </h2>
                )}
              </div>
              {showPara5 ? (
                <div className="university-content-article-paragraph-content">
                  <p>{university.paragraph5.content}</p>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            {showMore ? (
              <p onClick={handleShowMore} className="showMore">
                Show Less
              </p>
            ) : (
              <p onClick={handleShowMore} className="showMore">
                Show More
              </p>
            )}

            {showMore && (
              <div className="university-content-article-pargraph">
                <div className="university-content-article-paragraph-heading">
                  <h2>{university.paragraph6.heading}</h2>
                  {showPara6 ? (
                    <h2 onClick={handleShowPara6}>
                      <i class="bx bx-chevron-down"></i>
                    </h2>
                  ) : (
                    <h2 onClick={handleShowPara6}>
                      <i class="bx bx-chevron-up"></i>
                    </h2>
                  )}
                </div>
                {showPara6 ? (
                  <div className="university-content-article-paragraph-content">
                    <p>{university.paragraph6.content}</p>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </div>
        )}

        {activeBtn === 'facility' && (
          <div className="faculty-main">
            {university.faculty
              .slice(0, showMore ? university.faculty.length : 8)
              .map((faculty) => (
                <div className="faculty">
                  <img src={facultyImg} alt="icon"></img>
                  <div className="faculty-content">
                    <h2 className="faculty-content-heading">{faculty.name}</h2>
                    <p className="faculty-content-subHeading">
                      {faculty.degree1} <i class="bx bx-wifi-0"></i>{' '}
                      {faculty.degree2}
                    </p>
                  </div>
                </div>
              ))}

            {showMore ? (
              <p onClick={handleShowMore} className="showMore">
                Show Less
              </p>
            ) : (
              <p onClick={handleShowMore} className="showMore">
                Show More
              </p>
            )}
          </div>
        )}

        {activeBtn === 'docs' && (
          <div className="docs">
            <h2 className="docs-heading">Document Photos</h2>
            <div className="docs-grid-1">
              <img className="grid-item-1" src={img1} alt="canada"></img>
              <div className="docs-grid-flex">
                <img className="grid-item-2" src={img2} alt="canada"></img>
                <img className="grid-item-3" src={img3} alt="canada"></img>
              </div>
              <img className="grid-item-4" src={img4} alt="canada"></img>
              <img className="grid-item-5" src={img5} alt="canada"></img>
            </div>
            <div className="docs-grid-2">
              <img className="grid-item-6" src={img6} alt="canada"></img>
              <img className="grid-item-7" src={img1} alt="canada"></img>
              <div className="docs-grid-flex">
                <img className="grid-item-8" src={img2} alt="canada"></img>
                <img className="grid-item-9" src={img3} alt="canada"></img>
              </div>
              <img className="grid-item-10" src={img4} alt="canada"></img>
            </div>

            <div className="alumni">
              <h2 className="docs-heading">Alumni who became Public Figures</h2>
              <div className="alumni-flex">
                <div className="alumni-flex-item">
                  <img src={al1} alt="alumni"></img>
                  <h2>Name Text Here</h2>
                  <p>Toronto University - Canada</p>
                  <p>1995 - 1999</p>
                </div>
                <div className="alumni-flex-item">
                  <img src={al2} alt="alumni"></img>
                  <h2>Name Text Here</h2>
                  <p>Toronto University - Canada</p>
                  <p>1995 - 1999</p>
                </div>
                <div className="alumni-flex-item">
                  <img src={al3} alt="alumni"></img>
                  <h2>Name Text Here</h2>
                  <p>Toronto University - Canada</p>
                  <p>1995 - 1999</p>
                </div>
                <div className="alumni-flex-item">
                  <img src={al4} alt="alumni"></img>
                  <h2>Name Text Here</h2>
                  <p>Toronto University - Canada</p>
                  <p>1995 - 1999</p>
                </div>
                <div className="alumni-flex-item">
                  <img src={al5} alt="alumni"></img>
                  <h2>Name Text Here</h2>
                  <p>Toronto University - Canada</p>
                  <p>1995 - 1999</p>
                </div>
              </div>
            </div>

            <div className="location">
              <h2 className="docs-heading">The Location</h2>
              <img src={location} alt="location"></img>
            </div>
          </div>
        )}
      </section>

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

      <section className="other-uni">
        <h1 className="other-uni-heading">Other University Options</h1>
        <div className="other-uni-flex">
          <div className="other-uni-flex-items">
            <img src={otherUni} alt="otherUni"></img>
            <h3>Athabasca University</h3>
          </div>
          <div className="other-uni-flex-items">
            <img src={otherUni} alt="otherUni"></img>
            <h3>Athabasca University</h3>
          </div>
          <div className="other-uni-flex-items">
            <img src={otherUni} alt="otherUni"></img>
            <h3>Athabasca University</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
