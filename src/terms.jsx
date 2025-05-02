import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import mrspek from "./assets/mr-spex-logo.png"
import coverck from "./assets/covercheck.png"


const Terms = () => {
  const navigate = useNavigate();

  const handleAgree = () => {
    navigate("/form");
  };

  return (
    <>
    <div className="container">
      <div id="logo-header" style={{ textAlign: "center" }}>
        <img src={mrspek} alt="Mr. Spex Logo" className="header-img2"/>
        <img src={coverck} alt="Covercheck" className="header-img2"/>
      </div>

      <div className="card" id="panel-default">
        <div className="card-body" id="panel-body">
          <h1>Ihre Zustimmung wird benötigt</h1>
          <p>
            Mit dem Klick auf den Button erklären Sie sich mit den nachfolgend beschriebenen
            Datenschutzbestimmungen einverstanden. <strong>Insbesondere sind Sie einverstanden, dass die Daten an den Vergleichsrechner der Covercheck GmbH weitergegeben werden.</strong> Sie erklären weiterhin, dass Sie die{" "}
            <a href="/documents/Erstinformationsblatt.pdf" target="_blank" rel="noopener noreferrer">
              Erstinformation
            </a>{" "}
            zur Kenntnis genommen haben.
          </p>

          <div className="button-section">
            <div className="d-flex gap-2">
                <button type="submit" onClick={handleAgree} className="btn btn-success" id="green-button">
                  Daten an den Rechner übergeben
                </button>
            </div>
            <div className="d-flex gap-2">
              <a href="/kfz_demo.php" className="btn btn-secondary" id="white-button">
                Rechner ohne Daten starten
              </a>
            </div>
          </div>
            <h2>Allgemeine Information zur Datenverarbeitung der Covercheck GmbH</h2>
            <h3>1. Zweck der Datenverarbeitung</h3>
            Wir möchten Sie darüber in Kenntnis setzen, dass zum Zwecke der Vermittlung von Versicherungsschutz und
            zur Verwaltung und Betreuung Ihrer Versicherungsverträge eine Verarbeitung der von Ihnen mitgeteilten Daten
            erforderlich ist. Die Verarbeitung bezieht sich sowohl auf alle Ihre persönlichen Daten, wie ggf. auch auf Ihre
            mitgeteilten Gesundheitsdaten. Eine Speicherung und Verwendung aller Ihrer Daten erfolgt nur für die von
            Ihnen beauftragte Vermittlung und Verwaltung des gewünschten Versicherungsschutzes. Nur für die Verwaltung
            und weiterer Empfehlung geeigneten Versicherungsschutzes speichern und verwenden wir Ihre Daten. Eine
            anderweitige Datenverwendung oder die nicht durch diese Einwilligung gestattete Datennutzung erfolgt
            selbstverständlich nicht.
            <h3>2. Ihre Rechte</h3>
            Wir weisen Sie ausdrücklich darauf hin, dass Sie Ihre gesetzlichen Rechte aus § 55 BDSG (neu) jederzeit
            gegenüber uns, als die Datenschutzverantwortlichen oder dem ggf. benannten Datenschutzbeauftragten unseres
            Hauses geltend machen können. Als betroffene Person haben Sie das Recht auf Auskunft, Berichtigung,
            Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
            <h3>3. Unsere Ansprechpartner</h3>
            Die Geltendmachung Ihrer gesetzlichen Rechte können Sie hier bzw. gegenüber folgender Person geltend
            machen:<br />
            Jens-Uwe Hoppe (Geschäftsführer)<br />
            Covercheck GmbH<br />
            Lutherstr. 95<br />
            07743 Jena<br />
            <h3>4. Der/die Bundesbeauftragte zum Datenschutz</h3>
            Wir möchten Sie auch darauf hinweisen, dass Sie berechtigt sind, den Bundesbeauftragten zum Datenschutz
            einzuschalten. Sie erreichen den/die Bundesdatenschutzbeauftragte/n unter folgenden Kontaktdaten:
            Der/die Bundesbeauftragte für den Datenschutz und die Informationsfreiheit<br />
            Husarenstr. 30<br />
            53117 Bonn<br />
            Telefon: +49 (0)228 997799-0<br />
            Fax: +49 (0)228 997799-550<br />
            redaktion@bfdi.bund.de<br />
            www.bfdi.bund.de <br />
            <br />

            <h2>Einwilligungserklärung Datenschutz</h2>
            <h3>1. Präambel</h3>
            Der Kunde wünscht die Vermittlung und/oder Verwaltung seiner Vertragsverhältnisse gegenüber Versicherern,
            Bausparkassen und/oder Anlagegesellschaften und/oder sonstigen Unternehmen, mit welchen der Vermittler
            zusammenarbeitet, aufgrund der vereinbarten Regelungen mit dem Vermittler. Zu deren Umsetzung,
            insbesondere der Vertragsvermittlung und -verwaltung, soll der Vermittler alle in Betracht kommenden Daten
            des Kunden verarbeiten, erhalten, verwenden, speichern, übermitteln und
            weitergeben dürfen.
            <h3>2. Name und Anschrift des für die Verarbeitung Verantwortlichen Vermittlers</h3>
            Verantwortlicher im Sinne der datenschutzrechtlichen Bestimmungen ist:<br />
            Covercheck GmbH<br />
            Lutherstr. 95<br />
            07743 Jena<br />
            <h3>3. Name und Anschrift des Ansprechpartner des Vermittlers</h3>
            Der für die Verarbeitung Verantwortliche ist:<br />
            Jens-Uwe Hoppe<br />
            Covercheck GmbH<br />
            Lutherstr. 95<br />
            07743 Jena<br />
            Jeder Kunde als betroffene Person kann sich jederzeit bei allen Fragen und Anregungen zum Datenschutz direkt
            an unseren verantwortlichen Ansprechpartner wenden.
            <h3>4. Kunde</h3>
            Die in diesem Vorgang übertragenen Name, Anschrift, Kontaktdaten, Geburtsdatum des Kunden
            <h3>5. Rechtsgrundlage, Einwilligung in die Datenverarbeitung</h3>
            (1) Der Kunde willigt ausdrücklich ein, dass alle personenbezogenen Daten, insbesondere die besonderen
            persönlichen Daten, wie z. B. die Gesundheitsdaten der zu versichernden Personen, im Rahmen der gesetzlichen
            Regelungen der DatenschutzGrundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG) von dem/den Vermittler(-n)
            gespeichert und zum Zwecke der Vermittlung und Verwaltung an die dem Kunden bekannten, kooperierenden
            Unternehmen weitergegeben werden dürfen.
            (2) Art. 6 Abs. 1 lit. a) und b) DSGVO stellen die Rechtsgrundlagen für die Verarbeitung der
            personenbezogenen Daten des Kunden dar. Art. 9 Abs. 2 lit. a für die Verarbeitung besonderer
            personenbezogener Daten.
            (3) Diese Einwilligung gilt unabhängig vom Zustandekommen des beantragten Vertrages und auch für die
            entsprechende Prüfung bei anderweitig zu beantragenden Versicherungsverträgen oder bei künftigen
            Antragstellungen des Kunden.
            (4) Der Vermittler darf die Kundendaten, insbesondere auch die Gesundheitsdaten des Kunden, zur Einholung
            von Stellungnahmen und Gutachten, sowie zur rechtlichen Prüfung von Ansprüchen an von Berufswegen zur
            Verschwiegenheit verpflichtete Personen (z.B. Anwälte und Steuerberater) weitergeben.
            <h3>6. Befugnis der Versicherer und Vertragspartner</h3>
            (1) Der Kunde ist damit einverstanden, dass sämtliche Informationen und Daten, welche für den von ihm
            gewünschten Versicherungsschutz von Bedeutung sein könnten, an den potenziellen Vertragspartner (z.B.
            Versicherer und Assekuradeure) weitergegeben werden. Diese potenziellen Vertragspartner sind zur
            ordnungsgemäßen Prüfung und weiteren Vertragsdurchführung berechtigt, die vertragsrelevanten Daten -
            insbesondere auch die Gesundheitsdaten - im Rahmen des Vertragszweckes zu speichern und zu verwenden.
            (2) Soweit es für die Eingehung und Vertragsverlängerung erforderlich ist, dürfen diese Daten, einschließlich
            der Gesundheitsdaten, an Rückversicherer oder Mitversicherer zur Beurteilung des vertraglichen Risikos
            vertraulich und anonymisiert übermittelt werden.
            <h3>7. Mitarbeiter und Vertriebspartner</h3>
            Der Kunde erklärt seine Einwilligung, dass alle Mitarbeiter und Erfüllungsgehilfen des Vermittlers seine
            personenbezogenen Daten, insbesondere auch die Gesundheitsdaten, speichern, einsehen und für die Beratung
            gegenüber dem Kunden und dem Versicherer verwenden dürfen. Zu den Mitarbeitern des Vermittlers zählen alle
            Arbeitnehmer, selbständige Handelsvertreter, Empfehlungsgeber und sonstige Erfüllungsgehilfen, die mit dem
            Vermittler eine vertragliche Regelung unterhalten und die Bestimmungen des Bundesdatenschutzgesetzes
            beachten. Der Kunde ist damit einverstanden, dass seine personenbezogenen Daten, sein Finanzstatus und die
            Gesundheitsdaten an diese und künftige Mitarbeiter des Vermittlers zum Zwecke der Vertragsbetreuung
            weitergegeben werden und seine Mitarbeiter berechtigt sind, die Kundendaten im Rahmen des Vertragszweckes
            einzusehen und verarbeiten und verwenden zu dürfen. Der Kunde ist einverstanden, dass Mitarbeiter des Covercheck GmbH
            oder von Covercheck GmbH beauftragte Dritte die Kontaktdaten aus dieser Datenschutzeinwilligung für die Telefon-, Fax-, E-Mail-, Xing,
            Facebook, SMS und WhatsApp Kommunikation im Rahmen der regelmäßigen Kundenbetreuung nutzen dürfen,
            auch wenn der entsprechende Kommunikationsweg nicht verschlüsselt ist. Erfasst sind neben allen zu
            bestehenden Verträgen betreffende Kontakte auch solche, die auf die inhaltliche Änderung, insbesondere
            Verlängerung, Ausweitung oder Ergänzung des bestehenden Vertragsverhältnisses, sowie auf den Neuabschluss
            weiterer Verträge aller Versicherungsarten über die Covercheck GmbH gerichtet
            sind. Die Kontaktaufnahme ist auf Werktage beschränkt. Das freiwillige Einverständnis kann jederzeit ganz oder
            teilweise widerrufen werden.
            <h3>8. Anweisungsregelung</h3>
            Der Kunde weist seine bestehenden Vertragspartner (z.B. Versicherer) an, sämtliche vertragsbezogenen Daten -
            auch die
            Gesundheitsdaten - an den/die beauftragten Vermittler unverzüglich herauszugeben. Dies insbesondere zum
            Zwecke der
            Vertragsübertragung, damit der Vermittler die Überprüfung des bestehenden Vertrages durchführen kann.
            <h3>9. Dauer, für die die personenbezogenen Daten gespeichert werden</h3>
            Die Kundendaten werden nach Kündigung der Zusammenarbeit im Rahmen der gesetzlichen Bestimmungen,
            insbesondere der gesetzlichen Aufbewahrungsfristen, gelöscht. Zur Abwehr zukünftiger Schadenersatzansprüche
            können sich die Löschfristen entsprechend verlängern. Der Kunde ist damit einverstanden, dass sich der
            Löschanspruch nicht auf revisionssichere Backupsysteme bezieht und in Form einer Sperrung durchgeführt wird.
            <h3>10. Rechte des Kunden als betroffene Person</h3>
            Dem Kunden stehen sämtliche in Kapitel 3 (Art. 12-23) DSGVO genannten Rechte zu, insbesondere das Recht
            auf Auskunft,
            Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruchsrecht und Recht auf
            Datenübertragbarkeit.
            <h3>11. Kooperationspartner</h3>
            Dem Kunden ist es bekannt, dass der Vermittler im Rahmen seiner auftragsgemäß übernommenen Aufgaben mit
            Kooperationspartnern zusammenarbeitet. Aus diesem Grunde wurden die Kooperationspartner bevollmächtigt.
            Zum Zwecke der auftragsgemäßen Umsetzung ist es neben der Bevollmächtigung ebenfalls erforderlich, dass
            der Kooperationspartner die Daten des Kunden erhält und ebenfalls im Rahmen dieser datenschutzrechtlichen
            Einwilligungserklärung zur Datenverwendung, Weitergabe oder Speicherung berechtigt ist. Den nachfolgend
            genannten Kooperationspartnern wird daher die datenschutzrechtliche Einwilligungserklärung im Umfang der
            hiesigen Datenschutzerklärung erteilt. Dies gilt insbesondere auch für die sensiblen persönlichen Daten,
            insbesondere auch die Gesundheitsdaten des Kunden.
            Der Kunde willigt in die Datenverwendung aufgrund dieser Datenschutzvereinbarung hinsichtlich der
            nachfolgend genannten Unternehmen ein:
            Allianz Lebensversicherungs-AG, Allrecht Rechtsschutzversicherung AG, Alte Leipziger Lebensversicherung
            a.G., Alte Leipziger Versicherung AG, AXA Krankenversicherung AG, AXA Lebensversicherung AG, AXA
            Versicherung AG, Concordia Versicherungsgesellschaft a.G., Condor Allgemeine Versicherungs-AG, Condor
            Lebensversicherungs-AG, DBV-Winterthur Versicherung AG, Hallesche Krankenversicherung a.G.,KravagAllgemeine Versicherungs-AG, Mobile Garantie Deutschland GmbH, ,NRV Neue
            Rechtsschutzversicherungsgesellschaft AG, Nürnberger Allgemeine Versicherungs-AG, Nürnberger
            Krankenversicherung AG, Rechtsschutz Union Marke der Sparte Rechtsschutz der Alte Leipziger Versicherung
            AG, Signal Iduna Allgemeine Versicherung AG, Signal Iduna Pensionskasse AG, Signal Iduna
            Krankenversicherung a.G., Signal Iduna Lebensversicherung a.G., Signal-Iduna Bauspar AG, Stuttgarter
            Lebensversicherung a.G., Stuttgarter Versicherung AG, Swiss Life AG, VdK Versicherung der Kraftfahrt,
            VHV Allgemeine Versicherung AG, Württembergische Versicherung AG.

        </div>

        <div className="card-body">
          Diese Seite ist ein Angebot der Covercheck GmbH
        </div>
      </div>
    </div>
    </>
  );
};

export default Terms;