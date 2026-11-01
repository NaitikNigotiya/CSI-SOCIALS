/* App.jsx – root component; assembles all sections */
import Background   from './components/Background.jsx';
import HeaderCard   from './components/HeaderCard.jsx';
import AboutCard    from './components/AboutCard.jsx';
import LinkList     from './components/LinkList.jsx';
import Footer       from './components/Footer.jsx';
import { siteInfo, links } from './data/links.js';
import './App.css';

export default function App() {
  const linksStartIndex = siteInfo.about ? 2 : 1;
  const footerIndex = linksStartIndex + links.length;

  return (
    <>
      {/* Fixed gradient + subtle atmospheric backdrop */}
      <Background />

      <div className="app">
        <main className="content-col">
          {/* 1 – Profile header */}
          <HeaderCard
            title={siteInfo.title}
            tagline={siteInfo.tagline}
            index={0}
          />

          {/* 2 – About blurb */}
          {siteInfo.about && (
            <AboutCard
              text={siteInfo.about}
              index={1}
            />
          )}

          {/* 3 – Social link pills */}
          <LinkList
            links={links}
            startIndex={linksStartIndex}
          />

          {/* 4 – Footer chip */}
          {siteInfo.footer && (
            <Footer
              text={siteInfo.footer}
              index={footerIndex}
            />
          )}
        </main>
      </div>
    </>
  );
}
