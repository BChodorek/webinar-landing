import React from "react"
import FirstPortrait from "../images/portrait1.jpg"
import SecondPortrait from "../images/portrait2.jpg"

const mainContent = () => (
  <section className="mainContent">
    <article className="mainContent__about" id="about">
      <h2 className="mainContent__title">O wydarzeniu</h2>
      <p className="mainContent__aboutContent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, enim.
        Eum possimus repellat reprehenderit incidunt, ullam error numquam facere
        voluptates blanditiis? Aliquid vel unde, totam nemo dolores dolorem
        aperiam, laboriosam pariatur modi velit veritatis rem tempore laborum
        ipsa. Id aliquam omnis libero adipisci facere quasi, corporis minus
        explicabo mollitia doloribus.
      </p>
    </article>
    <article className="maintContent__speakers" id="speakers">
      <h2 className="mainContent__title">Prelegenci</h2>

      <div className="mainContent__speakersContainer">
        <div className="mainContent__speaker">
          <img
            src={FirstPortrait}
            alt="portret"
            className="mainContent__speakerPhoto"
          />
          <div className="mainContent__speakerDetails">
            <h3 className="mainContent__speakerTitle">Tytuł prezentacji</h3>
            <p className="mainContent__speakerName">Jan Nowak</p>
            <p className="mainContent__speakerInfo">Senior Consultant</p>
          </div>
        </div>

        <div className="mainContent__speaker">
          <img
            src={SecondPortrait}
            alt="portret"
            className="mainContent__speakerPhoto"
          />
          <div className="mainContent__speakerDetails">
            <h3 className="mainContent__speakerTitle">Tytuł prezentacji</h3>
            <p className="mainContent__speakerName">Janina Nowak</p>
            <p className="mainContent__speakerInfo">Financial Director</p>
          </div>
        </div>

        <div className="mainContent__speaker">
          <img
            src={FirstPortrait}
            alt="portret"
            className="mainContent__speakerPhoto"
          />
          <div className="mainContent__speakerDetails">
            <h3 className="mainContent__speakerTitle">Tytuł prezentacji</h3>
            <p className="mainContent__speakerName">Stefczyk Bankier</p>
            <p className="mainContent__speakerInfo">CEO in SKOK Stefczyka</p>
          </div>
        </div>
      </div>
    </article>

    <article className="mainContent__agenda" id="agenda">
      <h2 className="mainContent__title">Agenda</h2>
      <div className="mainContent__agendaContent">
        <div className="mainContent__agendaItem">
          <span className="time">12:00 - 13:00</span>
          <span className="title">Prezentacja 1</span>
          <span className="duration">60'</span>
        </div>
        <div className="mainContent__agendaItem">
          <span className="time">13:00 - 13:30</span>
          <span className="title">Przerwa</span>
          <span className="duration">30'</span>
        </div>
        <div className="mainContent__agendaItem">
          <span className="time">13:30 - 15:00</span>
          <span className="title">Prezentacja 2</span>
          <span className="duration">90'</span>
        </div>
      </div>
    </article>
  </section>
)

export default mainContent
