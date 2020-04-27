import React from "react"
import FirstPortrait from "../images/portrait1.jpg"
import SecondPortrait from "../images/portrait2.jpg"
import SignupForm from "./signupForm"

const mainContent = () => (
  <section className="mainContent">
    <article className="mainContent__about" id="about">
      <h2 className="mainContent__title">O wydarzeniu</h2>
      <p className="mainContent__aboutContent">
        Banki spółdzielcze to jedne z najbardziej zaufanych instytucji w Polsce.
        Jednak razem z kredytem zaufania, klienci wiążą nowe oczekiwania - między innymi
        lepszego zrozumienia ich potrzeb, komunikacji na wielu kanałach,
        pro-aktywnej pomocy. Aby sprostać tym oczekiwaniom, banki spółdzielcze
        mogą rozważyć nowe podejście do cyfrowej transformacji. Dlatego chcemy
        zaprosić Was, przedstawicieli banków spółdzielczych w Polsce, na
        bezpłatne wydarzenie, jakim jest konferencja online 20 maja 2020 r,
        gdzie porozmawiamy właśnie o tym, korzystając z doświadczeń z bankami
        spółdzielczymi w Europie i USA.
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
          <span className="time">12:00 - 12:05</span>
          <span className="title">Rozpęcie konferencji oraz powitanie uczestników i gości</span>
          <span className="duration">5'</span>
        </div>
        <div className="mainContent__agendaItem">
          <span className="time">12:05 - 12:25</span>
          <span className="title">Wystąpienie wprowadzające</span>
          <span className="duration">20'</span>
        </div>
        <div className="mainContent__agendaItem">
          <span className="time">12:25 - 12:45</span>
          <span className="title">Pokochaj Klienta a nie produkt - czyli o przyszłości Obsługi Klienta w bankowości</span>
          <span className="duration">20'</span>
        </div>
        <div className="mainContent__agendaItem">
          <span className="time">12:45 - 13:05</span>
          <span className="title"> Zdalne wsparcie sprzedaży i budowania relacji z Klientem </span>
          <span className="duration">20'</span>
        </div>
        <div className="mainContent__agendaItem">
          <span className="time">13:05 - 13:25</span>
          <span className="title">Jak omnichannel i personalizacja komunikacji pomoże Bankom Spółdzielczym w walce o nowych Klientów?</span>
          <span className="duration">20'</span>
        </div>
        <div className="mainContent__agendaItem">
          <span className="time">13:25 - 13:40</span>
          <span className="title">Panel dyskusyjny z gośćmi specjalnymi </span>
          <span className="duration">15'</span>
        </div>
        <div className="mainContent__agendaItem">
          <span className="time">13:40 - 13:55</span>
          <span className="title">Pytania i zagadnienia od słuchaczy i obserwatorów Konferencji</span>
          <span className="duration">15'</span>
        </div>
        <div className="mainContent__agendaItem">
          <span className="time">13:55 - 14:00</span>
          <span className="title">Podsumowanie i zakończenie Konferencji </span>
          <span className="duration">5'</span>
        </div>
      </div>
      <p className="mainContent__aboutContent">
        W każdej z części skupimy się nie tylko na tym dlaczego Banki powinny
        rozważyć innowacje w tych obszarach, ale też jak mogą je wprowadzić w
        życie w swoich oddziałach jeszcze w tym roku. Macie pytania?
        Chcielibyście, żebyśmy pokryli konkretne aspekty, które są dla Was
        najbardziej interesujące? Napiszcie do nas poniżej.
        <br />
        <br />
          Jeśli chcielibyście zaprosić koleżanki i kolegów z banku - wystarczy
          podzielić się z nimi tą stroną.
          <br/>
        <strong>
          Pozdrawiamy serdecznie z Dublina,
          Krakowa i Warszawy,<br/> Zespół Digitalt & Salesforce
        </strong>
      </p>
    </article>
    <article className="signupForm">
      <h2 className="mainContent__title">Zapisz się</h2>
      <SignupForm />
    </article>
  </section>
)

export default mainContent
